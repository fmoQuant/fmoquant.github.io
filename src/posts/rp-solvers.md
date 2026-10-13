---
title: Risk Parity Solvers
date: 2021-02-25
category: Portfolio Optimisation
tags:
  - PortfolioOptimisation
  - RiskParity
description: Backtesting a risk parity strategy on the Ivy 10 portfolio with an R package and a C++ solver.
---

I have been developing for the last 15 years solvers for portfolio optimisation. I use mainly **R**, **C++** and Python.

A risk parity package was first developed in matlab then moved to **R**. The risk parity solver itself is written in **C++** and easily load in **R** through the **Rcpp** package. I developed then another **R** package to perform backtests for trading strategies.

In the next posts, I will explain how these tools can be used.

For now, I will show how we can use these tools to backtest a risk parity strategy with the Ivy 10 portfolio. The data was downloaded when Yahoo Finance was trustful.

The back-test was done using monthly re-balancing and compare the data with equal weight portfolio with the the same assets. Here we apply equal risk weights for each asset but the solver can accommodate different risk weights and even long/short portfolios.

![Price history of the ten Ivy portfolio ETFs](/uploads/2021/02/Rplot_ivy_prices01.png)

![Performance summary of the equal risk contribution and equal weight strategies](/uploads/2021/02/Rplot_ivy_perfs01.png)

```r
# this is done here to just show how to use the package
# and how use download data from yahoo.

library(quantmod)
library(PerformanceAnalytics)
library(fmoRPbacktest)

# we have problems with dev.new in RStudio, so we added this flag
# to prevent these errors. In the standard R GUI, we need dev.new()
# to plot a new graph
rstudio = TRUE

# Ivy 10 portfolio. Mebane faber book

tickers <- c("VTI", "VB", "VEU", "VWO", "BND", "TIP",
             "VNQ", "RWX", "DBC", "GSG")

getSymbols(tickers, src = 'yahoo', from = '2005-01-01')

prices = NULL
for(ticker in tickers) {
  prices = merge.xts(prices, Ad(get(paste(ticker))) )
}

plot(as.zoo(prices))

###################################################
# Starting the analysis
###################################################

periodicity_rebalancing = "months"
periodicity_period      = 1
covariance_lookback     = 63
fees                    = 0.0/100  #
maxi.weight.per.asset   = 100/100  # 100%

Ncols = dim(prices)[2]

data <- new.env()

data$prices <- prices

Rp = prices/lag(prices) - 1

data = fmo_backtest.init(data)

period.ends <- endpoints(prices,
                         on = periodicity_rebalancing,
                         k = periodicity_period)

period.ends = period.ends[period.ends > 0]

start.i = which(period.ends >= (covariance_lookback + 1))[1]

weight = NA * prices[period.ends,]

weights = list()

weights$erc = weight
weights$ew1 = weight

# this is just a progress bar for the rebalancing steps

whatGen <- txtProgressBar (min = 1,
                           max = length(period.ends)-start.i+1,
                           style = 3)

fmo_rebalancing_message(periodicity_rebalancing, periodicity_period)

# construct portfolios
for( j in start.i:length(period.ends) ) {

  i = period.ends[j]

  setTxtProgressBar(whatGen, value = j - start.i + 1)

  # one quarter = 63 days
  R = Rp[ (i- covariance_lookback +1):i, ]

  # if there is a missing value in a returns vector, we get rid of this
  # column, as we consider that they are not traded for that period.
  # we must include in the future the case of holidays but we consider
  # for now that we are in the same market.

  sCols = colSums(is.na(R))

  columns = 1:Ncols

  excludedColumns = which(sCols > 0)

  usedColumns = setdiff(columns, excludedColumns)

  weights$ew1[j, excludedColumns] = 0
  weights$ew1[j,     usedColumns] = 1.0/length(usedColumns)

  riskW = array(1/length(usedColumns), dim = c(length(usedColumns), 1))

  st <- fmo_riskBudget.GaussSeidel(cov(R[, usedColumns]), riskW)

  weights$erc[j, excludedColumns] = 0
  weights$erc[j,     usedColumns] = st$sol

}

close(whatGen)

# Backtest

models = list()

for(strat in names(weights)) {
  data$weight[] = NA
  data$weight[period.ends,] = weights[[strat]]
  models[[strat]] = fmo_backtest.main(data, fees = 0.1/100)
}

# now we plot the strategies performance

main_text = paste("Risk Parity Performance: ", dim(prices)[2], " assets")

# we extract the returns from the list
rr = c()
for (i in 1:length(models)) {
  rr = cbind(rr, models[[i]]$Rs)
}

# we name the returns to the corresponding strategy
colnames(rr) = names(models)

if (!rstudio) dev.new()

charts.PerformanceSummary(rr, wealth.index = TRUE, main = main_text, ylog = TRUE)
```

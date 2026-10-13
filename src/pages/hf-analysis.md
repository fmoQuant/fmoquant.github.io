---
layout: ../layouts/Page.astro
title: Some Hedge Funds Analysis
description: Performance and risk measures for the ten Credit Suisse AllHedge sub-indices, computed from monthly returns.
---

We consider the Credit Suisse AllHedge Indices (AH). It is composed of ten sub-indices: Convertible Arbitrage (CA), Dedicated Short Bias (SB), Emerging Markets (EM), Equity Market Neutral (ENM), Event Driven (ED), Fixed Income Arbitrage (FIA), Global Macro (GM), Long/Short Equity (LSE), Managed Futures (MF) and finally Multi-Strategy (MS). The monthly data was downloaded from [Credit Suisse LAB and HF Indices](https://lab.credit-suisse.com) after registration. The Dedicated Short Bias index was discontinued by Credit Suisse in the first quarter of 2017 as there were too few constituents left in the index.

We present a set of risk performance computed with monthly returns.

**Annualized Performance Metrics**

| | AH | CA | SB | EM | EMN | WD | FIA | GM | LSE | MF | MS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Annualized Return | 2.94 | 3.13 | -7.25 | 6.48 | 0.09 | 3.09 | -0.01 | 2.05 | 4.94 | 3.86 | 2.99 |
| Annualized Std Dev | 6.53 | 9 | 14.97 | 11.69 | 7.77 | 7.55 | 7.54 | 9.78 | 8.22 | 10.53 | 6.14 |
| Annualized Sharpe | 0.45 | 0.35 | -0.48 | 0.55 | 0.01 | 0.41 | 0.00 | 0.21 | 0.60 | 0.37 | 0.49 |

We present a set of risk measures computed with monthly returns. We compute Gaussian, Historical and the so called Cornish-Fisher VaR which is a modified VaR calculation that takes the higher moments of non-normal distributions. The confidence level is 95%.

**Risk Performance Metrics**

| | mu | skewness | kurtosis | MDD | VaR_G | VaR_H | VaR_CF | ES_G | ES_H | ES_CF |
|---|---|---|---|---|---|---|---|---|---|---|
| AH | 2.94 | -1.9 | 8.2 | -28.4 | 2.8 | 2.4 | 3.4 | 3.6 | 5.1 | 7.5 |
| CA | 3.13 | -4.3 | 30.7 | -47.9 | 4 | 1.9 | 4.6 | 5.1 | 7 | 10.7 |
| SB | -7.25 | 0.2 | 0.9 | -67.1 | 7.7 | 6.4 | 7.3 | 9.5 | 9 | 9.2 |
| EM | 6.48 | -1.6 | 7.5 | -48.3 | 5 | 5.1 | 5.9 | 6.4 | 8.2 | 13.1 |
| EMN | 0.09 | -3.1 | 24.7 | -38.4 | 3.7 | 2.2 | 4.1 | 4.6 | 6.2 | 12.9 |
| WD | 3.09 | -1.6 | 7.1 | -25.7 | 3.3 | 3.1 | 3.9 | 4.2 | 5.6 | 8.4 |
| FIA | -0.01 | -5 | 44.4 | -42.4 | 3.6 | 1.5 | 3.7 | 4.5 | 6.4 | 3.7 |
| GM | 2.05 | -1.7 | 10 | -30.1 | 4.5 | 3.3 | 5.1 | 5.6 | 7.5 | 12.8 |
| LSE | 4.94 | -0.9 | 3.3 | -32.3 | 3.5 | 3.8 | 3.9 | 4.5 | 5.7 | 6.9 |
| MF | 3.86 | 0 | -0.4 | -24.2 | 4.7 | 4.3 | 4.7 | 5.9 | 5.6 | 5.8 |
| MS | 2.99 | -3.1 | 21.8 | -35.8 | 2.7 | 1.8 | 3.1 | 3.4 | 5 | 9.7 |

We remark that the Gaussian VaR is generally greater than Historical VaR but not for the expected shortfall. This means the hedge fund strategies exhibit heavy tails.

We can also compute marginal VaR for each the index but unfortunately the weighting of the each asset class was not available.

All the calculations are done by a software developed in **R** by the author.

On the other side, for the application of risk parity strategies, you can have a look to the [blog](/blog/)

---
layout: ../layouts/Page.astro
title: Equal Risk Contribution Portfolio (Risk Parity)
description: Matlab code to compute the equal risk contribution (risk parity) portfolio, with a fast solver after Roncalli.
---

*I received a lot of messages to distribute my code for computing the equal risk portfolio.*

You can download the code [here](/uploads/erc_code.zip).

The only trick for the optimisation process is what fitness function to minimise. I followed Roncalli paper and as stated in the [Wilmott forum](https://forum.wilmott.com/viewtopic.php?f=34&t=38497), we should minimise the function defined by in the matlab script "fm_fitnessERC.m". I attached also some Dow Jones data and a script file to test how the code is working.

Please note the parameters used within fmincon to let it converges.

I implemented also the fast solver described in Roncalli's SSRN Sep 2013 [paper](http://www.ssrn.com/abstract=2325255). This reduces the cpu time to less than a second for solving large RP optimisation problems.

please drop me a [message](mailto:mf@mfquant.net) to get the password of the encrypted zipped file (just to know who is interested).

I am also available for consulting services on risk parity allocations and quantitative analysis with coding in matlab, R, C++ or Excel.

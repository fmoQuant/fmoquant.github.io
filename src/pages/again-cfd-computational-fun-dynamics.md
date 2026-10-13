---
layout: ../layouts/Page.astro
title: Again CFD (Computational Fun Dynamics)
description: Adaptive mesh refinement for the Mandelbrot set, driven by a Hessian-based error indicator.
---

### Adaptive mesh refinement for fractals: the Mandelbrot set

I am developing, in my spare time, a tool to visualise a fractal at a given precision using an adaptive mesh method.

We show here the differents refinement levels for the Mandelbrot set. The Mandelbrot set is the domain of convergence of the series built up by the complex sequence defined by the recursion formula: **Z<sub>n+1</sub> = Z<sub>n</sub><sup>2</sup> + C**. A hessian-based error indicator is used to drive the adaptive process.

<div class="pair">
  <img src="/wp-content/uploads/2016/10/mandel_mesh00.png" alt="Initial mesh for the Mandelbrot set" loading="lazy" />
  <img src="/wp-content/uploads/2016/10/mandel_sol00a.png" alt="Mandelbrot set on the initial mesh" loading="lazy" />
  <img src="/wp-content/uploads/2016/10/mandel_mesh10.png" alt="Mesh for the Mandelbrot set after ten refinement levels" loading="lazy" />
  <img src="/wp-content/uploads/2016/10/mandel_sol10a.png" alt="Mandelbrot set on the refined mesh" loading="lazy" />
</div>

*More precise resolution*

<a href="/wp-content/uploads/2016/10/mandel_solHighRes.png"><img src="/wp-content/uploads/2016/10/mandel_solHighRes.png" alt="High-resolution Mandelbrot set" loading="lazy" /></a>

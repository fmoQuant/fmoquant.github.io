---
layout: ../layouts/Page.astro
title: Computational Fluid Dynamics
description: Flow simulations around business jets, a new-generation aircraft and the ONERA M6 wing, plus surface meshing of discrete surfaces.
---

### Falcon Business Jet

<div class="media">
  <a href="/wp-content/uploads/2016/10/fal_machNS.jpg"><img src="/wp-content/uploads/2016/10/fal_machNS.jpg" alt="Mach number around the Falcon business jet" loading="lazy" /></a>
  <p>Navier-Stokes simulation for the flow field around the Falcon business jet. The solver can handle 3D hybrid unstructured grids composed of tetrahedra, hexahedra, pyramids and prisms. A cell-vertex solver is used and control volumes are either the so-called median dual or the containment dual. An agglomeration multigrid method is used to drive the solver.</p>
</div>

### GulfStream Business Jet

<div class="media">
  <a href="/wp-content/uploads/2016/10/gulfstream.png"><img src="/wp-content/uploads/2016/10/gulfstream.png" alt="Euler flow field around the GulfStream business jet" loading="lazy" /></a>
  <p>Euler simulation for the flow field around the GulfStream business jet. The geometry is courtesy of Dr Mezentsev from Imperial College, London.</p>
</div>

### Tuna Fish

<div class="media">
  <a href="/wp-content/uploads/2016/10/fly2.png"><img src="/wp-content/uploads/2016/10/fly2.png" alt="Surface mesh generated around a tuna fish" loading="lazy" /></a>
  <div>
    <p>We are interested by generating a surface mesh around the Tuna Fish.</p>
    <p><a href="/wp-content/uploads/2016/12/tuna.png">Here</a> is the initial discrete surface given in STL format and <a href="/wp-content/uploads/2016/10/fly2.png">here</a> is the generated mesh.</p>
    <p>We are in the process of developing a new surface mesh generator using discrete surfaces. This is an important aspect to deal with problems where a CAD model is not available. Examples for surfaces obtained discretely include : GIS gathered data, digitization of clay models for cars and CAT-scan data for biomedical applications.</p>
  </div>
</div>

### Here are some simulations done while working at EPFL

### Falcon Business Jet

<div class="media">
  <a href="/wp-content/uploads/2016/10/falcon_cad.png"><img src="/wp-content/uploads/2016/10/falcon_cad.png" alt="CAD description of the Falcon business jet surface" loading="lazy" /></a>
  <p>In this simulation we compute the flow field about the well known Falcon business jet. <a href="/wp-content/uploads/2016/10/falcon_cad.png">Here</a> is the CAD description of the surface of the aircraft while <a href="/wp-content/uploads/2016/10/falcon_mesh.png">here</a> is the surface mesh. You find <a href="/wp-content/uploads/2016/10/falcon_mach.png">here the Mach number on the surface of the aircraft.</a></p>
</div>

### SmartFish Jet

<div class="media">
  <img src="/wp-content/uploads/2016/10/mach_smartfish.png" alt="Mach number on the surface of the SmartFish jet" loading="lazy" />
  <p>In this simulation we compute the flow field about a new generation aircraft known as SmartFish. SmarFish is designed by <a href="http://www.smartfish.ch/">Koni Schafroth.</a></p>
</div>

<a href="/wp-content/uploads/2016/10/smartfish_cad.png">Here</a> is the CAD description of the surface of the aircraft while <a href="/wp-content/uploads/2016/10/mach_smartfish.png">here is the Mach number on the surface.</a>

---

### ONERA M6 Wing

<div class="media">
  <a href="/wp-content/uploads/2016/10/m6_cas003x_mach.png"><img src="/wp-content/uploads/2016/10/m6_cas003x_mach.png" alt="Mach number on the ONERA M6 wing, second adapted mesh" loading="lazy" /></a>
  <div>
    <p>Parallel adaptive Euler computation around the Onera M6 wing.</p>
    <p>For these computations, we used 16 processors of a SGI Origin 3800.</p>
  </div>
</div>

The initial mesh is [here](/wp-content/uploads/2016/10/m6_cas001_grid.png) and Mach number on the surface can be seen [here](/wp-content/uploads/2016/10/m6_cas001_mach.png). The first adapted mesh is [here](/wp-content/uploads/2016/10/m6_cas002_grid.png) and the surface Mach number is [here](/wp-content/uploads/2016/10/m6_cas002_mach.png). The second adapted mesh is [here](/wp-content/uploads/2016/10/m6_cas003x_grid.png) and the surface Mach number is [here](/wp-content/uploads/2016/10/m6_cas003x_mach.png).

A cut plane plot of the Cp is shown [here](/wp-content/uploads/2016/10/compare_Cp_for_threeMeshes.png).

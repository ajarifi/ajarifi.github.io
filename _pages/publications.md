---
title: "Publications"
permalink: /publications/
author_profile: false
---

<style>


/* ===== FILTER TABS ===== */
#myBtnContainer {
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}


.btnz {
  border: none;
  outline: none;
  padding: 8px 16px;
  cursor: pointer;
  background-color: transparent;
  margin-right: 5px;
  font-size: 14px;
  color: #444;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.btnz:hover {
  background-color: #f0f0f0;
  color: #000000;
}

.btnz.active {
  background-color: #000000;   /* black background */
  color: #ffffff;              /* white text */
  font-weight: 600;
  border-bottom: 2px solid #000000;
}
  
/* ===== CONTAINER ===== */
.containerz {
  display: block;
}
  
/* ===== PUBLICATION ITEM (INSPIRE BOXED STYLE) ===== */
.filterDiv {
  display: none;
  width: 100%;
  box-sizing: border-box;

  padding: 12px 14px;
  margin-bottom: 12px;

  border: 1px solid #e0e0e0;   /* subtle box */
  background: #ffffff;
  border-radius: 2px;          /* very slight rounding */

  box-shadow: none;

  opacity: 0;
  transform: translateY(3px);
  transition: all 0.2s ease;
}

.filterDiv.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
  
/* ===== YEAR HEADERS (keep simple, no box) ===== */
.filterDiv h2 {
  font-size: 18px;
  font-weight: 600;
  color: #000080;

  margin-top: 25px;
  margin-bottom: 10px;

  border: none;
  padding: 0;
}

/* ===== TITLE ===== */
.filterDiv b {
  font-size: 16px;
  font-weight: 600;
  color: #111;
}

/* ===== META TEXT ===== */
.filterDiv {
  font-size: 15px;
  color: #333;
}
  
/* secondary text */
.filterDiv i,
.filterDiv small {
  color: #666;
}

/* ===== TAGS BASE ===== */
.btn--article,
.btn--article-blue,
.btn--article-black,
.btn--article-orange,
.btn--article-red {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 3px;
  background: transparent;
  margin-right: 6px;
  font-weight: 500;
}

/* ===== ARTICLE (GREEN) ===== */
.btn--article {
  color: #1b7f3b;
  border: 1px solid #1b7f3b;
  background-color: rgba(27, 127, 59, 0.08);
}

/* ===== PROCEEDING (BLUE) ===== */
.btn--article-blue {
  color: #1f4e9e;
  border: 1px solid #1f4e9e;
  background-color: rgba(31, 78, 158, 0.08);
}

/* ===== THESIS (BLACK) ===== */
.btn--article-orange {
  color: #000000;
  border: 1px solid #000000;
  background-color: rgba(0, 0, 0, 0.06);
}

/* ===== SPECIAL ISSUE / OTHER ===== */
.btn--article-black {
  color: #555;
  border: 1px solid #999;
  background-color: rgba(0, 0, 0, 0.03);
}

/* ===== NEWS ===== */
.btn--article-red {
  color: #b22222;
  border: 1px solid #b22222;
  background-color: rgba(178, 34, 34, 0.08);
}

/* ===== NUMBERING ===== */
.pub-number {
  display: inline-block;
  width: 28px;
  color: #999;
  font-size: 14px;
}

/* ===== STICKY HEADER ===== */
h1 {
  font-weight: 600;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .filterDiv {
    font-size: 14px;
  }

  .filterDiv b {
    font-size: 15px;
  }
}
</style>


<p align="justify"> 
I’m driven by discussions and collaborations, and by a curiosity to explore all corners of hadron physics and engage with diverse communities.
</p>
 
<p style="margin-bottom:1.2cm;"></p>

<div id="chart_div" style="display: block; width: 100%; transform: scale(1.2);"></div>


<p style="margin-bottom:1.5cm;"></p>

<p align="justify"> 
You can also find my publication list on <a href="https://inspirehep.net/authors/1410710">InspireHEP</a>. 
</p>

<p style="margin-bottom:1.2cm;"></p>
 
<div id="myBtnContainer">
  <button class="btnz active" onclick="filterSelection('all')">All</button>
  <button class="btnz" onclick="filterSelection('article')">Articles</button>
  <button class="btnz" onclick="filterSelection('proceeding')">Proceedings</button>
  <button class="btnz" onclick="filterSelection('thesis')">Thesis</button>
</div>

<p style="margin-bottom:1cm;"></p>

<div class="containerz">

  <div class="filterDiv article">
  <b>Polarization-dependent mass modifications of ϕ meson with finite momentum in nuclear matter</b><br>
  <button class="btn--article">Article</button> <b>A. J. Arifi</b>, P. Gubler, and K. Tsushima (Mar 16, 2026)<br>
    e-Print: <a href="https://arxiv.org/abs/2603.15971"> 2603.15971</a> [hep-ph]</div>
    
  <div class="filterDiv proceeding"><b>Exploring meson structure through the light-front quark model</b><br> 
      <button class="btn--article-black">S. Issue</button>&nbsp; <b> A. J. Arifi</b> (April, 2026) <br> 
      Published in: <i>Mod. Phys. Lett. A (in press)</i> <br> 
      Contribution to: <a href="https://indico.global/event/13949/"> SEA-NHP 2025 </a> (Yogyakarta, Indonesia)</div>

  <div class="filterDiv proceeding"><b>Electromagnetic structure of $B_c$ and heavy quarkonia in the light-front quark model</b><br> 
      <button class="btn--article-black">S. Issue</button>&nbsp; R. R. Harjapradipta, M. Ridwan, <b> A. J. Arifi</b>,  T. Mart (Mar 14, 2026) <br> 
      Published in: <i>Mod. Phys. Lett. A (in press)</i>  &middot; e-Print: <a href="https://arxiv.org/abs/2603.13819"> 2603.13819 </a> [hep-ph] <br> 
      Contribution to: <a href="https://indico.global/event/13949/"> SEA-NHP 2025 </a> (Yogyakarta, Indonesia)</div>
 
  <div class="filterDiv article">
  <b>Quarkonium spectra with magnetically-induced anisotropic confinement</b><br>
  <button class="btn--article">Article</button> <b>A. J. Arifi</b> and K. Suzuki (Mar 13, 2026)<br>
    e-Print: <a href="https://arxiv.org/abs/2603.12589"> 2603.12589 </a> [hep-ph]</div>

  <div class="filterDiv article">
  <b>Landau-Zener-Stückelberg-Majorana dynamics of magnetized quarkonia</b><br>
  <button class="btn--article">Article</button> <b>A. J. Arifi</b> and K. Suzuki (Dec 30, 2025)<br>
  Published in: <i> <a href="https://doi.org/10.1103/xc28-3v8r"> Phys. Rev. D 113, 054047 (2026)</a></i> &middot; 
    e-Print: <a href="https://arxiv.org/abs/2512.24072"> 2512.24072</a> [hep-ph]</div>

  <div class="filterDiv article"><b>Kaon T-even transverse-momentum-dependent distributions and form factors in a self-consistent light-front quark model</b><br>
      <button class="btn--article">Article</button>&nbsp; Y. Choi, <b> A. J. Arifi</b>, H.M. Choi, and C.R. Ji (Dec 25, 2025)<br> 
      e-Print: <a href="https://arxiv.org/abs/2512.21642"> 2512.21642 </a> [hep-ph] </div>

  <div class="filterDiv proceeding"><b>A brief history and outlook of hadronic physics in Indonesia</b><br> 
      <button class="btn--article-black">S. Issue</button>&nbsp; <b> A. J. Arifi</b>, P. T. P. Hutauruk, T. Mart, and C. Setyadi (Dec 19, 2025) <br> 
      Published in: <i>Mod. Phys. Lett. A (in press)</i>  &middot; e-Print: <a href="https://arxiv.org/abs/2512.17219"> 2512.17219 </a> [hep-ph] <br> 
      Contribution to: <a href="https://indico.global/event/13949/"> SEA-NHP 2025 </a> (Yogyakarta, Indonesia)</div>
      
  <div class="filterDiv proceeding"><b>Heavy quarkonia in the light-front quark model</b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; M. Ridwan, <b> A. J. Arifi</b>, and T. Mart (Aug 28, 2025)<br>
      Published in: <i><a href="https://pos.sissa.it/500/158">PoS Hadron 2025, 158 (2026)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2508.21145"> 2508.21145 </a> [hep-ph] <br>
      Contribution to: <a href="https://hadron2025.rcnp.osaka-u.ac.jp/">HADRON 2025 </a>(Osaka, Japan)</div>

  <div class="filterDiv article"><b>Structure of heavy quarkonia in a strong magnetic field</b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b> and K. Suzuki (Jul 26, 2025)<br> 
      Published in: <i> <a href="https://doi.org/10.1103/pwsl-xrq5"> Phys. Rev. D 112, 094013 (2025)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2507.18894"> 2507.18894 </a> [hep-ph] </div>

  <div class="filterDiv proceeding"><b>M1 radiative transition of light mesons in the light-front quark model</b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; M. Ridwan, <b> A. J. Arifi</b>, and T. Mart (Jul 4, 2025)<br>
      Published in: <i><a href="https://iopscience.iop.org/article/10.1088/1742-6596/3139/1/012065"> J. Phys. Conf. Ser. 3139, 012065 (2025)</a> </i> &middot; e-Print: <a href="https://arxiv.org/abs/2507.03437"> 2507.03437 </a> [hep-ph] <br> 
       Contribution to: IPS 2025 (Jakarta, Indonesia)</div>
  
  <div class="filterDiv article"><b>Beyond leading twist: ρ meson decay constants and distribution amplitudes in a self-consistent light-front quark model</b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H.M. Choi, and C.R. Ji (Jun 04, 2025)<br> 
      Published in:<i> <a href="https://doi.org/10.1103/hhk8-g2bj"> Phys. Rev. D 112, 033009 (2025)</a></i>  &middot; e-Print: <a href="https://arxiv.org/abs/2506.02844"> 2506.02844 </a> [hep-ph]  </div>
 
  <div class="filterDiv article"><b> Heavy-quark spin symmetry violation effects in charmed baryon production </b><br>
      <button class="btn--article">Article</button> N. Monkata, P. Sawasdipol, N. Ponkhuha, R. Suntharawirat, <b> A. J. Arifi</b>, D. Samart (Dec, 2024)<br> 
      Published in:  <i> <a href="https://doi.org/10.48048/tis.2026.11487"> Trends in Sci. 23, 11487 (2026)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2412.18280"> 2412.18280 </a> [hep-ph]
  </div>
  

  <div class="filterDiv article"><b> In-medium electromagnetic form factors of pseudoscalar mesons from the quark model </b><br>
      <button class="btn--article">Article</button>  <b> A. J. Arifi</b>,  P. T. P. Hutauruk, and K. Tsushima  (Dec, 2024)<br> 
      Published in: <i> <a href="https://doi.org/10.1103/PhysRevD.111.074004"> Phys. Rev. D 111, 074004 (2025)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2412.09883"> 2412.09883 </a> [hep-ph] <br>
  </div>
  

  <div class="filterDiv article"><b> Self-consistent $M1$ radiative transitions of excited $B_c$ and heavy quarkonia with different polarizations in the light-front quark model </b><br>
      <button class="btn--article">Article</button>&nbsp; M. Ridwan, <b> A. J. Arifi</b>, T. Mart (Sept, 2024)<br> 
      Published in: <i> <a href="https://doi.org/10.1103/PhysRevD.111.016011"> Phys. Rev. D 111, 016011 (2025)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2409.13172"> 2409.13172 </a> [hep-ph]
  </div>
  
  <div class="filterDiv article"><b> Two-pion emission decays of negative parity singly heavy baryons </b><br>
      <button class="btn--article">Article</button>&nbsp; N. Ponkhuha, <b> A. J. Arifi</b>, D. Samart (Jul, 2024)<br> 
      Published in:  <i> <a href="https://doi.org/10.1103/PhysRevD.110.114046"> Phys. Rev. D 110, 114046 (2024)</a></i> &middot; e-Print:<a href="https://arxiv.org/abs/2407.10063"> 2407.10063 </a> [hep-ph]
  </div>
  
  <div class="filterDiv article"><b> Structure of heavy mesons in the light-front quark model </b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, L. Happ, S. Ohno, and M. Oka (Jan, 2024)<br> 
      Published in:  <i> <a href="https://doi.org/10.1103/PhysRevD.110.014020"> Phys. Rev. D 110, 014020 (2024)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2401.07933"> 2401.07933 </a> [hep-ph]  </div>
  
  <div class="filterDiv proceeding"><b>The properties of radially excited charmonia in the light front quark model</b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; M. Ridwan, <b> A. J. Arifi</b>, and T. Mart (Jan, 2024)<br>
      Published in: <i> <a href="https://doi.org/10.1051/itmconf/20246101016">ITM Web Conf. 61, 01016 (2024)</a></i> 
    <br> Contribution to: ISCPMS 2024 (Bali, Indonesia)</div>

  <div class="filterDiv proceeding"><b> Distribution amplitude and decay constant of 1S and 2S state light mesons in the light-front quark model </b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; M. F. Syahbana, <b> A. J. Arifi</b>, and T. Mart (Jan, 2024)<br>
      Published in: <i> <a href="https://doi.org/10.1051/itmconf/20246101014">ITM Web Conf. 61, 01014 (2024)</a></i> 
    <br> Contribution to: ISCPMS 2024 (Bali, Indonesia)</div>
   
  
  <div class="filterDiv article"><b> Pseudoscalar meson decay constants and distribution amplitudes up to 
      twist 4 in the light-front quark model </b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H.M. Choi, and C.R. Ji (June, 2023)<br> 
      Published in:  <i> <a href="https://doi.org/10.1103/PhysRevD.108.013006"> Phys. Rev. D 108, 013006 (2023) </a>
      </i> &middot; e-Print: <a href="https://arxiv.org/abs/2306.08536"> 2306.08536 </a> [hep-ph] 
  </div>
  
  <div class="filterDiv article"><b> In-medium properties of the light and heavy-light mesons in a light-front quark model </b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, P.T.P. Hutauruk, and K. Tsushima (Feb 23, 2023)<br> 
      Published in:  <i> <a href="https://doi.org/10.1103/PhysRevD.107.114010"> Phys. Rev. D 107, 114010 (2023) </a> </i> &middot; e-Print: <a href="https://arxiv.org/abs/2302.12382"> 2302.12382 </a> [hep-ph]
  </div>
  

  <div class="filterDiv article"><b>Independence of current components, polarization vectors, and reference frames in the light-front quark model analysis of meson decay constants</b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H.M. Choi, C.R. Ji and Y. Oh (Oct 23, 2022)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.053003"> Phys. Rev. D 107, 053003 (2023) </a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2210.12780"> 2210.12780 </a> [hep-ph]  </div>
  
  <div class="filterDiv article"><b>Mixing effects on 1S and 2S state heavy mesons in the light-front quark
 model</b><br>
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H.M. Choi, C.R. Ji and Y. Oh (May 9, 2022)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.106.014009"> Phys. Rev. D 106, 014009 (2022) </a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2205.04075"> 2205.04075 </a> [hep-ph]  </div>
  
  <div class="filterDiv article"><b>Strong decays of multi-strangeness baryon resonances in the quark model</b><br> 
       <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, D. Suenaga, A. Hosaka, and Y. Oh (Jan 25, 2022)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.105.094006"> Phys. Rev. D 105, 094006 (2022) </a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2201.10427"> 2201.10427 </a> [hep-ph]  </div>

  <div class="filterDiv proceeding"><b>Two-pion emission decay of Roper-like heavy baryons</b><br> 
      <button class="btn--article-black">S. Issue</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, A. Hosaka, and K. Tanida (Jun 22, 2021)    <br> 
      Published in: <i> <a href="https://link.springer.com/article/10.1007/s00601-021-01625-0">Few Body Syst. 62, 36 (2021)</a></i> <br>
    Contribution to: <a href="https://indico.rcnp.osaka-u.ac.jp/event/1457">APFB 2020 </a> (Kanazawa, Japan) </div>
  
  <div class="filterDiv article"><b>Relativistic corrections to decays of heavy baryons in the quark model</b><br> 
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, D. Suenaga, and A. Hosaka (May 10, 2021)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.103.094003"> Phys. Rev. D 103, 094003 (2021)</a></i> &middot; e-Print:<a href="https://arxiv.org/abs/2102.03754"> 2102.03754 </a> [hep-ph] </div>

  <div class="filterDiv thesis"><b>Study of heavy baryons from three-body decays</b><br> 
      <button class="btn--article-orange">Ph.D. Thesis</button>&nbsp; <b> A. J. Arifi</b> (Sep 25, 2020)<br> 
      Graduated from: <i> <a href="https://japanlinkcenter.org/jalc/linkSakiAnnaiOto/mRRidirect/index?doi=10.18910/77474"> Osaka University.</a></i> </div>
  
  <div class="filterDiv article"><b>Roper-like resonances with various flavor contents and their two-pion emission decays</b><br> 
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, A. Hosaka, and K. Tanida (Jun 16, 2020)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.101.111502"> Phys. Rev. D 101, 111502(R) (2020)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2004.07423"> 2102.03754 </a> [hep-ph] </div> 
  
  <div class="filterDiv article"><b>Three-body decay of Λ<sub>c</sub>(2765) and determination of its spin-parity</b><br> 
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, A. Hosaka, and K. Tanida (May 21, 2020)<br> 
      <button class="btn--article-red">News</button>&nbsp; Also reported in <a href="https://asrc.jaea.go.jp/publication/note/pdf/41kagaku/41_06.pdf">JAEA science note.</a><br>
    Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.101.094023"> Phys. Rev. D 101, 094023 (2020)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/2003.08202">2003.08202 </a> [hep-ph] </div> 

  <div class="filterDiv proceeding"><b>A systematic study of charmed baryon decays</b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, and A. Hosaka (2019)<br> 
      Published in: <i> <a href="https://journals.jps.jp/doi/10.7566/JPSCP.26.022031">JPS Conf. Proc. 26. 022031 (2019)</a></i> <br> 
    Contribution to: <a href="https://conference-indico.kek.jp/event/33/"> QNP 2018</a> (Tsukuba, Japan) </div>    

  <div class="filterDiv article"><b>Three-body decay of Λ<sub>c</sub>(2595) and Λ<sub>c</sub>(2625) with the inclusion of a direct two-pion coupling</b><br> 
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, and A. Hosaka (Dec 12, 2018)<br> 
      <button class="btn--article-red">News</button>&nbsp; One of our figures is selected in <a href="https://journals.aps.org/prd/kaleidoscope/prd/98/11/114007">Kaleidoscope.</a><br>
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.98.114007"> Phys. Rev. D 98, 114007 (2018)</a></i> &middot; e-Print:<a href="https://arxiv.org/abs/1809.10290"> 1809.10290 </a> [hep-ph] </div>  

  <div class="filterDiv article"><b>Three-body decay of Λ<sub>c</sub>(2595) and Λ<sub>c</sub>(2625) with consideration of Σ<sub>c</sub>(2455)π and Σ<sub>c</sub>(2520)π in intermediate states </b><br> 
      <button class="btn--article">Article</button>&nbsp; <b> A. J. Arifi</b>, H. Nagahiro, and A. Hosaka (Jun 23, 2017)<br> 
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.95.114018"> Phys. Rev. D 95, 114018 (2017)</a></i> &middot; e-Print: <a href="https://arxiv.org/abs/1704.00464"> 1704.00464 </a> [hep-ph] </div>
  
  <div class="filterDiv proceeding"><b>Spin 3/2 nucleon resonances in kaon photoproduction </b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; <b> A. J. Arifi</b> and T. Mart (2017)<br> 
      Published in: <i> <a href="https://journals.jps.jp/doi/10.7566/JPSCP.17.063003">JPS Conf. Proc. 17, 063003 (2017)</a></i> <br>
    Contribution to: HYP 2015 (Sendai, Japan) </div>

  <div class="filterDiv proceeding"><b>Effect of the spin-3/2 nucleon resonances in kaon photoproduction </b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; <b> A. J. Arifi</b> and T. Mart (Sep 23, 2016)<br>
      Published in: <i> <a href="https://iopscience.iop.org/article/10.1088/1742-6596/739/1/012008">J. Phys. Conf. Ser. 739, 012008 (2016)</a></i> <br> 
     Contribution to: APS 2015 (Bandung, Indonsia) </div>
  
  <div class="filterDiv proceeding"><b>Electromagnetic production of kaon with spin-3/2 and -5/2 nucleon resonances </b><br> 
      <button class="btn--article-blue">Proceeding</button>&nbsp; T.Mart, S.Clymton, and <b> A. J. Arifi</b> (2016)<br>
      Published in: <i> <a href="https://journals.jps.jp/doi/10.7566/JPSCP.10.042001">JPS Conf. Proc. 10, 042001 (2016)</a> <br>
      </i> Contribution to: <a href="https://www.rcnp.osaka-u.ac.jp/~nstar15/">NSTAR 2015 </a> (Osaka, Japan) </div>

  <div class="filterDiv article"><b> Nucleon resonances with spin-3/2 and -5/2 in the isobar model for kaon photoproduction </b> <br> 
      <button class="btn--article">Article</button>&nbsp; T.Mart, S.Clymton, and <b> A. J. Arifi</b> (Nov 18, 2015)<br>
      Published in: <i> <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.92.094019">Phys. Rev. D 92, 094019 (2015)</a> </i>
  </div>

</div>


<script>
function filterSelection(c) {
  let x = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";

  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("show");

    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.add("show");
    }
  }
}

/* Run after DOM is ready */
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all");

  let btnContainer = document.getElementById("myBtnContainer");
  let btns = btnContainer.getElementsByClassName("btnz");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {

      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }

      this.classList.add("active");
    });
  }
});
</script>

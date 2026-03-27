---
title: "Publications"
permalink: /publications/
author_profile: false
---

<style>

/* ===== GENERAL TEXT ===== */
body {
  font-size: 16px;
  line-height: 1.6;
  color: #222;
}

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
  border-radius: 4px;          /* very slight rounding */

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

/* authors highlight */
.filterDiv b[style] {
  color: #1f4e9e;  /* blue */
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
You can also access my full publication list on <a href="https://inspirehep.net/authors/1410710">InspireHEP</a>. 
</p>
 
<p style="margin-bottom:1.2cm;"></p>

<div id="chart_div" style="display: block; width: 100%; transform: scale(1.2);"></div>

<p style="margin-bottom:1cm;"></p>

<blockquote>
    "I aim to produce research that not only advances the field but also fosters meaningful collaborations."
</blockquote>

<p style="margin-bottom:1.5cm;"></p>

<div id="myBtnContainer">
  <button class="btnz active" onclick="filterSelection('all')">All</button>
  <button class="btnz" onclick="filterSelection('article')">Journal Articles</button>
  <button class="btnz" onclick="filterSelection('proceeding')">Proceedings</button>
  <button class="btnz" onclick="filterSelection('thesis')">Thesis</button>
</div>

<p style="margin-bottom:1cm;"></p>

<div class="containerz">

<!-- ===== 2025 ===== -->
<div class="yearHeader"><h2>2025</h2></div>

<div class="filterDiv article">
<b>Landau-Zener-Stückelberg-Majorana dynamics of magnetized quarkonia</b><br>
<button class="btn--article">Article</button>
<b>A. J. Arifi</b> and K. Suzuki (Dec 30, 2025)<br>
Published in: <a href="https://arxiv.org/abs/2512.24072">ArXiv: 2512.24072</a>
</div>

<div class="filterDiv article">
<b>Kaon T-even transverse-momentum-dependent distributions...</b><br>
<button class="btn--article">Article</button>
Y. Choi, <b style="color:#900C3F">A. J. Arifi</b> et al. (Dec 25, 2025)
</div>

<!-- ===== 2024 ===== -->
<div class="yearHeader"><h2>2024</h2></div>

<div class="filterDiv article">
<b>Heavy-quark spin symmetry violation effects...</b><br>
<button class="btn--article">Article</button>
N. Monkata et al.
</div>

<!-- ===== 2023 ===== -->
<div class="yearHeader"><h2>2023</h2></div>

<div class="filterDiv article">
<b>Pseudoscalar meson decay constants...</b><br>
<button class="btn--article">Article</button>
<b style="color:#900C3F">A. J. Arifi</b>
</div>

<!-- KEEP ADDING YOUR OTHER ENTRIES SAME FORMAT -->

</div>


<script>
function filterSelection(c) {
  let x = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";

  let counter = 1;

  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("show");

    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.add("show");

      // Skip year headers (they contain <h2>)
      if (!x[i].querySelector("h2")) {
        let num = x[i].querySelector(".pub-number");
        if (num) {
          num.innerHTML = counter + ".";
          counter++;
        }
      }
    }
  }
}

/* Default */
filterSelection("all");

/* Active button highlight */
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btnz");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
  });
}
</script>

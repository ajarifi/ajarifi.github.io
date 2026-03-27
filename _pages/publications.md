---
title: "Publications"
permalink: /publications/
author_profile: false
---

<style>

/* ===== Filter Buttons (Tabs Style) ===== */
#myBtnContainer {
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}

.btnz {
  border: none;
  outline: none;
  padding: 10px 18px;
  cursor: pointer;
  background-color: #f5f5f5;
  margin-right: 5px;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btnz:hover {
  background-color: #e0e0e0;
}

.btnz.active {
  background-color: #000080;
  color: white;
  font-weight: bold;
  border-bottom: 2px solid white;
}

/* ===== Container ===== */
.containerz {
  width: 100%;
}

/* ===== Publication Cards ===== */

.filterDiv {
  display: none;
  width: 100%;
  box-sizing: border-box;

  border-left: 3px solid #000080;
  padding: 12px;
  margin-bottom: 20px;

  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  opacity: 0;
  transform: translateY(5px);
  transition: all 0.25s ease;
}

.filterDiv.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.filterDiv:hover {
  background-color: #fafafa;
}

/* ===== Year Headers (clean, no box) ===== */
.yearHeader {
  margin-top: 30px;
  margin-bottom: 10px;
}

.yearHeader h2 {
  font-size: 18px;
  font-weight: 600;
  color: #000080;
  margin: 0;
  padding-bottom: 4px;
  border-bottom: 2px solid #eee;
}

/* ===== Title styling ===== */

.filterDiv b {
  font-size: inherit;   /* SAME as parent */
  font-weight: 600;     /* still slightly emphasized */
}

/* ===== Buttons ===== */
.btn--article,
.btn--article-blue,
.btn--article-black,
.btn--article-orange,
.btn--article-red {
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
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

<p style="margin-bottom:1cm;"></p>

<div style="display: flex; align-items: center; background-color: white; position: sticky; top: 0px; padding: 10px 0px; box-shadow: 0 4px 2px -2px gray; z-index: 1; height: 70px;"> 
  <h1 style="color:#000080; margin: 0;">My Publications</h1> 
</div>

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
<b style="color:#900C3F">A. J. Arifi</b> and K. Suzuki (Dec 30, 2025)<br>
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

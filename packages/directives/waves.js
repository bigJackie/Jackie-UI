// src/directives/waves.js
import "./waves.scss";
import Vue from "vue";
export default {
  bind(el, binding) {
    let dom = document.createElement("div");
    dom.setAttribute("class", "waves");
    dom.innerHTML = "<div></div>";
    dom.attrs = {};
    console.log(dom.style);

    dom.addEventListener("click", e => {
      e.target.style.animation = "wave ease-out .25s";
      e.target.style.opacity = ".2";
      e.target.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
    });

    dom.addEventListener("webkitAnimationEnd", e => {
      e.target.style.animation = "";
      e.target.style.opacity = "0";
    });

    dom.addEventListener("animationend", e => {
      e.target.style.animation = "";
      e.target.style.opacity = "0";
    });

    el.appendChild(dom);
  },
};

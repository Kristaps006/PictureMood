"use strict";

const inputs = document.querySelectorAll(".controls input");

function updatePicture() {
  const measure = this.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + measure
  );
  console.log(this.value);
}

inputs.forEach((inputs) => inputs.addEventListener("change", updatePicture));
inputs.forEach((inputs) => inputs.addEventListener("mousemove", updatePicture));

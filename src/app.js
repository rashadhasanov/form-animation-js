// const labels = document.querySelectorAll(".form-control label");

// console.log(labels);

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".form-control input");

  inputs.forEach((input) => {
    if (input.value.trim() !== "") {
      input.classList.add("not-empty");
    }

    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.add("not-empty");
      } else {
        input.classList.remove("not-empty");
      }
    });
  });

  const labels = document.querySelectorAll(".form-control label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });
});

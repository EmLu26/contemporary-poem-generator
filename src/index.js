function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The cat sat on the mat",
    autoStart: true,
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

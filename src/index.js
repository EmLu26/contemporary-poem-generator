function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6798e9t4f3cb9ef4o430784a938ec3f3";
  let context =
    "You are a contemporary poem expert who loves to write short poems. Your mission is to generate a short poem, which doesn't have to rhyme, of 4 - 10 lines, in basic HTML with a <br /> separating each line. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' - this MUST be inside a <strong></strong> element and MUST be at the end of the poem.";
  let prompt = `User instructions: Generate a contemporary poem in English about the subject of ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating a poem for you about ${instructionsInput.value}</div`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

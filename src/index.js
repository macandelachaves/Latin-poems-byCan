function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#main-poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemRequest = document.querySelector("#poem-request");
  let apiKey = "36bb04605e1o2a2f7ce6c8t6fa5fe0ba";
  let context =
    " you are a romantic poem expert and love to write short poems in spanish. Your mission is to generate a 4 line poem and separte each line with a <br>. Make sure to follow the use instructions. Sign the poem with the author name inside a <strong> element at the end of the poem. Show just the name of the author, without other words. The poem has to be in spanish ";
  let prompt = `Generate a spanish poem about${poemRequest}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let mainPoem = document.querySelector("#main-poem");
  mainPoem.classList.remove("hidden");
  mainPoem.innerHTML = ` <div class="generating"> Generating the requested poem about ${poemRequest.value} </div>`;

  axios.get(apiUrl).then(displayPoem);

  console.log("Generating poem");
}

let mainPoem = document.querySelector("#poem-form");
mainPoem.addEventListener("submit", generatePoem);

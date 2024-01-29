///Onload
fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(function (response) {
    if (response.status != 200) {
      console.log("Oops...." + response.status);
      return;
    }

    response.json().then(function (data) {
      const pokemons = data.results;
      pokemons.forEach((pokemon) => {
        let newCards = document.createElement("div");
        newCards.classList.add("card");

        fetch(pokemon.url).then(function (response) {
          response.json().then(function (detail) {
            newCards.innerHTML = "";
            newCards.innerHTML = `
              <ul>
                <li><img src="${detail.sprites.front_default}"/></li>
                <li>${detail.name}</li>
              </ul>
            `;

            document.getElementById("container").appendChild(newCards);
          });
        });
      });
    });
  })
  .catch(function (err) {
    console.log(err);
  });

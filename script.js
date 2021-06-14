jokeEl = document.getElementById("joke");
jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();


async function generateJoke(){
    const config = {
        headers: {
          Accept: "application/json"      
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeEl.innerText = data.joke;
}

// function generateJoke(){
//     const config = {
//         headers: {
//           Accept: "application/json"      
//         }
//     }

//     fetch("https://icanhazdadjoke.com", config).then((res) => res.json()).then((data) => {
//         jokeEl.innerText= data.joke;
//     })   
// }
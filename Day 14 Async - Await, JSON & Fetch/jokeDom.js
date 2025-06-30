const btn = document.querySelector("button");
const text = document.querySelector("h1");

async function fetchJoke() {
  try {
    const jokeResponse = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!jokeResponse.ok) {
      throw new Error("Failed to fetch joke");
    }
    const jokes = await jokeResponse.json();
    return jokes;
    // console.log(`Setup: ${jokes.setup} Punchline: ${jokes.punchline}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

btn.addEventListener("click", async () => {
  const jokes = await fetchJoke();
  text.innerHTML = `${jokes.setup} ${jokes.punchline}`;
});

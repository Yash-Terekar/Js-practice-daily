async function fetchError() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/unknown"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
fetchError();

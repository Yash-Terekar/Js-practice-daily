async function fetchUserPosts() {
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    if (!data.ok) {
      console.log(`Network response was not ok`);
    }
    const posts = await data.json();
    posts.forEach((post) => {
      console.log(`Title: ${post.title},`);
      console.log(`Body: ${post.body}`);
      console.log(`---------------------------------`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
fetchUserPosts();

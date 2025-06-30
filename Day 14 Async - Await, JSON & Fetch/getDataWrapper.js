async function getData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log(`Network response was not ok`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

async function fetchData() {
  try {
    const users = await getData("https://jsonplaceholder.typicode.com/users");
    users.slice(0, 3).forEach((user) => {
      console.log(`User: ${user.name}, Email: ${user.email}`);
    });

    const posts = await getData("https://jsonplaceholder.typicode.com/posts");
    posts.slice(0, 3).forEach((post) => {
      console.log(`Post Title: ${post.title}`);
    });

    const comment = await getData(
      "https://jsonplaceholder.typicode.com/comments"
    );
    comment.slice(0, 3).forEach((comment) => {
      console.log(`Comment Email: ${comment.email}, Body: ${comment.body}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

fetchData();

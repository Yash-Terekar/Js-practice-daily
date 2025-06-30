async function chainedFetch() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!userResponse.ok) {
      throw new Error("Issue with user api");
    }
    const users = await userResponse.json();

    for (let user of users) {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        );
        if (!postResponse.ok) {
          console.log("Issue with post api");
        }
        const posts = await postResponse.json();

        console.log(`Name: ${user.name} Post: ${posts.length}`);
      } catch (err) {
        console.log(`Error for user ${user.name}: ${err}`);
        continue;
      }
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
chainedFetch();

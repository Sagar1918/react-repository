const fetchMenu = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  data.map((post) => {
    console.log(post.title);
  });
};

fetchMenu();

const BASE_URL = "http://localhost:3001/";

const btnPosts = document.getElementById("postai");
const btnTowns = document.getElementById("miestas");
const outputEl = document.getElementById("output");

//MAP//

// btnPosts.onclick = () => getPosts();

// async function getPosts() {
//   const resp = await fetch(`${BASE_URL}posts`);
//   const data = await resp.json();
//   const postHtml = data.posts
//     .map((post) => {
//       return `
//     <h2>Title: ${post.title}</h2>
//     <h3>Body: ${post.body}</h3>
//    `;
//     })
//     .join("");
//   //   console.log("data===", data);
//   outputEl.innerHTML = postHtml;
// }

//RENDER POSTS//

btnPosts.onclick = () => getPosts();

async function getPosts() {
  const resp = await fetch(`${BASE_URL}posts`);
  const data = await resp.json();
  renderPosts(data.posts);
}
const object = {
  posts: [1, 2, 3],
};
console.log(object.posts);

function renderPosts(postObj) {
  console.log("postObj===", postObj);
  postObj.forEach((item) => {
    outputEl.innerHTML += `
    <h2>Id: ${item.id}</h2>
    <h3>Title: ${item.title}</h3>
    <h3>Body: ${item.body}</h3>
    `;
  });
}

btnTowns.onclick = () => getTowns();

async function getTowns() {
  const resp = await fetch(`${BASE_URL}api/towns`);
  const data = await resp.json();
  //   console.log("data===", data);
  outputEl.innerHTML = data;
}

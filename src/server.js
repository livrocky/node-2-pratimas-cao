// 5. isirasom express ir cors
const express = require("express");
const cors = require("cors");
const { posts } = require("./db");
const casual = require("casual");

//6. sukuriam serveri su port 3000 (consoleje pranesa kad serveris paleistas)
const app = express();
const PORT = 3001;

app.use(cors());

//7. sukuriam enpointa GET '/' kuri grazina "`< h1 >Sveiki is back end< / h1 >`"
app.get("/", (request, response) => {
  response.send("<h1>Sveiki is back end</h1>");
});

//8. sukuriam endpointa GET /posts kuris grazina json masyva su 3 postais

app.get("/posts", (request, response) => {
  response.json({
    posts: posts,
  });
});
//9. sukuriam endpointa GET /api/towns kuris grazina random miesta is npm casual(naudotas pries tai pratime)

app.get("/api/towns", (request, response) => {
  response.json(casual.city);
});

app.listen(PORT, () => console.log("Serveris paleistas ir veikia", PORT));

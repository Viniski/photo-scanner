const axios = require("axios");
const express = require("express");
const { getImages } = require("./services/services-images");
//komentarze
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.post("/skanuj", async (req, res) => {
  const { url } = req.body;
  const response = await axios.get(url);
  const images = getImages(response.data);

  let html = `<h1>Lista wyszukanych zdjęć:</h1>`;
  images.forEach(
    (img) => (html += `<img src="${img}" style="max-width: 200px">`)
  );

  res.type("html");
  res.send(html);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

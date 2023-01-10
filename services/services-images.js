const { JSDOM } = require("jsdom");

function getImages(html) {
  const dom = new JSDOM(html, { resources: "usable" });
  const imagesDOM = dom.window.document.querySelectorAll("img");
  const urlsArray = Array.from(imagesDOM).map((img) => img.src);

  return urlsArray;
}

module.exports = { getImages };

const { JSDOM } = require("jsdom");

async function decodeHiddenUrl(url) {
  const res = await fetch(url);
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const nodes = document.querySelectorAll(
    'section[data-id^="92"] article[data-class$="45"] div[data-tag*="78"] b.ref'
  );

  const chars = Array.from(nodes).map(el => el.getAttribute("value"));
  return chars.join("");
}

const inputUrl = process.argv[2];
if (!inputUrl) {
  console.error("Usage: node index.js <url>");
  process.exit(1);
}

decodeHiddenUrl(inputUrl)
  .then(url => console.log("Decoded hidden URL:", url))
  .catch(err => console.error("Error:", err));

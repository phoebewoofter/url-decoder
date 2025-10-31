# URL Decoder Challenge

This project is a small Node.js utility that fetches the HTML of a challenge page and extracts a hidden URL based on a specific DOM pattern. It was built as part of a coding challenge to practice parsing HTML and working with the DOM in Node.

## 🔍 The Challenge
The HTML contains a hidden URL. Each character of the URL is stored in a `<b>` tag nested inside a very specific DOM structure:

```html
<section data-id="92*">
  <article data-class="*45">
    <div data-tag="*78*">
      <b class="ref" value="VALID_CHARACTER"></b>
    </div>
  </article>
</section>

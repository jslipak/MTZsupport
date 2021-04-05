url = 'https://jslipak.github.io/data/product.json';
let product = [];
fetch(url, { method: 'GET', mode: 'no-cors' })
  .then((res) => res.json())
  .then((data) => (product = data));

//$.getJSON(url, function (json) {
//product = json;
//});

console.log(product);

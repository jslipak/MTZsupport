url =
  'https://github.com/jslipak/jslipak.github.io/tree/main/data/product.json';
let product = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => (product = data));

//$.getJSON('/data/product.json', function (json) {
//product = json;
//});

console.log(product);

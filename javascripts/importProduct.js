let product = [];
fetch('/data/product.json')
  .then((res) => res.json())
  .then((data) => (product = data));

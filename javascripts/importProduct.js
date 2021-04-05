const URL = `https://jslipak.github.io/data/product.json`;
let product = [];
$.ajax({
  method: 'GET',
  url: URL,
})
  .done(function (data) {
    product = data;
  })
  .fail(function (error) {
    error = alert('no se establecio la conexion');
  });

console.log(product);

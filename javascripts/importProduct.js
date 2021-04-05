const url = `https://jslipak.github.io/data/product.json`;

var urlLocal = `/data/product.json`;
$.ajax({
  method: 'GET',
  url: url,
})
  .done(function (data) {
    product = data;
  })
  .fail(function (error) {
    error = alert('no se establecio la conexion');
  });

console.log(product);

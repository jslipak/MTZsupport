//Var & Cons
const URL = `https://jslipak.github.io/data/product.json`;
let navbarItem = document.querySelector('ul.navbar-nav');
let sideBarEcommerce = document.querySelector('footer');
let product_to_loading = [];
let btnComprar = document.querySelectorAll('button.comprar');
let scroller = document.querySelector("a[data-target='#ecommerceModal']");
let shortCards = document.querySelector('#short_cards');

//funciones
sidebar = function () {
  if (localStorage.getItem('isOrden') == 'true') {
    if (!scroller) {
      navbarItem.insertAdjacentHTML(
        'beforeend',
        `<li class="nav-items" id="ecommerceLi"><a type="button" class="nav-link"
        data-toggle="modal" data-target="#ecommerceModal"> <img
        src="/img/shopping-cart.svg" height="20px" alt="cart"/> </a></li>`,
      );
      scroller = document.querySelector("a[data-target='#ecommerceModal']");
      sideBarEcommerce.insertAdjacentHTML(
        'afterend',
        `
 <!--inicio sidebar-->
    <div class="modal left fade" id="ecommerceModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="nav flex-sm-column flex-row">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a href="#" class="nav-item nav-link">Link</a>
                        <a href="#" class="nav-item nav-link">Link</a>
                        <a href="#" class="nav-item nav-link">Link</a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bt-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn bt-secondary" data-dismiss="modal" onclick="borrarOrden()">Borrar</button>
                    <button type="button" class="btn bt-primary" data-dismiss="modal" >comprar</button>
                </div>
            </div>
        </div>
    </div>
    <!--fin sidebar-->
`,
      );
    }
  }
};

borrarOrden = function () {
  localStorage.clear();
  document.getElementById('ecommerceLi').remove();
};
// Procesos
if (shortCards) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      product_to_loading = data;
      if (typeof product_to_loading !== 'undefined') {
        string_to_add = '';
        product_to_loading.forEach((e) => {
          if ((e.todo == '') & (e.note == '')) {
            string_to_add += `
  <div class="col-md-4 d-flex align-items-strech">
  <div class="card mb-4 cardColorBG">
  <img class="card-img-top" src="${e.imagen}" alt="${e.imagen}">
  <div class="card-body d-flex flex-column">
  <h5 class="card-title">${e.title}</h5>
  <p class="card-text">${e.description}</p>
  <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#ModalForm">Mas información</button>
  </div>
  </div>
  </div>
  `;
          }
        });
        //$('#short_cards').append(string_to_add);
        shortCards.insertAdjacentHTML('beforeend', string_to_add);
      }
    });
}
btnComprar.forEach(function (item) {
  item.addEventListener('click', function (e) {
    localStorage.setItem('isOrden', 'true');
    sidebar();
    //TODO: funciton button comprar aca la carga
    //
    // END:
  });
});

sidebar();

// TODO: remove sidebar

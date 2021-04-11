//Var & Cons
const URL = `https://jslipak.github.io/data/product.json`;
let navbarItem = document.querySelector('ul.navbar-nav');
let sideBarEcommerce = document.querySelector('footer');
let product_to_loading = [];
let scroller = document.querySelector("a[data-target='#ecommerceModal']");
let shortCards = document.querySelector('#short_cards');
let longCards = document.querySelector('#long_cards');

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
                    <button type="button" class="btn bt-primary" data-id=${e.productId} data-dismiss="modal" >comprar</button>
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

if (shortCards || longCards) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      product_to_loading = data;
      string_to_add_short_cards = '';
      string_to_add_long_cards = '';
      if (typeof product_to_loading !== 'undefined') {
        product_to_loading.forEach((e) => {
          if ((e.todo == '') & (e.note == '')) {
            console.log(e);
            string_to_add_short_cards += `
              <div class="col-md-4 d-flex align-items-strech">
                <div class="card mb-4 cardColorBG">
                  <img class="card-img-top" src="${e.imagen}" alt="${e.imagen}">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.description}</p>
                    <button type="button" data-id=${e.productId} class="btn btn-outline-light" data-toggle="modal" data-target="#ModalForm">Mas información</button>
                  </div>
                </div>
              </div>
          `;
          } else {
            string_to_add_long_cards += `
              <div class="col-md-6 d-flex align-items-strech">
                    <div class="card text-white cardColorBG flex-md-row mb-4 shadow-sm h-md-250">
                        <div class="card-body d-flex flex-column align-items-start">
                            <strong class="d-inline-block mb-2 text-white">${e.title}</strong>
                            <h6 class="mb-0">
                              ${e.description}
                            </h6>
                            <div class="mb-1 text-white-50 small">${e.note}</div>
                            <p class="card-text mb-auto">${e.todo}</p>
                            <button type="button" class="btn btn-outline-light comprar" >Comprar</button>
                        </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" alt="${e.imagen}" src="${e.imagen}" style="width: 200px; height: 250px;">
                    </div>
                </div>
            `;
          }
        });
        shortCards.insertAdjacentHTML('beforeend', string_to_add_short_cards);
        longCards.insertAdjacentHTML('beforeend', string_to_add_long_cards);
        let btnComprar = document.querySelectorAll('button.comprar');
        btnComprar.forEach(function (item) {
          item.addEventListener('click', function (e) {
            localStorage.setItem('isOrden', 'true');
            sidebar();
            //TODO: funciton button comprar aca la carga
            //
            // END:
          });
        });
      }
    });
}

sidebar();

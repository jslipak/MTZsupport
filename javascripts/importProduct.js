//Var & Cons
const URL =
  'http://localhost:3000/data/product.json' ||
  `https://jslipak.github.io/data/product.json`;
let navbarItem = document.querySelector('ul.navbar-nav');
let sideBarEcommerce = document.querySelector('footer');
let product_to_loading = [];
let scroller = document.querySelector("a[data-target='#ecommerceModal']");
let shortCards = document.querySelector('#short_cards');
let longCards = document.querySelector('#long_cards');
let orden;

//funciones
var sidebar = function () {
  if (localStorage.getItem('isOrden') == 'true') {
    if (!scroller) {
      navbarItem.insertAdjacentHTML(
        'beforeend',
        `<li class="nav-items" id="ecommerceLi">
            <a type="button" class="nav-link" data-toggle="modal" data-target="#ecommerceModal"> 
              <img src="/img/shopping-cart.svg" height="20px" alt="cart"/> 
            </a>
        </li>`,
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
                <table class="table text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"><i class="fas fa-store"></i></th>
                            <th scope="col"><i class="fas fa-layer-group"></i></th>
                            <th scope="col"><i class="fas fa-dollar-sign"></i></th>
                            <th scope="col"><i class="far fa-sack-dollar"></i></th>
                            <th scope="col"><i class="far fa-eraser"></i></th>
                        </tr>
                    </thead>
                    <div id="itemToAdd"></div>
                    <tfoot class="thead-dark">
                        <tr>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th id="totalOrden" scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="borrarOrden()">Borrar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="compraOrden()">comprar</button>
            </div>
        </div>
    </div>
</div>
<!--fin sidebar-->
        `,
      );
    }
    populateOrden();
  }
};

populateOrden = function () {
  let htmlAdd = document.querySelector('thead.thead-dark');
  let totalHtml = document.getElementById('totalOrden');
  let deleteItems = document.querySelectorAll('.deleteBeforeToChange');
  let totalOrden = 0;
  deleteItems.forEach((e) => {
    e.remove();
  });
  storageItems = JSON.parse(localStorage.getItem('ordenToBuy'));
  storageItems.forEach((element) => {
    totalOrden += element.precio * element.cantidad;
    let stringItem = `
                    <tbody class="deleteBeforeToChange">
                        <tr>
                            <td><span>${element.title}</span></td>
                            <td>
                                <a class="fas fa-plus"  onclick="plusItem('${
                                  element.title
                                }')"></a>
                                <div>${element.cantidad}</div>
                                <a class="fas fa-minus" onclick="minusItem('${
                                  element.title
                                }')"></a>
                            </td>
                            <td><span>${element.precio}</span></td>
                            <td><span>$${
                              element.precio * element.cantidad
                            }</span></td>
                            <td><span><a onclick="deleteItem('${
                              element.title
                            }')" class="fas fa-trash"></a></span></td>
                        </tr>
                    </tbody>
                    `;
    htmlAdd.insertAdjacentHTML('afterend', stringItem);
  });
  totalHtml.innerText = `$${totalOrden}`;
};

borrarOrden = function () {
  localStorage.clear();
  document.getElementById('ecommerceLi').remove();
  scroller = '';
};

compraOrden = function () {
  ordenStorage = JSON.parse(localStorage.getItem('ordenToBuy'));
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(ordenStorage),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  borrarOrden();
};

isProductInOrden = function (orden, product) {
  return orden.findIndex((i) => i.title === product);
};

deleteItem = function (title) {
  console.log(title);
  ordenStorage = JSON.parse(localStorage.getItem('ordenToBuy'));
  let newOrden = ordenStorage.filter((item) => {
    return item.title != title;
  });
  console.log(newOrden);
  localStorage.setItem('ordenToBuy', JSON.stringify(newOrden));
  if (newOrden.length == 0) {
    console.log('borra orden length 0');
    borrarOrden();
    $('#ecommerceModal').modal('toggle');
  } else {
    sidebar();
  }
};

plusItem = function (title) {
  let ordenStorage = JSON.parse(localStorage.getItem('ordenToBuy'));
  console.log(ordenStorage);
  position = isProductInOrden(ordenStorage, title);
  ordenStorage[position].cantidad += 1;
  localStorage.setItem('ordenToBuy', JSON.stringify(ordenStorage));
  sidebar();
};

minusItem = function (title) {
  let ordenStorage = JSON.parse(localStorage.getItem('ordenToBuy'));
  console.log(ordenStorage);
  position = isProductInOrden(ordenStorage, title);
  if (ordenStorage[position].cantidad > 0) {
    ordenStorage[position].cantidad -= 1;
    localStorage.setItem('ordenToBuy', JSON.stringify(ordenStorage));
    sidebar();
  }
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
                            <strong class="d-inline-block mb-2 text-white">${e.title}:  $${e.precio}</strong>
                            <h6 class="mb-0">
                              ${e.description}
                            </h6>
                            <div class="mb-1 text-white-50 small">${e.note}</div>
                            <p class="card-text mb-auto">${e.todo}</p>
                            <button type="button" class="btn btn-outline-light comprar" data-precio=${e.precio} data-title=${e.title} data-id=${e.productId} >Comprar</button>
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
            ordenStorage = JSON.parse(localStorage.getItem('ordenToBuy')) || [];
            //bug in chrome with event
            //productToCheck = e.path[1].childNodes[1].innerText;
            productToCheck = e.target.dataset.title;
            console.log(productToCheck);
            precioProducto = e.target.dataset.precio;
            if (localStorage.getItem('isOrden') !== 'true') {
              console.log('estoy aca');
              let arrayOrden = [
                { title: productToCheck, cantidad: 1, precio: precioProducto },
              ];
              localStorage.setItem('ordenToBuy', JSON.stringify(arrayOrden));
            } else if (isProductInOrden(ordenStorage, productToCheck) >= 0) {
              console.log('else if');
              let position = isProductInOrden(ordenStorage, productToCheck);
              ordenStorage[position].cantidad += 1;
              localStorage.setItem('ordenToBuy', JSON.stringify(ordenStorage));
            } else {
              console.log('else');
              ordenStorage.push({
                title: productToCheck,
                cantidad: 1,
                precio: precioProducto,
              });
              localStorage.setItem('ordenToBuy', JSON.stringify(ordenStorage));
            }

            localStorage.setItem('isOrden', 'true');
            sidebar();
          });
        });
      }
    });
}
sidebar();

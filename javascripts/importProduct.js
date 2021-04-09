const URL = `https://jslipak.github.io/data/product.json`;
let navbarItem = document.querySelector('ul.navbar-nav');
let sideBarEcommerce = document.querySelector('footer');
let product = [];
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    product = data;
    if (typeof product !== 'undefined') {
      string_to_add = '';
      product.forEach((e) => {
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
      document
        .querySelector('#short_cards')
        .insertAdjacentHTML('beforeend', string_to_add);
    }
  });

navbarItem.insertAdjacentHTML(
  'beforeend',
  `<li class="nav-items"><a type="button" class="nav-link" data-toggle="modal" data-target="#exampleModal"> Sidebar Modal </a></li>`,
);

sideBarEcommerce.insertAdjacentHTML(
  'afterend',
  `
 <!--inicio sidebar-->
    <div class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <button type="button" class="btn bt-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!--fin sidebar-->
    
`,
);

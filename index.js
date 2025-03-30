const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

//=============================================================================================

const produkt1Element = document.querySelector("#product1");
produkt1Element.classList.add("border-primary");

// const produkt2ButtonElement = document.querySelector("#product2 button"); // přesun třídy a funkce na řádek 59 za vložení produktu 2 do HTML (pokud bylo tedy, tak se funkce odvolávala na třídu, která     ještě nebyla do html vložená)
// produkt2ButtonElement.classList.remove("btn-primary");                     

// const card3TitleElement = document.querySelector("#product3 .card-title");      // přesun na řádek 74 za vložení produktu 3 do HTML (pokud bylo tedy, tak se funkce odvolávala na třídu, která ještě nebyla do html vložená)
//card3TitleElement.classList.toggle("text-center");                             
//card3TitleElement.classList.toggle("text-center");

//=============================================================================================
// Vložení produktu 1

const product1HTML = `
  <img class="card-img-top" src="${product1.image}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text"> ${product1.description} </p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

const product1Elm = document.querySelector("#product1");
product1Elm.innerHTML = product1HTML;

//=============================================================================================
// Vložení produktu 2

const product2HTML = `
<img class="card-img-top" src="${product2.image}" alt="Slepičkabelka">
<div class="card-body">
    <h2 class="card-title"> ${product2.name} </h2>
    <p class="card-text"> ${product2.description} </p>

</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

const product2Elm = document.querySelector("#product2");
product2Elm.innerHTML = product2HTML;

const produkt2ButtonElement = document.querySelector("#product2 button");  // přesunuto z řádků 24-25
produkt2ButtonElement.classList.remove("btn-primary");   

//==============================================================================================
// Vložení produktu 3

const product3HTML = `
<img class="card-img-top" src=" ${product3.image} " alt="Anatoplavky">
  <div class="card-body">
    <h2 class="card-title"> ${product3.name} </h2>
    <p class="card-text"> ${product3.description} </p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

const product3Elm = document.querySelector("#product3");
product3Elm.innerHTML = product3HTML;

const card3TitleElement = document.querySelector("#product3 .card-title"); //přesunuto z řádku 27 - 29
card3TitleElement.classList.toggle("text-center");
card3TitleElement.classList.toggle("text-center");        
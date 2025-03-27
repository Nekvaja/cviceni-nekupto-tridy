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

const produkt1Element = document.querySelector("#product1");
produkt1Element.classList.add("border-primary");

const produkt1ButtonElement = document.querySelector("#product2 button");
produkt1ButtonElement.classList.remove("btn-primary");

const card3TitleElement = document.querySelector("#product3 .card-body .card-title");
card3TitleElement.classList.toggle("text-center");
//card3TitleElement.classList.toggle("text-center");
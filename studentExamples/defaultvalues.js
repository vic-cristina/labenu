1;

function change(cardName) {
  console.log(cardName);
  return cardName;
}

function changeDefault(cardName = "Jane Doe") {
  console.log(cardName);
  return cardName;
}

change();
changeDefault();

const container = document.getElementById("container");
const item = document.querySelector(".item");

const adicionaItem = (e) => {
  const itemClone = item.cloneNode(true);
  container.appendChild(itemClone);
};

const removeItem = (e) => {
  const item = e.target;
  console.log(item);
  container.removeChild(item);
};

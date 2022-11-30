const nacionalidade = prompt("Escreva aqui sua nacionalidade")
  .toLowerCase()
  .trim();

const verificaNacionalidade = (nacionalidade) => {
  switch (nacionalidade) {
    case "brasileira":
      console.log(nacionalidade);
      break;
    case "argentina":
      console.log(nacionalidade);
    case "uruguaia":
      console.log(nacionalidade);
    case "chilena":
      console.log(nacionalidade);
    case "colombiana":
      console.log(nacionalidade);
    default:
      console.log(`Nacionalidade não encontrada`);
      break;
  }
};

verificaNacionalidade(nacionalidade);

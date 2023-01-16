class Estradiol {
  constructor(name, type, dosage, price, img) {
    this.name = name;
    this.type = type;
    this.dosage = dosage;
    this.price = price;
    this.img = img;
  }
}

const oestrogel = new Estradiol(
  "Oestrogel",
  "Transdermal gel",
  "0.6mg/pump",
  79.9,
  "./images/oestrogel.png"
);
const diane35 = new Estradiol(
  "Diane 35",
  "Oral",
  "0.035mg",
  27.06,
  "./images/diane35.png"
);
const evra = new Estradiol(
  "Evra",
  "Transdermal patch",
  "0.6mg",
  79.99,
  "./images/evra.png"
);
const natifa = new Estradiol(
  "Natifa",
  "Sublingual",
  "1mg",
  48.29,
  "./images/natifa.png"
);
const climene = new Estradiol(
  "Climene",
  "Oral",
  "2mg",
  28.41,
  "./images/climene.png"
);
const ciclovular = new Estradiol(
  "Ciclovular",
  "IM Injection",
  "10mg/ml",
  12.99,
  "./images/ciclovular.png"
);
const mesigyna = new Estradiol(
  "Mesigyna",
  "IM Injection",
  "5mg/ml",
  14.99,
  "./images/mesigyna.png"
);

export const db = [
  oestrogel,
  diane35,
  evra,
  natifa,
  climene,
  ciclovular,
  mesigyna,
];

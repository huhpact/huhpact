const CARS = [

  { brand: "Volkswagen", model: "Up!",              year: "2016", cat: "PKW",        img: "cars/vw-up.jpeg" },
  { brand: "Volkswagen", model: "Fox",              year: "2011", cat: "PKW",        img: "cars/vw-fox.avif" },
  { brand: "Volkswagen", model: "Polo",             year: "2024", cat: "PKW",        img: "cars/vw-polo.avif" },
  { brand: "Volkswagen", model: "Golf",             year: "2026", cat: "PKW",        img: "cars/vw-golf.avif" },
  { brand: "Volkswagen", model: "Jetta",             year: "2018", cat: "PKW",        img: "cars/vw-jetta.avif" },
  { brand: "Volkswagen", model: "Scirocco",             year: "2014", cat: "PKW",        img: "cars/vw-scirocco.jpg" },
  { brand: "Volkswagen", model: "Beetle",             year: "2019", cat: "PKW",        img: "cars/vw-beetle.jpg" },
  { brand: "Volkswagen", model: "EOS",             year: "2015", cat: "PKW",        img: "cars/vw-eos.jpg" },
  { brand: "Volkswagen", model: "CC",             year: "2016", cat: "PKW",        img: "cars/cc.avif" },
  { brand: "Volkswagen", model: "Passat",             year: "2024", cat: "PKW",        img: "cars/vw-passat.webp" },
  { brand: "Volkswagen", model: "Arteon",             year: "2024", cat: "PKW",        img: "cars/vw-arteon.avif" },
  { brand: "Volkswagen", model: "Phaeton",             year: "2024", cat: "PKW",        img: "cars/vw-phaeton.jpg" },
  { brand: "Volkswagen", model: "ID.3",             year: "2026", cat: "PKW",        img: "cars/vw-id3.jpg" },
  { brand: "Volkswagen", model: "ID.4",             year: "2026", cat: "PKW",        img: "cars/vw-id4.jpg" },
  { brand: "Volkswagen", model: "ID.5",             year: "2022", cat: "PKW",        img: "cars/vw-id5.jpg" },
  { brand: "Volkswagen", model: "ID.7",             year: "2026", cat: "PKW",        img: "cars/vw-id7.webp" },
  { brand: "Volkswagen", model: "ID.Buzz",             year: "2026", cat: "PKW",        img: "cars/idbuzz.jpg" },
  { brand: "Volkswagen", model: "ID.Polo",             year: "2026", cat: "PKW",        img: "cars/vw-idpolo.webp" },
  { brand: "Volkswagen", model: "ID.Cross",             year: "2026", cat: "PKW",        img: "cars/vw-idcross.jpg" },
  { brand: "Volkswagen", model: "ID.Every1",             year: "2026", cat: "PKW",        img: "cars/vw-idevery1.jpg" },
  { brand: "Volkswagen", model: "ID.Unyx 09",             year: "2026", cat: "PKW",        img: "cars/vw-unyx09.jpg" },
  { brand: "Volkswagen", model: "ID.Era 9x",             year: "2026", cat: "PKW",        img: "cars/vw-era9x.jpg" },
  { brand: "Volkswagen", model: "ID.Aura T6",             year: "2026", cat: "PKW",        img: "cars/vw-aurat6.jpg" },
  { brand: "Volkswagen", model: "Tiguan",             year: "2026", cat: "PKW",        img: "cars/vw-tiguan.avif" },
  { brand: "Volkswagen", model: "Touareg",             year: "2026", cat: "PKW",        img: "cars/vw-touareg.jpg" },
  { brand: "Volkswagen", model: "T-Roc",             year: "2026", cat: "PKW",        img: "cars/vw-troc.jpg" },
  { brand: "Volkswagen", model: "Taigo",             year: "2026", cat: "PKW",        img: "cars/vw-taigo.jpg" },
  { brand: "Volkswagen", model: "Touran",             year: "2026", cat: "PKW",        img: "cars/vw-touran.jpg" },
  { brand: "Volkswagen", model: "Sharan",             year: "2026", cat: "PKW",        img: "cars/vw-sharan.jpg" },
  { brand: "Volkswagen", model: "Caddy",             year: "2026", cat: "PKW",        img: "cars/vw-caddy.avif" },
  { brand: "Volkswagen", model: "Multivan",             year: "2026", cat: "PKW",        img: "cars/vw-multivan.jpeg" },
  { brand: "Volkswagen", model: "Transporter",             year: "2026", cat: "PKW",        img: "cars/vw-transporter.avif" },
  { brand: "Volkswagen", model: "Caravelle",             year: "2026", cat: "PKW",        img: "cars/vw-caravelle.jpg" },
  { brand: "Volkswagen", model: "Amarok",             year: "2026", cat: "PKW",        img: "cars/vw-amarok.avif" },

  { brand: "Audi", model: "A1",             year: "2026", cat: "PKW",        img: "cars/a1.jpg" },
  { brand: "Audi", model: "A2",             year: "2026", cat: "PKW",        img: "cars/a2.jpg" },
  { brand: "Audi", model: "A3",             year: "2026", cat: "PKW",        img: "cars/a3.webp" },
  { brand: "Audi", model: "A4",             year: "2026", cat: "PKW",        img: "cars/a4.avif" },
  { brand: "Audi", model: "A5",             year: "2026", cat: "PKW",        img: "cars/a5.avif" },
  { brand: "Audi", model: "A6",             year: "2026", cat: "PKW",        img: "cars/a6.jpg" },
  { brand: "Audi", model: "A6 e-tron",             year: "2026", cat: "PKW",        img: "cars/a6etron.avif" },
  { brand: "Audi", model: "A7",             year: "2026", cat: "PKW",        img: "cars/a7.jpg" },
  { brand: "Audi", model: "A8",             year: "2026", cat: "PKW",        img: "cars/a8.webp" },
  { brand: "Audi", model: "Q2",             year: "2026", cat: "PKW",        img: "cars/q2.jpg" },
  { brand: "Audi", model: "Q3",             year: "2026", cat: "PKW",        img: "cars/q3.jpg" },
  { brand: "Audi", model: "Q4 e-tron",             year: "2026", cat: "PKW",        img: "cars/q4etron.avif" },
  { brand: "Audi", model: "Q5",             year: "2026", cat: "PKW",        img: "cars/q5.webp" },
  { brand: "Audi", model: "Q6 e-tron",             year: "2026", cat: "PKW",        img: "cars/q6etron.jpg" },
  { brand: "Audi", model: "Q7",             year: "2026", cat: "PKW",        img: "cars/q7.avif" },
  { brand: "Audi", model: "Q8",             year: "2026", cat: "PKW",        img: "cars/q8.webp" },
  { brand: "Audi", model: "Q8 e-tron",             year: "2026", cat: "PKW",        img: "cars/q8etron.avif" },
  { brand: "Audi", model: "Q9",             year: "2026", cat: "PKW",        img: "cars/q9.webp" },
  { brand: "Audi", model: "E-tron GT",             year: "2026", cat: "PKW",        img: "cars/etrongt.jpg" },
  { brand: "Audi", model: "R8",             year: "2026", cat: "PKW",        img: "cars/r8.webp" },
  { brand: "Audi", model: "TT",             year: "2026", cat: "PKW",        img: "cars/tt.jpg" },
  { brand: "Audi", model: "RS3",             year: "2026", cat: "PKW",        img: "cars/rs3.avif" },
  { brand: "Audi", model: "S4",             year: "2026", cat: "PKW",        img: "cars/s4.avif" },
  { brand: "Audi", model: "RS5",             year: "2026", cat: "PKW",        img: "cars/rs5.webp" },
  { brand: "Audi", model: "S6",             year: "2026", cat: "PKW",        img: "cars/s6.jpg" },
  { brand: "Audi", model: "RS7",             year: "2026", cat: "PKW",        img: "cars/rs7.jpg" },
  { brand: "Audi", model: "SQ5",             year: "2026", cat: "PKW",        img: "cars/sq5.jpg" },
  { brand: "Audi", model: "SQ8",             year: "2026", cat: "PKW",        img: "cars/sq8.jpg" },
  { brand: "Audi", model: "RSQ8",             year: "2026", cat: "PKW",        img: "cars/rsq8.jpg" },
  { brand: "Audi", model: "Nuvolari",             year: "2026", cat: "PKW",        img: "cars/nuvolari.jpg" },

  { brand: "Mercedes-Benz", model: "A-Klasse",             year: "2026", cat: "PKW",        img: "cars/aklasse.avif" },
  { brand: "Mercedes-Benz", model: "A-Klasse",             year: "2026", cat: "PKW",        img: "cars/bklasse.avif" },
  



  


  

  
  
  
];
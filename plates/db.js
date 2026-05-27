// ============================================================
// LICENSE PLATE DATABASE
// ============================================================

const COUNTRIES = {
  DE: {
    name: "Deutschland",
    flag: "🇩🇪",
    code: "DE",
    hasRegions: true,
    region_label: "Bundesland",
    plates: [
      {
        code: "KW",
        name: "Königs Wusterhausen",
        region: "Brandenburg",
        population: 180242,
        registered: 141362,
        image: "/plates/img/kw-de.jpeg",
        imageReal: "/plates/img/kw-de.jpeg",
        description: "Königs Wusterhausen ist eine Stadt in Brandenburg, Deutschland. Sie ist bekannt für ihre historische Architektur und ihre Lage am Ufer des Oderflusses.",
        area: "2274 km²",
        founded: "2015",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "011",
        name: "Diplomat Ägypten",
        region: "bundesweit",
        population: 100,
        registered: 100,
        imageReal: "/plates/img/011.jpeg",
        description: "Ägypten ist ein Land in Nordafrika, bekannt für seine reiche Geschichte, die Pyramiden von Gizeh und den Nil. Es ist eine der ältesten Zivilisationen der Welt und hat eine vielfältige Kultur.",
        area: "0 km²",
        founded: "1973",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "010",
        name: "Diplomat Vatikan",
        region: "bundesweit",
        population: 100,
        registered: 100,
        imageReal: "/plates/img/010.jpeg",
        description: "Das Vatikanstadt ist ein unabhängiges Staat in Rom, Italien. Es ist das kleinste souveräne Staatsgebiet der Welt und das Heilige Land des Katholizismus.",
        area: "0 km²",
        founded: "1973",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "SB",
        name: "Saarbrücken",
        region: "Saarland",
        population: 332427,
        registered: 231320,
        imageReal: "/plates/img/sb-de.jpeg",
        description: "Saarbrücken ist die Hauptstadt des Saarlandes und liegt an der Grenze zu Frankreich. Die Stadt ist bekannt für ihre lebendige Kulturszene, die historische Altstadt und die Nähe zum Saarufer.",
        area: "410 km²",
        founded: "1957",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "HH",
        name: "Hamburg",
        region: "Hamburg",
        population: 1853000,
        registered: 880000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Speicherstadt_Hamburg.jpg/640px-Speicherstadt_Hamburg.jpg",
        description: "Hamburg, die Freie und Hansestadt, ist Deutschlands zweitgrößte Stadt und bedeutendster Seehafen. Die Speicherstadt, die Reeperbahn und die Elbphilharmonie sind Wahrzeichen dieser weltoffenen Metropole.",
        area: "755 km²",
        founded: "808",
        nickname: "Tor zur Welt",
        extra: "Zweitgrößte Stadt Deutschlands"
      },
      {
        code: "K",
        name: "Köln",
        region: "Nordrhein-Westfalen",
        population: 1084000,
        registered: 530000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cologne_Germany_Cologne-Cathedral-01.jpg/640px-Cologne_Germany_Cologne-Cathedral-01.jpg",
        description: "Köln, am Rhein gelegen, ist die viertgrößte Stadt Deutschlands. Der gotische Dom ist UNESCO-Weltkulturerbe und das bekannteste Wahrzeichen der Stadt. Köln ist außerdem bekannt für seinen Karneval und das Kölsch-Bier.",
        area: "405 km²",
        founded: "50 v. Chr.",
        nickname: "Metropole am Rhein",
        extra: "Älteste Großstadt Deutschlands"
      },
      {
        code: "S",
        name: "Stuttgart",
        region: "Baden-Württemberg",
        population: 635000,
        registered: 310000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Stuttgart_Schlossplatz.jpg/640px-Stuttgart_Schlossplatz.jpg",
        description: "Stuttgart ist die Landeshauptstadt Baden-Württembergs und ein wichtiges Wirtschaftszentrum. Als Heimat von Mercedes-Benz und Porsche ist die Stadt eng mit der Automobilindustrie verbunden.",
        area: "207 km²",
        founded: "950",
        nickname: "Schwabenmetropole",
        extra: "Heimat von Porsche & Mercedes-Benz"
      },
			{
        code: "037",
        name: "Diplomat Ecuador",
        region: "Bundesweit",
        population: 100,
        registered: 100,
        imageReal: "/plates/img/037.png",
        description: "Ecuador ist ein Land in Südamerika, bekannt für seine vielfältige Landschaft, die Anden, den Amazonas-Regenwald und die Galápagos-Inseln. Es ist eines der biologisch vielfältigsten Länder der Welt.",
        area: "0 km²",
        founded: "1973",
        nickname: "Aktuell",
        extra: ""
      },
    ]
  },
  GB: {
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    hasRegions: true,
    region_label: "Region",
    plates: [
      {
        code: "LN",
        name: "London",
        region: "England",
        population: 9648000,
        registered: 4200000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
        description: "London ist die Hauptstadt des Vereinigten Königreichs und eine der bedeutendsten Weltstädte. Big Ben, der Tower Bridge und der Buckingham Palace sind weltberühmte Wahrzeichen dieser historischen Metropole.",
        area: "1572 km²",
        founded: "43 n. Chr.",
        nickname: "The Big Smoke",
        extra: "Bevölkerungsreichste Stadt Westeuropas"
      },
      {
        code: "MN",
        name: "Manchester",
        region: "England",
        population: 553000,
        registered: 240000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Manchester_from_Salford_Quays.jpg/640px-Manchester_from_Salford_Quays.jpg",
        description: "Manchester ist eine lebendige Industriestadt im Nordwesten Englands, bekannt für ihre Musikszene, Fußball und die Industriegeschichte. Die Stadt war ein Zentrum der industriellen Revolution.",
        area: "116 km²",
        founded: "79 n. Chr.",
        nickname: "Madchester",
        extra: "Heimat von Man United & Man City"
      }
    ]
  },
  NO: {
    name: "Norwegen",
    flag: "🇳🇴",
    code: "NO",
    hasRegions: true,
    region_label: "Fylke",
    plates: [
      {
        code: "O",
        name: "Oslo",
        region: "Oslo",
        population: 693500,
        registered: 290000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Oslo_night.jpg/640px-Oslo_night.jpg",
        description: "Oslo ist die Hauptstadt und bevölkerungsreichste Stadt Norwegens. Die Stadt liegt am Oslofjord und ist bekannt für ihre Museen, die Oper und die lebendige Kulturszene. Oslo gehört regelmäßig zu den lebenswertesten Städten der Welt.",
        area: "454 km²",
        founded: "1000",
        nickname: "Tigerstaden",
        extra: "Nachhaltigste Hauptstadt Skandinaviens"
      },
      {
        code: "HO",
        name: "Bergen",
        region: "Vestland",
        population: 285900,
        registered: 120000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bergen_norway.jpg/640px-Bergen_norway.jpg",
        description: "Bergen ist die zweitgrößte Stadt Norwegens und ein wichtiges Tor zu den Fjorden. Die malerische Hafenstadt mit der bunten Holzhäuserfront Bryggen ist UNESCO-Weltkulturerbe.",
        area: "465 km²",
        founded: "1070",
        nickname: "Tor zu den Fjorden",
        extra: "Kulturhauptstadt Westnowegens"
      }
    ]
  },
  RU: {
    name: "Russland",
    flag: "🇷🇺",
    code: "RU",
    hasRegions: true,
    region_label: "Region/Oblast",
    plates: [
      {
        code: "77",
        name: "Moskau",
        region: "Moskau (Stadt)",
        population: 12506000,
        registered: 5200000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Moscow_July_2011-18.jpg/640px-Moscow_July_2011-18.jpg",
        description: "Moskau ist die Hauptstadt und größte Stadt Russlands sowie Europas größte Stadt. Der Rote Platz, der Kreml und die Basilius-Kathedrale sind weltberühmte Wahrzeichen dieser historischen Metropole.",
        area: "2511 km²",
        founded: "1147",
        nickname: "Dritte Rom",
        extra: "Größte Stadt Europas"
      },
      {
        code: "78",
        name: "Sankt Petersburg",
        region: "Sankt Petersburg (Stadt)",
        population: 5600000,
        registered: 2300000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palace_bridge_in_SPB_01.jpg/640px-Palace_bridge_in_SPB_01.jpg",
        description: "Sankt Petersburg, gegründet von Peter dem Großen, ist die kulturelle Hauptstadt Russlands. Die Eremitage, der Winterpalast und die Newa-Kanäle machen die Stadt zu einem der schönsten Reiseziele Europas.",
        area: "1439 km²",
        founded: "1703",
        nickname: "Venedig des Nordens",
        extra: "UNESCO-Weltkulturerbe Stadtzentrum"
      }
    ]
  },
  PL: {
    name: "Polen",
    flag: "🇵🇱",
    code: "PL",
    hasRegions: true,
    region_label: "Woiwodschaft",
    plates: [
      {
        code: "W",
        name: "Warszawa",
        region: "Masowien",
        population: 1862000,
        registered: 820000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Warsaw_-_Panorama.jpg/640px-Warsaw_-_Panorama.jpg",
        description: "Warszawa ist die Hauptstadt und größte Stadt Polens. Nach der vollständigen Zerstörung im Zweiten Weltkrieg wurde die Altstadt originalgetreu wiederaufgebaut und ist heute UNESCO-Weltkulturerbe.",
        area: "517 km²",
        founded: "1300",
        nickname: "Phoenix-Stadt",
        extra: "Historisch wiedererrichtete Altstadt"
      },
      {
        code: "KR",
        name: "Kraków",
        region: "Kleinpolen",
        population: 780000,
        registered: 340000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Krakow_-_Panorama_from_Wawel.jpg/640px-Krakow_-_Panorama_from_Wawel.jpg",
        description: "Kraków, die alte Königsstadt an der Weichsel, ist eines der bedeutendsten Kulturzentren Polens. Das Wawel-Schloss, die mittelalterliche Altstadt und das jüdische Viertel Kazimierz sind highlights.",
        area: "327 km²",
        founded: "965",
        nickname: "Polens Kulturhauptstadt",
        extra: "Ehemalige Königsresidenz Polens"
      }
    ]
  },
  FR: {
    name: "Frankreich",
    flag: "🇫🇷",
    code: "FR",
    hasRegions: true,
    region_label: "Département",
    plates: [
      {
        code: "33",
        name: "Gironde",
        region: "Nouvelle-Aquitaine",
        population: 1463662,
        registered: 1194218,
        imageReal: "/plates/img/33-fr.jpeg",
        description: "Gironde ist eine Region in Frankreich und bekannt für ihre reiche Geschichte und ihre schöne Landschaft.",
        area: "9975 km²",
        founded: "2009",
        nickname: "Aktuell",
        extra: "incl. Bordeaux"
      },
      {
        code: "13",
        name: "Marseille",
        region: "Bouches-du-Rhône",
        population: 870000,
        registered: 370000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Marseille_vue_du_ciel.jpg/640px-Marseille_vue_du_ciel.jpg",
        description: "Marseille ist die älteste Stadt Frankreichs und zweitgrößte Metropole des Landes. Die lebhafte Hafenstadt am Mittelmeer ist bekannt für Bouillabaisse, Pétanque und die beeindruckende Basilika Notre-Dame de la Garde.",
        area: "240 km²",
        founded: "600 v. Chr.",
        nickname: "La Cité Phocéenne",
        extra: "Älteste Stadt Frankreichs"
      }
    ]
  },
  UA: {
    name: "Ukraine",
    flag: "🇺🇦",
    code: "UA",
    hasRegions: true,
    region_label: "Oblast",
    plates: [
      {
        code: "AA",
        name: "Kyiv",
        region: "Kyiv (Stadt)",
        population: 2952000,
        registered: 1100000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kyiv_Monastery_of_the_Caves.jpg/640px-Kyiv_Monastery_of_the_Caves.jpg",
        description: "Kyiv ist die Hauptstadt und größte Stadt der Ukraine. Als eine der ältesten Städte Osteuropas hat Kyiv eine reiche Geschichte und ist bekannt für das Höhlenkloster Pechersk Lavra und das Goldene Tor.",
        area: "839 km²",
        founded: "482",
        nickname: "Mutter der russischen Städte",
        extra: "Älteste Hauptstadt Osteuropas"
      },
      {
        code: "AX",
        name: "Kharkiv",
        region: "Kharkiv Oblast",
        population: 1420000,
        registered: 580000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kharkiv_Svobody_Square.jpg/640px-Kharkiv_Svobody_Square.jpg",
        description: "Kharkiv ist die zweitgrößte Stadt der Ukraine und ein wichtiges Industrie- und Bildungszentrum. Der Freiheitsplatz ist einer der größten Stadtplätze Europas.",
        area: "350 km²",
        founded: "1654",
        nickname: "Stadt der Studenten",
        extra: "Ehemalige Hauptstadt der Ukraine"
      }
    ]
  },
  RO: {
    name: "Rumänien",
    flag: "🇷🇴",
    code: "RO",
    hasRegions: true,
    region_label: "Județ",
    plates: [
      {
        code: "B",
        name: "Bukarest",
        region: "Municipiul București",
        population: 1921000,
        registered: 840000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bucharest_Skyline.jpg/640px-Bucharest_Skyline.jpg",
        description: "Bukarest ist die Hauptstadt und größte Stadt Rumäniens. Der Volkspalast, das zweitgrößte Verwaltungsgebäude der Welt, ist das imposanteste Wahrzeichen dieser lebendigen Metropole.",
        area: "228 km²",
        founded: "1459",
        nickname: "Kleines Paris",
        extra: "Größte Stadt Südosteuropas"
      },
      {
        code: "CJ",
        name: "Cluj-Napoca",
        region: "Cluj",
        population: 322000,
        registered: 130000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cluj-Napoca_panorama.jpg/640px-Cluj-Napoca_panorama.jpg",
        description: "Cluj-Napoca ist die bedeutendste Stadt Siebenbürgens und gilt als inoffizielle Hauptstadt der Region. Die Stadt ist ein wichtiges Universitätszentrum und Kulturzentrum.",
        area: "179 km²",
        founded: "106 n. Chr.",
        nickname: "Herz Siebenbürgens",
        extra: "Studentenstadt Rumäniens"
      }
    ]
  },
  BG: {
    name: "Bulgarien",
    flag: "🇧🇬",
    code: "BG",
    hasRegions: true,
    region_label: "Oblast",
    plates: [
      {
        code: "C",
        name: "Sofia",
        region: "Sofia-Stadt",
        population: 1307000,
        registered: 550000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alexander_Nevsky_Cathedral_Sofia.jpg/640px-Alexander_Nevsky_Cathedral_Sofia.jpg",
        description: "Sofia ist die Hauptstadt Bulgariens und liegt am Fuße des Vitosha-Gebirges. Die Alexander-Newski-Kathedrale und zahlreiche Thermen aus der Römerzeit prägen das Stadtbild dieser historischen Metropole.",
        area: "492 km²",
        founded: "7000 v. Chr.",
        nickname: "Stadt der Linden",
        extra: "Eine der ältesten Städte Europas"
      },
      {
        code: "PB",
        name: "Plovdiv",
        region: "Plovdiv Oblast",
        population: 346000,
        registered: 130000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Plovdiv_Old_Town_2.jpg/640px-Plovdiv_Old_Town_2.jpg",
        description: "Plovdiv ist die zweitgrößte Stadt Bulgariens und eine der ältesten kontinuierlich bewohnten Städte Europas. Das malerische Altstadtviertel Kapana und das antike Amphitheater sind Highlights.",
        area: "102 km²",
        founded: "6000 v. Chr.",
        nickname: "Stadt der sieben Hügel",
        extra: "Europäische Kulturhauptstadt 2019"
      }
    ]
  },
  GR: {
    name: "Griechenland",
    flag: "🇬🇷",
    code: "GR",
    hasRegions: true,
    region_label: "Peripherie",
    plates: [
      {
        code: "A",
        name: "Athen",
        region: "Attika",
        population: 664000,
        registered: 290000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/AthensAcropolisDawnAdrian.jpg/640px-AthensAcropolisDawnAdrian.jpg",
        description: "Athen ist die Hauptstadt Griechenlands und Wiege der westlichen Zivilisation. Die Akropolis mit dem Parthenon, dem Nationalmuseum und der lebhaften Plaka-Altstadt sind unvergessliche Zeugen der antiken Geschichte.",
        area: "412 km²",
        founded: "3400 v. Chr.",
        nickname: "Wiege der Demokratie",
        extra: "Älteste Hauptstadt der Welt"
      },
      {
        code: "ΘΚ",
        name: "Thessaloniki",
        region: "Zentralmakedonien",
        population: 325000,
        registered: 130000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_Tower_of_Thessaloniki.jpg/427px-White_Tower_of_Thessaloniki.jpg",
        description: "Thessaloniki, die Mitkapitale Griechenlands, ist bekannt für ihre byzantinische Geschichte, lebhafte Studierendenkultur und exzellente Küche. Der Weiße Turm ist das Wahrzeichen der Stadt.",
        area: "111 km²",
        founded: "315 v. Chr.",
        nickname: "Νύμφη der Thermäischen Golf",
        extra: "Kulturelle Hauptstadt Nordgriechenlands"
      }
    ]
  },
  IT: {
    name: "Italien",
    flag: "🇮🇹",
    code: "IT",
    hasRegions: true,
    region_label: "Region",
    plates: [
      {
        code: "VC",
        name: "Vercelli",
        region: "Vercelli",
        population: 165393,
        registered: 70000,
        imageReal: "/plates/img/vc-it.png",
        description: "Vercelli ist eine historische Stadt in Norditalien und bekannt für ihre reiche kulturelle Tradition. Die Stadt bietet eine einzigartige Mischung aus alten Kirchen, Museen und lokalem Handwerk.",
        area: "2000 km²",
        founded: "1994",
        nickname: "Aktuell",
        extra: "Vercelli ist die kleinste Provinzhauptstadt Italiens und bekannt für ihre reiche kulturelle Tradition."
      },
      {
        code: "SI",
        name: "Siena",
        region: "Toskana",
        population: 260701,
        registered: 120000,
        imageReal: "/plates/img/si-it.png",
        description: "Siena ist eine historische Stadt in Mittelitalien und bekannt für ihre reiche kulturelle Tradition. Die Stadt bietet eine einzigartige Mischung aus alten Kirchen, Museen und lokalem Handwerk.",
        area: "3821 km²",
        founded: "1994",
        nickname: "Aktuell",
        extra: "Siena ist eine historische Stadt in Mittelitalien und bekannt für ihre reiche kulturelle Tradition. Die Stadt bietet eine einzigartige Mischung aus alten Kirchen, Museen und lokalem Handwerk."
      }
    ]
  },
  IE: {
    name: "Irland",
    flag: "🇮🇪",
    code: "IE",
    hasRegions: true,
    region_label: "Provinz",
    plates: [
      {
        code: "W",
        name: "Waterford",
        region: "Waterford",
        population: 113795,
        registered: 82309,
        imageReal: "/plates/img/w-ie.jpeg",
        description: "Waterford ist eine Stadt in Irland und bekannt für ihre reiche Geschichte und ihre schöne Landschaft.",
        area: "1857 km²",
        founded: "1987",
        nickname: "Export-Kennzeichen",
        extra: ""
      }
    ]
  },
  XK: {
    name: "Kosovo",
    flag: "🇽🇰",
    code: "XK",
    hasRegions: true,
    region_label: "Gemeinde",
    plates: [
      {
        code: "PR",
        name: "Pristina",
        region: "Pristina",
        population: 217000,
        registered: 80000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pristina_Panorama.jpg/640px-Pristina_Panorama.jpg",
        description: "Pristina ist die Hauptstadt des Kosovo und eine der jüngsten Hauptstädte Europas. Die Stadt wächst schnell und hat eine junge, dynamische Bevölkerung mit einer lebhaften Cafékul­tur.",
        area: "572 km²",
        founded: "14. Jh.",
        nickname: "Jüngste Hauptstadt Europas",
        extra: "Unabhängigkeit seit 2008"
      }
    ]
  },
  HR: {
    name: "Kroatien",
    flag: "🇭🇷",
    code: "HR",
    hasRegions: true,
    region_label: "Gespanschaft",
    plates: [
      {
        code: "ZG",
        name: "Zagreb",
        region: "Stadt Zagreb",
        population: 806000,
        registered: 340000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Zagreb_Cathedral_2013.jpg/427px-Zagreb_Cathedral_2013.jpg",
        description: "Zagreb ist die Hauptstadt Kroatiens und ein lebendiges Kulturzentrum mit mittelalterlicher Oberstadt, eleganter Unterstadt und einer blühenden Café-Kultur. Der Stephan-Dom prägt die Skyline.",
        area: "641 km²",
        founded: "1094",
        nickname: "Little Vienna",
        extra: "Kulturell reichste Stadt Kroatiens"
      },
      {
        code: "ST",
        name: "Split",
        region: "Split-Dalmatien",
        population: 178000,
        registered: 75000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Split_Croatia.jpg/640px-Split_Croatia.jpg",
        description: "Split ist die zweitgrößte Stadt Kroatiens und liegt an der dalmatinischen Küste. Das Stadtleben spielt sich zum Teil noch heute im antiken Diokletianspalast ab – einem einzigartigen UNESCO-Weltkulturerbe.",
        area: "79 km²",
        founded: "295 n. Chr.",
        nickname: "Perle der Adria",
        extra: "Menschen leben im antiken Palast"
      }
    ]
  },
  LU: {
    name: "Luxemburg",
    flag: "🇱🇺",
    code: "LU",
    hasRegions: false,
    region_label: "Kanton",
    plates: [
      {
        code: "LU",
        name: "Luxemburg-Stadt",
        region: "Luxemburg",
        population: 128000,
        registered: 58000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Luxembourg_Adolphe_Bridge.jpg/640px-Luxembourg_Adolphe_Bridge.jpg",
        description: "Luxemburg-Stadt ist die Hauptstadt des Großherzogtums Luxemburg. Die Stadt auf dem Fels mit ihren tiefen Schluchten und der befestigten Altstadt ist UNESCO-Weltkulturerbe.",
        area: "52 km²",
        founded: "963",
        nickname: "Gibraltar des Nordens",
        extra: "EU-Verwaltungssitz"
      }
    ]
  },
  ME: {
    name: "Montenegro",
    flag: "🇲🇪",
    code: "ME",
    hasRegions: true,
    region_label: "Gemeinde",
    plates: [
      {
        code: "PG",
        name: "Podgorica",
        region: "Podgorica",
        population: 177000,
        registered: 70000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Podgorica_panorama.jpg/640px-Podgorica_panorama.jpg",
        description: "Podgorica ist die Hauptstadt Montenegros und liegt am Zusammenfluss der Ribnica und Morača. Die moderne Stadt verbindet osmanisches Erbe mit jugoslawischer Architektur und zeitgenössischem Flair.",
        area: "1441 km²",
        founded: "1326",
        nickname: "Stadt am Fluss",
        extra: "NATO-Mitglied seit 2017"
      }
    ]
  },
  MK: {
    name: "Nordmazedonien",
    flag: "🇲🇰",
    code: "MK",
    hasRegions: true,
    region_label: "Region",
    plates: [
      {
        code: "SK",
        name: "Skopje",
        region: "Skopje-Region",
        population: 544000,
        registered: 210000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Skopje_center.jpg/640px-Skopje_center.jpg",
        description: "Skopje ist die Hauptstadt Nordmazedoniens und bekannt für seine mit zahlreichen Statuen und neoklassischen Gebäuden überhäufte Innenstadt – ein einzigartiges architektonisches Experiment.",
        area: "1818 km²",
        founded: "3500 v. Chr.",
        nickname: "Stadt der Statuen",
        extra: "Geburtsort von Mutter Teresa"
      }
    ]
  },
  AT: {
    name: "Österreich",
    flag: "🇦🇹",
    code: "AT",
    hasRegions: true,
    region_label: "Bundesland",
    plates: [
      {
        code: "UU",
        name: "Urfahr-Umgebung",
        region: "Oberösterreich",
        population: 88030,
        registered: 85918,
        imageReal: "/plates/img/uu-a.jpeg",
        description: "Urfahr-Umgebung ist eine Region in Oberösterreich, die für ihre idyllische Landschaft und ihre reiche Geschichte bekannt ist.",
        area: "659 km²",
        founded: "1990",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "GR",
        name: "Graz",
        region: "Steiermark",
        population: 291000,
        registered: 115000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Graz_Schlossberg.jpg/640px-Graz_Schlossberg.jpg",
        description: "Graz ist die zweitgrößte Stadt Österreichs und Landeshauptstadt der Steiermark. Das historische Stadtzentrum mit dem Uhrturm auf dem Schlossberg ist UNESCO-Weltkulturerbe.",
        area: "127 km²",
        founded: "1128",
        nickname: "Stadt der Designer",
        extra: "UNESCO Creative City of Design"
      }
    ]
  },
  CH: {
    name: "Schweiz",
    flag: "🇨🇭",
    code: "CH",
    hasRegions: true,
    region_label: "Kanton",
    plates: [
      {
        code: "ZH",
        name: "Zürich",
        region: "Zürich",
        population: 434000,
        registered: 195000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Z%C3%BCrich_-_Limmatquai_-_Grossm%C3%BCnster.jpg/640px-Z%C3%BCrich_-_Limmatquai_-_Grossm%C3%BCnster.jpg",
        description: "Zürich ist die größte Stadt der Schweiz und ein globales Finanzzentrum. Am Zürichsee gelegen, bietet die Stadt eine einzigartige Kombination aus mittelalterlichem Charme, moderner Kunst und internationaler Finanzwelt.",
        area: "88 km²",
        founded: "15 v. Chr.",
        nickname: "Finanzmetropole",
        extra: "Regelmäßig lebenswerteste Stadt der Welt"
      },
      {
        code: "BE",
        name: "Bern",
        region: "Bern",
        population: 134000,
        registered: 62000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Berner_Altstadt.jpg/640px-Berner_Altstadt.jpg",
        description: "Bern ist die Bundeshauptstadt der Schweiz und für ihre mittelalterlichen Lauben bekannt, die sich über 6 km erstrecken. Die Altstadt ist UNESCO-Weltkulturerbe und die Heimat des Zytglogge-Uhrenturms.",
        area: "52 km²",
        founded: "1191",
        nickname: "Bundesstadt",
        extra: "UNESCO-Weltkulturerbe Altstadt"
      }
    ]
  },
  RS: {
    name: "Serbien",
    flag: "🇷🇸",
    code: "RS",
    hasRegions: true,
    region_label: "Bezirk",
    plates: [
      {
        code: "BG",
        name: "Beograd",
        region: "Belgrad",
        population: 1694000,
        registered: 700000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Belgrade_panorama.jpg/640px-Belgrade_panorama.jpg",
        description: "Belgrad ist die Hauptstadt Serbiens und eine der ältesten Städte Europas. Die Festung Kalemegdan, das lebhafte Nachtleben und die Bohème-Altstadt Skadarlija machen Belgrad zu einem unvergesslichen Reiseziel.",
        area: "3223 km²",
        founded: "7000 v. Chr.",
        nickname: "Weißer Stadt",
        extra: "Nachtlebenhauptstadt des Balkans"
      }
    ]
  },
  SI: {
    name: "Slowenien",
    flag: "🇸🇮",
    code: "SI",
    hasRegions: true,
    region_label: "Statistikregion",
    plates: [
      {
        code: "LJ",
        name: "Ljubljana",
        region: "Zentralslowenien",
        population: 295000,
        registered: 120000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ljubljana-Grad-Stadtzentrum.jpg/640px-Ljubljana-Grad-Stadtzentrum.jpg",
        description: "Ljubljana ist die Hauptstadt Sloweniens und eine charmante, kompakte Stadt an der Ljubljanica. Die Burg, die Drachenbücke und die autofreie Innenstadt machen sie zu einer der lebenswertesten Hauptstädte Europas.",
        area: "275 km²",
        founded: "50 v. Chr.",
        nickname: "Stadt des Drachen",
        extra: "Grünste Hauptstadt Europas 2016"
      }
    ]
  },
  SK: {
    name: "Slowakei",
    flag: "🇸🇰",
    code: "SK",
    hasRegions: true,
    region_label: "Kraj",
    plates: [
      {
        code: "AA",
        name: "Slowakei",
        region: "landesweit",
        population: 432000,
        registered: 200000,
        imageReal: "/plates/img/aa-sk.jpeg",
        description: "Bratislava ist die Hauptstadt der Slowakei und liegt an der Donau, direkt an der Grenze zu Österreich und Ungarn. Die Burg Bratislava und die gut erhaltene Altstadt dominieren die Skyline.",
        area: "368 km²",
        founded: "907",
        nickname: "Klein-Wien",
        extra: "Einzige Hauptstadt an zwei Grenzen"
      }
    ]
  },
  CZ: {
    name: "Tschechien",
    flag: "🇨🇿",
    code: "CZ",
    hasRegions: true,
    region_label: "Kraj",
    plates: [
      {
        code: "A",
        name: "Praha",
        region: "Prag",
        population: 1267449,
        registered: 600000,
        imageReal: "/plates/img/a-cz.jpeg",
        description: "Prag, die goldene Stadt an der Moldau, ist eine der schönsten Hauptstädte Europas. Das gut erhaltene mittelalterliche Stadtzentrum mit der Karlsbrücke, dem Hradschin und der Altstadt ist UNESCO-Weltkulturerbe.",
        area: "496 km²",
        founded: "2016",
        nickname: "Aktuell",
        extra: "Meistbesuchte Stadt Osteuropas"
      },
      {
        code: "B",
        name: "Brno",
        region: "Südmährische Region",
        population: 1175023,
        registered: 500000,
        imageReal: "/plates/img/b-cz.jpeg",
        description: "Brno ist die zweitgrößte Stadt Tschechiens und Hauptstadt Mährens. Die Stadt ist bekannt für die Festung Špilberk, die Villa Tugendhat (UNESCO) und als Standort wichtiger Technologieunternehmen.",
        area: "7195 km²",
        founded: "2016",
        nickname: "Aktuell",
        extra: "Technologie- & Messezentrum"
      },
        {
        code: "C",
        name: "České Budějovice",
        region: "Südböhmische Region",
        population: 637834,
        registered: 300000,
        imageReal: "/plates/img/c-cz.jpeg",
        description: "České Budějovice ist eine Stadt in Tschechien und bekannt für ihre reiche Geschichte, ihre Kultur und ihre Gastronomie.",
        area: "10057 km²",
        founded: "2016",
        nickname: "Aktuell",
        extra: "Heimat des Budweiser Biers"
      },
        {
        code: "E",
        name: "Pardubice",
        region: "Pardubice Region",
        population: 516149,
        registered: 200000,
        imageReal: "/plates/img/e-cz.jpeg",
        description: "Pardubice ist eine Stadt in Tschechien und bekannt für ihre reiche Geschichte, ihre Kultur und ihre Gastronomie.",
        area: "4519 km²",
        founded: "2016",
        nickname: "Aktuell",
        extra: "Heimat der berühmten Pardubice-Pferderennen"
      },
    ]
  },
  TR: {
    name: "Türkei",
    flag: "🇹🇷",
    code: "TR",
    hasRegions: true,
    region_label: "Provinz",
    plates: [
      {
        code: "27",
        name: "Gaziantep",
        region: "Gaziantep",
        population: 2164134,
        registered: 900000,
        imageReal: "/plates/img/27-tr.jpeg",
        description: "Gaziantep ist eine Stadt in der Türkei und eine der größten Städte des Landes. Sie ist bekannt für ihre reiche Geschichte, ihre kulturelle Vielfalt und ihre lebendige Gastronomie.",
        area: "6000 km²",
        founded: "1996",
        nickname: "Aktuell",
        extra: ""
      },
      {
        code: "34",
        name: "İstanbul",
        region: "İstanbul",
        population: 15840000,
        registered: 6500000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Sultan_Ahmed_Mosque_View.jpg/640px-Sultan_Ahmed_Mosque_View.jpg",
        description: "Istanbul ist die größte Stadt der Türkei und die einzige Weltstadt, die auf zwei Kontinenten liegt. Die Hagia Sophia, die Blaue Moschee und der Topkapi-Palast sind unvergessliche Zeugen der byzantinischen und osmanischen Geschichte.",
        area: "5461 km²",
        founded: "660 v. Chr.",
        nickname: "Brücke zwischen den Welten",
        extra: "Einzige Stadt auf zwei Kontinenten"
      }
    ]
  },
  BY: {
    name: "Belarus",
    flag: "🇧🇾",
    code: "BY",
    hasRegions: true,
    region_label: "Oblast",
    plates: [
      {
        code: "1",
        name: "Minsk",
        region: "Minsk (Stadt)",
        population: 2009000,
        registered: 850000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Minsk_National_Library.jpg/640px-Minsk_National_Library.jpg",
        description: "Minsk ist die Hauptstadt von Belarus und eine weitgehend nach dem Zweiten Weltkrieg wiederaufgebaute Stadt. Die sowjetische Prachtarchitektur und die einzigartige Nationalbibliothek prägen das Stadtbild.",
        area: "409 km²",
        founded: "1067",
        nickname: "Diamantstadt",
        extra: "Nach dem Krieg komplett neugebaut"
      }
    ]
  },
  US: {
    name: "USA",
    flag: "🇺🇸",
    code: "US",
    hasRegions: true,
    region_label: "Bundesstaat",
    plates: [
      {
        code: "CA",
        name: "California",
        region: "Kalifornien",
        population: 39538000,
        registered: 15000000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/California_-_Golden_Gate_Bridge_-_2013.jpg/640px-California_-_Golden_Gate_Bridge_-_2013.jpg",
        description: "Kalifornien ist der bevölkerungsreichste US-Bundesstaat und die fünftgrößte Volkswirtschaft der Welt. Silicon Valley, Hollywood und die Golden Gate Bridge machen Kalifornien zur ikonischsten Region der USA.",
        area: "423967 km²",
        founded: "1850",
        nickname: "Golden State",
        extra: "Größte Volkswirtschaft aller US-Staaten"
      },
      {
        code: "NY",
        name: "New York",
        region: "New York",
        population: 20201000,
        registered: 8200000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg/640px-Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg",
        description: "New York ist der bevölkerungsreichste Bundesstaat im Nordosten der USA. New York City, die Freiheitsstatue und die Niagarafälle sind weltberühmte Wahrzeichen dieses vielfältigen Staates.",
        area: "141297 km²",
        founded: "1788",
        nickname: "Empire State",
        extra: "Heimat der UN-Zentrale"
      },
      {
        code: "TX",
        name: "Texas",
        region: "Texas",
        population: 29145000,
        registered: 11500000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AlamoSanAntonio.jpg/640px-AlamoSanAntonio.jpg",
        description: "Texas ist der zweitgrößte und zweitbevölkerungsreichste US-Bundesstaat. Bekannt für Rodeo, Ölindustrie, texanisches BBQ und den Alamo in San Antonio – das Motto lautet: 'Everything is bigger in Texas.'",
        area: "695662 km²",
        founded: "1845",
        nickname: "Lone Star State",
        extra: "Zweitgrößter US-Bundesstaat"
      }
    ]
  },
  KZ: {
    name: "Kasachstan",
    flag: "🇰🇿",
    code: "KZ",
    hasRegions: true,
    region_label: "Oblast",
    plates: [
      {
        code: "01",
        name: "Astana",
        region: "Astana",
        population: 1200000,
        registered: 480000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Astana_Cityscape.jpg/640px-Astana_Cityscape.jpg",
        description: "Astana ist die Hauptstadt Kasachstans und eine der jüngsten Hauptstädte der Welt. Die futuristische Architektur des Baiterek-Turms und des Khan Shatyr macht die Stadt zu einem architektonischen Wunderwerk der Steppe.",
        area: "722 km²",
        founded: "1998",
        nickname: "Hauptstadt der Steppe",
        extra: "Eine der jüngsten Hauptstädte weltweit"
      },
      {
        code: "05",
        name: "Almaty",
        region: "Almaty",
        population: 2000000,
        registered: 800000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Almaty-Kazakhstan.jpg/640px-Almaty-Kazakhstan.jpg",
        description: "Almaty ist die größte Stadt Kasachstans und ehemalige Hauptstadt. Am Fuße des Tian-Shan-Gebirges gelegen, ist die Stadt ein wichtiges Wirtschafts- und Kulturzentrum Zentralasiens.",
        area: "683 km²",
        founded: "1854",
        nickname: "Apfelstadt",
        extra: "Ehemalige Hauptstadt Kasachstans"
      }
    ]
  },
  DK: {
    name: "Dänemark",
    flag: "🇩🇰",
    code: "DK",
    hasRegions: false,
    region_label: "Region",
    plates: [
      {
        code: "DK",
        name: "Dänemark",
        region: "Dänemark",
        population: 5910000,
        registered: 2900000,
        imageReal: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Copenhagen_-_a_colourful_town.jpg/640px-Copenhagen_-_a_colourful_town.jpg",
        description: "Dänemark ist ein skandinavisches Königreich mit einer reichen Wikingergeschichte. Kopenhagen, Nyhavn und die Kleine Meerjungfrau sind weltberühmt. Dänemark gehört regelmäßig zu den glücklichsten Ländern der Welt.",
        area: "42925 km²",
        founded: "980",
        nickname: "Land der Wikinger",
        extra: "Glücklichstes Land der Welt (mehrfach)"
      }
    ]
  },
   DK: {
    name: "Belgien",
    flag: "🇧🇪",
    code: "BE",
    hasRegions: false,
    region_label: "Region",
    plates: [
      {
        code: "BE",
        name: "Belgien",
        region: "Belgien",
        population: 11500000,
        registered: 5750000,
        imageReal: "/plates/img/b-be.jpeg",
        description: "Belgien ist ein kleines, aber kulturell reiches Land in Westeuropa. Brüssel, die Hauptstadt der EU, ist bekannt für das Atomium, die Grand-Place und die köstliche belgische Schokolade. Belgien ist auch berühmt für seine Biere und Comics.",
        area: "30528 km²",
        founded: "843",
        nickname: "Aktuell",
        extra: ""
      }
    ]
  }
};

// Build a flat, searchable index
const PLATE_INDEX = [];
for (const countryCode in COUNTRIES) {
  const country = COUNTRIES[countryCode];
  for (const plate of country.plates) {
    PLATE_INDEX.push({
      ...plate,
      countryCode,
      countryName: country.name,
      countryFlag: country.flag,
      region_label: country.region_label,
      hasRegions: country.hasRegions
    });
  }
}

function searchPlates(query) {
  if (!query || query.trim() === "") return [];
  const q = query.trim().toUpperCase();
  return PLATE_INDEX.filter(p => p.code.toUpperCase().includes(q));
}

function getCountryPlates(countryCode) {
  return PLATE_INDEX.filter(p => p.countryCode === countryCode);
}
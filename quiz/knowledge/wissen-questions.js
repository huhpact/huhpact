/* ══════════════════════════════════════════════════════════
   wissen-questions-extended.js
   400+ neue Allgemeinwissen-Fragen für das Wissens-Quiz.
   Kategorien: Geographie, Geschichte, Wissenschaft, Kultur,
   Sport, Natur, Wirtschaft, Sprache, Biologie, Musik,
   Popkultur, Autos, Technik, Film, Mathematik, Essen & Trinken,
   Tiere, Astronomie, Politik, Philosophie, Literatur u.v.m.

   FRAGETYPEN: choice | input | order | image | truefalse
══════════════════════════════════════════════════════════ */

const QUESTIONS = [

  /* ════════════════════════════════════════════════════════
     GEOGRAPHIE
  ════════════════════════════════════════════════════════ */
  {
    id: 101,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Welches Land hat die längste Küstenlinie der Welt?',
    options: ['Russland', 'Norwegen', 'Kanada', 'Australien'],
    correct: 'Kanada',
    funFact: 'Kanadas Küstenlinie ist mit über 202.000 km die längste der Welt – mehr als doppelt so lang wie die Russlands.'
  },
  {
    id: 102,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Welcher Kontinent hat die meisten Länder?',
    options: ['Asien', 'Amerika', 'Afrika', 'Europa'],
    correct: 'Afrika',
    funFact: 'Afrika besteht aus 54 anerkannten Ländern – mehr als jeder andere Kontinent.'
  },
  {
    id: 103,
    type: 'truefalse',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Der geografische Mittelpunkt Europas liegt in der Ukraine.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Der offizielle geografische Mittelpunkt Europas wird von der Ukraine, Weißrussland, Polen und Litauen beansprucht – je nach Berechnungsmethode variiert die genaue Lage.'
  },
  {
    id: 104,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Welche Hauptstadt liegt am höchsten über dem Meeresspiegel?',
    options: ['Quito', 'Kathmandu', 'La Paz', 'Bogotá'],
    correct: 'La Paz',
    hint: 'Sie liegt in Südamerika.',
    funFact: 'La Paz (Bolivien) liegt auf etwa 3.640 m Höhe und ist damit der höchstgelegene Regierungssitz der Welt. Die offizielle Hauptstadt Boliviens ist allerdings Sucre.'
  },
  {
    id: 105,
    type: 'input',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Wie heißt das kleinste Land der Welt?',
    correct: 'Vatikan',
    acceptedAnswers: ['Vatikan', 'Vatikanstadt', 'Vatican', 'Vatican City'],
    funFact: 'Der Vatikan hat eine Fläche von nur 0,44 km² und etwa 800 Einwohner – trotzdem ist er ein souveräner Staat mit eigener Währung, Post und Radio.'
  },
  {
    id: 106,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Welches Meer liegt zwischen Europa und Afrika?',
    options: ['Rotes Meer', 'Schwarzes Meer', 'Mittelmeer', 'Kaspisches Meer'],
    correct: 'Mittelmeer',
    funFact: 'Das Mittelmeer ist fast vollständig von Land umschlossen und hat nur eine natürliche Verbindung zum Atlantik – die Straße von Gibraltar.'
  },
  {
    id: 107,
    type: 'truefalse',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Australien ist sowohl ein Land als auch ein Kontinent.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Australien ist das einzige Land, das einen gesamten Kontinent für sich alleine einnimmt. Der Kontinent wird manchmal auch "Sahul" oder "Australien-Ozeanien" genannt.'
  },
  {
    id: 108,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Welche Stadt liegt sowohl in Europa als auch in Asien?',
    options: ['Athen', 'Istanbul', 'Baku', 'Tiflis'],
    correct: 'Istanbul',
    funFact: 'Istanbul ist durch die Bosporus-Meerenge geteilt – der europäische und asiatische Teil sind durch mehrere Brücken verbunden.'
  },
  {
    id: 109,
    type: 'order',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Sortiere diese Flüsse nach ihrer Länge – vom kürzesten zum längsten.',
    items: ['Rhein', 'Amazonas', 'Donau', 'Nil'],
    correct: ['Rhein', 'Donau', 'Amazonas', 'Nil'],
    funFact: 'Der Rhein ist mit ca. 1.230 km der kürzeste dieser Flüsse – der Nil mit 6.650 km der längste.'
  },
  {
    id: 110,
    type: 'choice',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'In welchem Land liegt der Kilimandscharo?',
    options: ['Kenia', 'Äthiopien', 'Tansania', 'Uganda'],
    correct: 'Tansania',
    funFact: 'Der Kilimandscharo ist mit 5.895 m der höchste Berg Afrikas und liegt nahe der kenianischen Grenze in Tansania.'
  },

  /* ════════════════════════════════════════════════════════
     GESCHICHTE
  ════════════════════════════════════════════════════════ */
  {
    id: 201,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wer war der erste US-Präsident?',
    options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
    correct: 'George Washington',
    funFact: 'George Washington war so beliebt, dass er theoretisch lebenslang hätte Präsident bleiben können – er lehnte jedoch eine dritte Amtszeit ab und setzte damit den Präzedenzfall für die Zwei-Amtszeiten-Tradition.'
  },
  {
    id: 202,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Welches Jahr gilt als das Ende des Weströmischen Reiches?',
    options: ['410', '455', '476', '527'],
    correct: '476',
    hint: 'Der letzte Kaiser hieß Romulus Augustulus.',
    funFact: '476 n. Chr. wurde der letzte weströmische Kaiser Romulus Augustulus vom germanischen Heerführer Odoaker abgesetzt – ein klassisches Datum für das Ende der Antike.'
  },
  {
    id: 203,
    type: 'truefalse',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Napoleon Bonaparte war Franzose von Geburt.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Napoleon wurde 1769 auf Korsika geboren – die Insel war erst ein Jahr zuvor von der Republik Genua an Frankreich verkauft worden. Er war also gebürtiger Korse.'
  },
  {
    id: 204,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'leicht',
    question: 'In welchem Jahr begann der Erste Weltkrieg?',
    options: ['1912', '1914', '1916', '1918'],
    correct: '1914',
    funFact: 'Der Erste Weltkrieg begann am 28. Juli 1914 nach dem Attentat auf Erzherzog Franz Ferdinand in Sarajevo.'
  },
  {
    id: 205,
    type: 'input',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Wie hieß die erste Atombombe, die im Zweiten Weltkrieg eingesetzt wurde?',
    correct: 'Little Boy',
    acceptedAnswers: ['Little Boy', 'little boy'],
    hint: 'Sie wurde auf Hiroshima abgeworfen.',
    funFact: '"Little Boy" war eine Uran-Bombe, die am 6. August 1945 auf Hiroshima abgeworfen wurde. Die zweite Bombe "Fat Man" traf Nagasaki drei Tage später.'
  },
  {
    id: 206,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wer war die erste Frau, die den Nobelpreis gewann?',
    options: ['Rosalind Franklin', 'Marie Curie', 'Dorothy Hodgkin', 'Lise Meitner'],
    correct: 'Marie Curie',
    funFact: 'Marie Curie gewann 1903 den Nobelpreis für Physik und 1911 den für Chemie – als einzige Person, die Nobelpreise in zwei verschiedenen Naturwissenschaften erhielt.'
  },
  {
    id: 207,
    type: 'truefalse',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Die Chinesische Mauer ist vom Weltall aus mit bloßem Auge sichtbar.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Dieses Gerücht ist weit verbreitet, aber falsch. Die Mauer ist zwar lang, aber nur etwa 5-8 Meter breit – viel zu schmal, um aus dem Orbit erkennbar zu sein. Sogar chinesische Astronauten bestätigten, sie nicht sehen zu können.'
  },
  {
    id: 208,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Welches Schiff versenkte die Bismarck im Mai 1941 zuerst?',
    options: ['HMS Ark Royal', 'HMS Hood', 'HMS Prince of Wales', 'HMS Rodney'],
    correct: 'HMS Hood',
    funFact: 'Die HMS Hood galt als stolzestes Schiff der Royal Navy. Die Bismarck versenkte sie in der Dänemarkstraßenschlacht in nur acht Minuten – nur 3 von 1.418 Besatzungsmitgliedern überlebten.'
  },
  {
    id: 209,
    type: 'order',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Bringe diese deutschen Bundeskanzler in chronologische Reihenfolge (ältestes Amt zuerst).',
    items: ['Helmut Kohl', 'Konrad Adenauer', 'Gerhard Schröder', 'Willy Brandt'],
    correct: ['Konrad Adenauer', 'Willy Brandt', 'Helmut Kohl', 'Gerhard Schröder'],
    funFact: 'Konrad Adenauer war der erste Bundeskanzler der BRD (1949–1963) – mit 87 Jahren schied er als ältester regierender Regierungschef der westlichen Welt aus dem Amt.'
  },
  {
    id: 210,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Welches Land war das erste, das Frauen das Wahlrecht gewährte?',
    options: ['Schweden', 'Neuseeland', 'Finnland', 'Deutschland'],
    correct: 'Neuseeland',
    funFact: 'Neuseeland gewährte Frauen 1893 das Wahlrecht – als erstes selbstverwaltetes Land der Welt. In Deutschland folgte dies 1918.'
  },

  /* ════════════════════════════════════════════════════════
     WISSENSCHAFT & TECHNIK
  ════════════════════════════════════════════════════════ */
  {
    id: 301,
    type: 'choice',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Was ist die schnellste bekannte Bewegungsgeschwindigkeit im Universum?',
    options: ['Schallgeschwindigkeit', 'Lichtgeschwindigkeit', 'Elektronenfluss', 'Neutrinos'],
    correct: 'Lichtgeschwindigkeit',
    funFact: 'Licht bewegt sich mit ca. 299.792 km/s im Vakuum. Nach Einsteins Relativitätstheorie kann kein Objekt mit Masse diese Grenze erreichen oder überschreiten.'
  },
  {
    id: 302,
    type: 'truefalse',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Diamant ist die härteste natürliche Substanz der Welt.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Diamant erreicht auf der Mohs-Härteskala den Maximalwert 10. Nur synthetische Materialien wie Wurtzit-Bornitrid oder Lonsdaleite können unter bestimmten Bedingungen härter sein.'
  },
  {
    id: 303,
    type: 'choice',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Welches Organ produziert Insulin?',
    options: ['Leber', 'Milz', 'Bauchspeicheldrüse', 'Niere'],
    correct: 'Bauchspeicheldrüse',
    funFact: 'Insulin wird von den sogenannten Beta-Zellen in den Langerhans-Inseln der Bauchspeicheldrüse produziert. Bei Typ-1-Diabetes werden diese Zellen durch das eigene Immunsystem zerstört.'
  },
  {
    id: 304,
    type: 'input',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Welches ist das leichteste chemische Element?',
    correct: 'Wasserstoff',
    acceptedAnswers: ['Wasserstoff', 'H', 'Hydrogen'],
    funFact: 'Wasserstoff ist das häufigste Element im Universum und macht etwa 75 % aller Materie aus. Es ist auch das einfachste Atom – ein Proton und ein Elektron.'
  },
  {
    id: 305,
    type: 'choice',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Was bedeutet das Kürzel „HTTP" in einer Webadresse?',
    options: ['High Transfer Text Protocol', 'HyperText Transfer Protocol', 'Hyperlink Tool Transfer Process', 'Hybrid Text Transmission Protocol'],
    correct: 'HyperText Transfer Protocol',
    funFact: 'HTTP wurde 1989 von Tim Berners-Lee entwickelt, der damit das World Wide Web erfand. HTTPS ist die verschlüsselte Version mit SSL/TLS-Zertifikaten.'
  },
  {
    id: 306,
    type: 'truefalse',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Blut ist in Adern blau und wird erst durch Sauerstoff rot.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Blut ist niemals blau! Es ist immer rot – sauerstoffreiches Blut ist hellrot, sauerstoffarmes dunkelrot. Der Grund, warum Venen durch die Haut blau erscheinen, liegt an der unterschiedlichen Lichtabsorption des Gewebes.'
  },
  {
    id: 307,
    type: 'choice',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Wie viele Dimensionen beschreibt die allgemeine Relativitätstheorie?',
    options: ['3', '4', '10', '11'],
    correct: '4',
    funFact: 'Die allgemeine Relativitätstheorie beschreibt die Raumzeit als vierdimensionales Gebilde: drei Raumdimensionen plus Zeit. Einige Stringtheorien postulieren bis zu 11 Dimensionen.'
  },
  {
    id: 308,
    type: 'input',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'In welchem Jahr wurde das World Wide Web erfunden?',
    correct: '1989',
    acceptedAnswers: ['1989'],
    hint: 'Tim Berners-Lee arbeitete damals am CERN.',
    funFact: 'Tim Berners-Lee erfand das WWW 1989 am CERN in Genf, um Wissenschaftlern das Teilen von Informationen zu erleichtern. Die erste Website ging 1991 online.'
  },
  {
    id: 309,
    type: 'choice',
    category: 'Wissenschaft',
    difficulty: 'leicht',
    question: 'Aus wie vielen Kammern besteht das menschliche Herz?',
    options: ['2', '3', '4', '6'],
    correct: '4',
    funFact: 'Das Herz hat zwei Vorhöfe und zwei Herzkammern. Bei Fischen hat das Herz nur zwei Kammern; Reptilien haben drei.'
  },
  {
    id: 310,
    type: 'truefalse',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Ein Teelöffel Neutronenstern-Material würde mehr als eine Milliarde Tonnen wiegen.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Neutronensterne sind so dicht, dass ein Teelöffel Material etwa 10 Milliarden Tonnen wiegen würde. Sie entstehen, wenn massive Sterne als Supernovae explodieren.'
  },

  /* ════════════════════════════════════════════════════════
     BIOLOGIE
  ════════════════════════════════════════════════════════ */
  {
    id: 401,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Welches Tier hat die meisten Herzkammern?',
    options: ['Oktopus', 'Tintenfisch', 'Kiemenlose Wirbeltiere', 'Fische'],
    correct: 'Oktopus',
    funFact: 'Ein Oktopus hat drei Herzen: zwei Kiemenherzen pumpen Blut zu den Kiemen, ein Hauptherz verteilt es im Körper. Das Blut ist wegen des Kupfer-basierten Hämocyanins blau.'
  },
  {
    id: 402,
    type: 'truefalse',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Pflanzen atmen tagsüber nur Kohlendioxid ein.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Pflanzen betreiben tagsüber Photosynthese (nehmen CO₂ auf, geben O₂ ab) UND gleichzeitig Zellatmung (nehmen O₂ auf, geben CO₂ ab). Die Photosynthese überwiegt tagsüber deutlich.'
  },
  {
    id: 403,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'leicht',
    question: 'Wie viele Beine hat eine Spinne?',
    options: ['6', '8', '10', '12'],
    correct: '8',
    funFact: 'Spinnen sind Spinnentiere (Arachnida), keine Insekten. Insekten haben 6 Beine. Zu den Spinnentieren zählen auch Skorpione, Milben und Zecken – alle haben 8 Beine.'
  },
  {
    id: 404,
    type: 'input',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Wie nennt man das längste Tier der Erde (nach Länge)?',
    correct: 'Fadenwurm',
    acceptedAnswers: ['Fadenwurm', 'Bootenschnur-Qualle', 'Blauwal', 'Siphonophore', 'Staatsqualle'],
    hint: 'Es ist kein Säugetier.',
    funFact: 'Eine Siphonophore (Staatsqualle) der Art Praya dubia kann über 40–50 Meter lang werden – länger als ein Blauwal. Sie ist kein einzelnes Tier, sondern eine Kolonie von Individuen.'
  },
  {
    id: 405,
    type: 'truefalse',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Menschen und Schimpansen teilen etwa 98–99 % ihrer DNA.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die genetische Ähnlichkeit zwischen Menschen und Schimpansen ist größer als zwischen Schimpansen und Gorillas. Diese wenigen Prozent Unterschied erklären dennoch enorme Unterschiede in Kognition und Sprache.'
  },
  {
    id: 406,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Welches Organ wird bei Menschen im Laufe des Lebens NICHT regeneriert?',
    options: ['Leberzellen', 'Herzmuskeln', 'Knochenzellen', 'Hautzellen'],
    correct: 'Herzmuskeln',
    funFact: 'Herzmuskelzellen (Kardiomyozyten) werden kaum erneuert – weniger als 1 % pro Jahr. Das macht Herzschäden nach einem Herzinfarkt so dauerhaft, während sich die Leber fast vollständig regenerieren kann.'
  },
  {
    id: 407,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Was ist das größte Einzellebewesen der Erde?',
    options: ['Blauwal', 'Sequoia-Baum', 'Armillaria-Pilz', 'Elefant'],
    correct: 'Armillaria-Pilz',
    funFact: 'Ein Armillaria-Pilz (Hallimasch) im Malheur National Forest in Oregon erstreckt sich über ca. 9,6 km² und ist schätzungsweise 8.000 Jahre alt – er gilt als größtes Einzellebewesen der Welt.'
  },
  {
    id: 408,
    type: 'truefalse',
    category: 'Biologie',
    difficulty: 'leicht',
    question: 'Alle Säugetiere haben Haare oder Fell.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Haare sind eines der definierenden Merkmale von Säugetieren. Selbst Wale und Delfine haben als Embryonen Haarfollikel, die sich aber vor der Geburt fast vollständig zurückbilden.'
  },

  /* ════════════════════════════════════════════════════════
     ASTRONOMIE
  ════════════════════════════════════════════════════════ */
  {
    id: 501,
    type: 'choice',
    category: 'Astronomie',
    difficulty: 'leicht',
    question: 'Welcher Planet ist der größte in unserem Sonnensystem?',
    options: ['Saturn', 'Uranus', 'Jupiter', 'Neptun'],
    correct: 'Jupiter',
    funFact: 'Jupiter ist so groß, dass alle anderen Planeten des Sonnensystems zusammen noch in ihn hineinpassen würden. Sein großer roter Fleck ist ein Sturm, der seit über 350 Jahren andauert.'
  },
  {
    id: 502,
    type: 'truefalse',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Die Sonne macht mehr als 99 % der Gesamtmasse unseres Sonnensystems aus.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die Sonne enthält etwa 99,86 % der Gesamtmasse des Sonnensystems. Jupiter macht den Großteil des Restes aus – alle anderen Planeten sind vergleichsweise winzig.'
  },
  {
    id: 503,
    type: 'choice',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Wie lange dauert ein Lichtjahr?',
    options: ['1 Jahr', 'Lichtjahre sind keine Zeiteinheit', '100 Jahre', '1.000 Jahre'],
    correct: 'Lichtjahre sind keine Zeiteinheit',
    funFact: 'Ein Lichtjahr ist eine Entfernungseinheit, keine Zeiteinheit! Es bezeichnet die Strecke, die Licht in einem Jahr zurücklegt – ca. 9,46 Billionen Kilometer.'
  },
  {
    id: 504,
    type: 'input',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Wie viele Monde hat der Mars?',
    correct: '2',
    acceptedAnswers: ['2', 'zwei'],
    hint: 'Sie heißen Phobos und Deimos.',
    funFact: 'Die Monde des Mars sind klein und unregelmäßig geformt – sie sind wahrscheinlich eingefangene Asteroiden. Phobos umkreist den Mars so nah, dass er in ca. 50 Millionen Jahren zerstört werden wird.'
  },
  {
    id: 505,
    type: 'choice',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Was ist eine "Supernova"?',
    options: ['Ein neu entstandener Stern', 'Ein explodierender Stern am Ende seines Lebens', 'Ein Schwarzes Loch', 'Eine Galaxienkollision'],
    correct: 'Ein explodierender Stern am Ende seines Lebens',
    funFact: 'Supernovae sind die hellsten Explosionen im Universum. In wenigen Sekunden setzen sie mehr Energie frei als unsere Sonne in ihrer gesamten 10-Milliarden-Jahre-Lebenszeit – kurzzeitig heller als ganze Galaxien.'
  },

  /* ════════════════════════════════════════════════════════
     WIRTSCHAFT & FINANZEN
  ════════════════════════════════════════════════════════ */
  {
    id: 601,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Was bedeutet das Kürzel "BIP"?',
    options: ['Bruttoinlandsprodukt', 'Bundes-Investitions-Plan', 'Bruttoindividualproduktion', 'Basisinlandsprodukt'],
    correct: 'Bruttoinlandsprodukt',
    funFact: 'Das BIP misst den Gesamtwert aller in einem Land produzierten Waren und Dienstleistungen innerhalb eines Jahres. Es ist die wichtigste Kennzahl für die Wirtschaftsleistung eines Landes.'
  },
  {
    id: 602,
    type: 'truefalse',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Der Dow Jones Industrial Average besteht aus 30 Unternehmen.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Der Dow Jones umfasst genau 30 große US-Unternehmen und ist damit einer der ältesten und meistzitierten Aktienindizes der Welt – obwohl er mit nur 30 Werten weniger repräsentativ ist als der S&P 500 mit 500 Werten.'
  },
  {
    id: 603,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'leicht',
    question: 'Welches Land hat die größte Volkswirtschaft der Welt (nach nominalem BIP)?',
    options: ['China', 'Deutschland', 'USA', 'Japan'],
    correct: 'USA',
    funFact: 'Die USA haben mit einem BIP von über 25 Billionen US-Dollar die größte Volkswirtschaft der Welt – gefolgt von China. Nach Kaufkraftparität liegt China allerdings vorne.'
  },
  {
    id: 604,
    type: 'input',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Wie nennt man die Theorie, dass Märkte alle verfügbaren Informationen bereits in Preisen widerspiegeln?',
    correct: 'Effizienzmarkthypothese',
    acceptedAnswers: ['Effizienzmarkthypothese', 'Efficient Market Hypothesis', 'EMH'],
    funFact: 'Die Effizienzmarkthypothese wurde von Eugene Fama entwickelt, der dafür 2013 den Wirtschaftsnobelpreis erhielt – ironischerweise gemeinsam mit Robert Shiller, der die Theorie kritisiert.'
  },
  {
    id: 605,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Was beschreibt die "Inflation"?',
    options: ['Anstieg des Aktienmarkts', 'Allgemeiner Anstieg des Preisniveaus', 'Staatsverschuldung', 'Wirtschaftswachstum'],
    correct: 'Allgemeiner Anstieg des Preisniveaus',
    funFact: 'Leichte Inflation (ca. 2 %) gilt als gesund für eine Wirtschaft. Hyperinflation, wie in der Weimarer Republik 1923 oder Zimbabwe 2008, kann eine gesamte Volkswirtschaft zerstören.'
  },
  {
    id: 606,
    type: 'truefalse',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Apple war das erste Unternehmen, das eine Marktkapitalisierung von 1 Billion US-Dollar erreichte.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Apple erreichte im August 2018 als erstes US-Unternehmen eine Marktkapitalisierung von 1 Billion Dollar. Inzwischen hat Apple die Marke von 3 Billionen Dollar überschritten.'
  },
  {
    id: 607,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Was ist ein "Schwarzer Schwan" in der Wirtschaft?',
    options: ['Eine seltene Aktie', 'Ein unvorhersehbares Extremereignis mit großen Auswirkungen', 'Ein Börsenbegriff für Gewinnmitnahmen', 'Eine Zentralbankpolitik'],
    correct: 'Ein unvorhersehbares Extremereignis mit großen Auswirkungen',
    funFact: 'Der Begriff "Schwarzer Schwan" wurde vom Statistiker Nassim Nicholas Taleb geprägt. Beispiele sind die Finanzkrise 2008, die COVID-Pandemie oder der 11. September.'
  },

  /* ════════════════════════════════════════════════════════
     SPRACHE & LINGUISTIK
  ════════════════════════════════════════════════════════ */
  {
    id: 701,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'leicht',
    question: 'Welches ist die meistgesprochene Sprache der Welt nach Muttersprachlern?',
    options: ['Englisch', 'Spanisch', 'Mandarin-Chinesisch', 'Hindi'],
    correct: 'Mandarin-Chinesisch',
    funFact: 'Mandarin-Chinesisch hat über 900 Millionen Muttersprachler. Englisch ist jedoch die meistgesprochene Sprache insgesamt, wenn man Zweit- und Fremdsprachler einrechnet.'
  },
  {
    id: 702,
    type: 'truefalse',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Das Wort "Quiz" stammt aus dem Irischen.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Die genaue Herkunft von "Quiz" ist ungeklärt. Eine verbreitete (aber ungesicherte) Geschichte besagt, es wurde 1791 in Dublin als Nonsens-Wort erfunden. Etymologen sind sich jedoch nicht einig.'
  },
  {
    id: 703,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Welche Sprache hat die meisten Wörter?',
    options: ['Englisch', 'Deutsch', 'Arabisch', 'Russisch'],
    correct: 'Englisch',
    funFact: 'Englisch hat mit schätzungsweise 170.000 aktiven Wörtern und über einer Million registrierten Wörtern mehr als jede andere Sprache – hauptsächlich durch seine Geschichte als Handelssprache und kontinuierliche Übernahme fremder Wörter.'
  },
  {
    id: 704,
    type: 'input',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Wie nennt man einen Satz, der alle 26 Buchstaben des Alphabets enthält?',
    correct: 'Pangram',
    acceptedAnswers: ['Pangram', 'pangram'],
    hint: '"The quick brown fox jumps over the lazy dog" ist ein Beispiel.',
    funFact: 'Das bekannteste deutsche Pangram lautet: "Falsches Üben von Xylophonmusik quält jeden größeren Zwerg." Pangrame werden oft verwendet, um Schriftarten zu testen.'
  },
  {
    id: 705,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Was ist ein "Oxymoron"?',
    options: ['Ein technischer Fachbegriff', 'Eine Kombination aus scheinbar widersprüchlichen Begriffen', 'Ein Stilmittel der Wiederholung', 'Ein überalteter Ausdruck'],
    correct: 'Eine Kombination aus scheinbar widersprüchlichen Begriffen',
    funFact: 'Oxymorone wie "bittersweet", "thunderous silence" oder "open secret" sind in der Sprache allgegenwärtig. Das Wort selbst ist ein Oxymoron: griechisch "oxys" (scharf) + "moros" (dumm).'
  },
  {
    id: 706,
    type: 'truefalse',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Japanisch hat drei verschiedene Schriftsysteme, die gleichzeitig verwendet werden.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Japanisch verwendet Hiragana (phonetisch, für japanische Wörter), Katakana (phonetisch, für Fremdwörter) und Kanji (chinesisch-stämmige Bedeutungszeichen) – oft im selben Satz.'
  },
  {
    id: 707,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Was ist die offizielle Amtssprache Brasiliens?',
    options: ['Spanisch', 'Portugiesisch', 'Brasilianisch', 'Englisch'],
    correct: 'Portugiesisch',
    funFact: 'Brasilien ist das einzige Land Südamerikas, dessen Amtssprache Portugiesisch ist – eine Folge der Kolonialisierung durch Portugal. Das "Brasilianische Portugiesisch" unterscheidet sich deutlich vom europäischen.'
  },

  /* ════════════════════════════════════════════════════════
     MUSIK
  ════════════════════════════════════════════════════════ */
  {
    id: 801,
    type: 'choice',
    category: 'Musik',
    difficulty: 'leicht',
    question: 'Wie viele Saiten hat eine klassische Gitarre?',
    options: ['4', '5', '6', '8'],
    correct: '6',
    funFact: 'Eine klassische Gitarre hat 6 Saiten in der Stimmung E-A-D-G-H-E. Die 12-saitige Gitarre hat doppelt so viele Saiten, die paarweise gestimmt sind.'
  },
  {
    id: 802,
    type: 'truefalse',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Beethoven war vollständig taub, als er seine Neunte Symphonie vollendete.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Beethoven verlor sein Gehör schrittweise ab seinen Dreißigern. Bei der Uraufführung der 9. Symphonie 1824 war er vollständig taub – er hörte den Applaus nicht und musste gedreht werden, um die jubelnde Menge zu sehen.'
  },
  {
    id: 803,
    type: 'choice',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Welche Band veröffentlichte das Album "Dark Side of the Moon"?',
    options: ['Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'The Doors'],
    correct: 'Pink Floyd',
    funFact: '"The Dark Side of the Moon" (1973) von Pink Floyd blieb über 900 Wochen in den Billboard-Charts – eines der meistverkauften Alben aller Zeiten mit über 45 Millionen verkauften Exemplaren.'
  },
  {
    id: 804,
    type: 'input',
    category: 'Musik',
    difficulty: 'schwer',
    question: 'Wie nennt man die musikalische Notation, die angibt, dass eine Note um einen Halbton erhöht wird?',
    correct: 'Kreuz',
    acceptedAnswers: ['Kreuz', 'Sharp', '#', 'Erhöhungszeichen'],
    funFact: 'Das Kreuzzeichen (♯) erhöht eine Note um einen Halbton. Das Gegenteil ist das "b" (Erniedrigung, Flat), das eine Note um einen Halbton senkt.'
  },
  {
    id: 805,
    type: 'choice',
    category: 'Musik',
    difficulty: 'schwer',
    question: 'Wer komponierte "Die Vier Jahreszeiten"?',
    options: ['Johann Sebastian Bach', 'Antonio Vivaldi', 'Wolfgang Amadeus Mozart', 'Georg Friedrich Händel'],
    correct: 'Antonio Vivaldi',
    funFact: '"Die Vier Jahreszeiten" von Vivaldi (1723) sind eines der bekanntesten Barockwerke. Jedes der vier Konzerte für Violine hat ein begleitendes Sonett, das die dargestellte Jahreszeit beschreibt.'
  },
  {
    id: 806,
    type: 'truefalse',
    category: 'Musik',
    difficulty: 'schwer',
    question: 'Michael Jackson besaß zeitweise die Rechte an fast allen Beatles-Songs.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Michael Jackson kaufte 1985 den ATV Music Publishing Katalog für 47,5 Millionen Dollar, der die Rechte an rund 250 Beatles-Songs enthielt. Paul McCartney hatte ihn ironischerweise selbst auf das Investment hingewiesen.'
  },
  {
    id: 807,
    type: 'choice',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Welches Instrument hat die meisten Saiten eines klassischen Orchesters?',
    options: ['Violine', 'Harfe', 'Klavier', 'Kontrabass'],
    correct: 'Harfe',
    funFact: 'Eine Konzertharfe hat 47 Saiten und 7 Pedale, mit denen jede Saite in drei Positionen gestimmt werden kann. Das Klavier hat zwar mehr Saiten (über 200), aber es ist kein Streichinstrument.'
  },
  {
    id: 808,
    type: 'choice',
    category: 'Musik',
    difficulty: 'leicht',
    question: 'Welche Musikrichtung stammt ursprünglich aus Jamaica?',
    options: ['Samba', 'Reggae', 'Bossa Nova', 'Cumbia'],
    correct: 'Reggae',
    funFact: 'Reggae entstand in den 1960er Jahren in Jamaica und wurde durch Bob Marley weltweit bekannt. Er entwickelte sich aus Ska und Rocksteady.'
  },

  /* ════════════════════════════════════════════════════════
     FILM & POPKULTUR
  ════════════════════════════════════════════════════════ */
  {
    id: 901,
    type: 'choice',
    category: 'Film',
    difficulty: 'leicht',
    question: 'Welcher Film gewann als erster animierter Film den Academy Award für den besten Film?',
    options: ['The Lion King', 'Beauty and the Beast', 'Shrek', 'Keiner – ein Animationsfilm hat das noch nie gewonnen'],
    correct: 'Keiner – ein Animationsfilm hat das noch nie gewonnen',
    funFact: 'Kein Animationsfilm hat je den Oscar für den besten Film gewonnen. "Beauty and the Beast" (1991) war der erste Animationsfilm, der in dieser Kategorie nominiert wurde – verlor aber gegen "Das Schweigen der Lämmer".'
  },
  {
    id: 902,
    type: 'truefalse',
    category: 'Popkultur',
    difficulty: 'mittel',
    question: 'Der ursprüngliche Name von Marilyn Monroe war Norma Jeane Mortenson.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Marilyn Monroe wurde als Norma Jeane Mortenson geboren und später auf Norma Jeane Baker getauft. "Marilyn Monroe" war ein Künstlername, den sie 1946 annahm.'
  },
  {
    id: 903,
    type: 'choice',
    category: 'Film',
    difficulty: 'mittel',
    question: 'In welchem Film spielt Tom Hanks einen Mann, der jahrelang auf einem Flughafen festsitzt?',
    options: ['Cast Away', 'Forrest Gump', 'The Terminal', 'Philadelphia'],
    correct: 'The Terminal',
    funFact: '"The Terminal" (2004) von Steven Spielberg basiert auf der wahren Geschichte von Mehran Karimi Nasseri, einem Iraner, der von 1988 bis 2006 – 18 Jahre! – im Pariser Flughafen Charles de Gaulle lebte.'
  },
  {
    id: 904,
    type: 'input',
    category: 'Popkultur',
    difficulty: 'mittel',
    question: 'Wie heißt die fiktive afrikanische Nation in den Marvel-Filmen?',
    correct: 'Wakanda',
    acceptedAnswers: ['Wakanda'],
    funFact: 'Wakanda aus den Black-Panther-Comics (seit 1966) ist bekannt für sein Vibranium-Vorkommen. Der Film "Black Panther" (2018) spielte weltweit über 1,3 Milliarden Dollar ein.'
  },
  {
    id: 905,
    type: 'choice',
    category: 'Film',
    difficulty: 'schwer',
    question: 'Wer führte Regie bei "2001: Odyssee im Weltraum"?',
    options: ['Steven Spielberg', 'Stanley Kubrick', 'Ridley Scott', 'George Lucas'],
    correct: 'Stanley Kubrick',
    funFact: '"2001: A Space Odyssey" (1968) gilt als einer der einflussreichsten Filme aller Zeiten. Stanley Kubrick nutzte NASA-Aufnahmen und war so akkurat, dass manche glaubten, er hätte die Mondlandung für die NASA inszeniert.'
  },
  {
    id: 906,
    type: 'truefalse',
    category: 'Popkultur',
    difficulty: 'schwer',
    question: 'Die Serie "Breaking Bad" spielt in Albuquerque, New Mexico.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Creator Vince Gilligan wählte Albuquerque wegen der Steuervorteile für Filmproduktionen in New Mexico. Die Stadt wurde für die Serie so populär, dass das Haus der Whites zu einem Touristenziel wurde – mit Besuchern, die Pizza aufs Dach werfen.'
  },
  {
    id: 907,
    type: 'choice',
    category: 'Popkultur',
    difficulty: 'mittel',
    question: 'Welches Videospiel-Franchise ist das meistverkaufte aller Zeiten?',
    options: ['Call of Duty', 'Grand Theft Auto', 'Minecraft', 'Mario'],
    correct: 'Mario',
    funFact: 'Die Super-Mario-Reihe hat mit über 800 Millionen verkauften Exemplaren mehr Spiele verkauft als jede andere Franchise. Seit 1981 erscheinen regelmäßig neue Mario-Titel.'
  },

  /* ════════════════════════════════════════════════════════
     AUTOS & MOTORSPORT
  ════════════════════════════════════════════════════════ */
  {
    id: 1001,
    type: 'choice',
    category: 'Autos',
    difficulty: 'leicht',
    question: 'Was ist die Topspeed-Obergrenze auf deutschen Autobahnen in Abschnitten ohne Tempolimit?',
    options: ['Es gibt keine Grenze', '130 km/h', '200 km/h', '160 km/h'],
    correct: 'Es gibt keine Grenze',
    funFact: 'Deutschland ist eines der wenigen Länder ohne generelles Autobahn-Tempolimit. Es gibt eine empfohlene Richtgeschwindigkeit von 130 km/h, aber kein Verbot – obwohl immer wieder darüber diskutiert wird.'
  },
  {
    id: 1002,
    type: 'truefalse',
    category: 'Autos',
    difficulty: 'mittel',
    question: 'Das erste serienmäßige Automobil war ein Produkt von Mercedes-Benz.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Carl Benz baute 1885/86 den Benz Patent-Motorwagen – das erste Automobil mit Verbrennungsmotor. Mercedes-Benz entstand erst 1926 durch die Fusion von Benz & Cie. und Daimler-Motoren-Gesellschaft.'
  },
  {
    id: 1003,
    type: 'choice',
    category: 'Autos',
    difficulty: 'mittel',
    question: 'Welcher Hersteller produzierte den Bugatti Veyron?',
    options: ['Ferrari', 'Lamborghini', 'Volkswagen Group / Bugatti', 'Aston Martin'],
    correct: 'Volkswagen Group / Bugatti',
    funFact: 'Der Bugatti Veyron (2005–2011) war mit 407 km/h das schnellste Serienauto seiner Zeit. Er kostete über 1 Million Euro und war trotzdem für VW ein Verlustgeschäft – jedes Exemplar kostete mehr in der Produktion als im Verkauf.'
  },
  {
    id: 1004,
    type: 'input',
    category: 'Autos',
    difficulty: 'schwer',
    question: 'Wie nennt man das Rennen, das als härtestes Ausdauerrennen der Welt gilt und einmal im Jahr in Frankreich stattfindet?',
    correct: '24 Stunden von Le Mans',
    acceptedAnswers: ['24 Stunden von Le Mans', 'Le Mans', '24h Le Mans', '24 Stunden Le Mans'],
    funFact: 'Das 24-Stunden-Rennen von Le Mans findet seit 1923 statt. Siegerteams legen heute ca. 5.000 km in 24 Stunden zurück. Porsche ist mit 19 Gesamtsiegen der erfolgreichste Hersteller.'
  },
  {
    id: 1005,
    type: 'choice',
    category: 'Autos',
    difficulty: 'schwer',
    question: 'Was beschreibt der Begriff "Oversteer" beim Fahren?',
    options: ['Das Auto reagiert nicht genug auf Lenkbewegungen', 'Das Fahrzeugheck bricht aus', 'Das Auto bremst zu stark', 'Zu starke Beschleunigung'],
    correct: 'Das Fahrzeugheck bricht aus',
    funFact: 'Übersteuern bedeutet, dass das Heck des Fahrzeugs nach außen driftet. Das Gegenteil ist Untersteuern (das Auto fährt geradeaus, trotz Lenkeinschlag). Hinterradgetriebene Autos neigen mehr zum Übersteuern.'
  },
  {
    id: 1006,
    type: 'truefalse',
    category: 'Autos',
    difficulty: 'mittel',
    question: 'Tesla wurde von Elon Musk gegründet.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Tesla wurde 2003 von Martin Eberhard und Marc Tarpenning gegründet. Elon Musk stieg 2004 als Investor ein und wurde CEO – er bezeichnete sich als "Mitgründer", was zu einem Rechtsstreit führte.'
  },
  {
    id: 1007,
    type: 'choice',
    category: 'Autos',
    difficulty: 'mittel',
    question: 'Welches Land stellt die meisten Autos der Welt her?',
    options: ['USA', 'Deutschland', 'Japan', 'China'],
    correct: 'China',
    funFact: 'China produziert mit Abstand die meisten Fahrzeuge weltweit – mehr als 25 Millionen pro Jahr, fast dreimal so viele wie die USA. Chinesische Hersteller wie BYD dominieren zunehmend den Elektroautomarkt.'
  },
  {
    id: 1008,
    type: 'choice',
    category: 'Motorsport',
    difficulty: 'schwer',
    question: 'Welcher Formel-1-Fahrer hat die meisten Weltmeistertitel gewonnen?',
    options: ['Ayrton Senna', 'Michael Schumacher', 'Lewis Hamilton', 'Sebastian Vettel'],
    correct: 'Lewis Hamilton',
    hint: 'Er hat 7 Titel.',
    funFact: 'Lewis Hamilton und Michael Schumacher teilen den Rekord von je 7 Weltmeistertiteln. Hamilton holte seinen 7. Titel 2020 in einem dominanten Mercedes.'
  },

  /* ════════════════════════════════════════════════════════
     SPORT
  ════════════════════════════════════════════════════════ */
  {
    id: 1101,
    type: 'choice',
    category: 'Sport',
    difficulty: 'leicht',
    question: 'Wie viele Spieler stehen bei einem Fußballspiel von jeder Mannschaft auf dem Feld?',
    options: ['9', '10', '11', '12'],
    correct: '11',
    funFact: 'Die Zahl 11 im Fußball hat historische Wurzeln. Die offizielle Regelung geht auf die Entstehung der Football Association in England (1863) zurück.'
  },
  {
    id: 1102,
    type: 'truefalse',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Olympische Goldmedaillen bestehen hauptsächlich aus Gold.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Olympische Goldmedaillen bestehen aus mindestens 92,5 % Silber und sind nur mit Gold vergoldet (mindestens 6 Gramm Gold). Die letzten massiv goldenen Medaillen wurden bei den Spielen 1912 vergeben.'
  },
  {
    id: 1103,
    type: 'choice',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Welches Land hat die meisten Fußball-Weltmeisterschaften gewonnen?',
    options: ['Deutschland', 'Argentinien', 'Brasilien', 'Italien'],
    correct: 'Brasilien',
    funFact: 'Brasilien ist mit 5 WM-Titeln (1958, 1962, 1970, 1994, 2002) das erfolgreichste Land und das einzige, das bei jeder Endrunde vertreten war.'
  },
  {
    id: 1104,
    type: 'input',
    category: 'Sport',
    difficulty: 'schwer',
    question: 'Wie viele Punkte bringt ein Dreier beim Basketball?',
    correct: '3',
    acceptedAnswers: ['3', 'drei'],
    hint: 'Er wird hinter der Dreierlinie geworfen.',
    funFact: 'Die Dreipunktlinie wurde in der NBA 1979/80 eingeführt. Die Distanz beträgt 7,24 Meter. In der ersten Saison ignorierten viele Spieler sie – heute dominiert der Dreier das Spiel.'
  },
  {
    id: 1105,
    type: 'choice',
    category: 'Sport',
    difficulty: 'schwer',
    question: 'Wo fanden die ersten modernen Olympischen Spiele statt?',
    options: ['Paris', 'London', 'Athen', 'Berlin'],
    correct: 'Athen',
    funFact: 'Die ersten modernen Olympischen Spiele fanden 1896 in Athen statt – 1.500 Jahre nach dem Verbot der antiken Olympischen Spiele durch Kaiser Theodosius I. Pierre de Coubertin war der Hauptinitiator der Wiederbelebung.'
  },
  {
    id: 1106,
    type: 'truefalse',
    category: 'Sport',
    difficulty: 'schwer',
    question: 'Im Tennis beim Grand-Slam-Turnier Wimbledon müssen Spieler traditionell weiß tragen.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Wimbledon hat die strengste Kleiderordnung im Tennis: Spieler müssen fast vollständig in Weiß antreten. Selbst farbige Unterwäsche, die sichtbar wird, ist verboten. Diese Tradition geht auf das viktorianische Zeitalter zurück.'
  },

  /* ════════════════════════════════════════════════════════
     ESSEN & TRINKEN
  ════════════════════════════════════════════════════════ */
  {
    id: 1201,
    type: 'truefalse',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    question: 'Champagner darf nur aus der Champagne-Region in Frankreich stammen.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Champagner ist eine geschützte Herkunftsbezeichnung. Nur Schaumwein aus der Champagne darf diesen Namen tragen. Ähnlicher Wein aus anderen Regionen heißt Sekt, Cava oder Prosecco.'
  },
  {
    id: 1202,
    type: 'choice',
    category: 'Essen & Trinken',
    difficulty: 'leicht',
    question: 'Aus welchem Land stammt die Pizza ursprünglich?',
    options: ['Griechenland', 'Spanien', 'Italien', 'Frankreich'],
    correct: 'Italien',
    funFact: 'Die moderne Pizza entstand im 18. Jahrhundert in Neapel. Die Pizza Margherita – benannt nach Königin Margherita von Savoyen – wurde angeblich 1889 erfunden und trägt die Farben der italienischen Flagge.'
  },
  {
    id: 1203,
    type: 'input',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'Wie nennt man die japanische Kunst des Schneidens von Fisch für Sushi?',
    correct: 'Ikizukuri',
    acceptedAnswers: ['Ikizukuri', 'Sashimi', 'Yanagiba'],
    hint: 'Es ist eine uralte japanische Küchentechnik.',
    funFact: 'Ikizukuri ist die Technik, frischen Fisch so zu zubereiten, dass er noch am Leben ist, wenn er serviert wird. In mehreren Ländern ist diese Praxis aus Tierschutzgründen verboten.'
  },
  {
    id: 1204,
    type: 'choice',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    question: 'Was ist ein "Umami"?',
    options: ['Ein japanisches Gewürz', 'Der fünfte Grundgeschmack', 'Eine Kochtechnik', 'Eine Art Meeresfrüchte'],
    correct: 'Der fünfte Grundgeschmack',
    funFact: 'Umami (japanisch für "köstlicher Geschmack") wurde 1908 vom japanischen Chemiker Kikunae Ikeda beschrieben. Neben süß, sauer, salzig und bitter ist es der fünfte Grundgeschmack – ausgelöst durch Glutamat.'
  },
  {
    id: 1205,
    type: 'truefalse',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'Kaffee ist die weltweit am zweithäufigsten gehandelte Ware nach Rohöl.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Dieses oft zitierte "Fakt" ist ein Mythos. Kaffee steht nicht an zweiter Stelle im Warenhandel. Getreide, Metalle und andere Rohstoffe übertreffen Kaffee bei weitem. Kaffee ist aber das meistgehandelte landwirtschaftliche Genussmittel.'
  },
  {
    id: 1206,
    type: 'choice',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'In welchem Land wurde Sekt ("Champagner-Methode") angeblich zuerst hergestellt?',
    options: ['Deutschland', 'Frankreich', 'England', 'Italien'],
    correct: 'England',
    funFact: 'Historische Dokumente zeigen, dass in England bereits vor Dom Pérignon mit Flaschengärung experimentiert wurde. Christopher Merret beschrieb die Methode 1662 – Jahre bevor der französische Mönch dies "erfand".'
  },

  /* ════════════════════════════════════════════════════════
     LITERATUR
  ════════════════════════════════════════════════════════ */
  {
    id: 1301,
    type: 'choice',
    category: 'Literatur',
    difficulty: 'leicht',
    question: 'Von wem stammt das Werk "Faust"?',
    options: ['Friedrich Schiller', 'Gotthold Ephraim Lessing', 'Johann Wolfgang von Goethe', 'Heinrich Heine'],
    correct: 'Johann Wolfgang von Goethe',
    funFact: 'Goethes "Faust" gilt als eines der bedeutendsten Werke der deutschsprachigen Literatur. Goethe arbeitete über 60 Jahre daran – vom ersten Entwurf 1772 bis zur Veröffentlichung von Faust II kurz vor seinem Tod 1832.'
  },
  {
    id: 1302,
    type: 'truefalse',
    category: 'Literatur',
    difficulty: 'mittel',
    question: 'George Orwells "1984" wurde 1949 veröffentlicht.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'George Orwells "Nineteen Eighty-Four" erschien am 8. Juni 1949 – kurz vor seinem Tod 1950. Der Titel entstand, indem er die letzten beiden Ziffern des Entstehungsjahres 1948 umkehrte.'
  },
  {
    id: 1303,
    type: 'choice',
    category: 'Literatur',
    difficulty: 'mittel',
    question: 'Wer schrieb die Harry-Potter-Reihe?',
    options: ['J.R.R. Tolkien', 'C.S. Lewis', 'J.K. Rowling', 'Philip Pullman'],
    correct: 'J.K. Rowling',
    funFact: 'J.K. Rowling schrieb den ersten Harry-Potter-Band in Cafés in Edinburgh, während sie von Sozialhilfe lebte. 12 Verlage lehnten das Manuskript ab, bevor es 1997 veröffentlicht wurde.'
  },
  {
    id: 1304,
    type: 'input',
    category: 'Literatur',
    difficulty: 'schwer',
    question: 'Wie nennt man einen Roman, der die Entwicklung eines jungen Menschen erzählt?',
    correct: 'Bildungsroman',
    acceptedAnswers: ['Bildungsroman', 'Entwicklungsroman'],
    funFact: 'Der Begriff "Bildungsroman" wurde vom Literaturwissenschaftler Karl Morgenstern geprägt. Goethes "Wilhelm Meisters Lehrjahre" gilt als archetypisches Beispiel – heute gehört auch "Der Fänger im Roggen" dazu.'
  },
  {
    id: 1305,
    type: 'choice',
    category: 'Literatur',
    difficulty: 'schwer',
    question: 'Welches Buch beginnt mit dem Satz "Es war die beste und die schlimmste aller Zeiten"?',
    options: ['Moby Dick', 'Eine Geschichte zweier Städte', 'Anna Karenina', 'Krieg und Frieden'],
    correct: 'Eine Geschichte zweier Städte',
    funFact: '"A Tale of Two Cities" von Charles Dickens beginnt mit dem wohl berühmtesten Eröffnungssatz der Literatur. Das Buch ist einer der meistverkauften Romane aller Zeiten mit über 200 Millionen Exemplaren.'
  },

  /* ════════════════════════════════════════════════════════
     PHILOSOPHIE & PSYCHOLOGIE
  ════════════════════════════════════════════════════════ */
  {
    id: 1401,
    type: 'choice',
    category: 'Philosophie',
    difficulty: 'mittel',
    question: 'Welcher Philosoph sagte "Ich denke, also bin ich"?',
    options: ['Immanuel Kant', 'René Descartes', 'John Locke', 'Platon'],
    correct: 'René Descartes',
    funFact: '"Cogito, ergo sum" ist der berühmteste Satz der Philosophie. Descartes verwendete ihn als einzig unanzweifelbares Fundament des Wissens: Selbst wenn alles andere Täuschung ist, muss ein denkendes Wesen existieren.'
  },
  {
    id: 1402,
    type: 'truefalse',
    category: 'Philosophie',
    difficulty: 'schwer',
    question: 'Das "Schiff des Theseus" ist ein Paradoxon über Identität und Wandel.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Das Paradoxon fragt: Wenn das Schiff des Theseus nach und nach durch neue Teile ersetzt wird, ist es am Ende noch dasselbe Schiff? Das Gedankenexperiment stellt Fragen zur Identität über die Zeit – anwendbar auf Schiffe, Menschen und sogar die Gesellschaft.'
  },
  {
    id: 1403,
    type: 'choice',
    category: 'Psychologie',
    difficulty: 'mittel',
    question: 'Was beschreibt der "Dunning-Kruger-Effekt"?',
    options: ['Die Tendenz, anderen zu vertrauen', 'Inkompetente Menschen überschätzen ihre eigenen Fähigkeiten', 'Der Einfluss von Gruppen auf Entscheidungen', 'Angst vor Erfolg'],
    correct: 'Inkompetente Menschen überschätzen ihre eigenen Fähigkeiten',
    funFact: 'Der Dunning-Kruger-Effekt wurde 1999 beschrieben. Die Forscher fanden, dass Menschen mit geringem Wissen ihre Kompetenz überschätzen, während Experten ihre Kompetenz oft unterschätzen.'
  },
  {
    id: 1404,
    type: 'choice',
    category: 'Philosophie',
    difficulty: 'schwer',
    question: 'Was ist das "Trolley Problem"?',
    options: ['Ein ökonomisches Modell', 'Ein ethisches Gedankenexperiment über Handeln vs. Unterlassen', 'Ein logisches Paradoxon', 'Eine Quantenmechanik-Theorie'],
    correct: 'Ein ethisches Gedankenexperiment über Handeln vs. Unterlassen',
    funFact: 'Das Trolley-Problem wurde 1967 von Philosophin Philippa Foot formuliert: Darf man eine Weiche stellen und einen Menschen töten, um fünf zu retten? Das Gedankenexperiment hat die Moralphilosophie und Diskussionen über KI-Ethik fundamental beeinflusst.'
  },

  /* ════════════════════════════════════════════════════════
     TIERE & NATUR
  ════════════════════════════════════════════════════════ */
  {
    id: 1501,
    type: 'choice',
    category: 'Tiere',
    difficulty: 'leicht',
    question: 'Welches ist das schnellste Landtier der Welt?',
    options: ['Gepard', 'Pronghorn', 'Löwe', 'Springbock'],
    correct: 'Gepard',
    funFact: 'Der Gepard kann in Sprints bis zu 120 km/h erreichen, hält dieses Tempo aber nur für etwa 30 Sekunden durch. Das Pronghorn (Gabelbock) ist das ausdauerndste Schnelltier mit Dauergeschwindigkeit um 90 km/h.'
  },
  {
    id: 1502,
    type: 'truefalse',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Haie müssen sich ständig bewegen, um nicht zu ertrinken.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Nur einige Haiarten (z.B. der Weißhai) müssen schwimmen, um Wasser durch die Kiemen zu leiten ("Rammlüftung"). Viele andere, wie der Ammenhai, können auf dem Meeresgrund ruhen und aktiv Wasser durch die Kiemen pumpen.'
  },
  {
    id: 1503,
    type: 'choice',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Welches Tier schläft stehend?',
    options: ['Elefant', 'Pferd', 'Nashorn', 'Alle diese Tiere'],
    correct: 'Alle diese Tiere',
    funFact: 'Huftiere wie Pferde, Elefanten und Nashörner können dank eines speziellen Sehnen-Bandes ("Stay-Apparat") im Stehen schlafen. Sie benötigen jedoch gelegentlich Tiefschlaf im Liegen.'
  },
  {
    id: 1504,
    type: 'input',
    category: 'Tiere',
    difficulty: 'schwer',
    question: 'Wie nennt man das Phänomen, bei dem ein Tintenfisch seine Farbe wechselt?',
    correct: 'Chromatophoren',
    acceptedAnswers: ['Chromatophoren', 'Farbwechsel', 'Tarnung'],
    funFact: 'Tintenfische, Tintenfische und Kraken haben Chromatophoren – pigmentgefüllte Zellen, die sich durch Muskeln in Millisekunden ausdehnen oder zusammenziehen können. Interessanterweise sind viele Kopffüßer farbenblind.'
  },
  {
    id: 1505,
    type: 'choice',
    category: 'Tiere',
    difficulty: 'schwer',
    question: 'Welches Tier hat den größten Gehirn-zu-Körper-Verhältnis?',
    options: ['Delfin', 'Schimpanse', 'Mensch', 'Elefant'],
    correct: 'Mensch',
    funFact: 'Menschen haben das größte Gehirn-Körper-Verhältnis unter allen Tieren (etwa 1:40). Delfine liegen auf Platz zwei (1:125), Schimpansen auf drei. Elefanten haben zwar größere Gehirne, aber ein kleineres Verhältnis.'
  },
  {
    id: 1506,
    type: 'truefalse',
    category: 'Tiere',
    difficulty: 'leicht',
    question: 'Pinguine leben ausschließlich auf der Südhalbkugel.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Die Galápagos-Pinguine leben auf den Galápagos-Inseln, die direkt auf dem Äquator liegen und zur Nordhalbkugel gehören. Sie sind die einzigen Pinguine, die nördlich des Äquators in freier Wildbahn leben.'
  },

  /* ════════════════════════════════════════════════════════
     MATHEMATIK
  ════════════════════════════════════════════════════════ */
  {
    id: 1601,
    type: 'choice',
    category: 'Mathematik',
    difficulty: 'leicht',
    question: 'Was ist die Quadratwurzel von 144?',
    options: ['11', '12', '13', '14'],
    correct: '12',
    funFact: '12² = 144. Perfekte Quadratzahlen spielen in der Mathematik, Architektur und Musik eine besondere Rolle. Die Zahl 12 taucht auch im Alltag ständig auf: 12 Monate, 12 Stunden, Dutzend...'
  },
  {
    id: 1602,
    type: 'truefalse',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: '0,999... (0,9 periodisch) ist exakt gleich 1.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Mathematisch ist 0,999... = 1. Beweis: Wenn x = 0,999..., dann 10x = 9,999..., also 10x – x = 9, somit 9x = 9, x = 1. Viele Menschen finden das kontraintuitiv, aber es ist mathematisch korrekt beweisbar.'
  },
  {
    id: 1603,
    type: 'choice',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: 'Was ist eine "Primzahl"?',
    options: ['Eine durch 2 teilbare Zahl', 'Eine Zahl, die nur durch 1 und sich selbst teilbar ist', 'Eine gerade Zahl', 'Eine Zahl größer als 100'],
    correct: 'Eine Zahl, die nur durch 1 und sich selbst teilbar ist',
    funFact: 'Die Suche nach großen Primzahlen ist ein aktives Forschungsgebiet. Die größte bekannte Primzahl hat Millionen von Stellen. Primzahlen sind die Grundlage moderner Kryptographie und damit der Internetsicherheit.'
  },
  {
    id: 1604,
    type: 'input',
    category: 'Mathematik',
    difficulty: 'schwer',
    question: 'Was sind die ersten vier Stellen der Zahl Pi nach dem Komma?',
    correct: '1415',
    acceptedAnswers: ['1415', '3,1415', '3.1415'],
    funFact: 'Pi (π = 3,14159265...) ist eine irrationale Zahl – sie hat unendlich viele, nicht-periodische Dezimalstellen. Der Rekord für berechnete Dezimalstellen liegt bei über 100 Billionen Stellen.'
  },
  {
    id: 1605,
    type: 'choice',
    category: 'Mathematik',
    difficulty: 'schwer',
    question: 'Was ist das "Monty-Hall-Problem"?',
    options: ['Ein Paradoxon aus der Wahrscheinlichkeitstheorie', 'Ein mathematischer Beweis', 'Ein Algorithmus', 'Eine Primzahlentheorie'],
    correct: 'Ein Paradoxon aus der Wahrscheinlichkeitstheorie',
    funFact: 'Beim Monty-Hall-Problem erhöht sich deine Gewinnchance von 1/3 auf 2/3, wenn du nach dem Öffnen einer falschen Tür wechselst. Das ist so kontraintuitiv, dass selbst Mathematiker zunächst widersprachen – und die Lösung falsch fanden.'
  },

  /* ════════════════════════════════════════════════════════
     POLITIK & GESELLSCHAFT
  ════════════════════════════════════════════════════════ */
  {
    id: 1701,
    type: 'choice',
    category: 'Politik',
    difficulty: 'leicht',
    question: 'Wer ist das Staatsoberhaupt Deutschlands?',
    options: ['Der Bundeskanzler', 'Der Bundestagspräsident', 'Der Bundespräsident', 'Der Justizminister'],
    correct: 'Der Bundespräsident',
    funFact: 'In Deutschland ist der Bundespräsident das Staatsoberhaupt, während der Bundeskanzler die Regierungsleitung innehat. Diese Gewaltenteilung wurde bewusst nach den Erfahrungen der Weimarer Republik so gestaltet.'
  },
  {
    id: 1702,
    type: 'truefalse',
    category: 'Politik',
    difficulty: 'mittel',
    question: 'Die Vereinten Nationen haben derzeit 193 Mitgliedstaaten.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die UN haben 193 Mitgliedstaaten. Vatikan und Palästina haben Beobachterstatus. Taiwan ist kein Mitglied, da China dies blockiert.'
  },
  {
    id: 1703,
    type: 'choice',
    category: 'Politik',
    difficulty: 'mittel',
    question: 'Was ist eine "Demokratie"?',
    options: ['Herrschaft eines Königs', 'Herrschaft des Volkes', 'Herrschaft von Experten', 'Herrschaft des Militärs'],
    correct: 'Herrschaft des Volkes',
    funFact: 'Das Wort "Demokratie" kommt aus dem Griechischen: "demos" (Volk) und "kratos" (Herrschaft). Die antike athenische Demokratie (5. Jh. v. Chr.) gilt als Vorläuferin, schloss aber Frauen, Sklaven und Ausländer aus.'
  },
  {
    id: 1704,
    type: 'choice',
    category: 'Politik',
    difficulty: 'schwer',
    question: 'Was beschreibt der Begriff "Gerrymandering"?',
    options: ['Eine Form der Wahlmanipulation durch Wahlkreiseinteilung', 'Ein Lobbyismus-Phänomen', 'Eine Art von Korruption', 'Eine Stimmenauszählungsmethode'],
    correct: 'Eine Form der Wahlmanipulation durch Wahlkreiseinteilung',
    funFact: 'Der Begriff geht auf Elbridge Gerry zurück, der 1812 als Gouverneur von Massachusetts Wahlkreise zu seinem Vorteil zuschnitt. Ein Wahlkreis sah wie eine Salamander-Form aus – "Gerry" + "salamander" = Gerrymander.'
  },

  /* ════════════════════════════════════════════════════════
     TRICK QUESTIONS / KNIFFLIGE FRAGEN
  ════════════════════════════════════════════════════════ */
  {
    id: 1801,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    question: 'Wie lange hat der Hundertjährige Krieg gedauert?',
    options: ['100 Jahre', '116 Jahre', '99 Jahre', '87 Jahre'],
    correct: '116 Jahre',
    funFact: 'Der "Hundertjährige Krieg" zwischen England und Frankreich dauerte von 1337 bis 1453 – also 116 Jahre! Der Name ist irreführend und wurde erst nachträglich geprägt.'
  },
  {
    id: 1802,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    question: 'Ein Kamel speichert Wasser in seinen Höckern.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Kamele speichern in ihren Höckern Fett, kein Wasser! Das Fett kann bei Bedarf in Energie und Wasser umgewandelt werden. Wasser speichern Kamele hauptsächlich im Blut und in den Körpergeweben.'
  },
  {
    id: 1803,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'In welcher Farbe sind die Schiffe der Titanic gemalt gewesen?',
    options: ['Weiß', 'Schwarz', 'Grau', 'Weiß und Schwarz'],
    correct: 'Schwarz',
    hint: 'Denk an typische Schiffsfarben der damaligen Zeit.',
    funFact: 'Der Rumpf der Titanic war schwarz (mit einem weißen und roten Streifen), nicht weiß wie in vielen modernen Darstellungen. Die weißen Aufbauten darüber schufen den Kontrast, der in Filmen oft übertrieben wird.'
  },
  {
    id: 1804,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    question: 'Was kommt zuerst: Donner oder Blitz?',
    options: ['Blitz', 'Donner', 'Gleichzeitig', 'Manchmal das eine, manchmal das andere'],
    correct: 'Gleichzeitig',
    funFact: 'Blitz und Donner entstehen im selben Moment! Da Licht aber schneller als Schall ist (ca. 300.000 km/s vs. 343 m/s), sehen wir den Blitz zuerst. Pro 3 Sekunden Zeitabstand liegt das Gewitter etwa 1 km entfernt.'
  },
  {
    id: 1805,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Eiswürfel schmelzen schneller in Salzwasser als in Süßwasser.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Salzwasser hat einen niedrigeren Gefrierpunkt als Süßwasser. Die Ionen im Salzwasser brechen die Wasserstoffbrücken im Eis effizienter auf, sodass Eis in Salzwasser tatsächlich schneller schmilzt.'
  },
  {
    id: 1806,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Welche Farbe hat das Licht der Sonne wirklich?',
    options: ['Gelb', 'Orange', 'Weiß', 'Blau'],
    correct: 'Weiß',
    funFact: 'Sonnenlicht ist weiß – es enthält alle Farben des sichtbaren Spektrums. Die gelb-orange Erscheinung der Sonne entsteht durch die Streuung von blauem Licht in der Atmosphäre (Rayleigh-Streuung).'
  },
  {
    id: 1807,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    question: 'Was würde passieren, wenn man ein Loch durch die Erde graben und einen Ball hineinwirft?',
    options: ['Der Ball würde auf der anderen Seite herauskommen', 'Der Ball würde ewig hin und her schwingen', 'Der Ball würde in der Mitte bleiben', 'Der Ball würde am Mittelpunkt stoppen'],
    correct: 'Der Ball würde ewig hin und her schwingen',
    funFact: 'Theoretisch würde ein Ball durch ein reibungsfreies Erdloch genau 84 Minuten brauchen, um zur anderen Seite zu gelangen – und dann wieder zurück. Dieser Wert gilt übrigens unabhängig davon, wohin das Loch führt, also auch für einen Tunnel zwischen zwei beliebigen Punkten!'
  },
  {
    id: 1808,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    question: 'Napoleon Bonaparte war außergewöhnlich klein für seine Zeit.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Napoleon war ca. 1,68–1,70 m groß – für das frühe 19. Jahrhundert durchschnittlich bis leicht überdurchschnittlich. Der Mythos vom "kleinen Napoleon" entstand durch britische Propaganda-Karikaturen und eine Verwechslung mit alten französischen Maßeinheiten.'
  },
  {
    id: 1809,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Wie viele Sinne hat der Mensch wirklich?',
    options: ['5', 'Mehr als 5', 'Genau 6', 'Zwischen 8 und 10'],
    correct: 'Mehr als 5',
    funFact: 'Neben den klassischen 5 Sinnen (Sehen, Hören, Riechen, Schmecken, Tasten) hat der Mensch mindestens noch: Gleichgewichtssinn, Temperatursinn, Schmerzsinn, Propriozeption (Körperwahrnehmung) und weitere – insgesamt je nach Definition 9 bis über 20.'
  },
  {
    id: 1810,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Glas ist eine Flüssigkeit, die nur extrem langsam fließt.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Der Mythos, dass altes Glas unten dicker ist, weil es "geflossen" ist, wurde widerlegt. Modernes Glas ist ein amorpher Feststoff. Das dickere Ende in alten Fenstern entstand durch die damalige Herstellungstechnik, nicht durch Fließen.'
  },

  /* ════════════════════════════════════════════════════════
     TECHNOLOGIE & INFORMATIK
  ════════════════════════════════════════════════════════ */
  {
    id: 1901,
    type: 'choice',
    category: 'Technik',
    difficulty: 'leicht',
    question: 'Was bedeutet "CPU" in der Computertechnik?',
    options: ['Central Power Unit', 'Central Processing Unit', 'Computer Program Unit', 'Core Processing Unit'],
    correct: 'Central Processing Unit',
    funFact: 'Die CPU ist das "Gehirn" eines Computers. Moderne CPUs enthalten Milliarden von Transistoren auf einem Chip der Größe eines Fingernagels. Der erste kommerzielle Mikroprozessor, der Intel 4004 (1971), hatte nur 2.300 Transistoren.'
  },
  {
    id: 1902,
    type: 'truefalse',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Das erste Computerprogramm der Geschichte wurde von einer Frau geschrieben.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Ada Lovelace schrieb 1843 das erste Computerprogramm – für Charles Babbages "Analytical Engine", eine mechanische Rechenmaschine, die nie gebaut wurde. Sie erkannte als erste, dass solche Maschinen mehr als nur rechnen könnten.'
  },
  {
    id: 1903,
    type: 'choice',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Was ist ein "Algorithmus"?',
    options: ['Eine Programmiersprache', 'Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems', 'Ein Computer-Virus', 'Ein Datenbankformat'],
    correct: 'Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems',
    funFact: 'Das Wort "Algorithmus" geht auf den persischen Mathematiker al-Chwarizmi zurück, dessen Name latinisiert "Algoritmi" wurde. Er lebte im 9. Jh. n. Chr. und schrieb grundlegende Werke zur Algebra.'
  },
  {
    id: 1904,
    type: 'input',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Wie nennt man das fehlerhafte Verhalten eines Computerprogramms, das durch einen Programmierfehler verursacht wird?',
    correct: 'Bug',
    acceptedAnswers: ['Bug', 'Fehler', 'Programmierfehler', 'bug'],
    funFact: 'Der erste dokumentierte Computer-"Bug" war tatsächlich ein echter Käfer: 1947 fand Grace Hopper eine Motte in einem Relais des Harvard Mark II – sie klebte ihn ins Logbuch mit der Notiz "First actual case of bug being found."'
  },
  {
    id: 1905,
    type: 'choice',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Was ist "Moores Law"?',
    options: ['Das Internet verdoppelt sich alle 5 Jahre', 'Die Anzahl der Transistoren auf einem Chip verdoppelt sich etwa alle 2 Jahre', 'Computerviren verdoppeln sich jährlich', 'Die Rechenleistung von Smartphones verdreifacht sich jährlich'],
    correct: 'Die Anzahl der Transistoren auf einem Chip verdoppelt sich etwa alle 2 Jahre',
    funFact: 'Gordon Moore (Mitgründer von Intel) beobachtete 1965, dass sich die Transistordichte auf Chips regelmäßig verdoppelt. Dieses "Gesetz" galt jahrzehntelang und trieb den technologischen Fortschritt – gilt jedoch inzwischen als verlangsamt.'
  },

  /* ════════════════════════════════════════════════════════
     ARCHITEKTUR & KUNST
  ════════════════════════════════════════════════════════ */
  {
    id: 2001,
    type: 'choice',
    category: 'Kunst',
    difficulty: 'leicht',
    question: 'In welchem Museum hängt die Mona Lisa?',
    options: ['Uffizien in Florenz', 'Prado in Madrid', 'Louvre in Paris', 'Metropolitan Museum in New York'],
    correct: 'Louvre in Paris',
    funFact: 'Die Mona Lisa hängt im Louvre hinter Panzerglas und wird von Massen von Touristen täglich besucht. Viele sind überrascht, wie klein sie ist: nur 77 × 53 cm.'
  },
  {
    id: 2002,
    type: 'truefalse',
    category: 'Architektur',
    difficulty: 'mittel',
    question: 'Der Eiffelturm ist im Sommer ca. 15 cm höher als im Winter.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Metall dehnt sich bei Wärme aus. Im Sommer wird der Eiffelturm durch die Hitze tatsächlich bis zu 15–18 cm größer. Das ist physikalisch normal und bei allen großen Metallkonstruktionen zu beobachten.'
  },
  {
    id: 2003,
    type: 'choice',
    category: 'Kunst',
    difficulty: 'mittel',
    question: 'Welche Kunstbewegung wird mit Salvador Dalí assoziiert?',
    options: ['Kubismus', 'Impressionismus', 'Surrealismus', 'Expressionismus'],
    correct: 'Surrealismus',
    funFact: 'Salvador Dalí war eines der bekanntesten Gesichter des Surrealismus, der in den 1920er Jahren entstand. Seine schmelzenden Uhren im Gemälde "Die Beständigkeit der Erinnerung" (1931) sind ikonisch.'
  },
  {
    id: 2004,
    type: 'input',
    category: 'Architektur',
    difficulty: 'schwer',
    question: 'Wie nennt man die wichtigste gotische Bauform – der spitze Bogen über Kirchenfenstern?',
    correct: 'Spitzbogen',
    acceptedAnswers: ['Spitzbogen', 'Gotischer Bogen', 'Ogivalbogen'],
    funFact: 'Der Spitzbogen ist charakteristisch für gotische Kathedralen und wurde ab dem 12. Jahrhundert in der Île-de-France entwickelt. Er ermöglichte höhere, schlankere Wände und größere Fenster als der romanische Rundbogen.'
  },

  /* ════════════════════════════════════════════════════════
     MEDIZIN & GESUNDHEIT
  ════════════════════════════════════════════════════════ */
  {
    id: 2101,
    type: 'choice',
    category: 'Medizin',
    difficulty: 'leicht',
    question: 'Was produziert der Körper, wenn er sich sonnenlicht aussetzt?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
    correct: 'Vitamin D',
    funFact: 'Vitamin D wird in der Haut durch UV-B-Strahlung produziert. Es ist essentiell für Knochen, das Immunsystem und viele andere Körperfunktionen. Ein Mangel ist in Deutschland, besonders im Winter, weit verbreitet.'
  },
  {
    id: 2102,
    type: 'truefalse',
    category: 'Medizin',
    difficulty: 'schwer',
    question: 'Wir verwenden nur 10 % unseres Gehirns.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Der "10%-Mythos" ist vollständig falsch. Bildgebende Verfahren zeigen, dass praktisch alle Hirnbereiche aktiv sind – wenn auch nie alle gleichzeitig. Das Gehirn verbraucht 20 % des Körperenergiebedarfs, obwohl es nur 2 % des Gewichts ausmacht.'
  },
  {
    id: 2103,
    type: 'choice',
    category: 'Medizin',
    difficulty: 'mittel',
    question: 'Was ist das häufigste Blutgruppen-System?',
    options: ['AB0-System', 'Rhesus-System', 'Kell-System', 'Duffy-System'],
    correct: 'AB0-System',
    funFact: 'Das AB0-System, entdeckt 1901 von Karl Landsteiner (Nobelpreis 1930), teilt Blut in A, B, AB und 0 ein. Kombiniert mit dem Rhesus-Faktor (+/-) gibt es 8 gängige Blutgruppen.'
  },
  {
    id: 2104,
    type: 'choice',
    category: 'Medizin',
    difficulty: 'schwer',
    question: 'Welches Bakterium verursacht Tuberkulose?',
    options: ['Staphylococcus aureus', 'Helicobacter pylori', 'Mycobacterium tuberculosis', 'Streptococcus pneumoniae'],
    correct: 'Mycobacterium tuberculosis',
    funFact: 'Mycobacterium tuberculosis wurde 1882 von Robert Koch entdeckt, wofür er 1905 den Nobelpreis erhielt. TBC ist nach wie vor eine der weltweit tödlichsten Infektionskrankheiten mit ca. 1,6 Millionen Toten pro Jahr.'
  },

  /* ════════════════════════════════════════════════════════
     RELIGION & MYTHOLOGIE
  ════════════════════════════════════════════════════════ */
  {
    id: 2201,
    type: 'choice',
    category: 'Religion',
    difficulty: 'leicht',
    question: 'Was ist die meistverbreitete Religion der Welt?',
    options: ['Islam', 'Hinduismus', 'Christentum', 'Buddhismus'],
    correct: 'Christentum',
    funFact: 'Das Christentum hat etwa 2,4 Milliarden Anhänger – gefolgt vom Islam mit ca. 1,9 Milliarden. Beide Religionen zusammen umfassen über die Hälfte der Weltbevölkerung.'
  },
  {
    id: 2202,
    type: 'truefalse',
    category: 'Mythologie',
    difficulty: 'mittel',
    question: 'In der griechischen Mythologie war Prometheus derjenige, der das Feuer zu den Menschen brachte.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Prometheus stahl das Feuer von den Göttern des Olymp und brachte es den Menschen. Als Strafe ketteten die Götter ihn an einen Felsen, wo täglich ein Adler seine nachwachsende Leber fraß – eine ewige Folter.'
  },
  {
    id: 2203,
    type: 'choice',
    category: 'Mythologie',
    difficulty: 'mittel',
    question: 'Wer war der Gott der Meere in der griechischen Mythologie?',
    options: ['Zeus', 'Hades', 'Poseidon', 'Ares'],
    correct: 'Poseidon',
    funFact: 'Poseidon regierte das Meer, Erdbeben und Pferde. Die Römer nannten ihn Neptun. Er war der Bruder von Zeus (Herrscher des Olymp) und Hades (Herrscher der Unterwelt).'
  },

  /* ════════════════════════════════════════════════════════
     MODE & DESIGN
  ════════════════════════════════════════════════════════ */
  {
    id: 2301,
    type: 'choice',
    category: 'Mode',
    difficulty: 'mittel',
    question: 'Von welchem Designer stammt das berühmte "Little Black Dress" (Kleines Schwarzes)?',
    options: ['Christian Dior', 'Yves Saint Laurent', 'Coco Chanel', 'Gianni Versace'],
    correct: 'Coco Chanel',
    funFact: 'Coco Chanel entwarf 1926 das "kleine Schwarze" und revolutionierte damit die Frauenmode. Vogue nannte es "Chanels Ford" – in Anlehnung an das damals universell verbreitete Auto – und prophezeite es als unvergänglich. Richtig!'
  },
  {
    id: 2302,
    type: 'truefalse',
    category: 'Mode',
    difficulty: 'schwer',
    question: 'Denim für Jeans wurde ursprünglich in den USA hergestellt.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Denim stammt aus Nîmes, Frankreich ("de Nîmes" = "aus Nîmes"). Levi Strauss & Co. brachte den Stoff in die USA und patentierte 1873 die genietete Arbeitshose, aus der die moderne Jeans entstand.'
  },

  /* ════════════════════════════════════════════════════════
     UMWELT & KLIMA
  ════════════════════════════════════════════════════════ */
  {
    id: 2401,
    type: 'choice',
    category: 'Umwelt',
    difficulty: 'leicht',
    question: 'Was ist das wichtigste Treibhausgas, das vom Menschen erzeugt wird?',
    options: ['Ozon', 'Stickstoff', 'Kohlendioxid', 'Sauerstoff'],
    correct: 'Kohlendioxid',
    funFact: 'CO₂ ist durch menschliche Aktivitäten das wichtigste Treibhausgas. Methan ist pro Molekül zwar wirksamer, aber weit weniger in der Atmosphäre vorhanden. Der CO₂-Gehalt der Luft liegt heute bei über 420 ppm – ein historisches Hoch.'
  },
  {
    id: 2402,
    type: 'truefalse',
    category: 'Umwelt',
    difficulty: 'mittel',
    question: 'Der Amazonas-Regenwald produziert 20 % des weltweiten Sauerstoffs.',
    options: ['Wahr', 'Falsch'],
    correct: 'Falsch',
    funFact: 'Der Amazonas-Regenwald produziert zwar viel Sauerstoff, verbraucht ihn aber auch selbst durch Atmung von Pflanzen und Tieren in gleichem Maße. Netto produziert er kaum Sauerstoff. Der meiste O₂ der Atmosphäre stammt aus dem Ozean (Phytoplankton).'
  },
  {
    id: 2403,
    type: 'choice',
    category: 'Umwelt',
    difficulty: 'schwer',
    question: 'Was ist das "Great Pacific Garbage Patch"?',
    options: ['Eine künstliche Insel aus Plastikmüll', 'Eine Ansammlung von Mikroplastik und Müll im Pazifik', 'Ein versunkener Kontinent', 'Ein Ölteppich'],
    correct: 'Eine Ansammlung von Mikroplastik und Müll im Pazifik',
    funFact: 'Der "Große Pazifische Müllstrudel" ist kein festes Island, sondern eine Ansammlung von Millionen Plastikteilchen, die durch Meeresströmungen konzentriert werden – er ist etwa dreimal so groß wie Frankreich und kaum sichtbar an der Oberfläche.'
  },

  /* ════════════════════════════════════════════════════════
     NISCHE / SEHR SCHWERE FRAGEN
  ════════════════════════════════════════════════════════ */
  {
    id: 2501,
    type: 'choice',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Was beschreibt das "Fermi-Paradoxon"?',
    options: ['Ein Problem der Kernphysik', 'Der scheinbare Widerspruch zwischen der Wahrscheinlichkeit außerirdischen Lebens und dem Fehlen von Kontakten', 'Ein mathematisches Optimierungsproblem', 'Eine Theorie über Schwarze Löcher'],
    correct: 'Der scheinbare Widerspruch zwischen der Wahrscheinlichkeit außerirdischen Lebens und dem Fehlen von Kontakten',
    funFact: 'Enrico Fermi fragte 1950: "Wo sind all die Außerirdischen?" Bei Milliarden Sternen und Planeten sollte intelligentes Leben häufig sein – aber es gibt kein Zeichen davon. Dieses Paradoxon ist bis heute ungelöst.'
  },
  {
    id: 2502,
    type: 'truefalse',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Die Kleopatra lebte zeitlich näher an der Mondlandung als an der Errichtung der Großen Pyramide.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die Große Pyramide wurde ca. 2560 v. Chr. gebaut. Kleopatra lebte ca. 69-30 v. Chr. – das sind ~2.490 Jahre nach der Pyramide. Die Mondlandung war 1969 – das sind nur ~2.000 Jahre nach Kleopatra. Zeitperspektiven können täuschen!'
  },
  {
    id: 2503,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Was ist Telomere?',
    options: ['Eine Art Virus', 'Schützende Endkappen auf Chromosomen, verbunden mit Alterung', 'Ein Gehirnbereich', 'Eine Enzymklasse'],
    correct: 'Schützende Endkappen auf Chromosomen, verbunden mit Alterung',
    funFact: 'Telomere sind repetitive DNA-Sequenzen an den Enden der Chromosomen. Bei jeder Zellteilung werden sie kürzer. Wenn sie aufgebraucht sind, stirbt die Zelle – ein Mechanismus des biologischen Alterns. Elizabeth Blackburn erhielt 2009 den Nobelpreis dafür.'
  },
  {
    id: 2504,
    type: 'choice',
    category: 'Physik',
    difficulty: 'schwer',
    question: 'Was beschreibt das "Quanten-Zeno-Paradoxon"?',
    options: ['Licht verhält sich wie Welle und Teilchen', 'Regelmäßige Beobachtung verhindert den Zerfall eines instabilen Quantensystems', 'Teilchen können sich schneller als Licht bewegen', 'Schwarze Löcher verdampfen'],
    correct: 'Regelmäßige Beobachtung verhindert den Zerfall eines instabilen Quantensystems',
    funFact: 'Der Quantenzeno-Effekt zeigt: Ein unstabiles Atom, das häufig "beobachtet" wird (durch Messung), zerfällt langsamer. Der Akt der Messung beeinflusst das System direkt – eine bizarre Eigenschaft der Quantenmechanik.'
  },
  {
    id: 2505,
    type: 'truefalse',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Oxford University ist älter als die Azteken.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die Universität Oxford begann ihre Lehrveranstaltungen um 1096–1167 n. Chr. Das Aztekische Reich wurde erst ca. 1428 n. Chr. mit der Gründung der Triple Alliance gegründet. Oxford ist also über 250 Jahre älter!'
  },
  {
    id: 2506,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Was ist die "Tragedy of the Commons" (Tragödie der Allmende)?',
    options: ['Ein Bankenkollaps', 'Übernutzung gemeinsamer Ressourcen durch individuell rationale Akteure', 'Ein Börsenproblem', 'Eine Theorie über staatliche Monopole'],
    correct: 'Übernutzung gemeinsamer Ressourcen durch individuell rationale Akteure',
    funFact: 'Garrett Hardin beschrieb 1968, wie gemeinsam genutzte Ressourcen (z.B. Weideland, Fischgründe, Luft) zerstört werden, weil jeder Einzelne mehr entnimmt als nachhaltig wäre. Das Konzept erklärt Klimawandel, Überfischung und viele andere Kollektivprobleme.'
  },
  {
    id: 2507,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Was bedeutet "Backronym"?',
    options: ['Ein rückwärts geschriebenes Wort', 'Ein Akronym, das nachträglich für ein bereits existierendes Wort erfunden wurde', 'Ein Dialektwort', 'Eine Art von Reimschema'],
    correct: 'Ein Akronym, das nachträglich für ein bereits existierendes Wort erfunden wurde',
    funFact: 'SMART (Specific, Measurable, Achievable, Relevant, Time-bound) oder SOS ("Save Our Souls") sind Backronyme – SOS hat keine offizielle Bedeutung, die Legende wurde nachträglich erfunden. "SOS" wurde gewählt, weil es im Morse-Code einfach ist (···−−−···).'
  },
  {
    id: 2508,
    type: 'truefalse',
    category: 'Mathematik',
    difficulty: 'schwer',
    question: 'Es gibt mehr Anordnungen eines normalen Kartenspiels (52 Karten) als Sandkörner auf der Erde.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: '52! (52 Fakultät) ≈ 8 × 10⁶⁷. Auf der Erde gibt es schätzungsweise 7,5 × 10¹⁸ Sandkörner. Die Anzahl der Kartendeck-Permutationen ist ca. 10⁴⁹ Mal größer als Sandkörner auf der Erde. Jedes Mal, wenn du mischst, entsteht sehr wahrscheinlich eine einzigartige Reihenfolge.'
  },
  {
    id: 2509,
    type: 'choice',
    category: 'Physik',
    difficulty: 'schwer',
    question: 'Wofür steht das "E" in Einsteins Formel E=mc²?',
    options: ['Elektronen', 'Elektrizität', 'Energie', 'Expansion'],
    correct: 'Energie',
    funFact: 'E steht für Energie, m für Masse und c für die Lichtgeschwindigkeit (ca. 3×10⁸ m/s). Die Formel zeigt, dass Masse und Energie äquivalent sind. Schon wenig Masse entspricht gigantischer Energie – das ist die Basis der Kernenergie.'
  },
  {
    id: 2510,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Warum schlafen Vögel nicht vom Ast, obwohl sie im Schlaf die Muskeln entspannen?',
    options: ['Sie haben starke Krallen', 'Ihr Greifreflex verstärkt sich beim Beugen der Knie', 'Sie balancieren automatisch', 'Sie schlafen nie tief'],
    correct: 'Ihr Greifreflex verstärkt sich beim Beugen der Knie',
    funFact: 'Vögel haben einen "Sehnenverriegelungs-Mechanismus": Wenn sie die Knie beugen (beim Landen/Sitzen), zieht eine Sehne automatisch die Zehen zusammen. Je schwerer der Vogel, desto fester der Griff – sie können buchstäblich nicht fallen.'
  },

  /* ════════════════════════════════════════════════════════
     REIHENFOLGE-AUFGABEN (ORDER)
  ════════════════════════════════════════════════════════ */
  {
    id: 2601,
    type: 'order',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Sortiere diese Unternehmen nach Gründungsjahr – vom ältesten zum jüngsten.',
    items: ['Apple', 'Google', 'Amazon', 'Microsoft'],
    correct: ['Microsoft', 'Apple', 'Amazon', 'Google'],
    funFact: 'Microsoft wurde 1975 gegründet, Apple 1976, Amazon 1994 und Google 1998 – heute sind alle vier unter den wertvollsten Unternehmen der Welt.'
  },
  {
    id: 2602,
    type: 'order',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Ordne diese Elemente nach ihrem Atomgewicht – vom leichtesten zum schwersten.',
    items: ['Eisen (Fe)', 'Helium (He)', 'Gold (Au)', 'Kohlenstoff (C)'],
    correct: ['Helium (He)', 'Kohlenstoff (C)', 'Eisen (Fe)', 'Gold (Au)'],
    funFact: 'Helium hat Atomgewicht 4, Kohlenstoff 12, Eisen 56 und Gold 197. Gold ist eines der schwersten stabilen Elemente – es ist so dicht, dass ein Würfel mit 38 cm Kantenlänge bereits eine Tonne wiegt.'
  },
  {
    id: 2603,
    type: 'order',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Bringe diese Erfindungen in chronologische Reihenfolge (älteste zuerst).',
    items: ['Buchdruck (Gutenberg)', 'Glühbirne (Edison)', 'Dampfmaschine', 'Telefon (Bell)'],
    correct: ['Buchdruck (Gutenberg)', 'Dampfmaschine', 'Telefon (Bell)', 'Glühbirne (Edison)'],
    funFact: 'Gutenbergs Buchdruck ca. 1450, Dampfmaschine (Watt) ca. 1769, Telefon 1876, Glühbirne 1879. Innerhalb von nur 100 Jahren folgten drei Erfindungen, die die Welt revolutionierten.'
  },
  {
    id: 2604,
    type: 'order',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Sortiere diese Städte nach Einwohnerzahl (Großraum) – von der kleinsten zur größten.',
    items: ['Berlin', 'Tokio', 'Cairo', 'São Paulo'],
    correct: ['Berlin', 'Cairo', 'São Paulo', 'Tokio'],
    funFact: 'Tokio ist mit über 37 Millionen Menschen im Großraum die bevölkerungsreichste Metropolregion der Welt. Berlin hat etwa 3,5 Millionen Einwohner.'
  },
  {
    id: 2605,
    type: 'order',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Sortiere diese James-Bond-Darsteller nach ihrem ersten Auftritt als 007 (ältestes zuerst).',
    items: ['Daniel Craig', 'Sean Connery', 'Pierce Brosnan', 'Roger Moore'],
    correct: ['Sean Connery', 'Roger Moore', 'Pierce Brosnan', 'Daniel Craig'],
    funFact: 'Sean Connery debütierte 1962 in "Dr. No". Roger Moore übernahm 1973, Pierce Brosnan 1995 und Daniel Craig 2006. Insgesamt haben sieben Schauspieler James Bond gespielt.'
  },

  /* ════════════════════════════════════════════════════════
     MEHR TRUEFALSE – KNIFFLIG
  ════════════════════════════════════════════════════════ */
  {
    id: 2701,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'In Russland gibt es mehr Zeitzonen als in den USA.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Russland hat 11 Zeitzonen, die USA (inkl. Territorien) haben 9. Russland erstreckt sich über 170° Längengrade – von Kaliningrad (westlicher als Berlin) bis zur Tschuktschen-Halbinsel (östlicher als Japan).'
  },
  {
    id: 2702,
    type: 'truefalse',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Schall reist schneller durch feste Materialien als durch Luft.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Schall reist durch Luft mit ~343 m/s, durch Wasser mit ~1.480 m/s und durch Stahl mit ~5.120 m/s. Das liegt daran, dass Moleküle in festen Stoffen enger zusammenstehen und Energie schneller übertragen.'
  },
  {
    id: 2703,
    type: 'truefalse',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Krokodile können klettern.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Krokodile können tatsächlich auf Bäume klettern, um sich zu sonnen oder einen Überblick zu gewinnen. Forscher entdeckten dieses Verhalten 2014 auf allen Kontinenten, auf denen Krokodile leben.'
  },
  {
    id: 2704,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Frankreichs Territorium in Übersee macht es zum Land mit der zweitgrößten Ausschließlichen Wirtschaftszone.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Dank seiner Überseegebiete auf der ganzen Welt (Guadeloupe, Martinique, La Réunion, Neukaledonien, etc.) hat Frankreich die zweitgrößte Ausschließliche Wirtschaftszone (AWZ) der Welt – nur die USA haben eine größere.'
  },
  {
    id: 2705,
    type: 'truefalse',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Honig verdirbt nie – archäologisch gefundener Honig ist noch genießbar.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'In ägyptischen Gräbern wurden Honigtöpfe gefunden, die über 3.000 Jahre alt sind und noch genießbar waren. Honig verdirbt nicht, weil er zu wenig Wasser enthält für Bakterien, und weil er natürliche antibiotische Stoffe wie Wasserstoffperoxid enthält.'
  },
  {
    id: 2706,
    type: 'truefalse',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Wikipedia ist eine der meistbesuchten Websites der Welt.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Wikipedia gehört regelmäßig zu den Top-10 meistbesuchten Websites weltweit – und ist dabei eine gemeinnützige Organisation ohne kommerzielle Werbung. Sie wird hauptsächlich durch Spenden finanziert und von Freiwilligen geschrieben.'
  },

  /* ════════════════════════════════════════════════════════
     NOCH MEHR INPUT-FRAGEN
  ════════════════════════════════════════════════════════ */
  {
    id: 2801,
    type: 'input',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Wie heißt die Hauptstadt Japans?',
    correct: 'Tokio',
    acceptedAnswers: ['Tokio', 'Tokyo', 'tokio', 'tokyo'],
    funFact: 'Tokio (früher "Edo") ist seit 1869 die Hauptstadt Japans. Die Metropolregion ist mit über 37 Millionen Menschen die bevölkerungsreichste der Welt.'
  },
  {
    id: 2802,
    type: 'input',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wie hieß das Schiff, auf dem Charles Darwin seine berühmte Forschungsreise unternahm?',
    correct: 'Beagle',
    acceptedAnswers: ['Beagle', 'HMS Beagle', 'beagle'],
    funFact: 'Darwin fuhr von 1831–1836 auf der HMS Beagle – eine fünfjährige Weltreise, die seine Theorien zur Evolution grundlegend beeinflusste. Die Galapagos-Inseln waren ein entscheidender Teil dieser Reise.'
  },
  {
    id: 2803,
    type: 'input',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Wie nennt man die Einheit, mit der die Frequenz von Schallwellen gemessen wird?',
    correct: 'Hertz',
    acceptedAnswers: ['Hertz', 'Hz', 'hertz'],
    funFact: 'Die Einheit Hertz (Hz) wurde nach Heinrich Hertz benannt, der 1887 elektromagnetische Wellen nachwies. Ein Hertz entspricht einem Schwingungsvorgang pro Sekunde. Menschliches Gehör reicht von 20 Hz bis 20.000 Hz.'
  },
  {
    id: 2804,
    type: 'input',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Wie heißt das bekannteste Aktienbewertungsmaß, das Kurs und Gewinn ins Verhältnis setzt?',
    correct: 'KGV',
    acceptedAnswers: ['KGV', 'Kurs-Gewinn-Verhältnis', 'P/E Ratio', 'P/E', 'PE-Ratio'],
    funFact: 'Das Kurs-Gewinn-Verhältnis (KGV, englisch P/E Ratio) zeigt, wie viel Anleger bereit sind, für einen Euro Unternehmensgewinn zu zahlen. Ein KGV von 15–20 gilt historisch als fair bewertet.'
  },
  {
    id: 2805,
    type: 'input',
    category: 'Kultur',
    difficulty: 'leicht',
    question: 'Wie viele Farben hat ein normaler Regenbogen?',
    correct: '7',
    acceptedAnswers: ['7', 'sieben'],
    funFact: 'Die sieben Farben des Regenbogens sind Rot, Orange, Gelb, Grün, Blau, Indigo und Violett. Tatsächlich ist ein Regenbogen ein kontinuierliches Spektrum – die Zahl 7 geht auf Isaac Newton zurück, der sie in Analogie zu den 7 Noten der Tonleiter wählte.'
  },
  {
    id: 2806,
    type: 'input',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Wie nennt man den Prozess, durch den Pflanzen Sonnenlicht in Energie umwandeln?',
    correct: 'Photosynthese',
    acceptedAnswers: ['Photosynthese', 'photosynthese', 'Fotosynthese'],
    funFact: 'Die Photosynthese ist der wichtigste chemische Prozess auf der Erde – ohne ihn gäbe es kaum Sauerstoff und keine pflanzliche Nahrung. Die Formel: 6CO₂ + 6H₂O + Licht → C₆H₁₂O₆ + 6O₂.'
  },
  {
    id: 2807,
    type: 'input',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: 'Wie lautet der pythagoräische Lehrsatz? (Formel für rechtwinklige Dreiecke)',
    correct: 'a² + b² = c²',
    acceptedAnswers: ['a² + b² = c²', 'a^2 + b^2 = c^2', 'a2+b2=c2'],
    funFact: 'Der Satz des Pythagoras ist einer der ältesten mathematischen Sätze. Er wurde bereits 1.000 Jahre vor Pythagoras in Babylonien und Ägypten angewendet – aber er war der erste, der einen formalen Beweis lieferte.'
  },
  {
    id: 2808,
    type: 'input',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Welches Land hat die längste Landesgrenze mit Deutschland?',
    correct: 'Österreich',
    acceptedAnswers: ['Österreich', 'oesterreich', 'austria'],
    hint: 'Deutschland grenzt an 9 Länder.',
    funFact: 'Österreich teilt mit Deutschland eine Grenze von ca. 801 km – die längste aller deutschen Nachbarstaaten. Deutschland grenzt insgesamt an 9 Länder: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande.'
  },

  /* ════════════════════════════════════════════════════════
     ZUSÄTZLICHE CHOICE-FRAGEN (VERSCHIEDENE BEREICHE)
  ════════════════════════════════════════════════════════ */
  {
    id: 2901,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'leicht',
    question: 'Was ist das häufigste Gas in der Erdatmosphäre?',
    options: ['Sauerstoff', 'Kohlendioxid', 'Stickstoff', 'Argon'],
    correct: 'Stickstoff',
    funFact: 'Die Erdatmosphäre besteht zu 78 % aus Stickstoff und nur zu 21 % aus Sauerstoff. Das restliche 1 % ist hauptsächlich Argon und Spurengase wie CO₂.'
  },
  {
    id: 2902,
    type: 'choice',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Welche Filmreihe hat weltweit das meiste Geld eingespielt?',
    options: ['Star Wars', 'James Bond', 'Marvel Cinematic Universe', 'Harry Potter'],
    correct: 'Marvel Cinematic Universe',
    funFact: 'Das Marvel Cinematic Universe hat mit über 30 Filmen mehr als 30 Milliarden Dollar eingespielt und ist damit die erfolgreichste Filmreihe aller Zeiten.'
  },
  {
    id: 2903,
    type: 'choice',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'Welches Land ist der weltgrößte Schokoladenproduzent?',
    options: ['Schweiz', 'Belgien', 'Deutschland', 'Elfenbeinküste'],
    correct: 'Elfenbeinküste',
    hint: 'Es geht um die Kakaoproduktion.',
    funFact: 'Die Elfenbeinküste (Côte d\'Ivoire) produziert etwa 40 % des weltweiten Kakaos. Die Schweiz ist dagegen vor allem bekannt für die Verarbeitung und Qualität ihrer Schokolade, nicht für die Rohstoffproduktion.'
  },
  {
    id: 2904,
    type: 'choice',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Welche Band verkaufte die meisten Alben aller Zeiten?',
    options: ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Elvis Presley'],
    correct: 'The Beatles',
    funFact: 'The Beatles haben schätzungsweise 600 Millionen Einheiten verkauft und gelten als die kommerziell erfolgreichste Band aller Zeiten. Sie existierten nur von 1960 bis 1970 – gerade mal 10 Jahre.'
  },
  {
    id: 2905,
    type: 'choice',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Welche Sportart wird mit einem "Puck" gespielt?',
    options: ['Polo', 'Cricket', 'Eishockey', 'Lacrosse'],
    correct: 'Eishockey',
    funFact: 'Ein Eishockey-Puck ist eine flache Scheibe aus vulkanisiertem Gummi, 25 mm dick und 76 mm im Durchmesser. Sie wiegt 156–170 Gramm. Bei professionellen Spielen werden Pucks vor dem Spiel eingefroren, damit sie weniger springen.'
  },
  {
    id: 2906,
    type: 'choice',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Was ist das "Halting Problem" in der Informatik?',
    options: ['Ein Bug in Computerprogrammen', 'Die Unmöglichkeit, allgemein zu bestimmen, ob ein Programm terminiert', 'Ein Netzwerkprotokoll', 'Eine Datenbankmethode'],
    correct: 'Die Unmöglichkeit, allgemein zu bestimmen, ob ein Programm terminiert',
    funFact: 'Alan Turing bewies 1936, dass es kein allgemeines Verfahren geben kann, das für jedes beliebige Computerprogramm entscheidet, ob es irgendwann anhält oder für immer läuft. Ein fundamentales Ergebnis der Informatik.'
  },
  {
    id: 2907,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Was ist DNA eine Abkürzung für?',
    options: ['Dynamic Nucleus Acid', 'Deoxyribonucleic Acid', 'Deoxyribose Nitrogen Acid', 'Dipeptide Nucleic Acid'],
    correct: 'Deoxyribonucleic Acid',
    funFact: 'DNA (Desoxyribonukleinsäure) enthält die genetische Information aller bekannten Lebewesen. Die Doppelhelix-Struktur wurde 1953 von Watson und Crick entdeckt – basierend wesentlich auf den Röntgenaufnahmen von Rosalind Franklin.'
  },
  {
    id: 2908,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Was war die "Magna Carta"?',
    options: ['Der erste europäische Verfassungsvertrag', 'Eine englische Urkunde von 1215, die königliche Macht begrenzte', 'Der Friedensvertrag nach dem Hundertjährigen Krieg', 'Eine päpstliche Erklärung'],
    correct: 'Eine englische Urkunde von 1215, die königliche Macht begrenzte',
    funFact: 'Die Magna Carta (Große Charta) von 1215 zwang König Johann von England, bestimmte Rechte zu garantieren und seine Macht zu beschränken. Sie gilt als eine der wichtigsten Grundlagen des Verfassungsrechts und beeinflusste die US-Verfassung und die Menschenrechtserklärungen.'
  },
  {
    id: 2909,
    type: 'choice',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Welcher Himmelskörper verursacht die Gezeiten auf der Erde?',
    options: ['Die Sonne', 'Der Mond', 'Beide gleich stark', 'Hauptsächlich der Mond, etwas auch die Sonne'],
    correct: 'Hauptsächlich der Mond, etwas auch die Sonne',
    funFact: 'Der Mond verursacht etwa 70 % der Gezeiten, die Sonne etwa 30 %. Bei Voll- und Neumond (Sonne, Erde und Mond in einer Linie) addieren sich beide Kräfte zu Springtide; bei Halbmond entstehen die schwächeren Nipptiden.'
  },
  {
    id: 2910,
    type: 'choice',
    category: 'Philosophie',
    difficulty: 'mittel',
    question: 'Was versteht man unter "Solipsismus"?',
    options: ['Die Überzeugung, dass nur das eigene Bewusstsein sicher existiert', 'Ein Glaube an mehrere Götter', 'Eine Form des Nihilismus', 'Die Theorie, dass alles relativ ist'],
    correct: 'Die Überzeugung, dass nur das eigene Bewusstsein sicher existiert',
    funFact: 'Solipsismus ist philosophisch schwer zu widerlegen: Wie wissen wir, dass die Außenwelt nicht nur eine Einbildung ist? Descartes "Cogito, ergo sum" war ein Versuch, trotz solipsistischer Überlegungen sicheres Wissen zu begründen.'
  },
  {
    id: 2911,
    type: 'choice',
    category: 'Autos',
    difficulty: 'schwer',
    question: 'Was bedeutet der Begriff "Torque vectoring" beim Auto?',
    options: ['Elektrischer Antrieb', 'Gezielte Verteilung des Drehmoments auf einzelne Räder', 'Automatisches Bremssystem', 'Allradantrieb-Technologie'],
    correct: 'Gezielte Verteilung des Drehmoments auf einzelne Räder',
    funFact: 'Torque Vectoring ermöglicht aktive Verteilung der Antriebskraft auf einzelne Räder – z.B. mehr Kraft aufs kurvenäußere Rad beim Abbiegen. Es verbessert Handling dramatisch und ist heute in vielen Sportwagen verbaut.'
  },
  {
    id: 2912,
    type: 'choice',
    category: 'Popkultur',
    difficulty: 'leicht',
    question: 'Was ist das meistgestreamte Lied aller Zeiten auf Spotify?',
    options: ['Shape of You (Ed Sheeran)', 'Blinding Lights (The Weeknd)', 'Dance Monkey (Tones and I)', 'Bad Guy (Billie Eilish)'],
    correct: 'Blinding Lights (The Weeknd)',
    funFact: '"Blinding Lights" von The Weeknd aus dem Jahr 2019 hielt lange den Rekord als meistgestreamtes Lied auf Spotify mit über 4 Milliarden Streams. Der Retro-80s-Synthpop-Sound traf den Nerv einer ganzen Generation.'
  },
  {
    id: 2913,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Was ist ein "Hapax Legomenon"?',
    options: ['Eine tote Sprache', 'Ein Wort, das in einem Korpus nur ein einziges Mal vorkommt', 'Ein grammatikalischer Fehler', 'Ein uraltes Schriftsystem'],
    correct: 'Ein Wort, das in einem Korpus nur ein einziges Mal vorkommt',
    funFact: 'Hapax Legomenon (griechisch: "einmal gesagt") bezeichnet Wörter, die in einem gesamten Textkorpus nur einmal erscheinen. In der Bibel gibt es Hunderte solcher Wörter, deren Bedeutung bis heute umstritten ist.'
  },
  {
    id: 2914,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Was ist "Quantitative Easing" (QE)?',
    options: ['Steuererhöhungen', 'Zentralbankprogramm zum Ankauf von Wertpapieren zur Geldmengenerhöhung', 'Haushaltskürzungen', 'Privatisierung staatlicher Unternehmen'],
    correct: 'Zentralbankprogramm zum Ankauf von Wertpapieren zur Geldmengenerhöhung',
    funFact: 'Beim Quantitative Easing kauft eine Zentralbank (wie EZB oder Fed) Wertpapiere auf, um Geld in die Wirtschaft zu pumpen. Es wurde nach der Finanzkrise 2008 und in der Coronakrise massiv eingesetzt und ist bis heute umstritten.'
  },
  {
    id: 2915,
    type: 'choice',
    category: 'Natur',
    difficulty: 'mittel',
    question: 'Was ist ein "Tsunami"?',
    options: ['Ein tropischer Wirbelsturm', 'Eine durch Unterwasserbeben ausgelöste Riesenwelle', 'Eine Art Tornado', 'Ein Monsunregen'],
    correct: 'Eine durch Unterwasserbeben ausgelöste Riesenwelle',
    funFact: 'Tsunamis können auf dem offenen Meer nur wenige Zentimeter hoch sein und kaum bemerkt werden – beim Auftreffen auf Küstenlinien türmen sie sich jedoch auf Dutzende Meter Höhe. Der Tsunami 2004 im Indischen Ozean tötete über 230.000 Menschen.'
  },
  {
    id: 2916,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wie hieß das erste Raumfahrzeug, das den Mond umkreiste?',
    options: ['Apollo 8', 'Sputnik', 'Luna 1', 'Vostok'],
    correct: 'Apollo 8',
    funFact: 'Apollo 8 (Dezember 1968) war die erste bemannte Mission, die den Mond umkreiste. Die Astronauten Frank Borman, James Lovell und William Anders lasen am Heiligabend aus der Genesis für das Fernsehen – die meistgesehene Sendung aller Zeiten zu der Zeit.'
  },
  {
    id: 2917,
    type: 'choice',
    category: 'Biologie',
    difficulty: 'leicht',
    question: 'Was ist die biologische Klassifikationseinheit direkt über der Art (Species)?',
    options: ['Familie', 'Ordnung', 'Gattung', 'Klasse'],
    correct: 'Gattung',
    funFact: 'Die Hierarchie lautet: Reich – Stamm – Klasse – Ordnung – Familie – Gattung – Art. Der Mensch ist Homo (Gattung) sapiens (Art). Homo heidelbergensis war ein ausgestorbener Gattungsverwandter.'
  },
  {
    id: 2918,
    type: 'choice',
    category: 'Mathematik',
    difficulty: 'schwer',
    question: 'Was ist die "Goldene Zahl" (Phi φ)?',
    options: ['3,14159...', '1,41421...', '1,61803...', '2,71828...'],
    correct: '1,61803...',
    funFact: 'Der Goldene Schnitt φ ≈ 1,618 taucht in der Natur (Spiralen von Muscheln, Blütenstände), in der Kunst (Renaissance-Gemälde) und in der Architektur auf. Die Fibonacci-Folge approximiert ihn zunehmend genau.'
  },
  {
    id: 2919,
    type: 'choice',
    category: 'Popkultur',
    difficulty: 'mittel',
    question: 'In welchem Jahr erschien das erste iPhone?',
    options: ['2005', '2006', '2007', '2008'],
    correct: '2007',
    funFact: 'Steve Jobs stellte das erste iPhone am 9. Januar 2007 auf der Macworld Conference vor und nannte es "revolutionär". Es hatte kein App Store und keine Kamera-Videoaufnahme – aber es veränderte die Mobilfunkbranche für immer.'
  },
  {
    id: 2920,
    type: 'choice',
    category: 'Medizin',
    difficulty: 'schwer',
    question: 'Was ist das Placebo-Nocebo-Phänomen?',
    options: ['Placebo hilft, Nocebo schadet – allein durch Erwartung', 'Zwei Medikamente mit gleicher Wirkung', 'Ein Medikamenten-Testverfahren', 'Zwei verschiedene Schmerzmittel'],
    correct: 'Placebo hilft, Nocebo schadet – allein durch Erwartung',
    funFact: 'Placebo (lateinisch: "ich werde gefallen") lindert Schmerzen durch positive Erwartung. Nocebo ("ich werde schaden") verursacht reale Nebenwirkungen allein durch negative Erwartungen. Beide Effekte sind neurologisch messbar und klinisch bedeutsam.'
  },

  /* ════════════════════════════════════════════════════════
     ABSCHLUSS: WEITERE KNIFFLIGE FRAGEN
  ════════════════════════════════════════════════════════ */
  {
    id: 3001,
    type: 'truefalse',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Die Venus dreht sich extrem langsam: Ein Venustag (243 Erdtage) ist länger als ein Venusjahr (225 Erdtage). Außerdem dreht sie sich rückwärts im Vergleich zu den meisten anderen Planeten.'
  },
  {
    id: 3002,
    type: 'choice',
    category: 'Allgemeinwissen',
    difficulty: 'schwer',
    question: 'Was ist die Antwort auf die Frage nach dem Leben, dem Universum und allem anderen laut "Per Anhalter durch die Galaxis"?',
    options: ['Pi', '7', '42', 'Unendlich'],
    correct: '42',
    funFact: 'In Douglas Adams\' Romanreihe "Per Anhalter durch die Galaxis" (1979) berechnet ein Supercomputer namens "Deep Thought" über Millionen von Jahren die "Antwort auf die Frage nach dem Leben, dem Universum und allem anderen" – sie lautet: 42.'
  },
  {
    id: 3003,
    type: 'choice',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Was bedeutet das deutsche Wort "Verschlimmbessern"?',
    options: ['Deutlich verbessern', 'Etwas durch den Versuch zu verbessern noch schlimmer machen', 'Kompromisse schließen', 'Übertrieben optimistisch sein'],
    correct: 'Etwas durch den Versuch zu verbessern noch schlimmer machen',
    funFact: '"Verschlimmbessern" ist ein typisches deutsches Kompositum und eines der Wörter, die international als Beispiel für die Ausdrucksstärke der deutschen Sprache zitiert werden. Es hat keine direkte Übersetzung in andere Sprachen.'
  },
  {
    id: 3004,
    type: 'truefalse',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Das menschliche Auge kann etwa 10 Millionen verschiedene Farben unterscheiden.',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Das menschliche Auge hat drei Typen von Farbrezeptoren (Zapfen) für Rot, Grün und Blau. In Kombination können wir etwa 10 Millionen Farbnuancen unterscheiden. Tetrachromaten (meist Frauen) haben vier Rezeptortypen und sehen noch mehr Farben.'
  },
  {
    id: 3005,
    type: 'choice',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Was steht hinter dem Begriff "Open Source"?',
    options: ['Kostenloses Software', 'Software mit öffentlich zugänglichem Quellcode', 'Sicherheitslücken in Software', 'Cloud-Technologie'],
    correct: 'Software mit öffentlich zugänglichem Quellcode',
    funFact: 'Open Source bedeutet, dass der Quellcode öffentlich zugänglich und oft frei veränderbar ist. Linux, Firefox, Android und der Großteil des Internets laufen auf Open-Source-Software. Open Source bedeutet nicht zwingend kostenlos.'
  },
  {
    id: 3006,
    type: 'choice',
    category: 'Autos',
    difficulty: 'mittel',
    question: 'Was misst der "Hubraum" bei einem Verbrennungsmotor?',
    options: ['Die Anzahl der Zylinder', 'Das Gesamtvolumen aller Zylinder', 'Die Motorleistung in PS', 'Die Kraftstoffeffizienz'],
    correct: 'Das Gesamtvolumen aller Zylinder',
    funFact: 'Der Hubraum (in Liter oder cm³) beschreibt das Gesamtvolumen aller Zylinder. Ein "2.0-Liter-Motor" hat Zylinder mit einem Gesamthubraum von 2.000 cm³. Mehr Hubraum bedeutet in der Regel mehr Leistungspotenzial, aber auch mehr Verbrauch.'
  },
  {
    id: 3007,
    type: 'choice',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wer erfand die Dampfmaschine?',
    options: ['Thomas Edison', 'James Watt', 'Robert Fulton', 'George Stephenson'],
    correct: 'James Watt',
    hint: 'Er verbesserte eine bestehende Maschine grundlegend.',
    funFact: 'James Watt verbesserte 1769 die Dampfmaschine von Thomas Newcomen fundamental und ermöglichte damit die Industrielle Revolution. Die Einheit Watt (W) ist nach ihm benannt.'
  },
  {
    id: 3008,
    type: 'truefalse',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Manche Pflanzen können sich durch elektrische Impulse "kommunizieren".',
    options: ['Wahr', 'Falsch'],
    correct: 'Wahr',
    funFact: 'Pflanzen wie die Mimosa pudica (Schamhafte Sinnpflanze) nutzen elektrische Impulse ähnlich wie Nervenimpulse. Neuere Forschungen zeigen, dass Pflanzen auf Verletzungen mit elektrischen Signalen reagieren, die durch das Gewebe wandern – eine primitive Form der "Kommunikation".'
  },
  {
    id: 3009,
    type: 'choice',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Was ist ein "Pulsar"?',
    options: ['Ein Stern in der Entstehungsphase', 'Ein schnell rotierender Neutronenstern der regelmäßige Strahlungsimpulse aussendet', 'Ein Schwarzes Loch', 'Eine Galaxie mit aktivem Kern'],
    correct: 'Ein schnell rotierender Neutronenstern der regelmäßige Strahlungsimpulse aussendet',
    funFact: 'Pulsare wurden 1967 von Jocelyn Bell Burnell entdeckt. Ihre regelmäßigen Impulse sind so präzise, dass sie zunächst für künstliche Signale gehalten wurden ("LGM-1" – Little Green Men). Einige Pulsare rotieren hunderte Male pro Sekunde.'
  },
  {
    id: 3010,
    type: 'choice',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Was ist eine "Rezession" in der Wirtschaft?',
    options: ['Wirtschaftswachstum von unter 1%', 'Zwei aufeinanderfolgende Quartale mit negativem BIP-Wachstum', 'Staatsbankrott', 'Hohe Inflation'],
    correct: 'Zwei aufeinanderfolgende Quartale mit negativem BIP-Wachstum',
    funFact: 'Die technische Definition einer Rezession sind zwei aufeinanderfolgende Quartale mit negativem BIP-Wachstum. Eine "Depression" ist eine tiefere, längere Rezession – wie die Große Depression der 1930er Jahre, die über ein Jahrzehnt andauerte.'
  },
  /* ══════════════════════════════════════════════════════════
   wissen-questions-new-types.js
   250 neue Fragen in den fünf neuen Fragetypen:
     audio       – Audiodatei anhören, dann antworten
     image       – Bild betrachten, dann antworten
     slider      – Zahl/Wert schätzen
     multiselect – Mehrere richtige Antworten auswählen
     memory      – Kartenpaare merken und zuordnen

   Bildpfade (image) und Audiodateien (audio) sind als
   Platzhalter eingetragen und werden später ersetzt.

   KATEGORIEN: Geographie, Geschichte, Wissenschaft, Natur,
   Biologie, Astronomie, Musik, Film, Kunst, Sport, Technik,
   Mathematik, Tiere, Essen & Trinken, Wirtschaft, Sprache,
   Popkultur, Allgemeinwissen, Medizin, Literatur, Politik
══════════════════════════════════════════════════════════ */

  /* ════════════════════════════════════════════════════════
     🎵  AUDIO  (50 Fragen)
     Format:
       type: 'audio'
       audio: 'pfad/zur/datei.mp3'   ← Platzhalter
       audioLabel: 'was zu hören ist'
       question: Frage nach dem Clip
       options: [4 Antworten]
       correct: richtige Antwort
  ════════════════════════════════════════════════════════ */
  {
    id: 5001,
    type: 'audio',
    category: 'Musik',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/beethoven.mp3',
    audioLabel: 'Klassisches Musikstück',
    question: 'Von welchem Komponisten stammt dieses weltberühmte Orchesterwerk?',
    options: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Franz Schubert', 'Johannes Brahms'],
    correct: 'Ludwig van Beethoven',
    funFact: 'Beethovens 5. Sinfonie beginnt mit dem berühmtesten Motiv der Musikgeschichte: drei kurze und ein langer Ton – „ta-ta-ta-TAA". Beethoven komponierte sie zwischen 1804 und 1808, obwohl er zu dieser Zeit bereits fast taub war.'
  },
  {
    id: 5002,
    type: 'audio',
    category: 'Natur',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/wolf.mp3',
    audioLabel: 'Tiergeräusch',
    question: 'Welches Tier ist in diesem Audioclip zu hören?',
    options: ['Kojote', 'Wolf', 'Hyäne', 'Hund'],
    correct: 'Wolf',
    funFact: 'Wölfe heulen hauptsächlich zur Kommunikation innerhalb des Rudels – um Kontakt zu halten, Territorien zu markieren oder sich zu koordinieren. Jeder Wolf hat eine individuelle Heulfrequenz, an der Rudelmitglieder ihn erkennen können.'
  },
  {
    id: 5003,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/lamarseillaise.mp3',
    audioLabel: 'Nationalhymne',
    question: 'Die Nationalhymne welchen Landes ist in diesem Clip zu hören?',
    options: ['Belgien', 'Schweiz', 'Frankreich', 'Kanada'],
    correct: 'Frankreich',
    funFact: 'La Marseillaise wurde 1792 von Claude Joseph Rouget de Lisle in einer einzigen Nacht komponiert. Sie ist eine der leidenschaftlichsten Nationalhymnen der Welt – und eine der wenigen, die explizit zum bewaffneten Kampf aufruft.'
  },
  {
    id: 5004,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/kuckuck.mp3',
    audioLabel: 'Vogelruf',
    question: 'Welcher Vogel ist an seinem charakteristischen Ruf zu erkennen?',
    options: ['Kuckuck', 'Wiedehopf', 'Pirol', 'Nachtigall'],
    correct: 'Kuckuck',
    funFact: 'Der Kuckuck legt seine Eier in fremde Nester und überlässt die Aufzucht anderen Vögeln. Das Kuckucksküken wirft die anderen Eier aus dem Nest und wächst allein auf – oft viel größer als seine Pflegeeltern.'
  },
  {
    id: 5005,
    type: 'audio',
    category: 'Film',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/imperial-march.mp3',
    audioLabel: 'Filmmusik',
    question: 'Aus welchem Filmfranchise stammt dieses berühmte musikalische Thema?',
    options: ['Indiana Jones', 'Star Wars', 'Der Herr der Ringe', 'Jurassic Park'],
    correct: 'Star Wars',
    funFact: 'Der "Imperial March" (Darth Vaders Thema) wurde von John Williams für "Das Imperium schlägt zurück" (1980) komponiert. Williams hat mehr Oscar-Nominierungen als jeder andere lebende Mensch und revolutionierte die Filmmusik.'
  },
  {
    id: 5006,
    type: 'audio',
    category: 'Natur',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/delfin-klick.mp3',
    audioLabel: 'Meerestier-Kommunikation',
    question: 'Welches Meerestier kommuniziert mit diesen Klick- und Pfeiflauten?',
    options: ['Walhai', 'Delfin', 'Tintenfisch', 'Robbe'],
    correct: 'Delfin',
    funFact: 'Delfine haben ein individuelles "Unterschriften-Pfeifen" – eine Art Namen, die sie lebenslang benutzen und die andere Delfine imitieren können. Delfine sind neben Menschen und einigen Affen die einzigen Tiere, die sich so individuell benennen.'
  },
  {
    id: 5007,
    type: 'audio',
    category: 'Musik',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/bach-toccata.mp3',
    audioLabel: 'Orgelmusik',
    question: 'Welches Instrument ist in diesem Stück von Johann Sebastian Bach zu hören?',
    options: ['Klavier', 'Cembalo', 'Orgel', 'Harmonium'],
    correct: 'Orgel',
    funFact: 'Bachs Toccata und Fuge in d-Moll (BWV 565) ist eines der bekanntesten Orgelwerke aller Zeiten. Bach war zu Lebzeiten vor allem als brillanter Organist bekannt – seine Kompositionskunst wurde erst nach seinem Tod voll gewürdigt.'
  },
  {
    id: 5008,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/cicaden.mp3',
    audioLabel: 'Insektengeräusch',
    question: 'Welche Insekten erzeugen dieses typische Sommergeräusch?',
    options: ['Grillen', 'Zikaden', 'Heuschrecken', 'Mücken'],
    correct: 'Zikaden',
    funFact: 'Zikaden erzeugen ihre Laute nicht durch Reiben der Beine, sondern durch spezielle Trommelfelle (Tymbalorgane) am Hinterleib. Manche Zikadenarten sind mit bis zu 120 Dezibel die lautesten Insekten der Welt.'
  },
  {
    id: 5009,
    type: 'audio',
    category: 'Geschichte',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/morse-sos.mp3',
    audioLabel: 'Morse-Signal',
    question: 'Was bedeutet dieses Morse-Signal?',
    options: ['Hilfe', 'SOS', 'Alarm', 'Feuer'],
    correct: 'SOS',
    funFact: 'SOS (· · · — — — · · ·) ist das internationale Notsignal im Morsecode. Es bedeutet nichts wörtlich – die drei Buchstaben wurden gewählt, weil sie einfach zu übertragen und kaum zu verwechseln sind. Die verbreiteten Abkürzungen "Save Our Souls" oder "Save Our Ship" sind spätere Erfindungen.'
  },
  {
    id: 5010,
    type: 'audio',
    category: 'Natur',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/donner.mp3',
    audioLabel: 'Naturgeräusch',
    question: 'Welches Naturphänomen ist in diesem Clip zu hören?',
    options: ['Erdbeben', 'Vulkanausbruch', 'Donner', 'Wasserfall'],
    correct: 'Donner',
    funFact: 'Donner entsteht, wenn Blitze die Luft auf bis zu 30.000 °C erhitzen – fünfmal heißer als die Sonnenoberfläche. Die Luft dehnt sich explosionsartig aus und erzeugt eine Schallwelle. Licht reist schneller als Schall: Pro 3 Sekunden Verzögerung ist das Gewitter etwa 1 km entfernt.'
  },
  {
    id: 5011,
    type: 'audio',
    category: 'Musik',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/marimba-ringtone.mp3',
    audioLabel: 'Bekannter Klingelton',
    question: 'Als Standard-Klingelton welches Smartphone-Betriebssystems ist dieser Sound bekannt?',
    options: ['Android', 'iOS (iPhone)', 'Windows Phone', 'BlackBerry'],
    correct: 'iOS (iPhone)',
    funFact: 'Der "Marimba"-Klingelton war der Standard-Klingelton des ersten iPhones (2007) und ist bis heute in iOS enthalten. Er wurde von Apple-Mitarbeiter Scott Craighead erstellt und ist einer der meistgehörten Sounds der Welt.'
  },
  {
    id: 5012,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/bat.mp3',
    audioLabel: 'Tierlaut (verlangsamt)',
    question: 'Dieses Tier nutzt Ultraschall zur Orientierung. Welches ist es?',
    options: ['Maus', 'Fledermaus', 'Eule', 'Maulwurf'],
    correct: 'Fledermaus',
    funFact: 'Fledermäuse stoßen Ultraschallrufe aus (bis zu 130 kHz) und orientieren sich anhand der Echos. Dieses Echoortungs-System ist so präzise, dass sie im Dunkeln Insekten von der Größe eines Stecknadelkopfs fangen können.'
  },
  {
    id: 5013,
    type: 'audio',
    category: 'Musik',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/alphorn.mp3',
    audioLabel: 'Traditionelles Instrument',
    question: 'Aus welchem Land stammt dieses traditionelle Holzblasinstrument?',
    options: ['Österreich', 'Schweiz', 'Norwegen', 'Bayern'],
    correct: 'Schweiz',
    funFact: 'Das Alphorn ist ein über 3 Meter langes Naturinstrument aus Holz. Ursprünglich benutzten Schweizer Hirten es zur Kommunikation über große Bergdistanzen. Es kann nur Naturtöne erzeugen, da es keine Klappen oder Ventile hat.'
  },
  {
    id: 5014,
    type: 'audio',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/geigerzaehler.mp3',
    audioLabel: 'Wissenschaftliches Messgerät',
    question: 'Welches Gerät ist in diesem Audioclip zu hören?',
    options: ['Seismograph', 'Axel', 'Geigerzähler', 'Radar'],
    correct: 'Geigerzähler',
    funFact: 'Der Geigerzähler (erfunden 1908 von Hans Geiger) misst ionisierende Strahlung. Jeder Klick entspricht einem detektierten radioaktiven Teilchen. In Tschernobyl und Fukushima wurden Geigerzähler zum Symbol nuklearer Katastrophen.'
  },
  {
    id: 5015,
    type: 'audio',
    category: 'Film',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/jaws-theme.mp3',
    audioLabel: 'Filmmusik',
    question: 'In welchem berühmten Spielberg-Film ist dieses Thema zu hören?',
    options: ['E.T.', 'Der weiße Hai', 'Schindlers Liste', 'Unheimliche Begegnung der dritten Art'],
    correct: 'Der weiße Hai',
    funFact: 'John Williams komponierte das zweitönige "Jaws"-Thema so einfach, dass Steven Spielberg zunächst dachte, es sei ein Witz. Williams überredete ihn, es im Film zu verwenden – und das Thema wurde zu einem der einflussreichsten in der Filmgeschichte. Der Film erfand das Konzept des "Sommerblockbusters".'
  },
  {
    id: 5016,
    type: 'audio',
    category: 'Natur',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/walgesang.mp3',
    audioLabel: 'Gesang eines Meeressäugetiers',
    question: 'Welches Meeressäugetier ist für diesen komplexen Gesang bekannt?',
    options: ['Delfin', 'Blauwal', 'Buckelwal', 'Narwal'],
    correct: 'Buckelwal',
    funFact: 'Buckelwal-Gesänge sind echte Lieder: strukturierte Sequenzen, die über Stunden andauern können. Alle Buckelwalmännchen einer Region singen dieselbe Version, die sich aber jedes Jahr schrittweise verändert. Die Lieder breiten sich wie musikalische Moden im Ozean aus.'
  },
  {
    id: 5017,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/didgeridoo.mp3',
    audioLabel: 'Traditionelles Instrument',
    question: 'Welche Bevölkerungsgruppe entwickelte dieses traditionelle Instrument?',
    options: ['Maori (Neuseeland)', 'Aborigines (Australien)', 'Inuit (Kanada)', 'Sami (Skandinavien)'],
    correct: 'Aborigines (Australien)',
    funFact: 'Das Didgeridoo ist eines der ältesten Blasinstrumente der Welt – mindestens 1.500 Jahre alt, möglicherweise über 40.000. Virtuose Spieler nutzen "Zirkuläratmung": gleichzeitig durch die Nase ein- und durch den Mund ausatmen.'
  },
  {
    id: 5018,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/schnurren-katze.mp3',
    audioLabel: 'Katzengeräusch',
    question: 'Mit welcher Frequenz schnurren Hauskatzen ungefähr?',
    options: ['5–10 Hz', '25–50 Hz', '100–150 Hz', '200–300 Hz'],
    correct: '25–50 Hz',
    funFact: 'Katzengeschnurr liegt im Bereich 25–50 Hz – genau der Frequenz, die erwiesenermaßen die Knochenheilung und das Muskelwachstum beim Menschen fördert. Katzen schnurren nicht nur wenn sie glücklich sind, sondern auch wenn sie gestresst, krank oder im Sterben liegen – es ist ein Selbstberuhigungsmechanismus.'
  },
  {
    id: 5019,
    type: 'audio',
    category: 'Geschichte',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/glocken-friedenslauten.mp3',
    audioLabel: 'Kirchenglocken',
    question: 'In Deutschland läuten die Kirchenglocken traditionell zum Gedenken an welches Datum?',
    options: ['1. September – Beginn des 2. Weltkriegs', '8. Mai – Ende des 2. Weltkriegs', '3. Oktober – Deutsche Einheit', '9. November – Mauerfall'],
    correct: '8. Mai – Ende des 2. Weltkriegs',
    funFact: 'Am 8. Mai 1945 kapitulierte Deutschland bedingungslos. Seit 1985 läuten in Deutschland die Kirchenglocken als Zeichen der Erinnerung und Mahnung. Das Datum wurde in Deutschland lange kontrovers diskutiert – als Tag der Niederlage oder als Tag der Befreiung.'
  },
  {
    id: 5020,
    type: 'audio',
    category: 'Natur',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/regen-wald.mp3',
    audioLabel: 'Naturgeräusch',
    question: 'In welchem Biom erklingt dieses Geräusch am typischsten?',
    options: ['Wüste', 'Tundra', 'Regenwald', 'Steppe'],
    correct: 'Regenwald',
    funFact: 'Tropische Regenwälder bedecken nur etwa 6 % der Landoberfläche, beherbergen aber über 50 % aller Tier- und Pflanzenarten. Ein Hektar Amazonas-Regenwald kann mehr Baumarten haben als ganz Nordamerika.'
  },
  {
    id: 5021,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/bagpipe.mp3',
    audioLabel: 'Folkloristisches Instrument',
    question: 'Mit welchem Land werden Dudelsäcke (Bagpipes) am stärksten assoziiert?',
    options: ['Irland', 'Schottland', 'Wales', 'England'],
    correct: 'Schottland',
    funFact: 'Der Dudelsack (Great Highland Bagpipe) ist das Nationalinstrument Schottlands. Britische Militärkapellen nutzen ihn seit dem 17. Jahrhundert. Historisch wurden Dudelsäcke als so einschüchternd eingestuft, dass sie nach dem Jakobitischen Aufstand 1746 als Kriegswaffe klassifiziert wurden.'
  },
  {
    id: 5023,
    type: 'audio',
    category: 'Musik',
    difficulty: 'schwer',
    audio: '/quiz/knowledge/src/theremin.mp3',
    audioLabel: 'Elektronisches Instrument',
    question: 'Welches berührungslose Instrument ist in diesem Clip zu hören?',
    options: ['Ondes Martenot', 'Theremin', 'Moog-Synthesizer', 'Mellotron'],
    correct: 'Theremin',
    funFact: 'Das Theremin (erfunden 1920 von Lev Theremin) ist das einzige Instrument, das ohne Berührung gespielt wird. Der Musiker bewegt die Hände in zwei elektromagnetischen Feldern: eines steuert die Tonhöhe, das andere die Lautstärke. Katharina Ivanoff und Leon Theremin waren Pioniere dieses Klangs.'
  },
  {
    id: 5024,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/eule-rufen.mp3',
    audioLabel: 'Vogelruf bei Nacht',
    question: 'Welcher Vogel ist mit diesem nächtlichen Ruf zu hören?',
    options: ['Waldohreule', 'Uhu', 'Schleiereule', 'Waldkauz'],
    correct: 'Waldkauz',
    funFact: 'Der Waldkauz ist die häufigste Eule Europas. Sein zweiteiliger Ruf – das "Hu-Huhuhuhu" – ist der klassische "Eulenruf" in Filmen und Horrorgeschichten. Eulen drehen den Kopf bis zu 270 Grad, weil ihre Augen nicht beweglich sind.'
  },
  {
    id: 5026,
    type: 'audio',
    category: 'Natur',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/bienenschwarm.mp3',
    audioLabel: 'Insektengeräusch',
    question: 'Wie heißt das Phänomen, wenn Bienen in einem Schwarm ihren Stock verlassen?',
    options: ['Bienenflug', 'Schwarmen', 'Schwärmen', 'Ausschwärmen'],
    correct: 'Schwärmen',
    funFact: 'Beim Schwärmen verlässt die alte Königin mit etwa der Hälfte der Bienen den Stock, um eine neue Kolonie zu gründen. Der Schwarm hängt sich zeitweise zusammen (z.B. an einem Ast) und Kundschafterinnen suchen unterdessen einen neuen Neststandort – in einer echten Schwarmdemo-kratie.'
  },
  {
    id: 5027,
    type: 'audio',
    category: 'Musik',
    difficulty: 'leicht',
    audio: '/quiz/knowledge/src/ode-an-die-freude.mp3',
    audioLabel: 'Berühmte Melodie',
    question: 'Diese Melodie ist die Hymne welcher Organisation?',
    options: ['Vereinte Nationen', 'Europäische Union', 'NATO', 'Weltbank'],
    correct: 'Europäische Union',
    funFact: 'Beethovens "Ode an die Freude" (aus der 9. Sinfonie) ist seit 1985 die offizielle Hymne der EU. Der Text von Friedrich Schiller besingt die Brüderlichkeit der Menschen. Beethovens 9. Sinfonie ist besonders bemerkenswert, weil er sie komponierte, als er völlig taub war.'
  },
  {
    id: 5028,
    type: 'audio',
    category: 'Technik',
    difficulty: 'mittel',
    audio: '/quiz/knowledge/src/56k-modem.mp3',
    audioLabel: 'Nostalgie-Technikgeräusch',
    question: 'Was verbindet sich in diesem historischen Geräusch mit dem Internet?',
    options: ['ISDN-Verbindung', '56k-Einwahlmodem', 'DSL-Router', 'Fax-Gerät'],
    correct: '56k-Einwahlmodem',
    funFact: 'Das charakteristische Quietschen und Rauschen eines Einwahl-Modems ist das Geräusch zweier Modems, die sich "vorstellen" und eine gemeinsame Verbindungssprache aushandeln. Mitte der 1990er war eine 56k-Verbindung modernste Technologie. Das Herunterladen eines heutigen HD-Films hätte damals etwa 30 Stunden gedauert.'
  },
  /*
  {
    id: 5029,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'schwer',
    audio: '/audio/mantis-garnele-knall.mp3',
    audioLabel: 'Unterwassergeräusch',
    question: 'Welches Tier erzeugt diesen Unterwasser-Knall, der so laut ist wie ein Gewehrschuss?',
    options: ['Pistolengarnele', 'Zitterwels', 'Hammerkopfhai', 'Zitteraal'],
    correct: 'Pistolengarnele',
    funFact: 'Die Pistolengarnele schnappt ihre Schere so schnell zu, dass eine Kavitationsblase entsteht, die beim Kollabieren einen Knall von bis zu 218 Dezibel erzeugt – kurzzeitig heißer als die Sonnenoberfläche (4.700 °C). Damit betäubt oder tötet sie Beute.'
  },
  {
    id: 5030,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/audio/tabla-indien.mp3',
    audioLabel: 'Indisches Schlaginstrument',
    question: 'Wie heißt dieses klassische Schlaginstrument der indischen Musik?',
    options: ['Sitar', 'Tabla', 'Dhol', 'Mridangam'],
    correct: 'Tabla',
    funFact: 'Die Tabla besteht aus zwei unterschiedlich gestimmten Trommeln und ist das wichtigste Begleitinstrument in der nordindischen Klassik. Tabla-Spieler lernen Rhythmusmuster in einer Lautsprache (Bol) – vergleichbar mit dem "Solfège" in der westlichen Musik.'
  },
  {
    id: 5031,
    type: 'audio',
    category: 'Allgemeinwissen',
    difficulty: 'leicht',
    audio: '/audio/gong.mp3',
    audioLabel: 'Percussion',
    question: 'In welchem Kulturkreis ist der Gong ein traditionelles Musikinstrument?',
    options: ['Arabischer Kulturraum', 'Ostasien/Südostasien', 'Subsahara-Afrika', 'Andenregion Südamerikas'],
    correct: 'Ostasien/Südostasien',
    funFact: 'Gongs werden seit mindestens 3.500 Jahren in Südostasien und China verwendet. In buddhistischen Tempeln markieren sie Gebetszeiten. Das Wort "Gong" stammt aus dem Malaiischen.'
  },
  {
    id: 5032,
    type: 'audio',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    audio: '/audio/gravitationswellen-sonifikation.mp3',
    audioLabel: 'Wissenschaftliche Daten (hörbar gemacht)',
    question: 'Dieses Geräusch ist eine Sonifikation welcher Entdeckung aus dem Jahr 2015?',
    options: ['Erster Nachweis von Gravitationswellen', 'Schwarzes Loch im Zentrum der Milchstraße', 'Magnetfeld der Erde', 'Kosmische Hintergrundstrahlung'],
    correct: 'Erster Nachweis von Gravitationswellen',
    funFact: 'Im September 2015 detektierte LIGO erstmals Gravitationswellen – Kräuselungen in der Raumzeit, die Einstein 1916 vorhergesagt hatte. Die Signatur war das "Zwitschern" zweier verschmelzender Schwarzer Löcher. Das Ereignis fand 1,3 Milliarden Lichtjahre entfernt statt.'
  },
  {
    id: 5033,
    type: 'audio',
    category: 'Natur',
    difficulty: 'mittel',
    audio: '/audio/vulkan-grollen.mp3',
    audioLabel: 'Naturgeräusch',
    question: 'Welche vulkanische Aktivität ist an diesen tiefen Grummelgeräuschen hörbar?',
    options: ['Lavafluss im Meer', 'Tektonische Bewegung', 'Magmabewegung unter der Erde', 'Ascheausbruch'],
    correct: 'Magmabewegung unter der Erde',
    funFact: 'Vulkane "sprechen" – Seismologen analysieren Geräusche und Erschütterungen unterhalb von Vulkanen, um Ausbrüche vorherzusagen. Vor dem Ausbruch des Mt. St. Helens (1980) warnten Wissenschaftler anhand von Schwarmbeben – tausende von Miniaturerd beben täglich.'
  },
  {
    id: 5034,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/audio/flamenco-gitarre.mp3',
    audioLabel: 'Gitarrenstil',
    question: 'Welchem musikalischen Stil aus welchem Land gehört diese Gitarrentechnik an?',
    options: ['Samba – Brasilien', 'Flamenco – Spanien', 'Fado – Portugal', 'Tango – Argentinien'],
    correct: 'Flamenco – Spanien',
    funFact: 'Flamenco ist eine Kunstform aus Andalusien (Südspanien), die Gesang (Cante), Tanz (Baile) und Gitarrenspiel (Toque) vereint. Er entstand aus dem Zusammentreffen andalusischer, zigeunerischer, maurischer und jüdischer Musiktraditionen. Seit 2010 steht Flamenco auf der UNESCO-Liste des immateriellen Kulturerbes.'
  },
  {
    id: 5035,
    type: 'audio',
    category: 'Film',
    difficulty: 'mittel',
    audio: '/audio/inception-bwaaah.mp3',
    audioLabel: 'Filmmusik-Effekt',
    question: 'Der tiefe, dröhnende Klang ("BWAAAH") ist charakteristisch für die Musik von Hans Zimmer in welchem Film?',
    options: ['Interstellar', 'Inception', 'The Dark Knight', 'Dunkirk'],
    correct: 'Inception',
    funFact: 'Hans Zimmer verlangsamte die Edith-Piaf-Melodie "Non, je ne regrette rien" so stark, dass daraus das dröhnende Trompetenthema von "Inception" entstand – eine versteckte Anspielung auf den im Film beschriebenen Zeitverlangsamungseffekt. Das Geräusch wird inzwischen im Englischen als "Braaam" bezeichnet.'
  },
  {
    id: 5036,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'leicht',
    audio: '/audio/hahn-morgenruf.mp3',
    audioLabel: 'Tiergeräusch',
    question: 'Zu welcher Tageszeit kräht ein Hahn normalerweise zum ersten Mal?',
    options: ['Mitternacht', 'Kurz vor der Morgendämmerung', 'Genau bei Sonnenaufgang', 'Eine Stunde nach Sonnenaufgang'],
    correct: 'Kurz vor der Morgendämmerung',
    funFact: 'Hähne krähen nicht nach dem Sonnenaufgang, sondern bereits davor – ihre innere Uhr bereitet sie darauf vor. Studien zeigen, dass Hähne eine interne circadiane Uhr nutzen und auf Licht reagieren. Dominante Hähne krähen als erste im Rudel.'
  },
  {
    id: 5037,
    type: 'audio',
    category: 'Musik',
    difficulty: 'schwer',
    audio: '/audio/sitar-raga.mp3',
    audioLabel: 'Indisches Saiteninstrument',
    question: 'Wer machte die Sitar im Westen berühmt, unter anderem als Einfluss auf The Beatles?',
    options: ['Ali Akbar Khan', 'Ravi Shankar', 'Zakir Hussain', 'Hariprasad Chaurasia'],
    correct: 'Ravi Shankar',
    funFact: 'Ravi Shankar unterrichtete George Harrison in der Sitar und beeinflusste damit maßgeblich den Psychedelic-Rock. "Norwegian Wood" (1965) war das erste westliche Pop-Lied mit Sitar. Shankar ist auch der Vater von Norah Jones.'
  },
  {
    id: 5038,
    type: 'audio',
    category: 'Allgemeinwissen',
    difficulty: 'mittel',
    audio: '/audio/big-ben.mp3',
    audioLabel: 'Berühmte Glocke',
    question: 'In welcher Stadt hängt "Big Ben" – die Glocke, die dieses Läuten erzeugt?',
    options: ['Edinburgh', 'Dublin', 'London', 'Liverpool'],
    correct: 'London',
    funFact: 'Streng genommen ist "Big Ben" nur der Name der größten Glocke im Elizabeth Tower (früher: Clock Tower) des Westminster Palace in London. Der Turm selbst heißt seit 2012 "Elizabeth Tower" – benannt nach Königin Elizabeth II. anlässlich ihres 60-jährigen Thronjubiläums.'
  },
  {
    id: 5039,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'schwer',
    audio: '/audio/leierschwanz-imitation.mp3',
    audioLabel: 'Vogelstimme',
    question: 'Welcher australische Vogel ist bekannt dafür, Motorsägen, Kameraverschlüsse und andere Vögel perfekt zu imitieren?',
    options: ['Kakadu', 'Leierschwanz', 'Kookaburra', 'Bowerbird'],
    correct: 'Leierschwanz',
    funFact: 'Der australische Leierschwanz (Superb Lyrebird) ist einer der weltbesten Vokalimitatoren. Er imitiert Motorsägen, Autolärm, Kameraverschlüsse und Dutzende anderer Vogelarten mit verblüffender Präzision. Sein Schwanz sieht wie eine Leier aus.'
  },
  {
    id: 5040,
    type: 'audio',
    category: 'Film',
    difficulty: 'mittel',
    audio: '/audio/mario-theme.mp3',
    audioLabel: 'Videospielmusik',
    question: 'Wer komponierte die ikonische Musik dieses Videospiel-Franchise?',
    options: ['Nobuo Uematsu', 'Koji Kondo', 'Yasunori Mitsuda', 'Yoko Shimomura'],
    correct: 'Koji Kondo',
    funFact: 'Koji Kondo komponierte die Super-Mario-Musik 1985 unter extremen technischen Einschränkungen: Nur 3 Töne gleichzeitig, 8-Bit-Klang. Das "Underground Theme" und das "Overworld Theme" gehören zu den bekanntesten Musikstücken der Welt – trotz ihrer technischen Simplizität.'
  },
  {
    id: 5041,
    type: 'audio',
    category: 'Natur',
    difficulty: 'mittel',
    audio: '/audio/eisbrechen.mp3',
    audioLabel: 'Naturgeräusch',
    question: 'Welches Phänomen ist in diesem Clip zu hören?',
    options: ['Gletscherspalte öffnet sich', 'Eisdecke eines Sees bricht', 'Eisberg kalbt vom Gletscher', 'Schneelavine'],
    correct: 'Eisberg kalbt vom Gletscher',
    funFact: 'Das "Kalben" eines Gletschers – wenn riesige Eisblöcke ins Meer stürzen – ist eines der lautesten natürlichen Ereignisse. Große Kalbungsereignisse können Geräusche von über 180 Dezibel erzeugen, hörbar auf Hunderte von Kilometern. Klimawandel beschleunigt diesen Prozess dramatisch.'
  },
  {
    id: 5042,
    type: 'audio',
    category: 'Geschichte',
    difficulty: 'schwer',
    audio: '/audio/schreibmaschine.mp3',
    audioLabel: 'Historisches Bürogerät',
    question: 'Welches Gerät erzeugt dieses charakteristische Klackern?',
    options: ['Lochkartenmaschine', 'Schreibmaschine', 'Fernschreiber', 'Rechenmaschine'],
    correct: 'Schreibmaschine',
    funFact: 'Die erste kommerziell erfolgreiche Schreibmaschine wurde 1868 von Christopher Latham Sholes erfunden. Die QWERTY-Tastatur, die er entwickelte, ist so angeordnet, dass die häufigsten Buchstabenpaare nicht nebeneinander liegen – um Verhakungen der mechanischen Typenhebel zu vermeiden.'
  },
  {
    id: 5043,
    type: 'audio',
    category: 'Musik',
    difficulty: 'leicht',
    audio: '/audio/haensel-gretel.mp3',
    audioLabel: 'Kinderoper-Melodie',
    question: 'Von welchem deutschen Komponisten stammt die Oper "Hänsel und Gretel"?',
    options: ['Richard Wagner', 'Engelbert Humperdinck', 'Carl Maria von Weber', 'Hans Pfitzner'],
    correct: 'Engelbert Humperdinck',
    funFact: 'Engelbert Humperdinck komponierte "Hänsel und Gretel" (1893) ursprünglich als einfaches Singspiel für Kinder auf Bitten seiner Schwester – und weitete es zur vollständigen Oper aus. Sie wird traditionell am Heiligabend aufgeführt und ist die meistgespielte deutschsprachige Oper weltweit.'
  },
  {
    id: 5044,
    type: 'audio',
    category: 'Tiere',
    difficulty: 'mittel',
    audio: '/audio/elefant-trompeten.mp3',
    audioLabel: 'Tiergeräusch',
    question: 'In welchen Situationen trompeten Elefanten typischerweise?',
    options: ['Ausschließlich bei Gefahr', 'Beim Trinken', 'Bei Aufregung, Bedrohung oder zur Begrüßung', 'Nur zur Paarungszeit'],
    correct: 'Bei Aufregung, Bedrohung oder zur Begrüßung',
    funFact: 'Elefanten kommunizieren auf viele Arten: Sie trompeten, grummeln, brummen und – für Menschen unhörbar – in Infraschall (<20 Hz), der sich über Dutzende Kilometer ausbreitet. Elefanten erkennen sich gegenseitig an der Stimme und behalten verstorbene Artgenossen offenbar in Erinnerung.'
  },
  {
    id: 5045,
    type: 'audio',
    category: 'Musik',
    difficulty: 'mittel',
    audio: '/audio/beatbox.mp3',
    audioLabel: 'Gesangsstil',
    question: 'Wie nennt man die Technik, Schlagzeuggeräusche ausschließlich mit Mund, Lippen und Stimme zu imitieren?',
    options: ['Scat', 'Beatboxing', 'Vocalese', 'Overtone Singing'],
    correct: 'Beatboxing',
    funFact: 'Beatboxing entstand in den frühen 1980ern als Teil der Hip-Hop-Kultur. Profis wie Rahzel oder Kenny Muhammad können gleichzeitig Rap-Texte vortragen und Schlagzeugbeats imitieren. Doug E. Fresh gilt als einer der Begründer des modernen Beatboxing.'
  },
  {
    id: 5046,
    type: 'audio',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    audio: '/audio/sonar-ping.mp3',
    audioLabel: 'Technisches Geräusch',
    question: 'Wofür nutzen U-Boote diesen charakteristischen "Ping"-Ton?',
    options: ['Kommunikation mit der Besatzung', 'Ortung von Objekten unter Wasser', 'Antriebssystem', 'Warnung vor Feindkontakt'],
    correct: 'Ortung von Objekten unter Wasser',
    funFact: 'Aktives Sonar sendet Schallimpulse aus und analysiert die Echos, um Entfernung und Position von Objekten zu bestimmen. Wale navigieren auf ähnliche Weise mit biologischem Echolot. Der "Ping" im Film "Das Boot" ist eines der bekanntesten Filmgeräusche überhaupt.'
  },
  {
    id: 5047,
    type: 'audio',
    category: 'Film',
    difficulty: 'schwer',
    audio: '/audio/psycho-streicher.mp3',
    audioLabel: 'Horrorfilm-Musik',
    question: 'Der berühmte Streicher-Schock aus welchem Alfred-Hitchcock-Film ist hier zu hören?',
    options: ['Die Vögel', 'Vertigo', 'Psycho', 'Das Fenster zum Hof'],
    correct: 'Psycho',
    funFact: 'Bernard Herrmanns Streichermuster für die Duschszene in "Psycho" (1960) – nur hohe Streicher, keine anderen Instrumente – wurde durch das menschliche Schreien inspiriert. Hitchcock wollte die Szene ursprünglich ohne Musik. Herrmanns Idee rettete sie. Der Film verwendete Schokoladensauce als Blut, da er schwarzweiß war.'
  },
  {
    id: 5048,
    type: 'audio',
    category: 'Natur',
    difficulty: 'schwer',
    audio: '/audio/frosch-quaken.mp3',
    audioLabel: 'Amphibiengeräusch',
    question: 'Was quakende Frösche fast ausschließlich tun ist ...',
    options: ['Feinde warnen', 'Reviere markieren', 'Weibchen anlocken', 'Artgenossen alarmieren'],
    correct: 'Weibchen anlocken',
    funFact: 'Fast ausschließlich Froschmännchen quaken – und zwar als Balzruf für Weibchen. Weibchen wählen Partner nach Lautstärke und Regelmäßigkeit des Quakens. Manche Froscharten quaken im Chor und synchronisieren ihre Rufe, um noch auffälliger zu sein.'
  },
  {
    id: 5049,
    type: 'audio',
    category: 'Technik',
    difficulty: 'mittel',
    audio: '/audio/tesla-spule.mp3',
    audioLabel: 'Elektrisches Phänomen',
    question: 'Welches elektrische Phänomen erzeugt dieses Knistern und Prasseln?',
    options: ['Blitzschlag', 'Elektrostatische Entladung', 'Funkenentladung einer Tesla-Spule', 'Kurzschluss'],
    correct: 'Funkenentladung einer Tesla-Spule',
    funFact: 'Nikola Teslas Resonanztransformator (1891) erzeugt hochfrequente Hochspannungsströme, die spektakuläre Funken erzeugen können. Tesla spielte mit Blitzen in seinen Händen und entwickelte Konzepte für drahtlose Energieübertragung – 100 Jahre vor modernem Wireless Charging.'
  },
  {
    id: 5050,
    type: 'audio',
    category: 'Musik',
    difficulty: 'leicht',
    audio: '/audio/happy-birthday.mp3',
    audioLabel: 'Lied',
    question: 'Bis zu welchem Jahr war das Lied "Happy Birthday to You" urheberrechtlich geschützt?',
    options: ['1998', '2007', '2015', '2030'],
    correct: '2015',
    funFact: 'Das Lied aus dem Jahr 1893 war bis 2015 unter Urheberrechtsschutz – was bedeutete, dass Filmproduzenten Lizenzgebühren zahlen mussten, wenn es in einem Film zu hören war. Ein US-Bundesgericht entschied 2015, dass das Copyright ungültig war. Seitdem ist das Lied public domain.'
  },

  /* ════════════════════════════════════════════════════════
     🖼️  IMAGE  (50 Fragen)
     Format:
       type: 'image'
       image: 'pfad/zum/bild.jpg'    ← Platzhalter
       imageAlt: Bildbeschreibung
       question: Frage zum Bild
       options: [4 Antworten]
       correct: richtige Antwort
  ════════════════════════════════════════════════════════ */
  {
    id: 6001,
    type: 'image',
    category: 'Kunst',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/mona-lisa.webp',
    imageAlt: 'Ein berühmtes Renaissance-Gemälde einer lächelnden Frau',
    question: 'Wie heißt dieses berühmte Gemälde, das in Paris im Louvre hängt?',
    options: ['Mädchen mit dem Perlenohrring', 'Die Mona Lisa', 'Venus von Botticelli', 'Die Dame mit dem Hermelin'],
    correct: 'Die Mona Lisa',
    funFact: 'Die Mona Lisa (ca. 1503–1519) von Leonardo da Vinci ist mit 860 Millionen US-Dollar die am höchsten versicherte Gemälde der Welt. Sie ist kleiner als die meisten Besucher erwarten: nur 77 × 53 cm. Das rätselhafte Lächeln entsteht durch Leonardos Sfumato-Technik.'
  },
  {
    id: 6002,
    type: 'image',
    category: 'Geographie',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/eiffelturm.jpg',
    imageAlt: 'Ein bekanntes Eisengitterwerk-Bauwerk in einer Großstadt',
    question: 'In welcher Stadt steht dieses weltbekannte Bauwerk?',
    options: ['London', 'Berlin', 'Paris', 'Brüssel'],
    correct: 'Paris',
    funFact: 'Der Eiffelturm wurde 1889 als temporäres Ausstellungsgebäude für die Weltausstellung gebaut und sollte nach 20 Jahren abgerissen werden. Gustave Eiffel rettete ihn, indem er einen Funkturm am Gipfel installieren ließ. Im Sommer ist er um bis zu 15 cm höher als im Winter (Wärmeausdehnung des Metalls).'
  },
  {
    id: 6003,
    type: 'image',
    category: 'Biologie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/dna-helix.jpg',
    imageAlt: 'Eine blau-rote Doppelwendel-Struktur auf schwarzem Hintergrund',
    question: 'Was stellt diese molekulare Struktur dar?',
    options: ['Proteinstruktur', 'RNA-Strang', 'DNA-Doppelhelix', 'Chromosom'],
    correct: 'DNA-Doppelhelix',
    funFact: 'Die Doppelhelix-Struktur der DNA wurde 1953 von Watson und Crick entdeckt – basierend maßgeblich auf den Röntgenaufnahmen von Rosalind Franklin ("Foto 51"). DNA ist so dünn, dass die gesamte DNA eines Menschen aufgewickelt in einem Strang 2 Meter lang, zusammengerollt aber nur 6 Mikrometer klein ist.'
  },
  {
    id: 6004,
    type: 'image',
    category: 'Geographie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/machu-picchu.webp',
    imageAlt: 'Alte Steinruinen auf einem grünen Berggipfel in Südamerika',
    question: 'Welche Inka-Ruinenstadt ist auf diesem Foto zu sehen?',
    options: ['Tikal', 'Chan Chan', 'Machu Picchu', 'Chichén Itzá'],
    correct: 'Machu Picchu',
    funFact: 'Machu Picchu (ca. 1450 n. Chr.) liegt auf 2.430 Metern Höhe in den peruanischen Anden. Der amerikanische Historiker Hiram Bingham machte die Anlage 1911 der Welt bekannt – die lokale Bevölkerung wusste natürlich schon davon. Die Inka hinterließen keine Schriften, weshalb vieles über ihre Hochkultur rätselhaft bleibt.'
  },
  {
    id: 6005,
    type: 'image',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/schwarzes-loch-foto.jpg',
    imageAlt: 'Ein leuchtendes orangen Ring um eine dunkle Mitte im Weltall',
    question: 'Was ist auf dem ersten je aufgenommenen Foto eines schwarzen Loches zu sehen?',
    options: ['Neutronenstern mit Akkretionsscheibe', 'Das Schwarze Loch M87* mit Akkretionsscheibe', 'Eine Supernova-Explosion', 'Sagittarius A* im Zentrum der Milchstraße'],
    correct: 'Das Schwarze Loch M87* mit Akkretionsscheibe',
    funFact: 'Das erste Foto eines schwarzen Loches wurde 2019 vom Event Horizon Telescope aufgenommen. M87* liegt 55 Millionen Lichtjahre entfernt und ist 6,5 Milliarden Mal schwerer als die Sonne. Das Bild erforderte 8 synchronisierte Radioteleskope weltweit und Petabytes an Daten.'
  },
  {
    id: 6006,
    type: 'image',
    category: 'Tiere',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/axolotl.webp',
    imageAlt: 'Ein rosa-weißes Wasser-Tier mit buschigen Kiemen an einem bunten Aquarium',
    question: 'Wie heißt dieses faszinierende Amphibium aus Mexiko?',
    options: ['Molch', 'Axolotl', 'Mudpuppy', 'Seemonster-Frosch'],
    correct: 'Axolotl',
    funFact: 'Der Axolotl (Ambystoma mexicanum) behält lebenslang seine Larvenform (Neotenie) und kann verlorene Körperteile – sogar Teile des Herzens und Gehirns – vollständig regenerieren. In der Wildnis ist er vom Aussterben bedroht; sein natürlicher Lebensraum ist auf den Xochimilco-See bei Mexiko-Stadt beschränkt.'
  },
  {
    id: 6007,
    type: 'image',
    category: 'Kunst',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/guernica-picasso.jpg',
    imageAlt: 'Ein schwarz-weißes, kubistisches Großgemälde mit verzerrten Figuren',
    question: 'Von welchem Künstler stammt dieses anti-Kriegs-Gemälde namens "Guernica"?',
    options: ['Salvador Dalí', 'Pablo Picasso', 'Joan Miró', 'Georges Braque'],
    correct: 'Pablo Picasso',
    funFact: 'Picasso schuf "Guernica" (1937) als Reaktion auf die Bombardierung der baskischen Stadt Guernica durch Nazi-Deutschland und faschistische Italien. Das Gemälde (776 × 349 cm) ist eines der mächtigsten politischen Kunstwerke aller Zeiten. Als ein Nazi-Offizier fragte: "Haben Sie das gemacht?" antwortete Picasso: "Nein, Sie."'
  },
  {
    id: 6008,
    type: 'image',
    category: 'Geographie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/aurora-borealis.jpg',
    imageAlt: 'Grüne und lila Lichtbänder am nächtlichen Sternenhimmel',
    question: 'Wie heißt dieses atmosphärische Phänomen?',
    options: ['Zodikallicht', 'Polarlicht (Aurora borealis)', 'Nachtleuchten', 'Kugelblitz'],
    correct: 'Polarlicht (Aurora borealis)',
    funFact: 'Polarlichter entstehen, wenn geladene Teilchen des Sonnenwinds mit Sauerstoff- und Stickstoffatomen in der oberen Atmosphäre kollidieren. Grünes Licht entsteht bei ca. 100 km Höhe (Sauerstoff), rotes bei über 200 km. Der beste Zeitraum zur Beobachtung ist die Äquinoktialperiode (März und September).'
  },
  {
    id: 6009,
    type: 'image',
    category: 'Essen & Trinken',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/sushi-moriawase.jpg',
    imageAlt: 'Verschiedene Reisbällchen mit rohem Fisch auf einem Holzbrett',
    question: 'Welche japanische Spezialität ist auf diesem Bild zu sehen?',
    options: ['Onigiri', 'Sushi (Nigiri)', 'Temaki', 'Ramen'],
    correct: 'Sushi (Nigiri)',
    funFact: 'Nigiri-Sushi (Handform-Sushi) entstand im frühen 19. Jahrhundert in Edo (heute Tokio) als Street Food. Ursprünglich war Sushi eine Konservierungsmethode: Fisch wurde in fermentiertem Reis eingelegt. Echter Sushi-Reis wird mit einer speziellen Mischung aus Reisessig, Zucker und Salz gewürzt.'
  },
  {
    id: 6010,
    type: 'image',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/lhc-tunnel.jpg',
    imageAlt: 'Ein langer blau beleuchteter Tunnel mit riesigen Magneten',
    question: 'Was ist in diesem Bild zu sehen?',
    options: ['Internationales Raumschiff-Dock', 'Teilchenbeschleuniger (LHC) am CERN', 'Unterirdisches Datenzentrum', 'Fusionsreaktor ITER'],
    correct: 'Teilchenbeschleuniger (LHC) am CERN',
    funFact: 'Der Large Hadron Collider (LHC) am CERN ist mit 27 km Umfang die größte Maschine der Welt. Er liegt 100 m unter der Erde, quer durch die Grenze Schweiz-Frankreich. 2012 wurde dort das Higgs-Boson nachgewiesen – das "Gottesteilchen", das Materie Masse verleiht.'
  },
  {
    id: 6011,
    type: 'image',
    category: 'Tiere',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/tintenfisch-chromatophoren.jpg',
    imageAlt: 'Ein Meerestier wechselt in Echtzeit Farbe und Muster auf seiner Haut',
    question: 'Welches Tier kann seine Farbe und Textur in Millisekunden verändern?',
    options: ['Tintenfisch (Oktopus)', 'Chamäleon', 'Cuttlefish (Sepia)', 'Tarnrochen'],
    correct: 'Cuttlefish (Sepia)',
    funFact: 'Sepien (Tintenfische) haben Chromatophoren – Pigmentzellen, die sie innerhalb von 200 Millisekunden aktivieren können. Trotzdem sind sie farbenblind! Sie nehmen Licht durch ihre Pupillen wahr und rekonstruieren Farben durch die Polarisation des Lichts.'
  },
  {
    id: 6012,
    type: 'image',
    category: 'Geographie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/salar-de-uyuni.jpg',
    imageAlt: 'Eine spiegelartige weiße Salzfläche, auf der sich der Himmel perfekt spiegelt',
    question: 'Wie heißt diese größte Salzwüste der Welt in Bolivien?',
    options: ['Salar de Atacama', 'Salar de Uyuni', 'Bonneville Salt Flats', 'Rann of Kutch'],
    correct: 'Salar de Uyuni',
    funFact: 'Der Salar de Uyuni (10.582 km²) ist so eben, dass er als Kalibrierungsreferenz für Satelliten genutzt wird. Nach Regenfällen bildet sich eine dünne Wasserschicht, die den Himmel perfekt spiegelt. Der Boden enthält über 50 % der weltweiten Lithiumreserven – ein begehrter Rohstoff für Elektroauto-Batterien.'
  },
  {
    id: 6013,
    type: 'image',
    category: 'Geschichte',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/kolosseum-rom.jpeg',
    imageAlt: 'Ein antikes rundes Amphitheater aus Stein in einer Großstadt',
    question: 'Für welche Art von Veranstaltungen wurde das Kolosseum in Rom hauptsächlich genutzt?',
    options: ['Theater und Oper', 'Gladiatorenkämpfe und Tierhetzjagden', 'Religiöse Zeremonien', 'Märkte und Handel'],
    correct: 'Gladiatorenkämpfe und Tierhetzjagden',
    funFact: 'Das Kolosseum (Fertigstellung 80 n. Chr.) fasste 50.000–80.000 Zuschauer. Es hatte 80 Eingänge und ein Velarium – ein riesiges Sonnensegel. Unter der Arena lag ein Labyrinth aus Gängen, in dem Tiere und Gladiatoren auf ihren Einsatz warteten. Der Mythos, Christen wurden dort den Löwen vorgeworfen, ist historisch nicht belegt.'
  },
  {
    id: 6014,
    type: 'image',
    category: 'Biologie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/pilz-myzel.jpg',
    imageAlt: 'Ein feines weißes Netzwerk von Fäden im Waldboden unter einem Pilz',
    question: 'Was ist dieses feine weiße Netzwerk unter einem Pilz?',
    options: ['Pilzsporen', 'Myzel (Pilzgeflecht)', 'Algen', 'Bakterienfilm'],
    correct: 'Myzel (Pilzgeflecht)',
    funFact: 'Das Myzel ist der eigentliche Körper des Pilzes – was wir als "Pilz" essen, ist nur der Fruchtkörper. Ein einziges Myzel kann Hunderte Hektar überspannen. Bäume nutzen Myzelnetze (Mykorrhiza), um Nährstoffe und sogar Informationen auszutauschen – das sogenannte "Wood Wide Web".'
  },
  {
    id: 6015,
    type: 'image',
    category: 'Kunst',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/sternennacht-van-gogh.webp',
    imageAlt: 'Ein expressionistisches Gemälde mit wirbelnden Wolken und einem leuchtenden Mond',
    question: 'Von welchem Künstler stammt das Gemälde "Sternennacht"?',
    options: ['Paul Gauguin', 'Edgar Degas', 'Vincent van Gogh', 'Claude Monet'],
    correct: 'Vincent van Gogh',
    funFact: 'Van Gogh malte "Sternennacht" (1889) in der psychiatrischen Anstalt Saint-Paul-de-Mausole in Saint-Rémy. Das Gemälde zeigt den Blick aus seinem Zimmerfenster, angereichert durch seine Vorstellungskraft. Zu Lebzeiten verkaufte er nur ein einziges Gemälde; heute sind seine Werke Milliarden wert.'
  },
  {
    id: 6016,
    type: 'image',
    category: 'Technik',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/microchip-nahaufnahme.jpg',
    imageAlt: 'Extreme Nahaufnahme eines silberfarbenen Chips mit komplexen Leiterbahnen',
    question: 'Was ist auf diesem Bild zu sehen?',
    options: ['Platine eines Computers', 'Mikrochip (integrierter Schaltkreis)', 'Solarzelle', 'Batterieanode'],
    correct: 'Mikrochip (integrierter Schaltkreis)',
    funFact: 'Moderne Mikrochips (wie die TSMC-5nm-Chips) haben Strukturen, die kleiner als ein Virus sind. Ein einzelner Chip mit der Fläche eines Fingernagels kann Milliarden von Transistoren enthalten. Die Moore\'sche Vermutung (Verdoppelung der Transistorzahl alle ~2 Jahre) hat die letzten 60 Jahre die gesamte IT-Industrie angetrieben.'
  },
  {
    id: 6017,
    type: 'image',
    category: 'Natur',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/lavafluss.avif',
    imageAlt: 'Leuchtend orangefarbene, glühende Flüssigkeit fließt über schwarzes Gestein',
    question: 'Wie nennt man geschmolzenes Gestein, das aus einem Vulkan austritt?',
    options: ['Magma', 'Lava', 'Basalt', 'Obsidian'],
    correct: 'Lava',
    funFact: 'Magma heißt geschmolzenes Gestein, solange es sich unter der Erdoberfläche befindet. Sobald es ausbricht, heißt es Lava. Lava kann bis zu 1.200 °C heiß sein. Nach dem Abkühlen entstehen Vulkangesteine wie Basalt (dunkle Lava) oder Bimsstein (sehr poröse, schwimmfähige Lava).'
  },
  {
    id: 6018,
    type: 'image',
    category: 'Geschichte',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/rosetta-stein.jpg',
    imageAlt: 'Ein dunkler Steinblock mit drei verschiedenen Schriftarten eingeritzt',
    question: 'Was ermöglichte der Stein von Rosetta, der jetzt im British Museum liegt?',
    options: ['Entschlüsselung der ägyptischen Hieroglyphen', 'Übersetzung der mesopotamischen Keilschrift', 'Entzifferung des Linearen B (Mykenes)', 'Entdeckung der phönizischen Schrift'],
    correct: 'Entschlüsselung der ägyptischen Hieroglyphen',
    funFact: 'Der Stein von Rosetta (196 v. Chr.) trägt denselben Text in drei Schriften: Hieroglyphen, Demotisch und Altgriechisch. Da Altgriechisch bekannt war, konnte Jean-François Champollion 1822 die Hieroglyphen entschlüsseln und damit eine jahrtausendealte Menschheitsgeschichte öffnen.'
  },
  {
    id: 6019,
    type: 'image',
    category: 'Geographie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/gran-canyon.jpg',
    imageAlt: 'Eine riesige Schlucht mit roten Felswänden, durch die ein Fluss fließt',
    question: 'Welcher Fluss hat den Grand Canyon in Arizona über Millionen von Jahren ausgehöhlt?',
    options: ['Mississippi', 'Colorado', 'Snake', 'Rio Grande'],
    correct: 'Colorado',
    funFact: 'Der Grand Canyon ist 446 km lang, bis zu 29 km breit und bis zu 1.857 m tief. Seine Felswände sind ein geologisches Lehrbuch: Die ältesten Schichten sind fast 2 Milliarden Jahre alt. Der Colorado hat über etwa 5–6 Millionen Jahre an dieser Schlucht "gegraben".'
  },
  {
    id: 6020,
    type: 'image',
    category: 'Tiere',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/mantarochen.webp',
    imageAlt: 'Ein riesiger flügelförmiger Meeresrochen gleitet durchs blaue Wasser',
    question: 'Wie heißt dieser Riesen-Rochen, der auch "Meeresteufel" genannt wird?',
    options: ['Walhai', 'Mantarochen', 'Zitterrochen', 'Adlerrochen'],
    correct: 'Mantarochen',
    funFact: 'Mantarochen (Manta birostris) können eine Spannweite von bis zu 9 Metern erreichen und über 3 Tonnen wiegen. Trotz ihrer Größe fressen sie ausschließlich Plankton. Mantarochen gelten als sehr intelligent und haben das größte Gehirn aller Knorpelfische – relativ zu ihrer Körpergröße.'
  },
  {
    id: 6021,
    type: 'image',
    category: 'Kunst',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/david-michelangelo.jpg',
    imageAlt: 'Eine berühmte Marmorstatue eines nackten jungen Mannes',
    question: 'Wo steht das Original von Michelangelos "David"?',
    options: ['Rom, Vatikanische Museen', 'Florenz, Galleria dell\'Accademia', 'Paris, Louvre', 'Florenz, Uffizien'],
    correct: 'Florenz, Galleria dell\'Accademia',
    funFact: 'Michelangelos David (1501–1504) ist 5,17 m hoch und wiegt 5,7 Tonnen. Er stellt David VOR dem Kampf mit Goliath dar – fokussiert und angespannt, nicht triumphierend. Die Hände sind auffällig groß – als "Anker" der Komposition berechnet, die aus großer Entfernung betrachtet wird.'
  },
  {
    id: 6022,
    type: 'image',
    category: 'Biologie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/tardigrade.webp',
    imageAlt: 'Ein mikroskopisch kleines Tier mit 8 Beinen, das wie ein kleiner Bär aussieht',
    question: 'Wie nennt man dieses mikroskopische Lebewesen, das extremste Bedingungen überlebt?',
    options: ['Milbe', 'Tardigrade (Bärchen)', 'Nematode', 'Rädertierchen'],
    correct: 'Tardigrade (Bärchen)',
    funFact: 'Tardigrade ("Bärtierchen") sind die widerstandsfähigsten Tiere der Welt: Sie überleben Vakuum, kosmische Strahlung, -272 °C bis +150 °C, extremen Druck und Austrocknung. In einem ausgetrockneten Zustand ("Kryptobiose") können sie Jahrzehnte warten und beim Kontakt mit Wasser wieder zum Leben erwachen.'
  },
  {
    id: 6023,
    type: 'image',
    category: 'Geographie',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/fuji-san.jpg',
    imageAlt: 'Ein symmetrischer schneebedeckter Vulkankegel mit Kirschblüten im Vordergrund',
    question: 'In welchem Land ist dieser berühmte Berg – und wie heißt er?',
    options: ['China – Huangshan', 'Japan – Fujisan', 'Korea – Hallasan', 'Nepal – Machapuchare'],
    correct: 'Japan – Fujisan',
    funFact: 'Der Fujisan (3.776 m) ist Japans höchster Berg und ein aktiver Stratovulkan. Er ist eine der meistabgebildeten Landschaften der Welt – besonders die Bilder von Katsushika Hokusai ("36 Ansichten des Berges Fuji") prägten sein Image. Er ist seit 2013 UNESCO-Weltkulturerbe.'
  },
  {
    id: 6024,
    type: 'image',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/baklava.jpg',
    imageAlt: 'Goldgelbe, in Honig getränkte Blätterteigstücke mit Nüssen in einem Backblech',
    question: 'Wie heißt dieses traditionelle Süßgebäck, das mit Nüssen und Honig gefüllt ist?',
    options: ['Halva', 'Baklava', 'Kanafeh', 'Lokum'],
    correct: 'Baklava',
    funFact: 'Baklava ist ein Süßgebäck aus hauchdünnem Blätterteig (Yufka/Filo), Nüssen und Zuckersirup oder Honig. Es ist in der türkischen, griechischen, arabischen und persischen Küche verbreitet. Die Herkunft ist umstritten – Türken, Griechen und Araber beanspruchen alle die Erfindung.'
  },
  {
    id: 6025,
    type: 'image',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/saturn-ringe.webp',
    imageAlt: 'Ein Planet mit beeindruckenden Ringen um ihn herum, aufgenommen aus dem Weltraum',
    question: 'Woraus bestehen die Ringe des Saturn hauptsächlich?',
    options: ['Staub und Gas', 'Wassereis und Gestein', 'Flüssiges Helium', 'Metallpartikel'],
    correct: 'Wassereis und Gestein',
    funFact: 'Saturns Ringe sind 282.000 km weit, aber im Durchschnitt nur 20 Meter dick – dünner im Verhältnis als eine Rasierklinge! Sie bestehen zu 93 % aus Wassereis. Neuere Messungen zeigen, dass die Ringe nur 100–400 Millionen Jahre alt sind – jung im Vergleich zu Saturns 4,5 Milliarden Jahren.'
  },
  {
    id: 6026,
    type: 'image',
    category: 'Architektur',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/sagrada-familia.avif',
    imageAlt: 'Eine organisch geformte Kathedrale mit vielen Türmen in einer Großstadt',
    question: 'Wer entwarf diese noch im Bau befindliche Kathedrale in Barcelona?',
    options: ['Santiago Calatrava', 'Antoni Gaudí', 'Frank Gehry', 'Zaha Hadid'],
    correct: 'Antoni Gaudí',
    funFact: 'Antoni Gaudí begann 1882 mit dem Bau der Sagrada Família – sie ist bis heute unvollendet. Gaudí sagte: "Mein Auftraggeber hat keine Eile." Er widmete die letzten 43 Jahre seines Lebens dem Projekt. 2026 soll die Kathedrale nach über 140 Jahren Bauzeit fertiggestellt werden.'
  },
  {
    id: 6027,
    type: 'image',
    category: 'Tiere',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/chameleon-auge.jpeg',
    imageAlt: 'Ein kugelförmiges Tierauge mit türkisfarbener Pupille, das sich unabhängig dreht',
    question: 'Chamäleons können ihre Augen unabhängig voneinander bewegen – welchen Vorteil hat das?',
    options: ['Bessere Tarnung', '360-Grad-Blickfeld ohne Kopfbewegung', 'Infrarotsicht', 'Ultraviolettsicht'],
    correct: '360-Grad-Blickfeld ohne Kopfbewegung',
    funFact: 'Chamäleons können mit jedem Auge unabhängig in jede Richtung schauen – das gibt ihnen ein Sichtfeld von fast 360°. Wenn sie eine Beute fixieren, fokussieren beide Augen nach vorne für stereoskopisches Sehen. Ihre Zunge kann länger als ihr Körper sein und trifft Beute in 0,07 Sekunden.'
  },
  {
    id: 6028,
    type: 'image',
    category: 'Geschichte',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/berliner-mauer.jpg',
    imageAlt: 'Eine graue Betonmauer mit Graffiti, dahinter ein Wachturm',
    question: 'Wie viele Jahre trennte die Berliner Mauer Ost- und Westberlin?',
    options: ['18 Jahre', '23 Jahre', '28 Jahre', '35 Jahre'],
    correct: '28 Jahre',
    funFact: 'Die Berliner Mauer stand vom 13. August 1961 bis zum 9. November 1989 – exakt 28 Jahre, 2 Monate und 26 Tage. Sie war 155 km lang und wurde von mindestens 140 Menschen beim Versuch, sie zu überqueren, getötet – die genaue Zahl ist bis heute nicht abschließend geklärt.'
  },
  {
    id: 6029,
    type: 'image',
    category: 'Natur',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/borealer-wald.jpg',
    imageAlt: 'Endlose Nadelwälder unter einem winterlichen Himmel, bedeckt mit Schnee',
    question: 'Welches Ökosystem – das größte Waldgebiet der Erde – ist hier zu sehen?',
    options: ['Taiga (borealer Nadelwald)', 'Temperater Regenwald', 'Montaner Wald', 'Subarktische Tundra'],
    correct: 'Taiga (borealer Nadelwald)',
    funFact: 'Die Taiga (borealer Nadelwald) ist das größte Waldökosystem der Erde und bedeckt ca. 17 Millionen km² – vor allem in Russland, Kanada und Skandinavien. Sie speichert enorme Mengen CO₂ im Boden (Permafrost). Die Erwärmung des Permafrost durch den Klimawandel könnte katastrophale Mengen Methan freisetzen.'
  },
  {
    id: 6030,
    type: 'image',
    category: 'Kunst',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/optical-illusion-penrose.jpg',
    imageAlt: 'Eine unmögliche dreieckige Figur, bei der jede Ecke scheinbar nach oben zeigt',
    question: 'Wie heißt diese berühmte "unmögliche Figur"?',
    options: ['Möbius-Band', 'Penrose-Dreieck', 'Necker-Würfel', 'Escher-Treppe'],
    correct: 'Penrose-Dreieck',
    funFact: 'Das Penrose-Dreieck wurde 1934 von dem schwedischen Künstler Oscar Reutersvärd erfunden und 1958 von Roger Penrose populär gemacht. Es ist dreidimensional scheinbar konsistent, aber physisch unmöglich. M.C. Escher verwendete es in seinen berühmten Werken "Wasserfall" und "Aufstieg und Abstieg".'
  },
  {
    id: 6031,
    type: 'image',
    category: 'Geographie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/aral-see-vorher-nachher.webp',
    imageAlt: 'Eine Satellitenkarte zeigt zwei Bilder: links ein großer See, rechts fast nur Wüste',
    question: 'Welche Umweltkatastrophe zeigt dieses Vorher-Nachher-Satellitenbild?',
    options: ['Austrocknung des Tschadsees', 'Versalzung des Toten Meeres', 'Austrocknung des Aralsees', 'Verlandung der Lagune von Venedig'],
    correct: 'Austrocknung des Aralsees',
    funFact: 'Der Aralsee war bis in die 1960er Jahre der viertgrößte See der Welt. Durch sowjetische Bewässerungsprojekte wurden seine Zuflüsse umgeleitet – seitdem schrumpfte er auf etwa 10 % seiner ursprünglichen Größe. Das Salz und die Pestizide des trockengefallenen Seebodens werden vom Wind verteilt und schaden der Region noch heute.'
  },
  {
    id: 6032,
    type: 'image',
    category: 'Biologie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/querschnitt-baum.jpg',
    imageAlt: 'Der Querschnitt eines Baumstammes mit deutlich sichtbaren Jahresringen',
    question: 'Was verraten die Jahresringe eines Baumes außer seinem Alter?',
    options: ['Nur das Alter des Baumes', 'Alter und Klimabedingungen jedes Jahres', 'Art des Baumes', 'Bodenqualität unter dem Baum'],
    correct: 'Alter und Klimabedingungen jedes Jahres',
    funFact: 'Die Wissenschaft der Jahresringanalyse heißt Dendrochronologie. Breite Ringe = gutes Wachstumsjahr (warm, feucht). Schmale = schlechte Bedingungen. Manche Bäume leben über 5.000 Jahre – die älteste Kiefer heißt Methuselah und steht in Kaliformien. Durch Jahresringe können Forscher Klimata bis vor 10.000 Jahren rekonstruieren.'
  },
  {
    id: 6033,
    type: 'image',
    category: 'Sport',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/sumo-ringer.jpg',
    imageAlt: 'Zwei schwere Männer in kleinen Lendenschurzen kämpfen auf einer runden Erhöhung',
    question: 'Was ist das Ziel eines Sumo-Kampfes?',
    options: ['Den Gegner K.O. schlagen', 'Den Gegner aus dem Ring drängen oder zu Boden bringen', 'Den Gegner 10 Sekunden festhalten', 'Den Gegner zur Aufgabe zwingen'],
    correct: 'Den Gegner aus dem Ring drängen oder zu Boden bringen',
    funFact: 'Sumo ist Japans Nationalsport und hat tiefe Wurzeln im Shinto-Ritual. Ein Kampf dauert meist unter einer Minute. Das Dohyo (Ring) ist 4,55 m im Durchmesser. Rikishi (Sumo-Ringer) dürfen keine Autos fahren, müssen in einem Stall (Heya) leben und folgen strengen Hierarchieregeln.'
  },
  {
    id: 6034,
    type: 'image',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/feynman-diagramm.webp',
    imageAlt: 'Ein Diagramm mit Linien und Wirbeln, die Teilchenwechselwirkungen darstellen',
    question: 'Diese grafische Notation zur Darstellung von Teilchenwechselwirkungen heißt nach ihrem Erfinder?',
    options: ['Einstein-Diagramm', 'Bohr-Grafik', 'Feynman-Diagramm', 'Heisenberg-Schema'],
    correct: 'Feynman-Diagramm',
    funFact: 'Richard Feynman entwickelte 1948 diese grafische Notation für die Quantenelektrodynamik. Die Wirbellinie (Photon), gerade Linien (Elektronen) und Zeitachse ermöglichen es, komplexe Quantenprozesse zu visualisieren und zu berechnen. Feynman war auch für seine Bongo-Trommeln und seine Abneigung gegen die NASA-Bürokratie bekannt.'
  },
  {
    id: 6035,
    type: 'image',
    category: 'Tiere',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/qualle-leuchtend.jpg',
    imageAlt: 'Eine blaue leuchtende Qualle im dunklen Ozean',
    question: 'Wie nennt man die Fähigkeit von Tieren, selbst Licht zu erzeugen?',
    options: ['Fluoreszenz', 'Phosphoreszenz', 'Biolumineszenz', 'Photosynthese'],
    correct: 'Biolumineszenz',
    funFact: 'Etwa 76 % aller Tiefseeorganismen sind biolumineszent. Sie erzeugen Licht durch chemische Reaktionen mit dem Protein Luciferin. Quallen nutzen es zur Kommunikation, Feinde zu verwirren oder Beute anzulocken. Das grüne Fluoreszenzprotein (GFP) der Qualle wurde zum wichtigsten Werkzeug der Zellbiologie.'
  },
  {
    id: 6036,
    type: 'image',
    category: 'Geschichte',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/stonehenge.jpg',
    imageAlt: 'Riesige stehende Steine in einem Kreis auf einer Hochebene im Nebel',
    question: 'In welchem Land steht Stonehenge?',
    options: ['Irland', 'Schottland', 'Wales', 'England'],
    correct: 'England',
    funFact: 'Stonehenge (ca. 3000–1500 v. Chr.) in Wiltshire, England, ist ein megalithisches Monument. Die Sandsteine wiegen bis zu 25 Tonnen und wurden aus bis zu 250 km Entfernung transportiert – ohne Rad, ohne Eisen, ohne bekannte Technik. Ob es ein Kalender, ein Tempel oder ein Observatorium war, ist bis heute ungeklärt.'
  },
  {
    id: 6037,
    type: 'image',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/kaffee-latte-art.jpg',
    imageAlt: 'Eine Tasse Kaffee mit einem Blattmuster aus Milchschaum',
    question: 'Was ist die Technik, Muster in Milchschaum eines Kaffees zu gießen?',
    options: ['Cappuccino-Art', 'Latte Art', 'Barista-Technik', 'Foam Drawing'],
    correct: 'Latte Art',
    funFact: 'Latte Art entstand in den 1980ern in der US-Specialty-Coffee-Szene. Profi-Baristas benötigen jahrelange Übung, um komplexe Muster wie Schwäne oder Gesichter zu gießen. In der Weltmeisterschaft wird Latte Art nach Muster, Kontrast und Symmetrie bewertet.'
  },
  {
    id: 6038,
    type: 'image',
    category: 'Natur',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/eishoehle.jpg',
    imageAlt: 'Eine Höhle mit türkisen Eiswänden und einem blauen Lichtschein',
    question: 'Wie entsteht das Blaue Licht in einer Eishöhle?',
    options: ['Biolumineszente Organismen', 'Kurzwelliges blaues Licht dringt tief in das Eis ein', 'Reflexion des Wassers', 'Minerale im Eis'],
    correct: 'Kurzwelliges blaues Licht dringt tief in das Eis ein',
    funFact: 'Eis absorbiert rotes und grünes Licht stärker als blaues – deshalb erscheint dickes Eis (wie Gletscher oder Eishöhlen) tiefblau. Je dicker und reiner das Eis, desto intensiver das Blau. Die bekanntesten Eishöhlen befinden sich auf Island, im Vatna-Gletscher.'
  },
  {
    id: 6039,
    type: 'image',
    category: 'Kunst',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/anbetung-der-koenige-botticelli.jpg',
    imageAlt: 'Ein Renaissancegemälde zeigt eine Gruppe elegant gekleideter Männer vor Maria mit Kind',
    question: 'In welchem Stil ist dieses Gemälde aus der Frührenaissance gemalt?',
    options: ['Barock', 'Manierismus', 'Tempera auf Holztafel (Frührenaissance)', 'Gotisch'],
    correct: 'Tempera auf Holztafel (Frührenaissance)',
    funFact: 'Vor der Erfindung der Ölmalerei (15. Jh.) malten Renaissancekünstler mit Ei-Tempera auf Holz oder Kalkputz (Fresko). Tempera trocknet schnell und verzeiht keine Fehler – anders als Öl. Die leuchtenden Farben der frühen Renaissance entstehen durch die feine Schichtung der Tempera.'
  },
  {
    id: 6040,
    type: 'image',
    category: 'Geographie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/zhangjiajie-berge.jpg',
    imageAlt: 'Schroffe, säulenartige Felsformationen ragen aus dem Nebel heraus',
    question: 'In welchem Land befinden sich diese "Hallelujah Mountains" (bekannt aus dem Film Avatar)?',
    options: ['Vietnam', 'Thailand', 'China', 'Indonesien'],
    correct: 'China',
    funFact: 'Die Sandstein-Säulenberge des Zhangjiajie National Forest Park in der Provinz Hunan inspirierten die schwebenden Berge im Film "Avatar" (2009). Die Säulen wurden durch jahrmillionenlange Erosion aus einem ehemaligen Meeresgrund gebildet. Ein Gipfel wurde 2010 in "Avatar Hallelujah Mountain" umbenannt.'
  },
  {
    id: 6041,
    type: 'image',
    category: 'Biologie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/prion-proteinfaltung.png',
    imageAlt: 'Computergenerierte Darstellung einer falsch gefalteten Proteinstruktur',
    question: 'Was sind Prionen, und womit werden sie assoziiert?',
    options: ['Viren ohne Hülle', 'Falsch gefaltete Proteine, die BSE und Creutzfeldt-Jakob verursachen', 'Bakterien-Endosporen', 'Retroviren'],
    correct: 'Falsch gefaltete Proteine, die BSE und Creutzfeldt-Jakob verursachen',
    funFact: 'Prionen sind fehlfach gefaltete Proteine, die gesunde Proteine "anstecken" und ebenfalls falsch zu falten veranlassen. Sie verursachen tödliche neurodegenerative Krankheiten (BSE beim Rind, Creutzfeldt-Jakob beim Menschen). Prionen können durch normales Kochen, Autoklavieren oder Bestrahlung nicht zerstört werden.'
  },
  {
    id: 6042,
    type: 'image',
    category: 'Technik',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/3d-drucker.jpg',
    imageAlt: 'Eine Maschine druckt Schicht für Schicht ein plastisches Objekt auf',
    question: 'Wie heißt der Prozess, bei dem 3D-Drucker Objekte schichtweise aufbauen?',
    options: ['Subtraktive Fertigung', 'Additive Fertigung', 'Formative Herstellung', 'Diffuse Modellierung'],
    correct: 'Additive Fertigung',
    funFact: '3D-Druck (additive Fertigung) wurde 1983 von Chuck Hull erfunden. Heute werden damit Prothesen, Häuser, Lebensmittel, Flugzeugteile und sogar menschliche Gewebe "gedruckt". NASA nutzt 3D-Druck, um Ersatzteile auf der ISS herzustellen – da ein Paket schicken etwas kompliziert ist.'
  },
  {
    id: 6043,
    type: 'image',
    category: 'Sport',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/curling-team.avif',
    imageAlt: 'Vier Athleten in bunten Jacken wischen energisch mit Besen auf Eis',
    question: 'Bei welchem olympischen Wintersport wird mit Besen das Eis gefegt?',
    options: ['Eisstockschießen', 'Curling', 'Boule auf Eis', 'Shuffleboard'],
    correct: 'Curling',
    funFact: 'Beim Curling beeinflusst das Wischen mit Besen die Richtung und Weite des Steins, indem es das Eis leicht anschmilzt und die Reibung reduziert. Profi-Curler können damit den Stein um bis zu 2 Meter von seiner natürlichen Bahn ablenken. Curling gilt als "Schach auf Eis".'
  },
  {
    id: 6044,
    type: 'image',
    category: 'Natur',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/hagelkorn-querschnitt.jpg',
    imageAlt: 'Der Querschnitt eines Hagelkorns zeigt konzentrische Eisschichten',
    question: 'Was verraten die Schichten im Querschnitt eines Hagelkorns?',
    options: ['Das Alter des Hagelkorns', 'Wie oft es im Gewittersturm auf- und abgestiegen ist', 'Die Temperatur beim Einschlag', 'Die chemische Zusammensetzung'],
    correct: 'Wie oft es im Gewittersturm auf- und abgestiegen ist',
    funFact: 'Jede Schicht im Hagelkorn entspricht einem Auf- und Abstieg im Gewitter: Abwärts in warme, feuchte Luft (transparente Schicht), aufwärts in kalte Luft (trübe Schicht). Das größte jemals gemessene Hagelkorn fiel 2010 in South Dakota: 20 cm Durchmesser, 878 Gramm.'
  },
  {
    id: 6045,
    type: 'image',
    category: 'Geschichte',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/tutanchamun-maske.jpg',
    imageAlt: 'Eine goldene Grabmaske mit Streifen in Blau und Gold eines ägyptischen Pharaos',
    question: 'Welchem Pharao gehört diese Goldmaske, die 1922 entdeckt wurde?',
    options: ['Ramses II.', 'Tutanchamun', 'Kleopatra', 'Nofretete'],
    correct: 'Tutanchamun',
    funFact: 'Tutanchamuns Grab (KV62 im Tal der Könige) wurde 1922 von Howard Carter entdeckt – als einziges Pharaonengrab nahezu unberührt von Grabräubern. Die Maske ist aus 11 kg purem Gold. Tutanchamun starb mit etwa 18–19 Jahren, wahrscheinlich an den Folgen eines Beinbruchs.'
  },
  {
    id: 6046,
    type: 'image',
    category: 'Tiere',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/platypus.jpg',
    imageAlt: 'Ein merkwürdiges braunes Tier mit Entenschnabel und Biberschwanz im Wasser',
    question: 'Was ist die bemerkenswerteste Eigenschaft des Schnabeltiers unter Säugetieren?',
    options: ['Es ist blind', 'Es legt Eier', 'Es hat kein Skelett', 'Es kann fliegen'],
    correct: 'Es legt Eier',
    funFact: 'Das Schnabeltier (Ornithorhynchus anatinus) ist eines von nur zwei eierlegen den Säugetieren (neben dem Ameisenigel). Männchen haben einen giftigen Sporn an den Hinterbeinen. Sie besitzen keinen Magen und haben im MRT-Bild keine sichtbaren Nieren. Als Forscher das erste Exemplar nach Europa schickten, glaubten Wissenschaftler, es sei ein Schwindel.'
  },
  {
    id: 6047,
    type: 'image',
    category: 'Kunst',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/rothko-gemälde.jpg',
    imageAlt: 'Große Farbfelder in Orange und Schwarz auf einer Leinwand ohne erkennbare Formen',
    question: 'In welchem Kunststil wurde dieses Werk gemalt?',
    options: ['Impressionismus', 'Abstrakter Expressionismus', 'Pop Art', 'Pointillismus'],
    correct: 'Abstrakter Expressionismus',
    funFact: 'Mark Rothko war ein Hauptvertreter des Abstrakten Expressionismus. Seine "Farbraum"-Bilder (Color Field Paintings) sollen beim Betrachter intensive emotionale Erlebnisse auslösen. Rothko sagte: "Wenn du weinst vor meinen Bildern, haben wir dasselbe religiöse Erlebnis geteilt." Er bestimmte selbst die Beleuchtung seiner Ausstellungen.'
  },
  {
    id: 6048,
    type: 'image',
    category: 'Geographie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/antarktis-eisberg.jpg',
    imageAlt: 'Ein riesiger flacher Tafeleisberg ragt aus dem blauen Ozean',
    question: 'Wie viel Prozent eines Eisbergs liegen typischerweise unter Wasser?',
    options: ['50 %', '70 %', '90 %', '30 %'],
    correct: '90 %',
    funFact: 'Da Eis eine Dichte von 0,917 g/cm³ hat (weniger als Salzwasser mit 1,025), schwimmt es – aber 9/10 liegen unter Wasser. Der größte jemals gemessene Eisberg (B-15, 2000) war mit 11.000 km² größer als Jamaika. Die "Titanic" sank 1912 wegen des unsichtbaren Unterwasserteils eines Eisbergs.'
  },
  {
    id: 6049,
    type: 'image',
    category: 'Biologie',
    difficulty: 'leicht',
    image: '/quiz/knowledge/src/photosynthese-blatt.jpg',
    imageAlt: 'Blatt im Gegenlicht zeigt feine Adern und grüne Schichten',
    question: 'In welchen Zellorganellen findet die Photosynthese statt?',
    options: ['Mitochondrien', 'Chloroplasten', 'Ribosomen', 'Vakuolen'],
    correct: 'Chloroplasten',
    funFact: 'Chloroplasten enthalten das grüne Pigment Chlorophyll, das Sonnenlicht einfängt. Sie entstammen evolutionär ursprünglich Cyanobakterien, die von einer Vorläuferzelle "verschluckt" wurden und seitdem als Symbionten leben (endosymbiotische Theorie). Daher haben Chloroplasten noch ihre eigene DNA.'
  },
  {
    id: 6050,
    type: 'image',
    category: 'Architektur',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/fallingwater.jpg',
    imageAlt: 'Ein über einem Wasserfall schwebendes Gebäude aus Beton und Stein im Wald',
    question: 'Von welchem Architekten stammt das Haus "Fallingwater" in Pennsylvania?',
    options: ['Le Corbusier', 'Ludwig Mies van der Rohe', 'Frank Lloyd Wright', 'Walter Gropius'],
    correct: 'Frank Lloyd Wright',
    funFact: 'Fallingwater (1936–1939) gilt als eines der bedeutendsten Gebäude des 20. Jahrhunderts. Frank Lloyd Wright entwarf es mit 68 Jahren und vollendete die Pläne angeblich in nur zwei Stunden, nachdem er monatelang gezögert hatte. Das Haus schwebt mit seinen Terrassen über dem Bear Run Wasserfall in Pennsylvania.'
  },
  {
    id: 6051,
    type: 'image',
    category: 'Geografie',
    difficulty: 'mittel',
    image: '/quiz/knowledge/src/barbados.svg',
    imageAlt: 'Flagge von Barbados mit einem schwarzen Dreizack auf gelbem Hintergrund',
    question: 'Welches Land hat diese Flagge?',
    options: ['Barbados', 'Osttimor', 'Nauru', 'Palau'],
    correct: 'Barbados',
    funFact: 'Die Flagge von Barbados wurde 1966 bei der Unabhängigkeit eingeführt. Der schwarze Dreizack symbolisiert die Unabhängigkeit von Großbritannien (der Dreizack ist eine stilisierte Version von Neptuns Dreizack, da Barbados eine Insel ist). Die beiden blauen Streifen repräsentieren das Meer, der gelbe Streifen den Sandstrand.'
  },
  {
    id: 6052,
    type: 'image',
    category: 'Geografie',
    difficulty: 'schwer',
    image: '/quiz/knowledge/src/gp.png',
    imageAlt: 'Flagge von Guadaloupe',
    question: 'Wem gehört diese Flagge?',
    options: ['Guadaloupe', 'Martinique', 'St. Lucia', 'Grenada'],
    correct: 'Guadaloupe',
    funFact: 'Guadaloupe ist ein französisches Übersee-Département in der Karibik. Die Flagge zeigt die französische Trikolore mit einem gelben Sonnenmotiv und einem grünen Kokospalmenblatt – Symbole für Sonne, Strand und tropische Vegetation. Guadaloupe ist bekannt für seine Strände, den Vulkan La Soufrière und die kreolische Kultur.'
  },

  /* ════════════════════════════════════════════════════════
     🎚️  SLIDER  (50 Fragen)
     Format:
       type: 'slider'
       min, max, step: Schieberegler-Parameter
       correct: exakter Wert (Number)
       tolerance: erlaubte Abweichung (Number, optional)
       unit: Einheit als String (optional)
  ════════════════════════════════════════════════════════ */
  {
    id: 7001,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Wie viele Erdmassen hat die Sonne ungefähr?',
    min: 100000,
    max: 500000,
    step: 10000,
    correct: 330000,
    tolerance: 20000,
    unit: ' Erdmassen',
    funFact: 'Die Sonne hat ca. 330.000-mal die Masse der Erde. Sie enthält 99,86 % der gesamten Masse unseres Sonnensystems. Wäre die Sonne ein Hohlkörper, würden etwa 1,3 Millionen Erden hineinpassen.'
  },
  {
    id: 7002,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Wie lang ist der Nil in Kilometern (gerundet auf 100 km)?',
    min: 4000,
    max: 8000,
    step: 100,
    correct: 6650,
    tolerance: 200,
    unit: ' km',
    funFact: 'Der Nil ist mit 6.650 km der längste Fluss der Welt (je nach Messmethode konkurriert er mit dem Amazonas). Er fließt durch 11 Länder. Das Niltal ist eine der fruchtbarsten Regionen der Welt und Wiege einer der ältesten Zivilisationen.'
  },
  {
    id: 7003,
    type: 'slider',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Bei welcher Temperatur (in °C) siedet Wasser auf dem Gipfel des Everest (8.849 m)?',
    min: 50,
    max: 100,
    step: 1,
    correct: 70,
    tolerance: 3,
    unit: ' °C',
    funFact: 'Mit sinkendem Luftdruck sinkt auch der Siedepunkt von Wasser. Auf dem Everest siedet Wasser bei nur ca. 70 °C – zu niedrig, um Tee richtig aufzubrühen oder Speisen vollständig zu garen. Astronauten auf der ISS haben dasselbe Problem.'
  },
  {
    id: 7004,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Wie viele Knochen hat ein erwachsener Mensch?',
    min: 150,
    max: 280,
    step: 1,
    correct: 206,
    tolerance: 5,
    unit: ' Knochen',
    funFact: 'Babys werden mit etwa 270–300 Knochen geboren – viele davon knorpelig. Mit dem Wachstum verschmelzen sie, bis im Erwachsenenalter 206 übrig bleiben. Die kleinsten Knochen sind die drei Gehörknöchelchen (Hammer, Amboss, Steigbügel). Der Oberschenkelknochen ist der größte.'
  },
  {
    id: 7005,
    type: 'slider',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'In welchem Jahr wurde das Brandenburger Tor in Berlin eingeweiht?',
    min: 1750,
    max: 1850,
    step: 1,
    correct: 1791,
    tolerance: 5,
    unit: '',
    funFact: 'Das Brandenburger Tor (1788–1791 erbaut) ist das einzig erhaltene Stadttor Berlins und eines der bekanntesten Symbole Deutschlands. Es wurde als Zeichen des Friedens errichtet. Napoleons Truppen trugen die Quadriga (Viergespann) 1806 als Kriegsbeute nach Paris – 1814 kehrte sie zurück.'
  },
  {
    id: 7006,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Wie viele Lichtjahre ist die Andromeda-Galaxie von uns entfernt?',
    min: 1000000,
    max: 4000000,
    step: 100000,
    correct: 2537000,
    tolerance: 200000,
    unit: ' Lichtjahre',
    funFact: 'Die Andromeda-Galaxie (M31) ist mit 2,537 Millionen Lichtjahren die nächste große Galaxie zur Milchstraße. Sie rast mit 110 km/s auf uns zu. In etwa 4,5 Milliarden Jahren werden beide Galaxien miteinander verschmelzen – unser Sternensystem wird dabei wahrscheinlich in eine Außenbahn geworfen.'
  },
  {
    id: 7007,
    type: 'slider',
    category: 'Tiere',
    difficulty: 'leicht',
    question: 'Wie viele Herzen hat ein Oktopus?',
    min: 1,
    max: 6,
    step: 1,
    correct: 3,
    tolerance: 0,
    unit: ' Herzen',
    funFact: 'Der Oktopus hat 3 Herzen: ein Systemherz, das das Blut durch den Körper pumpt, und zwei Kiemenherzen, die das Blut durch die Kiemen drücken. Sein Blut ist blau (nicht rot), da es Hämocyanin (kupferbasiert) statt Hämoglobin (eisenbasiert) enthält.'
  },
  {
    id: 7008,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Wie viele Länder grenzen an Deutschland?',
    min: 4,
    max: 12,
    step: 1,
    correct: 9,
    tolerance: 0,
    unit: ' Länder',
    funFact: 'Deutschland grenzt an 9 Länder: Dänemark (N), Polen und Tschechien (O), Österreich und die Schweiz (S), Frankreich, Luxemburg, Belgien und die Niederlande (W). Nur Russland und China haben mehr Nachbarländer.'
  },
  {
    id: 7009,
    type: 'slider',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: 'Die Kreiszahl Pi (π) beträgt ungefähr 3,14159... – wie viele Dezimalstellen wurden bisher berechnet?',
    min: 1,
    max: 200,
    step: 1,
    correct: 105,
    tolerance: 50,
    unit: ' Billionen Stellen',
    funFact: '2024 wurde Pi auf über 105 Billionen Dezimalstellen berechnet – ein Weltrekord. Es ist eine irrationale Zahl: Sie hat unendlich viele Dezimalstellen ohne Muster. Selbst für astronomische Berechnungen genügen 40 Stellen (damit kann man den Umfang des beobachtbaren Universums auf Atomgröße genau berechnen).'
  },
  {
    id: 7010,
    type: 'slider',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Bei wie viel Kelvin liegt der absolute Nullpunkt (0 K) in Grad Celsius?',
    min: -300,
    max: -200,
    step: 1,
    correct: -273,
    tolerance: 1,
    unit: ' °C',
    funFact: 'Der absolute Nullpunkt (0 K = −273,15 °C) ist die tiefst mögliche Temperatur – bei der alle thermische Bewegung von Atomen zum Stillstand käme. Er kann praktisch nicht erreicht, nur angenähert werden. Forschern gelang es, Materie auf milliardstel Kelvin über dem absoluten Nullpunkt zu kühlen.'
  },
  {
    id: 7011,
    type: 'slider',
    category: 'Sport',
    difficulty: 'leicht',
    question: 'Wie viele Spieler stehen beim Fußball auf dem Feld (beide Mannschaften zusammen)?',
    min: 10,
    max: 30,
    step: 1,
    correct: 22,
    tolerance: 0,
    unit: ' Spieler',
    funFact: 'Jede Fußballmannschaft spielt mit 11 Spielern, macht 22 auf dem Feld. Dazu kommen der Schiedsrichter und in der Regel 2–4 Linienrichter. Das erste dokumentierte Fußballspiel nach modernen Regeln fand 1863 in England statt.'
  },
  {
    id: 7012,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Wie viele Arten Bakterien leben schätzungsweise im menschlichen Darm?',
    min: 100,
    max: 1500,
    step: 50,
    correct: 1000,
    tolerance: 200,
    unit: ' Arten',
    funFact: 'Im menschlichen Darm leben ca. 1.000 verschiedene Bakterienarten – mit insgesamt mehr als 39 Billionen einzelnen Bakterien. Das Darmmikrobiom hat eine Gesamtmasse von etwa 1,5 kg und beeinflusst Immunsystem, Stoffwechsel und sogar die Stimmung ("Darm-Gehirn-Achse").'
  },
  {
    id: 7013,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Mit wie viel km/s bewegt sich die Erde um die Sonne (gerundet)?',
    min: 10,
    max: 60,
    step: 1,
    correct: 30,
    tolerance: 2,
    unit: ' km/s',
    funFact: 'Die Erde rast mit etwa 29,8 km/s (ca. 107.000 km/h) um die Sonne. Das sind fast 30 km jede Sekunde. In einer Minute legt die Erde ca. 1.800 km zurück – mehr als die Entfernung Berlin–Moskau.'
  },
  {
    id: 7014,
    type: 'slider',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Wie viele Pyramiden gibt es in Ägypten (ungefähr)?',
    min: 50,
    max: 200,
    step: 5,
    correct: 130,
    tolerance: 20,
    unit: ' Pyramiden',
    funFact: 'Ägypten hat etwa 130 bekannte Pyramiden – viel mehr als die meisten Menschen erwarten. Die berühmte Cheopspyramide in Gizeh ist mit 146 m (ursprünglich) die größte. Sudan hat sogar mehr Pyramiden als Ägypten (ca. 200–255), allerdings sind diese kleiner und weniger bekannt.'
  },
  {
    id: 7015,
    type: 'slider',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Wie hoch ist das Bruttoinlandsprodukt der USA ungefähr (in Billionen US-Dollar, 2024)?',
    min: 15,
    max: 40,
    step: 1,
    correct: 28,
    tolerance: 3,
    unit: ' Billionen USD',
    funFact: 'Die USA haben mit ca. 28 Billionen USD das größte Bruttoinlandsprodukt der Welt. Zum Vergleich: Deutschland liegt bei ca. 4,5 Billionen. Das US-BIP macht etwa 25 % der globalen Wirtschaftsleistung aus, obwohl die USA nur 4 % der Weltbevölkerung haben.'
  },
  {
    id: 7016,
    type: 'slider',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Wie schnell kann ein Gepard maximal in km/h laufen?',
    min: 80,
    max: 150,
    step: 5,
    correct: 120,
    tolerance: 10,
    unit: ' km/h',
    funFact: 'Der Gepard (Acinonyx jubatus) ist das schnellste Landtier der Welt mit bis zu 120 km/h – aber nur über kurze Distanzen (ca. 400–500 m). Nach einem Sprint muss er 15–30 Minuten ruhen. Seine Krallen sind nicht einziehbar, was ihm beim Rennen wie Spikes hilft.'
  },
  {
    id: 7017,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Wie groß ist die Fläche Russlands in Millionen km² (gerundet)?',
    min: 5,
    max: 25,
    step: 1,
    correct: 17,
    tolerance: 1,
    unit: ' Mio. km²',
    funFact: 'Russland ist mit 17,1 Millionen km² das größte Land der Welt – fast doppelt so groß wie Kanada (Platz 2). Es überspannt 11 Zeitzonen. Obwohl es so groß ist, lebt der Großteil der Bevölkerung im europäischen Teil westlich des Urals.'
  },
  {
    id: 7018,
    type: 'slider',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Wie viele Atome hat ein Milliliter Wasser ungefähr (in Sextillionen = 10^21)?',
    min: 10,
    max: 200,
    step: 5,
    correct: 100,
    tolerance: 30,
    unit: ' Sextillionen Atome',
    funFact: 'In 1 ml Wasser sind etwa 3,34 × 10^22 Wassermoleküle, also ca. 10^23 Atome. Zum Vergleich: Es gibt im beobachtbaren Universum schätzungsweise 10^80 Atome insgesamt. Die Avogadro-Zahl (6,022 × 10^23) beschreibt die Anzahl Atome/Moleküle in einem Mol einer Substanz.'
  },
  {
    id: 7019,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Wie lang ist der menschliche Dünndarm in Metern?',
    min: 2,
    max: 15,
    step: 1,
    correct: 6,
    tolerance: 1,
    unit: ' Meter',
    funFact: 'Der Dünndarm ist beim Erwachsenen ca. 5–7 m lang und für den größten Teil der Nährstoffaufnahme verantwortlich. Seine innere Oberfläche ist durch Falten, Zotten und Mikrovilli auf ca. 32 m² vergrößert – etwa die Größe eines kleinen Appartements. Der Dickdarm ist kürzer (ca. 1,5 m), aber weiter.'
  },
  {
    id: 7020,
    type: 'slider',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'In welchem Jahr wurde die Magna Carta in England unterzeichnet?',
    min: 1100,
    max: 1300,
    step: 1,
    correct: 1215,
    tolerance: 5,
    unit: '',
    funFact: 'Die Magna Carta (Große Urkunde) wurde 1215 von König Johann Ohneland unterzeichnet und gilt als erstes verfassungsähnliches Dokument. Sie begrenzte die Macht des Königs und legte fest, dass niemand ohne rechtmäßiges Urteil inhaftiert werden darf – eine Grundlage des Rechtstaatsprinzips.'
  },
  {
    id: 7021,
    type: 'slider',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Wie viele Megapixel hat die Kamera des James-Webb-Weltraumteleskops (NIRCAM)?',
    min: 10,
    max: 200,
    step: 10,
    correct: 68,
    tolerance: 15,
    unit: ' Megapixel',
    funFact: 'Die NIRCam des James-Webb-Teleskops hat 68 Megapixel – verteilt auf 10 Sensoren. Wichtiger als die Megapixelzahl ist die Infrarotempfindlichkeit: Webb kann Galaxien beobachten, die nur 200–300 Millionen Jahre nach dem Urknall entstanden. Die Hauptspiegel-Fläche beträgt 25,4 m².'
  },
  {
    id: 7022,
    type: 'slider',
    category: 'Tiere',
    difficulty: 'leicht',
    question: 'Wie lange lebt eine Arbeiterin im Bienenvolk im Sommer (in Tagen)?',
    min: 10,
    max: 100,
    step: 5,
    correct: 40,
    tolerance: 10,
    unit: ' Tage',
    funFact: 'Eine Sommerbiene lebt nur ca. 40 Tage – die ersten 20 als "Hausdbiene" (Pflege, Bau), die letzten 20 als "Flugbiene" (Sammeln). Im Winter, ohne Flugbetrieb, können Bienen bis zu 6 Monate leben. Die Königin kann bis zu 5 Jahre leben und bis zu 2.000 Eier pro Tag legen.'
  },
  {
    id: 7023,
    type: 'slider',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Wie hoch ist ein Basketballkorb in Metern (von der Hallenboden-Oberfläche)?',
    min: 2.5,
    max: 4.0,
    step: 0.05,
    correct: 3.05,
    tolerance: 0.05,
    unit: ' m',
    funFact: 'Basketballkörbe hängen weltweit auf 3,05 m Höhe – eine Regelgröße, die James Naismith 1891 festlegte, weil der Balkon des YMCA-Gebäudes, an dem er den ersten Pfirsichkorb befestigte, genau 3,05 m hoch war. Eine echte historische Zufälligkeit!'
  },
  {
    id: 7024,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Wie viele aktive Vulkane gibt es auf der Erde ungefähr?',
    min: 200,
    max: 1500,
    step: 50,
    correct: 800,
    tolerance: 150,
    unit: ' aktive Vulkane',
    funFact: 'Es gibt ca. 800–1.500 Vulkane, die als "aktiv" gelten (in historischer Zeit ausgebrochen). Der "Feuerring" rund um den Pazifik beherbergt über 75 % aller Vulkane. Auf dem Meeresgrund gibt es zudem tausende unterseeische Vulkane, die ständig Gestein und Mineralien produzieren.'
  },
  {
    id: 7025,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Wie viele Prozent der DNA teilt der Mensch mit einem Schimpansen?',
    min: 70,
    max: 100,
    step: 1,
    correct: 99,
    tolerance: 1,
    unit: ' %',
    funFact: 'Menschen und Schimpansen teilen ca. 98,7–99 % ihrer DNA – je nach Messmethode. Der Unterschied von 1–1,3 % umfasst Gene für Sprache, Gehirngröße und aufrechten Gang. Mit Bananen teilen wir noch ca. 60 % unserer Gene – da viele grundlegende Zellfunktionen universell sind.'
  },
  {
    id: 7026,
    type: 'slider',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'In welchem Jahr wurde das Euro-Bargeld in Deutschland eingeführt?',
    min: 1998,
    max: 2006,
    step: 1,
    correct: 2002,
    tolerance: 0,
    unit: '',
    funFact: 'Am 1. Januar 2002 wurde das Euro-Bargeld in 12 EU-Ländern eingeführt. In Deutschland war es der "umgekehrte D-Mark-Kurs" von 1,95583 DM pro Euro. Die letzten DM-Noten und -Münzen können noch immer bei der Bundesbank in Euro umgetauscht werden.'
  },
  {
    id: 7027,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Wie viele Monde hat der Planet Saturn (ungefähr, Stand 2024)?',
    min: 20,
    max: 150,
    step: 5,
    correct: 146,
    tolerance: 10,
    unit: ' Monde',
    funFact: 'Saturn hat mit 146 bekannten Monden (Stand 2024) die meisten Monde aller Planeten. Der größte, Titan, ist größer als Merkur und hat eine dichte Atmosphäre mit flüssigen Methan-Seen auf seiner Oberfläche. Enceladus schießt Wasserdampf ins Weltall und gilt als Kandidat für außerirdisches Leben.'
  },
  {
    id: 7028,
    type: 'slider',
    category: 'Technik',
    difficulty: 'leicht',
    question: 'Wie viel Prozent des Internets (Traffic) entfallen schätzungsweise auf Videostreaming?',
    min: 10,
    max: 90,
    step: 5,
    correct: 65,
    tolerance: 10,
    unit: ' %',
    funFact: 'Videostreaming (Netflix, YouTube, TikTok etc.) macht ca. 65 % des globalen Internettraffics aus. Netflix allein ist zeitweise für über 15 % des gesamten globalen Downstreamtraffics verantwortlich. Ein einziger HD-Stream verbraucht ca. 3–4 GB pro Stunde.'
  },
  {
    id: 7029,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Wie hoch ist der Mount Everest (in Metern, gerundet auf 10 m)?',
    min: 8000,
    max: 9000,
    step: 10,
    correct: 8849,
    tolerance: 20,
    unit: ' m',
    funFact: 'Der Mount Everest (Sagarmatha/Chomolungma) wurde 2020 neu vermessen und ist offiziell 8.848,86 m hoch – etwas höher als der vorherige Wert von 8.848 m. Er wächst jährlich um ca. 4 mm (tektonische Aktivität) und wird gleichzeitig durch Erosion abgetragen.'
  },
  {
    id: 7030,
    type: 'slider',
    category: 'Tiere',
    difficulty: 'schwer',
    question: 'Wie viele Stunden schläft eine Koala täglich (ungefähr)?',
    min: 10,
    max: 24,
    step: 1,
    correct: 22,
    tolerance: 1,
    unit: ' Stunden',
    funFact: 'Koalas schlafen bis zu 22 Stunden täglich – damit sind sie die Schläfer unter den Säugetieren. Der Grund: Eukalyptusblätter, ihre einzige Nahrung, enthalten kaum Energie und viele Giftstoffe. Schlafen spart Energie und gibt dem Körper Zeit, die Toxine zu verarbeiten.'
  },
  {
    id: 7031,
    type: 'slider',
    category: 'Geschichte',
    difficulty: 'leicht',
    question: 'In welchem Jahr begann der Zweite Weltkrieg?',
    min: 1930,
    max: 1945,
    step: 1,
    correct: 1939,
    tolerance: 0,
    unit: '',
    funFact: 'Am 1. September 1939 marschierte Deutschland in Polen ein – der Beginn des Zweiten Weltkriegs. Der Krieg dauerte bis zum 8. Mai 1945 (Europa) und 2. September 1945 (Pazifik). Er kostete ca. 70–85 Millionen Menschen das Leben – mehr als jeder andere Konflikt der Geschichte.'
  },
  {
    id: 7032,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Wie viele Chromosomenpaare hat der Mensch?',
    min: 10,
    max: 50,
    step: 1,
    correct: 23,
    tolerance: 0,
    unit: ' Paare',
    funFact: 'Der Mensch hat 23 Chromosomenpaare (46 Chromosomen). Interessant: Kartoffeln haben 48, Hunde haben 78. Das 23. Paar bestimmt das biologische Geschlecht: XX = weiblich, XY = männlich. Bei Down-Syndrom ist ein drittes Chromosom 21 vorhanden (Trisomie 21).'
  },
  {
    id: 7033,
    type: 'slider',
    category: 'Sport',
    difficulty: 'schwer',
    question: 'Wie viele Goldmedaillen gewann Michael Phelps (Schwimmer) bei Olympischen Spielen insgesamt?',
    min: 10,
    max: 30,
    step: 1,
    correct: 23,
    tolerance: 0,
    unit: ' Goldmedaillen',
    funFact: 'Michael Phelps gewann insgesamt 23 olympische Goldmedaillen (2000–2016) – mehr als jeder andere Athlet in der Olympiageschichte. Insgesamt hatte er 28 Medaillen. Im Vergleich: Das gesamte Olympia-Team Neuseelands hat in seiner Geschichte weniger Goldmedaillen gewonnen.'
  },
  {
    id: 7034,
    type: 'slider',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    question: 'Wie viel Grad Celsius muss Schokolade beim sogenannten "Temperieren" erreichen?',
    min: 20,
    max: 60,
    step: 1,
    correct: 32,
    tolerance: 2,
    unit: ' °C',
    funFact: 'Beim Temperieren wird Schokolade auf ca. 45–50 °C geschmolzen, auf ca. 27 °C abgekühlt und dann auf ca. 31–32 °C erwärmt. Dieser Prozess erzeugt stabile Kakaobutter-Kristalle (Typ V), die der Schokolade ihren Glanz, ihr Knacken und ihre glatte Textur geben. Falsches Temperieren führt zu "Fettreif".'
  },
  {
    id: 7035,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Wie viele Milliarden Jahre alt ist das Universum (ungefähr)?',
    min: 10,
    max: 20,
    step: 1,
    correct: 14,
    tolerance: 1,
    unit: ' Milliarden Jahre',
    funFact: 'Das Universum ist ca. 13,8 Milliarden Jahre alt – ermittelt durch die kosmische Hintergrundstrahlung und die Expansion des Universums (Hubble-Konstante). Die Erde ist etwa 4,5 Milliarden Jahre alt. Die Sonne wird noch ca. 5 Milliarden Jahre existieren, dann wird sie zur Roten Riesin.'
  },
  {
    id: 7036,
    type: 'slider',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Wie viele Milliarden Passagiere werden jährlich weltweit von Fluggesellschaften befördert (ca. 2023)?',
    min: 1,
    max: 8,
    step: 1,
    correct: 4,
    tolerance: 1,
    unit: ' Milliarden Passagiere',
    funFact: 'Weltweit werden jährlich ca. 4 Milliarden Flugpassagiere befördert (vor COVID waren es fast 5 Milliarden). Zu jeder Sekunde befinden sich statistisch ca. 9.000–10.000 Flugzeuge gleichzeitig in der Luft. Fliegen ist statistisch das sicherste Transportmittel pro zurückgelegtem Kilometer.'
  },
  {
    id: 7037,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Wie viele Einwohner hat Deutschland ungefähr (in Millionen, 2024)?',
    min: 60,
    max: 100,
    step: 1,
    correct: 84,
    tolerance: 2,
    unit: ' Millionen',
    funFact: 'Deutschland hat ca. 84 Millionen Einwohner und ist das bevölkerungsreichste Land der Europäischen Union. Berlin ist mit 3,7 Millionen Einwohnern die größte Stadt, gefolgt von Hamburg und München. Seit 2023 hat die Bevölkerung durch Zuwanderung leicht zugenommen.'
  },
  {
    id: 7038,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Wie viele Zellen hat ein menschlicher Körper ungefähr (in Billionen)?',
    min: 10,
    max: 100,
    step: 5,
    correct: 37,
    tolerance: 10,
    unit: ' Billionen Zellen',
    funFact: 'Der menschliche Körper besteht aus ca. 37 Billionen (37 × 10^12) Zellen. Davon machen rote Blutkörperchen mit 25 Billionen den größten Anteil aus. Jeden Tag werden ca. 330 Milliarden Zellen ersetzt. Die kleinste Zelle ist das Spermium, die größte die Eizelle (mit dem Auge erkennbar!).'
  },
  {
    id: 7039,
    type: 'slider',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Wie lang ist eine Olympische Schwimmbahn (in Metern)?',
    min: 25,
    max: 100,
    step: 5,
    correct: 50,
    tolerance: 0,
    unit: ' Meter',
    funFact: 'Olympische Schwimmbecken sind 50 m lang und 25 m breit, mit mindestens 8 Bahnen. Das Wasser muss exakt 25–28 °C betragen. Für Kurzbahn-Wettkämpfe (Weltcup) gibt es 25-m-Becken. Der Weltrekord im 100-m-Freistil (Männer) liegt bei 46,80 Sekunden (Caeleb Dressel, 2021).'
  },
  {
    id: 7040,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Wie viele Planeten gibt es in unserem Sonnensystem (nach der IAU-Definition seit 2006)?',
    min: 7,
    max: 10,
    step: 1,
    correct: 8,
    tolerance: 0,
    unit: ' Planeten',
    funFact: 'Seit 2006 gilt Pluto als Zwergplanet – deshalb hat unser Sonnensystem offiziell 8 Planeten: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun. Die Entscheidung der IAU war höchst kontrovers. Interessant: 14 US-Bundesstaaten verabschiedeten symbolische Resolutionen, Pluto wieder als Planeten anzuerkennen.'
  },
  {
    id: 7041,
    type: 'slider',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Wie viele Transistoren enthält ein moderner Smartphone-Prozessor (in Milliarden)?',
    min: 1,
    max: 30,
    step: 1,
    correct: 16,
    tolerance: 6,
    unit: ' Milliarden Transistoren',
    funFact: 'Moderne Smartphone-Chips (z.B. Apple A18 Pro) enthalten ca. 16–20 Milliarden Transistoren auf einem Chip kleiner als eine Briefmarke. Im Vergleich: Der Intel 4004 (1971) hatte 2.300 Transistoren. Diese Verdoppelung alle ~2 Jahre (Mooresches Gesetz) hat die gesamte Computerrevolution angetrieben.'
  },
  {
    id: 7042,
    type: 'slider',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Wie lange trägt eine Elefantin ihr Junges aus (in Monaten)?',
    min: 12,
    max: 30,
    step: 1,
    correct: 22,
    tolerance: 1,
    unit: ' Monate',
    funFact: 'Elefanten haben mit ca. 22 Monaten die längste Tragzeit aller Landtiere. Die Kälber werden mit ca. 100 kg Geburtsgewicht zur Welt gebracht und können sofort laufen. Das Gehirn eines Elefantenbabys ist bei der Geburt zu 35 % ausgewachsen (beim Menschen zu 26 %).'
  },
  {
    id: 7043,
    type: 'slider',
    category: 'Essen & Trinken',
    difficulty: 'leicht',
    question: 'Wie viele Tassen Kaffee werden täglich weltweit getrunken (in Milliarden)?',
    min: 1,
    max: 6,
    step: 1,
    correct: 3,
    tolerance: 1,
    unit: ' Milliarden Tassen',
    funFact: 'Täglich werden weltweit etwa 2,5–3 Milliarden Tassen Kaffee getrunken. Kaffee ist das zweitgehandeltste Gut der Welt (nach Rohöl). Finnland ist pro Kopf der weltgrößte Kaffeetrinker. Kaffee wurde erst im 15. Jahrhundert im Jemen als Getränk populär – davor kauten Menschen die Kaffeebohnen.'
  },
  {
    id: 7044,
    type: 'slider',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Wie viel Prozent des menschlichen Genoms bestehen aus kodierenden Sequenzen (Gene)?',
    min: 1,
    max: 30,
    step: 1,
    correct: 2,
    tolerance: 1,
    unit: ' %',
    funFact: 'Nur ca. 1,5–2 % der menschlichen DNA kodiert für Proteine (Gene). Der Rest galt lange als "Junk-DNA" – wurde aber durch das ENCODE-Projekt als funktional erkannt: Regulator-Sequenzen, nicht-kodierende RNAs, strukturelle Elemente. "Junk" war ein großes Missverständnis.'
  },
  {
    id: 7045,
    type: 'slider',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Wie tief ist der Marianengraben an seiner tiefsten Stelle (in Metern)?',
    min: 8000,
    max: 12000,
    step: 100,
    correct: 11000,
    tolerance: 200,
    unit: ' m',
    funFact: 'Der Challenger Deep im Marianengraben ist mit ca. 10.935–11.034 m die tiefste bekannte Stelle im Ozean. Würde man den Mount Everest hineinwerfen, läge er 1,6 km unter Wasser. Nur wenige Menschen haben den Grund besucht – weniger als die Mondlandung! James Cameron fuhr 2012 dorthin.'
  },
  {
    id: 7046,
    type: 'slider',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'In welchem Jahr fand die Französische Revolution (Sturm der Bastille) statt?',
    min: 1750,
    max: 1820,
    step: 1,
    correct: 1789,
    tolerance: 0,
    unit: '',
    funFact: 'Am 14. Juli 1789 stürmte das Volk die Bastille in Paris – Symbol der königlichen Willkürherrschaft. Dieser Tag ist heute Frankreichs Nationalfeiertag. Ironisch: In der Bastille befanden sich zum Zeitpunkt des Sturms nur 7 Gefangene.'
  },
  {
    id: 7047,
    type: 'slider',
    category: 'Biologie',
    difficulty: 'leicht',
    question: 'Wie viele Milliliter Blut hat ein durchschnittlicher Erwachsener im Körper (in Litern)?',
    min: 3,
    max: 8,
    step: 1,
    correct: 5,
    tolerance: 1,
    unit: ' Liter Blut',
    funFact: 'Ein erwachsener Mensch hat ca. 4,5–6 Liter Blut – je nach Körpergröße etwa 7–8 % des Körpergewichts. Das Herz pumpt dieses Blutvolumen ca. 70–80 Mal pro Minute durch den Körper. In einem Leben pumpt das Herz genug Blut, um 6 Supertanker zu füllen.'
  },
  {
    id: 7048,
    type: 'slider',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Wie viel Prozent des weltweiten Handels werden per Schiff abgewickelt?',
    min: 40,
    max: 95,
    step: 5,
    correct: 80,
    tolerance: 5,
    unit: ' %',
    funFact: 'Ca. 80 % des weltweiten Handels (nach Volumen) wird per Schiff abgewickelt. Die größten Containerriesen (Triple-E-Klasse) können über 24.000 Container tragen. Die Suez-Kanal-Blockade durch die "Ever Given" (2021) legte für 6 Tage einen beträchtlichen Teil des Welthandels lahm.'
  },
  {
    id: 7049,
    type: 'slider',
    category: 'Sport',
    difficulty: 'leicht',
    question: 'Wie viele Spieler hat eine Volleyball-Mannschaft auf dem Feld?',
    min: 4,
    max: 10,
    step: 1,
    correct: 6,
    tolerance: 0,
    unit: ' Spieler',
    funFact: 'Volleyball wird mit 6 Spielern pro Mannschaft gespielt. Es gibt eine Sonderrolle: den Libero (seit 1998 eingeführt), der ein andersfarbiges Trikot trägt und nicht angreifen, aber unbegrenzt wechseln darf. Volleyball wurde 1895 in Massachusetts von William Morgan erfunden.'
  },
  {
    id: 7050,
    type: 'slider',
    category: 'Astronomie',
    difficulty: 'leicht',
    question: 'Wie viele Minuten benötigt Licht von der Sonne zur Erde (ungefähr)?',
    min: 4,
    max: 15,
    step: 1,
    correct: 8,
    tolerance: 1,
    unit: ' Minuten',
    funFact: 'Licht von der Sonne braucht ca. 8 Minuten und 20 Sekunden, um die Erde zu erreichen. Das bedeutet: Wenn die Sonne plötzlich erlöschen würde, würden wir es erst 8 Minuten später bemerken. Von der nächsten anderen Sonne (Proxima Centauri) braucht Licht 4,24 Jahre.'
  },

  /* ════════════════════════════════════════════════════════
     ☑️  MULTISELECT  (50 Fragen)
     Format:
       type: 'multiselect'
       options: Array mit mind. 4 Optionen
       correct: Array mit allen richtigen Antworten
       (Spieler muss genau diese Kombination wählen)
  ════════════════════════════════════════════════════════ */
  {
    id: 8001,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Welche Länder grenzen an die Schweiz?',
    options: ['Deutschland', 'Österreich', 'Slowenien', 'Frankreich', 'Italien', 'Tschechien'],
    correct: ['Deutschland', 'Österreich', 'Frankreich', 'Italien'],
    funFact: 'Die Schweiz grenzt an 5 Länder: Deutschland, Österreich, Frankreich, Italien und das Fürstentum Liechtenstein. Sie ist bekannt für ihre Neutralität (seit dem Wiener Kongress 1815) und ist weder EU- noch NATO-Mitglied.'
  },
  {
    id: 8002,
    type: 'multiselect',
    category: 'Astronomie',
    difficulty: 'schwer',
    question: 'Welche Planeten haben keine Monde?',
    options: ['Merkur', 'Venus', 'Erde', 'Mars', 'Jupiter', 'Saturn'],
    correct: ['Merkur', 'Venus'],
    funFact: 'Nur Merkur und Venus haben keine Monde. Die Erde hat einen, Mars zwei (Phobos und Deimos), Jupiter über 90, Saturn über 140. Die Erdmond entstand vermutlich durch den Einschlag eines marsgroßen Protoplaneten (Theia) vor ca. 4,5 Milliarden Jahren.'
  },
  {
    id: 8003,
    type: 'multiselect',
    category: 'Chemie',
    difficulty: 'mittel',
    question: 'Welche Elemente sind Edelgase?',
    options: ['Helium', 'Stickstoff', 'Argon', 'Sauerstoff', 'Neon', 'Chlor'],
    correct: ['Helium', 'Argon', 'Neon'],
    funFact: 'Edelgase (Gruppe 18) sind extrem reaktionsträge, weil ihre äußerste Elektronenschale vollständig besetzt ist. Die sechs stabilen Edelgase sind Helium, Neon, Argon, Krypton, Xenon und Radon. Argon macht ca. 1 % der Erdatmosphäre aus (häufiger als CO₂!).'
  },
  {
    id: 8004,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Welche Länder bildeten die Alliierten im Zweiten Weltkrieg (Hauptmächte)?',
    options: ['USA', 'Frankreich', 'Deutschland', 'Italien', 'Sowjetunion', 'Großbritannien'],
    correct: ['USA', 'Sowjetunion', 'Großbritannien'],
    funFact: 'Die "Großen Drei" der Alliierten im WW2 waren USA, Sowjetunion und Großbritannien. Frankreich war nach 1940 besetzt, kämpfte aber mit den Freien Französischen Streitkräften unter de Gaulle weiter. Deutschland und Italien waren die Achsenmächte.'
  },
  {
    id: 8005,
    type: 'multiselect',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Welche der folgenden Tiere sind Säugetiere?',
    options: ['Delfin', 'Hai', 'Fledermaus', 'Krokodil', 'Platypus', 'Tintenfisch'],
    correct: ['Delfin', 'Fledermaus', 'Platypus'],
    funFact: 'Säugetiere sind definiert durch: Warmblütigkeit, Haare/Fell, Säugen der Jungen, und (meist) lebende Geburten. Delfine und Wale sind vollständig aquatisch, aber trotzdem Säugetiere. Das Schnabeltier und der Ameisenigel sind Ausnahmen: Säugetiere, die Eier legen.'
  },
  {
    id: 8006,
    type: 'multiselect',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Welche dieser Musikgenres haben ihre Wurzeln in der afroamerikanischen Musikkultur?',
    options: ['Jazz', 'Blues', 'Klassik', 'Country', 'Rock\'n\'Roll', 'Oper'],
    correct: ['Jazz', 'Blues', 'Rock\'n\'Roll'],
    funFact: 'Jazz, Blues und Rock\'n\'Roll haben tiefe Wurzeln in der afroamerikanischen Kultur des US-Südens. Blues entstand Ende des 19. Jh. in den Südstaaten, Jazz in New Orleans Anfang des 20. Jh. Rock\'n\'Roll in den 1950ern. Die Übernahme dieser Genres durch weiße Künstler war historisch oft ohne Anerkennung und Vergütung.'
  },
  {
    id: 8007,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Welche Städte sind Hauptstädte eines G7-Landes?',
    options: ['Washington D.C.', 'Sydney', 'Tokio', 'Peking', 'Berlin', 'Brüssel'],
    correct: ['Washington D.C.', 'Tokio', 'Berlin'],
    funFact: 'Die G7 sind: USA (Washington D.C.), Japan (Tokio), Deutschland (Berlin), Frankreich (Paris), Großbritannien (London), Italien (Rom), Kanada (Ottawa) – sowie die EU. Sydney ist nicht Hauptstadt Australiens (das ist Canberra); Peking ist China, kein G7-Mitglied.'
  },
  {
    id: 8008,
    type: 'multiselect',
    category: 'Wissenschaft',
    difficulty: 'schwer',
    question: 'Welche Phänomene sind Belege für die Relativitätstheorie?',
    options: ['GPS-Zeitkorrekturen', 'Gravitationslinsen', 'Dopplereffekt bei Schall', 'Lichtablenkung durch Gravitation', 'Regenbogen'],
    correct: ['GPS-Zeitkorrekturen', 'Gravitationslinsen', 'Lichtablenkung durch Gravitation'],
    funFact: 'GPS-Satelliten müssen täglich relativistische Zeitkorrekturen vornehmen: Spezielle Relativität (Satellitenbewegung verlangsamt die Zeit) und Allgemeine Relativität (schwächere Gravitation beschleunigt die Zeit). Ohne diese Korrekturen wäre GPS nach einem Tag um mehrere Kilometer ungenau.'
  },
  {
    id: 8009,
    type: 'multiselect',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Welche dieser Tiere sind für ihre vollständige Metamorphose (Holometabolie) bekannt?',
    options: ['Schmetterling', 'Libelle', 'Heuschrecke', 'Käfer', 'Schnecke'],
    correct: ['Schmetterling', 'Käfer'],
    funFact: 'Vollständige Metamorphose (Holometabolie): Ei → Larve → Puppe → Imago. Das gilt für Schmetterlinge, Käfer, Fliegen, Bienen und Ameisen. Libellen und Heuschrecken machen eine unvollständige Metamorphose (Hemimetabolie) durch – ohne Puppenstadium. Schnecken metamorphosieren gar nicht.'
  },
  {
    id: 8010,
    type: 'multiselect',
    category: 'Literatur',
    difficulty: 'mittel',
    question: 'Welche dieser Werke hat William Shakespeare geschrieben?',
    options: ['Hamlet', 'Don Quijote', 'Macbeth', 'Faust', 'Othello', 'Die Göttliche Komödie'],
    correct: ['Hamlet', 'Macbeth', 'Othello'],
    funFact: 'Shakespeare schrieb 37 Theaterstücke, 154 Sonette und mehrere Langgedichte. "Don Quijote" ist von Miguel de Cervantes (Spanien, 1605), "Faust" von Goethe (Deutschland), "Die Göttliche Komödie" von Dante Alighieri (Italien, ca. 1320).'
  },
  {
    id: 8011,
    type: 'multiselect',
    category: 'Essen & Trinken',
    difficulty: 'leicht',
    question: 'Welche Zutaten sind klassisch in einem Wiener Schnitzel enthalten?',
    options: ['Kalbfleisch', 'Schweinefleisch', 'Ei', 'Semmelbrösel', 'Käse', 'Mehl'],
    correct: ['Kalbfleisch', 'Ei', 'Semmelbrösel', 'Mehl'],
    funFact: 'Das echte Wiener Schnitzel besteht aus Kalbfleisch, paniert in Mehl, Ei und Semmelbrösel, in Butterschmalz gebraten. Schnitzel aus Schweinefleisch heißen offiziell "Schnitzel Wiener Art". Es gibt um den Ursprung des Schnitzels einen freundlichen Streit zwischen Wien und Mailand (Cotoletta alla Milanese).'
  },
  {
    id: 8012,
    type: 'multiselect',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Welche dieser Protokolle werden für die Übertragung von E-Mails verwendet?',
    options: ['SMTP', 'IMAP', 'HTTP', 'POP3', 'FTP', 'DNS'],
    correct: ['SMTP', 'IMAP', 'POP3'],
    funFact: 'SMTP (Simple Mail Transfer Protocol) sendet E-Mails. IMAP und POP3 empfangen sie. HTTP/HTTPS ist für Webseiten, FTP für Dateiübertragungen, DNS für die Namensauflösung. Die erste E-Mail wurde 1971 von Ray Tomlinson an sich selbst geschickt – der Text ist nicht überliefert.'
  },
  {
    id: 8013,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Welche Erfindungen werden Thomas Edison zugeschrieben?',
    options: ['Glühbirne (Verbesserung)', 'Phonograph', 'Telefon', 'Kinetoskop (früher Filmprojektor)', 'Radio'],
    correct: ['Glühbirne (Verbesserung)', 'Phonograph', 'Kinetoskop (früher Filmprojektor)'],
    funFact: 'Edison hielt 1.093 US-Patente. Das Telefon erfand Alexander Graham Bell, das Radio Guglielmo Marconi (und Nikola Tesla beanspruchte die Priorität). Edisons wichtigste Leistung war das erste Forschungslabor (Menlo Park, 1876) – die Erfindung der organisierten Forschung selbst.'
  },
  {
    id: 8014,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Welche Meere/Ozeane berührt Russland?',
    options: ['Arktischer Ozean', 'Pazifischer Ozean', 'Atlantischer Ozean', 'Indischer Ozean', 'Schwarzes Meer', 'Ostsee'],
    correct: ['Arktischer Ozean', 'Pazifischer Ozean', 'Schwarzes Meer', 'Ostsee'],
    funFact: 'Russland hat Küsten am Arktischen Ozean, Pazifischen Ozean, Schwarzen Meer, Ostsee und Kaspischen Meer (technisch ein See). Trotz seiner enormen Küstenlänge hat Russland im Winter große Probleme mit zugefrorenen Häfen – ein Hauptgrund für den historischen Wunsch nach "Warmwasserhäfen".'
  },
  {
    id: 8015,
    type: 'multiselect',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Welche dieser Filme haben den Oscar für den besten Film gewonnen?',
    options: ['Der Pate', 'Schindlers Liste', 'Titanic', 'Avatar', 'Gladiator', 'Jurassic Park'],
    correct: ['Der Pate', 'Schindlers Liste', 'Titanic', 'Gladiator'],
    funFact: '"Avatar" (2009) war zwar der erfolgreichste Film aller Zeiten (nach Einspielergebnissen), gewann aber nicht den Best-Picture-Oscar (verlor gegen "Tut tig" / "The Hurt Locker"). "Jurassic Park" gewann 3 Oscars, aber nur technische. "Titanic" gewann 11 Oscars – gemeinsam mit "Ben-Hur" und "Herr der Ringe: Die Rückkehr" Rekord.'
  },
  {
    id: 8016,
    type: 'multiselect',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Welche dieser Organe hat der menschliche Körper doppelt (paarig)?',
    options: ['Nieren', 'Leber', 'Lunge', 'Milz', 'Herz', 'Bauchspeicheldrüse'],
    correct: ['Nieren', 'Lunge'],
    funFact: 'Nieren und Lungen sind paarig angelegt – Leber, Milz, Herz und Bauchspeicheldrüse nicht. Mit einer einzigen Niere oder einem Lungenflügel ist Leben möglich (viele Lebendspender spenden eine Niere). Der Körper hat auch paarige Organe, die man nicht sieht: Hoden/Eierstöcke, Augen, Ohren, Hände, Beine.'
  },
  {
    id: 8017,
    type: 'multiselect',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Welche Planeten unseres Sonnensystems sind Gasriesen?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptun', 'Pluto'],
    correct: ['Jupiter', 'Saturn'],
    funFact: 'Jupiter und Saturn sind echte Gasriesen (hauptsächlich Wasserstoff und Helium, kein fester Kern). Uranus und Neptun heißen "Eisriesen" – sie enthalten mehr Wasser, Ammoniak und Methan unter extremem Druck. Saturn ist so leicht (Dichte < Wasser), dass er in einem riesigen Ozean schwimmen würde.'
  },
  {
    id: 8018,
    type: 'multiselect',
    category: 'Essen & Trinken',
    difficulty: 'mittel',
    question: 'Welche Getränke enthalten von Natur aus Koffein?',
    options: ['Kaffee', 'Grüner Tee', 'Kamillentee', 'Mate', 'Rooibos', 'Kakao'],
    correct: ['Kaffee', 'Grüner Tee', 'Mate', 'Kakao'],
    funFact: 'Koffein kommt natürlich in Kaffeebohnen, Teeblättern, Matepflanzen, Kakaobohnen, Kolanüssen und Guarana vor. Kamillentee und Rooibos sind koffeinfrei. Koffein ist weltweit die am häufigsten konsumierte psychoaktive Substanz. Es blockiert den Adenosin-Rezeptor, der normalerweise Müdigkeit signalisiert.'
  },
  {
    id: 8019,
    type: 'multiselect',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Welche dieser Phänomene sind Beispiele für elektromagnetische Strahlung?',
    options: ['Röntgenstrahlen', 'Schallwellen', 'Sichtbares Licht', 'Infrarotstrahlung', 'Erdbebenswellen', 'Radiowellen'],
    correct: ['Röntgenstrahlen', 'Sichtbares Licht', 'Infrarotstrahlung', 'Radiowellen'],
    funFact: 'Elektromagnetische Strahlung umfasst das gesamte Spektrum von Radiowellen bis Gammastrahlen – alle bewegen sich mit Lichtgeschwindigkeit. Schallwellen und Erdbebenwellen sind mechanische Wellen und brauchen ein Medium zur Ausbreitung; sie können sich nicht im Vakuum ausbreiten.'
  },
  {
    id: 8020,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'leicht',
    question: 'Welche dieser Deutschen haben den Nobelpreis gewonnen?',
    options: ['Albert Einstein', 'Max Planck', 'Karl Marx', 'Konrad Adenauer', 'Wilhelm Röntgen'],
    correct: ['Albert Einstein', 'Max Planck', 'Wilhelm Röntgen'],
    funFact: 'Einstein (Physik, 1921), Planck (Physik, 1918), Röntgen (Physik, 1901 – erster Physiknobelpreisträger überhaupt). Deutschland ist das Land mit den meisten Nobelpreisträgern nach den USA. Karl Marx und Konrad Adenauer erhielten keinen Nobelpreis.'
  },
  {
    id: 8021,
    type: 'multiselect',
    category: 'Sprache',
    difficulty: 'schwer',
    question: 'Welche Sprachen sind romanische Sprachen (entstammen dem Latein)?',
    options: ['Französisch', 'Rumänisch', 'Portugiesisch', 'Griechisch', 'Deutsch', 'Spanisch'],
    correct: ['Französisch', 'Rumänisch', 'Portugiesisch', 'Spanisch'],
    funFact: 'Romanische Sprachen entwickelten sich aus dem Vulgärlatein (dem gesprochenen Latein des Römischen Reiches). Die Hauptsprachen sind Spanisch, Portugiesisch, Französisch, Italienisch, Rumänisch und Katalanisch. Griechisch und Deutsch sind indoeuropäische Sprachen anderer Zweige (hellenisch und germanisch).'
  },
  {
    id: 8022,
    type: 'multiselect',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Welche Sportarten sind Teil der Olympischen Sommerspiele (Stand 2024)?',
    options: ['Klettern', 'Schach', 'Breakdance', 'Surfen', 'Cricket', 'Karate'],
    correct: ['Klettern', 'Breakdance', 'Surfen'],
    funFact: 'Klettern, Skateboard, Surfen und Breakdance wurden für Paris 2024 neu aufgenommen, um jüngere Zielgruppen anzusprechen. Karate war nur bei Tokio 2020 dabei und fiel danach wieder raus. Cricket und Schach sind trotz riesiger weltweiter Fangemeinden nicht olympisch.'
  },
  {
    id: 8023,
    type: 'multiselect',
    category: 'Tiere',
    difficulty: 'schwer',
    question: 'Welche dieser Tiere können Ultraschall erzeugen oder wahrnehmen?',
    options: ['Fledermaus', 'Delfin', 'Elefant', 'Hund', 'Katze', 'Schimpanse'],
    correct: ['Fledermaus', 'Delfin', 'Hund', 'Katze'],
    funFact: 'Fledermäuse und Delfine erzeugen Ultraschall zur Echoortung. Hunde hören bis ca. 65 kHz (Mensch bis 20 kHz), Katzen bis ca. 79 kHz. Elefanten dagegen kommunizieren in Infraschall (unter 20 Hz). Schimpansen haben ähnliche Hörfähigkeiten wie Menschen.'
  },
  {
    id: 8024,
    type: 'multiselect',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: 'Welche dieser Zahlen sind Primzahlen?',
    options: ['2', '9', '13', '17', '21', '25'],
    correct: ['2', '13', '17'],
    funFact: '2 ist die einzige gerade Primzahl. 9 = 3×3, 21 = 3×7, 25 = 5×5 – also keine Primzahlen. Die größte bekannte Primzahl (Stand 2024) hat fast 25 Millionen Stellen. Der Beweis, ob es unendlich viele Primzahlzwillinge (z.B. 11&13, 17&19) gibt, ist eines der größten ungelösten Probleme der Mathematik.'
  },
  {
    id: 8025,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Welche Länder haben den Euro als offizielle Währung?',
    options: ['Schweiz', 'Österreich', 'Norwegen', 'Frankreich', 'Schweden', 'Portugal'],
    correct: ['Österreich', 'Frankreich', 'Portugal'],
    funFact: 'Die Eurozone umfasst 20 EU-Länder (Stand 2024). Schweiz, Norwegen und Schweden sind nicht in der Eurozone: Schweiz und Norwegen sind nicht mal EU-Mitglieder; Schweden erfüllt die Kriterien, hat aber per Volksentscheid (2003) den Euro abgelehnt.'
  },
  {
    id: 8026,
    type: 'multiselect',
    category: 'Medizin',
    difficulty: 'schwer',
    question: 'Welche Vitamine sind fettlöslich (können im Körper gespeichert werden)?',
    options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
    correct: ['Vitamin A', 'Vitamin D', 'Vitamin E', 'Vitamin K'],
    funFact: 'Die fettlöslichen Vitamine ADEK werden im Fettgewebe und in der Leber gespeichert – ein Überschuss kann toxisch werden. Vitamin C und alle B-Vitamine sind wasserlöslich: Überschüsse werden über den Urin ausgeschieden. Daher ist eine Überdosierung mit Vitamin C kaum möglich, mit Vitamin A aber schon.'
  },
  {
    id: 8027,
    type: 'multiselect',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Welche dieser Figuren sind Charaktere aus dem Marvel Cinematic Universe (MCU)?',
    options: ['Iron Man', 'Superman', 'Thor', 'The Flash', 'Black Panther', 'Batman'],
    correct: ['Iron Man', 'Thor', 'Black Panther'],
    funFact: 'Iron Man, Thor und Black Panther sind Marvel-Charaktere (MCU). Superman, The Flash und Batman sind DC-Charaktere. MCU ist das erfolgreichste Filmfranchise der Geschichte mit einem kumulierten Einspielergebnis von über 30 Milliarden Dollar.'
  },
  {
    id: 8028,
    type: 'multiselect',
    category: 'Natur',
    difficulty: 'mittel',
    question: 'Welche dieser Faktoren tragen zu einem Tornado bei?',
    options: ['Feuchte Warmluft aus dem Süden', 'Trockene Kaltluft aus dem Norden', 'Wind-Scherung (unterschiedliche Windrichtungen in verschiedenen Höhen)', 'Mondgravitation', 'Starke Sonneinstrahlung allein'],
    correct: ['Feuchte Warmluft aus dem Süden', 'Trockene Kaltluft aus dem Norden', 'Wind-Scherung (unterschiedliche Windrichtungen in verschiedenen Höhen)'],
    funFact: 'Tornados entstehen in Superzellen-Gewittern: Feuchte Warmluft steigt auf und trifft auf trockene Kaltluft; Windscherung (unterschiedliche Windrichtungen in verschiedenen Höhen) versetzt die aufsteigende Luft in Rotation. "Tornado Alley" in den USA hat ideale Bedingungen durch die Topografie des Kontinents.'
  },
  {
    id: 8029,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Welche Länder waren Gründungsmitglieder der NATO (1949)?',
    options: ['USA', 'Deutschland', 'Großbritannien', 'Frankreich', 'Schweden', 'Island'],
    correct: ['USA', 'Großbritannien', 'Frankreich', 'Island'],
    funFact: 'Die NATO wurde 1949 von 12 Ländern gegründet: USA, Kanada, Großbritannien, Frankreich, Belgien, Niederlande, Luxemburg, Norwegen, Dänemark, Island, Italien und Portugal. Deutschland trat erst 1955 bei (Westdeutschland); Schweden wurde erst 2024 Mitglied.'
  },
  {
    id: 8030,
    type: 'multiselect',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Welche Aussagen über Schwarze Löcher sind korrekt?',
    options: ['Kein Licht kann entweichen', 'Sie saugen alles in der Nähe an', 'Sie haben eine "Ereignishorizont"-Grenze', 'Sie leben ewig', 'Sie entstehen nur aus Sternen'],
    correct: ['Kein Licht kann entweichen', 'Sie haben eine "Ereignishorizont"-Grenze'],
    funFact: 'Schwarze Löcher saugen nicht aktiv an – Materie fällt durch normale Gravitation hinein. Nach Hawking-Strahlung verdampfen sie sehr langsam. Sie entstehen auch aus dem Zusammenschluss von Galaxien. Der "Ereignishorizont" ist die Grenze, jenseits derer keine Rückkehr möglich ist.'
  },
  {
    id: 8031,
    type: 'multiselect',
    category: 'Tiere',
    difficulty: 'leicht',
    question: 'Welche Tiere sind in Deutschland heimisch?',
    options: ['Braunbär', 'Grizzlybär', 'Wolf', 'Luchs', 'Jaguar', 'Puma'],
    correct: ['Braunbär', 'Wolf', 'Luchs'],
    funFact: 'Wolf und Luchs sind nach Jahrzehnten der Ausrottung nach Deutschland zurückgekehrt. Der Braunbär ist in Bayern heimisch und wurde nach einem letzten Exemplar (Bruno, 2006) nicht wieder beobachtet. Jaguar und Puma sind ausschließlich in Amerika beheimatet.'
  },
  {
    id: 8032,
    type: 'multiselect',
    category: 'Kunst',
    difficulty: 'mittel',
    question: 'Welche Kunstepochen folgten aufeinander (richtige Zuordnungen)?',
    options: ['Renaissance (15./16. Jh.)', 'Barock (17./18. Jh.)', 'Kubismus (20. Jh.)', 'Impressionismus (19. Jh.)', 'Romantik (19. Jh.)'],
    correct: ['Renaissance (15./16. Jh.)', 'Barock (17./18. Jh.)', 'Kubismus (20. Jh.)', 'Impressionismus (19. Jh.)', 'Romantik (19. Jh.)'],
    funFact: 'Die Kunstgeschichte: Mittelalter → Renaissance (15./16. Jh.) → Barock (17./18. Jh.) → Klassizismus/Romantik (18./19. Jh.) → Impressionismus (spätes 19. Jh.) → Moderne mit Kubismus, Expressionismus etc. (frühes 20. Jh.) → Zeitgenössische Kunst.'
  },
  {
    id: 8033,
    type: 'multiselect',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Welche dieser Substanzen sind Makronährstoffe (liefern dem Menschen Energie)?',
    options: ['Kohlenhydrate', 'Fette', 'Vitamine', 'Proteine', 'Mineralstoffe', 'Wasser'],
    correct: ['Kohlenhydrate', 'Fette', 'Proteine'],
    funFact: 'Makronährstoffe liefern Energie: Kohlenhydrate (4 kcal/g), Proteine (4 kcal/g) und Fette (9 kcal/g). Vitamine, Mineralstoffe und Wasser sind essenziell, liefern aber keine Energie. Alkohol ist eine Ausnahme: Er liefert 7 kcal/g Energie, ist aber kein Nährstoff im klassischen Sinne.'
  },
  {
    id: 8034,
    type: 'multiselect',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Welche Betriebssysteme werden auf Smartphones verwendet?',
    options: ['Android', 'iOS', 'Windows 11', 'HarmonyOS', 'macOS', 'Linux (Desktop)'],
    correct: ['Android', 'iOS', 'HarmonyOS'],
    funFact: 'Auf dem Smartphone-Markt dominieren Android (ca. 72 %) und iOS (ca. 27 %). HarmonyOS von Huawei ist seit 2019 im Einsatz, nachdem Huawei durch US-Sanktionen der Zugang zu Android-Diensten beschränkt wurde. Windows Phone wurde 2017 offiziell eingestellt.'
  },
  {
    id: 8035,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Welche Werke gehören zur Weltliteratur der Antike?',
    options: ['Ilias (Homer)', 'Divina Commedia (Dante)', 'Aeneis (Vergil)', 'Hamlet (Shakespeare)', 'Odyssee (Homer)'],
    correct: ['Ilias (Homer)', 'Aeneis (Vergil)', 'Odyssee (Homer)'],
    funFact: '"Ilias" und "Odyssee" (Homer, ca. 8. Jh. v. Chr.) sind die ältesten erhaltenen Werke der europäischen Literatur. Vergils "Aeneis" (1. Jh. v. Chr.) ist das klassische Epos Roms und verbindet griechische und römische Mythologie. Dantes "Göttliche Komödie" und Shakespeares "Hamlet" sind Mittelalter/Renaissance.'
  },
  {
    id: 8036,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Welche Länder befinden sich vollständig auf der Südhalbkugel?',
    options: ['Australien', 'Brasilien', 'Indonesien', 'Chile', 'Neuseeland', 'Thailand'],
    correct: ['Australien', 'Chile', 'Neuseeland'],
    funFact: 'Australien und Neuseeland liegen vollständig auf der Südhalbkugel. Brasilien und Indonesien werden vom Äquator geteilt. Chile liegt fast vollständig auf der Südhalbkugel (nur ein winziges Stück im Norden). Thailand liegt vollständig auf der Nordhalbkugel.'
  },
  {
    id: 8037,
    type: 'multiselect',
    category: 'Musik',
    difficulty: 'schwer',
    question: 'Welche Instrumente gehören zum klassischen Symphonieorchester?',
    options: ['Fagott', 'Saxophon', 'Pauke', 'Gitarre', 'Oboe', 'Syntheziser'],
    correct: ['Fagott', 'Pauke', 'Oboe'],
    funFact: 'Das klassische Symphonieorchester (seit Beethoven) besteht aus Streichern, Holzbläsern (Flöte, Oboe, Klarinette, Fagott), Blechbläsern (Trompete, Horn, Posaune, Tuba) und Schlaginstrumenten (Pauke). Saxophon und Gitarre gehören nicht dazu – obwohl beide im 19. Jh. erfunden wurden.'
  },
  {
    id: 8038,
    type: 'multiselect',
    category: 'Wirtschaft',
    difficulty: 'mittel',
    question: 'Welche Aussagen über Bitcoin sind korrekt?',
    options: ['Maximale Menge: 21 Millionen BTC', 'Es gibt keine zentrale Kontrolle', 'Transaktionen sind vollständig anonym', 'Es gibt einen physischen Bitcoin-Server', 'Mining erzeugt neue Bitcoins'],
    correct: ['Maximale Menge: 21 Millionen BTC', 'Es gibt keine zentrale Kontrolle', 'Mining erzeugt neue Bitcoins'],
    funFact: 'Bitcoin-Transaktionen sind pseudonym, nicht anonym – alle sind auf der öffentlichen Blockchain einsehbar. Es gibt keine zentralen Server, sondern ein verteiltes Netzwerk. Das letzte Bitcoin wird ca. im Jahr 2140 gemint. Satoshi Nakamoto (Pseudonym) erfand Bitcoin 2008 – seine Identität ist bis heute unbekannt.'
  },
  {
    id: 8039,
    type: 'multiselect',
    category: 'Natur',
    difficulty: 'mittel',
    question: 'Welche Phänomene können durch den Klimawandel verstärkt werden?',
    options: ['Extremhitzeereignisse', 'Häufigere Überflutungen', 'Verstärkte Trockenzeiten', 'Abschwächung aller Winde', 'Mehr Schneefall weltweit'],
    correct: ['Extremhitzeereignisse', 'Häufigere Überflutungen', 'Verstärkte Trockenzeiten'],
    funFact: 'Klimawandel verstärkt Extremwettereignisse: Hitzewellen werden häufiger und intensiver; stärkere Verdunstung führt zu mehr Regen und Überflutungen in manchen Regionen, während Dürren in anderen zunehmen. Der Wasserkreislauf wird insgesamt intensiver – nicht einfach "mehr" oder "weniger" Wetter.'
  },
  {
    id: 8040,
    type: 'multiselect',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Welche dieser Organe/Strukturen des Körpers enthalten keine Blutgefäße?',
    options: ['Hornhaut des Auges', 'Knorpel', 'Leber', 'Zähne (Zahnschmelz)', 'Knochen', 'Haare'],
    correct: ['Hornhaut des Auges', 'Knorpel', 'Zähne (Zahnschmelz)', 'Haare'],
    funFact: 'Gefäßlose Gewebe erhalten Nährstoffe durch Diffusion. Die Hornhaut bezieht Sauerstoff direkt aus der Luft – deshalb müssen Kontaktlinsen sauerstoffdurchlässig sein. Knorpelgewebe (z.B. Ohren, Nase) heilt so langsam, weil es keine Blutversorgung hat. Knochen sind sehr gut durchblutet (Knochenmark!).'
  },
  {
    id: 8041,
    type: 'multiselect',
    category: 'Philosophie',
    difficulty: 'schwer',
    question: 'Welche Philosophen gehören zur antiken griechischen Philosophie?',
    options: ['Sokrates', 'René Descartes', 'Aristoteles', 'Immanuel Kant', 'Platon', 'Friedrich Nietzsche'],
    correct: ['Sokrates', 'Aristoteles', 'Platon'],
    funFact: 'Das "goldene Dreieck" der griechischen Philosophie: Sokrates (470–399 v. Chr.) – schrieb nichts, lehrte durch Dialog. Platon (428–348) – Schüler des Sokrates, begründete die Akademie. Aristoteles (384–322) – Schüler Platons, lehrte Alexander den Großen. Descartes, Kant und Nietzsche sind neuzeitliche Philosophen.'
  },
  {
    id: 8042,
    type: 'multiselect',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Welche Tiere können ihren eigenen Körperteil regenerieren?',
    options: ['Seestern', 'Axolotl', 'Gecko', 'Krake', 'Regenwurm', 'Mensch'],
    correct: ['Seestern', 'Axolotl', 'Gecko', 'Regenwurm'],
    funFact: 'Seesterne können verlorene Arme regenerieren – manche sogar einen ganzen neuen Körper aus einem Arm. Axolotl regenerieren Gliedmaßen, Herz- und Gehirngewebe. Geckos können den Schwanz abwerfen und nachwachsen lassen. Regenwürmer können in zwei Teilen überleben und regenerieren. Menschen können nur die Leber teilweise regenerieren.'
  },
  {
    id: 8043,
    type: 'multiselect',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Welche Sprachen sind im Deutschen Grundgesetz als Amtssprachen der Bundesrepublik anerkannt?',
    options: ['Deutsch', 'Sorbisch', 'Friesisch', 'Dänisch', 'Romanes', 'Englisch'],
    correct: ['Deutsch', 'Sorbisch', 'Friesisch', 'Dänisch'],
    funFact: 'Das Grundgesetz selbst nennt nur Deutsch als Amtssprache. Die Europäische Charta der Regional- oder Minderheitensprachen erkennt für Deutschland Sorbisch, Friesisch, Dänisch und Romanes an. Sorbisch wird von ca. 60.000 Menschen in der Lausitz gesprochen – einer der ältesten slawischen Minderheiten Westeuropas.'
  },
  {
    id: 8044,
    type: 'multiselect',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Welche Länder haben die Atombombe (Kernwaffen) eingesetzt oder getestet?',
    options: ['USA', 'Sowjetunion/Russland', 'Deutschland', 'Frankreich', 'China', 'Japan'],
    correct: ['USA', 'Sowjetunion/Russland', 'Frankreich', 'China'],
    funFact: 'Die USA haben als einzige Nation Atomwaffen im Krieg eingesetzt (Hiroshima und Nagasaki, 1945). Atomtests haben die USA, Sowjetunion, UK, Frankreich, China, Indien, Pakistan und Nordkorea durchgeführt. Deutschland und Japan haben das Atomwaffensperrvertrag unterzeichnet und keine Atomwaffen entwickelt.'
  },
  {
    id: 8045,
    type: 'multiselect',
    category: 'Sport',
    difficulty: 'leicht',
    question: 'Welche dieser Sportarten werden auf Eis ausgeübt?',
    options: ['Eisschnelllauf', 'Biathlon', 'Curling', 'Bobsport', 'Ski Alpin', 'Eishockey'],
    correct: ['Eisschnelllauf', 'Curling', 'Eishockey'],
    funFact: 'Auf Eis: Eisschnelllauf, Eiskunstlauf, Curling, Eishockey. Biathlon kombiniert Skilanglauf und Schießen – auf Schnee, nicht Eis. Bobsport und Skeleton laufen auf einer Eisrinne. Ski Alpin ist auf Schnee.'
  },
  {
    id: 8046,
    type: 'multiselect',
    category: 'Technik',
    difficulty: 'schwer',
    question: 'Welche Technologien nutzen Quantenphänomene (Superposition, Verschränkung)?',
    options: ['Quantencomputer', 'MRT (Magnetresonanztomografie)', 'Laser', 'Glasfaserkabel', 'Quantenkryptografie'],
    correct: ['Quantencomputer', 'MRT (Magnetresonanztomografie)', 'Laser', 'Quantenkryptografie'],
    funFact: 'MRT nutzt den Quantenspin von Wasserstoffatomen. Laser beruhen auf stimulierter Emission, einem Quantenphänomen. Quantencomputer und Quantenkryptografie nutzen Superposition und Verschränkung. Glasfaser überträgt Licht klassisch – obwohl Photonen Quantenteilchen sind, wird hier kein Quanteneffekt bewusst ausgenutzt.'
  },
  {
    id: 8047,
    type: 'multiselect',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Welche Flüsse münden in den Atlantischen Ozean?',
    options: ['Amazonas', 'Niger', 'Jangtse', 'Rhein', 'Mississippi', 'Ganges'],
    correct: ['Amazonas', 'Niger', 'Rhein', 'Mississippi'],
    funFact: 'Amazonas → Atlantik (ca. 20 % des weltweiten Süßwasserabflusses). Niger → Atlantik/Golf von Guinea. Rhein → Nordsee (Teil des Atlantiks). Mississippi → Golf von Mexiko (Atlantik). Jangtse → Pazifik (Ostchinesisches Meer). Ganges → Indischer Ozean (Golf von Bengalen).'
  },
  {
    id: 8048,
    type: 'multiselect',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'Welche dieser Produkte sind nach EU-Recht als "geschützte Ursprungsbezeichnung" (g.U.) eingetragen?',
    options: ['Champagner', 'Parmigiano Reggiano', 'Feta', 'Cheddar', 'Schwarzwälder Schinken', 'Gouda'],
    correct: ['Champagner', 'Parmigiano Reggiano', 'Feta', 'Schwarzwälder Schinken'],
    funFact: 'Die EU schützt über 3.000 Lebensmittelbezeichnungen als g.U., g.g.A. oder g.t.S. Champagner darf nur aus der Region Champagne (Frankreich) stammen; Feta nur aus Griechenland. Gouda und Cheddar haben keine geschützte Ursprungsbezeichnung und dürfen weltweit so heißen.'
  },
  {
    id: 8049,
    type: 'multiselect',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Welche Eigenschaften hat ein Neutronenstern?',
    options: ['Extrem hohe Dichte', 'Größer als die Sonne', 'Schnelle Rotation', 'Schwaches Magnetfeld', 'Entstehung aus Supernova'],
    correct: ['Extrem hohe Dichte', 'Schnelle Rotation', 'Entstehung aus Supernova'],
    funFact: 'Neutronensterne sind die dichtesten stabilen Objekte im Universum: Ein Teelöffel wiegt ca. 1 Milliarde Tonnen. Sie entstehen, wenn massereiche Sterne in einer Supernova kollabieren. Ihr Durchmesser beträgt nur ca. 20 km, sie rotieren bis zu 700-mal pro Sekunde (Millisekunden-Pulsare) und haben extrem starke Magnetfelder.'
  },
  {
    id: 8050,
    type: 'multiselect',
    category: 'Medizin',
    difficulty: 'mittel',
    question: 'Welche dieser Aussagen über das menschliche Gehirn stimmen?',
    options: ['Wir nutzen nur 10 % unseres Gehirns', 'Das Gehirn kann sich bis ins hohe Alter verändern', 'Das Gehirn hat keine Schmerzrezeptoren', 'Schlaf ist wichtig für die Gedächtniskonsolidierung', 'Linke Gehirnhälfte = kreativ, rechte = logisch'],
    correct: ['Das Gehirn kann sich bis ins hohe Alter verändern', 'Das Gehirn hat keine Schmerzrezeptoren', 'Schlaf ist wichtig für die Gedächtniskonsolidierung'],
    funFact: 'Der "Wir nutzen nur 10 %-Mythos" ist vollständig falsch – wir nutzen fast alle Gehirnbereiche. Die strikte Links-Rechts-Teilung ist ebenfalls ein Mythos. Das Gehirn hat tatsächlich keine Schmerzrezeptoren – Gehirnoperationen können am wachen Patienten durchgeführt werden (wichtig für Tumor-OPs).'
  },

  /* ════════════════════════════════════════════════════════
     🃏  MEMORY  (50 Fragen)
     Format:
       type: 'memory'
       pairs: [ { left: 'Begriff', right: 'Definition/Paarung' }, … ]
       (Mindestens 4 Paare)
  ════════════════════════════════════════════════════════ */
  {
    id: 9001,
    type: 'matching',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Ordne die Hauptstädte den richtigen Ländern zu.',
    pairs: [
      { left: 'Japan', right: 'Tokio' },
      { left: 'Australien', right: 'Canberra' },
      { left: 'Kanada', right: 'Ottawa' },
      { left: 'Brasilien', right: 'Brasília' }
    ],
    funFact: 'Brasília ist eine komplett geplante Hauptstadt – 1960 aus dem Nichts gebaut. Canberra ist ein Kompromiss zwischen Sydney und Melbourne, die beide Hauptstadt sein wollten. Ottawa wurde gewählt, weil es nicht an der US-Grenze liegt und damit weniger angreifbar wäre.'
  },
  {
    id: 9002,
    type: 'matching',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Ordne die Wissenschaftler ihren wichtigsten Entdeckungen zu.',
    pairs: [
      { left: 'Marie Curie', right: 'Radioaktivität' },
      { left: 'Alexander Fleming', right: 'Penicillin' },
      { left: 'Gregor Mendel', right: 'Vererbungslehre' },
      { left: 'Isaac Newton', right: 'Gravitationsgesetz' }
    ],
    funFact: 'Marie Curie ist die einzige Person, die den Nobelpreis in zwei verschiedenen Naturwissenschaften gewann (Physik 1903 und Chemie 1911). Ihre Labornotizbücher sind so radioaktiv, dass sie bis heute in Bleibehältern aufbewahrt werden und nur mit Schutzkleidung gelesen werden dürfen.'
  },
  {
    id: 9003,
    type: 'matching',
    category: 'Musik',
    difficulty: 'mittel',
    question: 'Ordne die Komponisten ihren berühmtesten Werken zu.',
    pairs: [
      { left: 'Mozart', right: 'Zauberflöte' },
      { left: 'Beethoven', right: '9. Sinfonie' },
      { left: 'Bach', right: 'Brandenburgische Konzerte' },
      { left: 'Verdi', right: 'Aida' }
    ],
    funFact: 'Mozart komponierte über 600 Werke in seinem kurzen Leben (35 Jahre). Beethoven schrieb seine 9. Sinfonie vollständig taub. Bach hatte 20 Kinder und war zu Lebzeiten vor allem als Organist berühmt. Verdis "Aida" wurde 1871 in Kairo uraufgeführt – zur Eröffnung der Suezkanal-Feierlichkeiten.'
  },
  {
    id: 9004,
    type: 'matching',
    category: 'Geschichte',
    difficulty: 'leicht',
    question: 'Ordne den historischen Persönlichkeiten ihre Nationalität zu.',
    pairs: [
      { left: 'Napoleon Bonaparte', right: 'Frankreich (korsisch)' },
      { left: 'Kleopatra', right: 'Ägypten (griechische Abstammung)' },
      { left: 'Galileo Galilei', right: 'Italien' },
      { left: 'Dschingis Khan', right: 'Mongolei' }
    ],
    funFact: 'Kleopatra war tatsächlich griechisch-makedonischer Abstammung (Ptolemäer-Dynastie) – die erste ihrer Linie, die überhaupt Ägyptisch sprach! Dschingis Khan gründete das größte zusammenhängende Landreich der Geschichte. Galilei stand unter Hausarrest der Inquisition und starb 1642.'
  },
  {
    id: 9005,
    type: 'matching',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Ordne den Tieren ihre charakteristischen Eigenschaften zu.',
    pairs: [
      { left: 'Gepard', right: 'Schnellstes Landtier' },
      { left: 'Blauwal', right: 'Größtes Tier aller Zeiten' },
      { left: 'Kolibri', right: 'Kleinster Vogel der Welt' },
      { left: 'Krokodil', right: 'Älteste kaum veränderte Art' }
    ],
    funFact: 'Der Blauwal ist das größte Tier, das je auf der Erde gelebt hat – größer als jeder Dinosaurier. Sein Herz ist so groß wie ein Kleinwagen. Krokodile haben sich seit 200 Millionen Jahren kaum verändert und überlebten den Meteoriten-Einschlag, der die Dinosaurier auslöschte.'
  },
  {
    id: 9006,
    type: 'matching',
    category: 'Literatur',
    difficulty: 'mittel',
    question: 'Ordne die Romanfiguren ihren Büchern zu.',
    pairs: [
      { left: 'Sherlock Holmes', right: 'A. Conan Doyle – Detektiv-Geschichten' },
      { left: 'Anna Karenina', right: 'Tolstoi – russischer Roman' },
      { left: 'Don Quijote', right: 'Cervantes – spanischer Roman' },
      { left: 'Gregor Samsa', right: 'Kafka – Die Verwandlung' }
    ],
    funFact: 'Sherlock Holmes ist die meistadaptierte literarische Figur der Geschichte (über 250 Filme/Serien). Kafka veröffentlichte kaum etwas zu Lebzeiten – sein Freund Max Brod rettete seine Werke gegen Kafkas ausdrücklichen Wunsch, alles zu verbrennen.'
  },
  {
    id: 9007,
    type: 'matching',
    category: 'Chemie',
    difficulty: 'schwer',
    question: 'Ordne den chemischen Elementen ihre Symbole zu.',
    pairs: [
      { left: 'Gold', right: 'Au' },
      { left: 'Eisen', right: 'Fe' },
      { left: 'Blei', right: 'Pb' },
      { left: 'Quecksilber', right: 'Hg' }
    ],
    funFact: 'Die Elementsymbole stammen oft aus dem Lateinischen: Au = Aurum (Gold), Fe = Ferrum (Eisen), Pb = Plumbum (Blei), Hg = Hydrargyrum (Quecksilber = "flüssiges Silber"). Pb gibt auch dem Wort "Klempner" (englisch: plumber) seinen Ursprung – Römer verlegten Bleirohre.'
  },
  {
    id: 9008,
    type: 'matching',
    category: 'Astronomie',
    difficulty: 'leicht',
    question: 'Ordne den Planeten ihre auffälligsten Merkmale zu.',
    pairs: [
      { left: 'Mars', right: 'Roter Planet mit Eiswüsten' },
      { left: 'Saturn', right: 'Planet mit ausgeprägten Ringen' },
      { left: 'Jupiter', right: 'Größter Planet mit Großem Roten Fleck' },
      { left: 'Venus', right: 'Heißester Planet des Sonnensystems' }
    ],
    funFact: 'Venus ist trotz seiner größeren Entfernung zur Sonne heißer als Merkur (460 °C), da ein extremer Treibhauseffekt Wärme einfängt. Jupiters Großer Roter Fleck ist ein Sturm, der seit über 350 Jahren tobt – so groß wie die Erde. Saturns Ringe sind nur 20 Meter dick.'
  },
  {
    id: 9009,
    type: 'matching',
    category: 'Kunst',
    difficulty: 'mittel',
    question: 'Ordne den Künstlern ihren Kunststil zu.',
    pairs: [
      { left: 'Salvador Dalí', right: 'Surrealismus' },
      { left: 'Claude Monet', right: 'Impressionismus' },
      { left: 'Andy Warhol', right: 'Pop Art' },
      { left: 'Wassily Kandinsky', right: 'Abstrakte Kunst' }
    ],
    funFact: 'Andy Warhol sagte: "In der Zukunft wird jeder für 15 Minuten berühmt sein" – eine der meistzitierten Vorhersagen über die Mediengesellschaft. Monets "Seerosen"-Zyklus umfasst über 250 Gemälde, die im Alter mit zunehmend schlechter werdendem Sehvermögen entstanden. Dalí schlief mit einer Gabel in der Hand zum "Schöpferischen Einschlafen".'
  },
  {
    id: 9010,
    type: 'matching',
    category: 'Sport',
    difficulty: 'leicht',
    question: 'Ordne den Sportarten die Anzahl der Spieler pro Team zu.',
    pairs: [
      { left: 'Fußball', right: '11 Spieler' },
      { left: 'Basketball', right: '5 Spieler' },
      { left: 'Volleyball', right: '6 Spieler' },
      { left: 'Handball', right: '7 Spieler' }
    ],
    funFact: 'Handball wurde 1917 in Deutschland entwickelt und war eine der ersten Ballsportarten mit gemischten Regeln für Männer und Frauen. Basketball erfand James Naismith 1891 mit 18 Spielern (9 pro Seite), bevor die Regeln auf 5 pro Team angepasst wurden.'
  },
  {
    id: 9011,
    type: 'matching',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Ordne den Revolutionen/Bewegungen ihre Jahre zu.',
    pairs: [
      { left: 'Französische Revolution', right: '1789' },
      { left: 'Oktoberrevolution (Russland)', right: '1917' },
      { left: 'Amerikanische Unabhängigkeit', right: '1776' },
      { left: 'Mauerfall Berlin', right: '1989' }
    ],
    funFact: 'Die Oktoberrevolution (7. November 1917 nach Gregorianischem Kalender) heißt so, weil Russland damals noch den Julianischen Kalender nutzte (25. Oktober). Alle vier dieser Daten gehören zu den wichtigsten in der Weltgeschichte und markieren fundamentale politische Umbrüche.'
  },
  {
    id: 9012,
    type: 'matching',
    category: 'Biologie',
    difficulty: 'schwer',
    question: 'Ordne den Organellen ihre Funktionen zu.',
    pairs: [
      { left: 'Mitochondrium', right: 'Energieproduktion (ATP)' },
      { left: 'Ribosom', right: 'Proteinbiosynthese' },
      { left: 'Chloroplast', right: 'Photosynthese' },
      { left: 'Golgi-Apparat', right: 'Sortierung und Transport von Proteinen' }
    ],
    funFact: 'Mitochondrien haben eine eigene DNA und vermehren sich unabhängig – sie entstammen einst eigenständigen Bakterien (endosymbiotische Theorie). Alle Mitochondrien-DNA wird ausschließlich von der Mutter vererbt – daher lassen sich mütterliche Abstammungslinien über Jahrhunderttausende zurückverfolgen.'
  },
  {
    id: 9013,
    type: 'matching',
    category: 'Geographie',
    difficulty: 'schwer',
    question: 'Ordne den Wüsten ihren Kontinenten zu.',
    pairs: [
      { left: 'Sahara', right: 'Afrika' },
      { left: 'Atacama', right: 'Südamerika' },
      { left: 'Gobi', right: 'Asien' },
      { left: 'Namib', right: 'Afrika (Südwest)' }
    ],
    funFact: 'Die Antarktis ist technisch gesehen die größte Wüste der Welt (Kältewüste, <200 mm Niederschlag). Die Sahara ist die größte Hitzewüste, die Atacama in Chile die trockenste – manche Stationen haben seit über 400 Jahren keinen Regen gemessen. Die Namib ist eine der ältesten Wüsten (ca. 55 Millionen Jahre).'
  },
  {
    id: 9014,
    type: 'matching',
    category: 'Sprache',
    difficulty: 'mittel',
    question: 'Ordne die Sprachen der Anzahl ihrer weltweiten Muttersprachler (2024) zu.',
    pairs: [
      { left: 'Mandarin-Chinesisch', right: '1. Platz (ca. 920 Mio.)' },
      { left: 'Spanisch', right: '2. Platz (ca. 480 Mio.)' },
      { left: 'Englisch', right: '3. Platz (ca. 380 Mio.)' },
      { left: 'Hindi', right: '4. Platz (ca. 340 Mio.)' }
    ],
    funFact: 'Englisch ist zwar "Weltsprache", hat aber weniger Muttersprachler als Mandarin und Spanisch. Als Gesamtsprache (Muttersprachler + Zweitsprachler) liegt Englisch jedoch klar vorne (ca. 1,5 Milliarden Sprecher). Arabisch hat über 30 Dialekte, die sich untereinander kaum verständlich sind.'
  },
  {
    id: 9015,
    type: 'matching',
    category: 'Essen & Trinken',
    difficulty: 'leicht',
    question: 'Ordne den Gerichten ihren Herkunftsländern zu.',
    pairs: [
      { left: 'Sushi', right: 'Japan' },
      { left: 'Paella', right: 'Spanien' },
      { left: 'Moussaka', right: 'Griechenland' },
      { left: 'Kimchi', right: 'Südkorea' }
    ],
    funFact: 'Kimchi – fermentierter Kohl – ist das Nationalgericht Südkoreas und UNESCO-Kulturerbe. Ein Durchschnitts-Koreaner isst ca. 25 kg Kimchi pro Jahr. Paella stammt ursprünglich aus Valencia und war ein Bauernessen mit Huhn und Gemüse – Meeresfrüchte-Paella ist eine spätere Variante.'
  },
  {
    id: 9016,
    type: 'matching',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Ordne den Filmregisseuren ihre bekanntesten Werke zu.',
    pairs: [
      { left: 'Steven Spielberg', right: 'Schindlers Liste' },
      { left: 'Christopher Nolan', right: 'Inception' },
      { left: 'Stanley Kubrick', right: '2001: Odyssee im Weltraum' },
      { left: 'Alfred Hitchcock', right: 'Psycho' }
    ],
    funFact: 'Hitchcock erschien in fast all seinen Filmen in einem kurzen Cameo-Auftritt. Kubrick war so detailversessen, dass er für "The Shining" 127 Takes einer einzigen Szene drehte. Nolans "Inception" hatte kein CGI für den sich faltenden Paris-Effekt – sie bauten das Set tatsächlich.'
  },
  {
    id: 9017,
    type: 'matching',
    category: 'Mathematik',
    difficulty: 'mittel',
    question: 'Ordne den mathematischen Konzepten ihre Entdecker zu.',
    pairs: [
      { left: 'Differentialrechnung', right: 'Newton und Leibniz' },
      { left: 'Wahrscheinlichkeitstheorie', right: 'Pascal und Fermat' },
      { left: 'Nicht-Euklidische Geometrie', right: 'Gauß, Bolyai, Lobatschewski' },
      { left: 'Mengenlehre', right: 'Georg Cantor' }
    ],
    funFact: 'Newton und Leibniz entwickelten die Differentialrechnung unabhängig voneinander – was einen der bittersten Prioritätsstreit der Wissenschaftsgeschichte auslöste. Cantor bewies, dass es verschieden "große" Unendlichkeiten gibt – eine Idee, die seine Zeitgenossen für Wahnsinn hielten.'
  },
  {
    id: 9018,
    type: 'matching',
    category: 'Wirtschaft',
    difficulty: 'schwer',
    question: 'Ordne den Wirtschaftsbegriffen ihre Definitionen zu.',
    pairs: [
      { left: 'Inflation', right: 'Allgemeiner Preisanstieg über Zeit' },
      { left: 'BIP', right: 'Gesamtwert aller Waren/Dienstleistungen eines Landes' },
      { left: 'Deflation', right: 'Allgemeiner Preisrückgang' },
      { left: 'Rezession', right: '2 Quartale negatives Wirtschaftswachstum' }
    ],
    funFact: 'Deflation klingt gut (sinkende Preise), ist aber gefährlich: Wenn Konsumenten auf noch niedrigere Preise warten, bricht die Wirtschaft zusammen. Japan kämpfte in den 1990er-2010er Jahren Jahrzehnte mit Deflation ("Verlorenes Jahrzehnt"). Zu niedrige Inflation (unter 2 %) gilt Zentralbanken als problematisch.'
  },
  {
    id: 9019,
    type: 'matching',
    category: 'Technik',
    difficulty: 'mittel',
    question: 'Ordne den Technologiefirmen ihre Gründungsländer zu.',
    pairs: [
      { left: 'Samsung', right: 'Südkorea' },
      { left: 'Nokia', right: 'Finnland' },
      { left: 'ASML', right: 'Niederlande' },
      { left: 'SAP', right: 'Deutschland' }
    ],
    funFact: 'ASML ist das unbekannteste, aber vielleicht wichtigste Technologieunternehmen der Welt: Es ist der einzige Hersteller von EUV-Lithografiemaschinen, ohne die keine modernen Mikrochips existieren würden. Nokia war Ende der 1990er der weltgrößte Handyhersteller – bevor Apple und Samsung sie überholten.'
  },
  {
    id: 9020,
    type: 'matching',
    category: 'Biologie',
    difficulty: 'leicht',
    question: 'Ordne den Tieren ihre Klassen zu.',
    pairs: [
      { left: 'Frosch', right: 'Amphibien' },
      { left: 'Lachs', right: 'Fische' },
      { left: 'Adler', right: 'Vögel' },
      { left: 'Python', right: 'Reptilien' }
    ],
    funFact: 'Lachse sind katadrome Tiere: Sie leben im Meer, kehren aber zum Laichen in ihre Geburtsflüsse zurück – geleitet von Magnetfeld und Geruch. Frösche können keine Wärme erzeugen (wechselwarm) und frieren in Kälteperioden buchstäblich ein, um im Frühling wieder aufzutauen.'
  },
  {
    id: 9021,
    type: 'matching',
    category: 'Geschichte',
    difficulty: 'schwer',
    question: 'Ordne den Philosophen ihre Hauptwerke zu.',
    pairs: [
      { left: 'Platon', right: 'Der Staat (Politeia)' },
      { left: 'Kant', right: 'Kritik der reinen Vernunft' },
      { left: 'Nietzsche', right: 'Also sprach Zarathustra' },
      { left: 'Hobbes', right: 'Leviathan' }
    ],
    funFact: 'Kants "Kritik der reinen Vernunft" (1781) gilt als eines der schwierigsten Bücher der Philosophie. Nietzsche verkündete "Gott ist tot" – nicht als Jubel, sondern als Diagnose der Moderne. Hobbes\' "Leviathan" begründete die Staatstheorie: Der Mensch ist dem Menschen ein Wolf ohne Gesellschaftsvertrag.'
  },
  {
    id: 9022,
    type: 'matching',
    category: 'Astronomie',
    difficulty: 'mittel',
    question: 'Ordne den Weltraummissionen ihre Leistungen zu.',
    pairs: [
      { left: 'Apollo 11', right: 'Erste Mondlandung (1969)' },
      { left: 'Voyager 1', right: 'Erstes Objekt außerhalb des Sonnensystems' },
      { left: 'Hubble', right: 'Weltraumteleskop seit 1990' },
      { left: 'Cassini', right: 'Saturn-Orbiter (1997–2017)' }
    ],
    funFact: 'Voyager 1 startete 1977 und ist nach 47 Jahren noch aktiv – es ist das am weitesten von der Erde entfernte menschgemachte Objekt. Die Signale brauchen ca. 22 Stunden zur Erde. Cassini hat beim Eintauchen in die Saturnringe vollständig verbrannt, um Kontamination von Enceladus zu vermeiden.'
  },
  {
    id: 9023,
    type: 'matching',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Ordne den Flüssen ihre Kontinente zu.',
    pairs: [
      { left: 'Amazonas', right: 'Südamerika' },
      { left: 'Jangtse', right: 'Asien' },
      { left: 'Murray-Darling', right: 'Australien' },
      { left: 'Kongo', right: 'Afrika' }
    ],
    funFact: 'Der Kongo ist der tiefste Fluss der Welt (über 220 m) und der einzige große Fluss, der den Äquator zweimal überquert. Der Amazonas enthält ca. 20 % des gesamten Süßwassers aller Flüsse weltweit. Der Murray-Darling ist Australiens wichtigstes Flusssystem und für 40 % der australischen Nahrungsproduktion entscheidend.'
  },
  {
    id: 9024,
    type: 'matching',
    category: 'Chemie',
    difficulty: 'mittel',
    question: 'Ordne den Alltagsstoffen ihre chemischen Namen zu.',
    pairs: [
      { left: 'Kochsalz', right: 'Natriumchlorid (NaCl)' },
      { left: 'Backpulver', right: 'Natriumhydrogencarbonat (NaHCO₃)' },
      { left: 'Essig', right: 'Essigsäure (CH₃COOH)' },
      { left: 'Zucker', right: 'Saccharose (C₁₂H₂₂O₁₁)' }
    ],
    funFact: 'Kochsalz (NaCl) besteht aus zwei hochgiftigen Elementen – Natrium (explodiert in Wasser) und Chlor (Giftgas) – aber die ionische Verbindung ist für uns völlig harmlos und essenziell. Backpulver setzt beim Erhitzen CO₂ frei, das Teig aufgehen lässt.'
  },
  {
    id: 9025,
    type: 'matching',
    category: 'Sport',
    difficulty: 'mittel',
    question: 'Ordne den Olympia-Sommerspielen ihre Austragungsorte zu.',
    pairs: [
      { left: '1936', right: 'Berlin' },
      { left: '1972', right: 'München' },
      { left: '2008', right: 'Peking' },
      { left: '2024', right: 'Paris' }
    ],
    funFact: 'Die Münchener Olympiade 1972 wurde durch das Attentat auf die israelische Mannschaft überschattet – 11 Sportler wurden von palästinensischen Terroristen getötet. Die Berliner Spiele 1936 wurden von Hitler als Propagandashow genutzt; Jesse Owens widerlegte durch 4 Goldmedaillen die Rassenideologie der Nazis.'
  },
  {
    id: 9026,
    type: 'matching',
    category: 'Medizin',
    difficulty: 'schwer',
    question: 'Ordne den Krankheiten ihren Erregern zu.',
    pairs: [
      { left: 'Tuberkulose', right: 'Mycobacterium tuberculosis (Bakterium)' },
      { left: 'Malaria', right: 'Plasmodium (Parasit)' },
      { left: 'Grippe (Influenza)', right: 'Influenza-Virus' },
      { left: 'Cholera', right: 'Vibrio cholerae (Bakterium)' }
    ],
    funFact: 'Robert Koch entdeckte 1882 den Tuberkulosebazillus – einer der wichtigsten Momente in der Medizingeschichte. Malaria tötet auch heute noch ca. 600.000 Menschen pro Jahr (vor allem Kinder in Afrika). Cholera breitete sich im 19. Jh. durch verschmutztes Wasser aus; John Snow kartierte 1854 als erster eine Choleraepidemie in London.'
  },
  {
    id: 9027,
    type: 'matching',
    category: 'Literatur',
    difficulty: 'leicht',
    question: 'Ordne den Büchern ihre Autoren zu.',
    pairs: [
      { left: '1984', right: 'George Orwell' },
      { left: 'Der kleine Prinz', right: 'Antoine de Saint-Exupéry' },
      { left: 'Homo sapiens', right: 'Yuval Noah Harari' },
      { left: 'Die Verwandlung', right: 'Franz Kafka' }
    ],
    funFact: '"Der kleine Prinz" (1943) ist das meistübersetzte nicht-religiöse Buch der Welt (über 300 Sprachen). Orwells "1984" wurde während der Stalinschen Ära und des Kalten Krieges geschrieben – "Orwellian" ist seitdem ein Adjektiv für totalitäre Überwachungsstaaten.'
  },
  {
    id: 9028,
    type: 'matching',
    category: 'Physik',
    difficulty: 'schwer',
    question: 'Ordne den physikalischen Formeln ihren Bedeutungen zu.',
    pairs: [
      { left: 'E = mc²', right: 'Masse-Energie-Äquivalenz (Einstein)' },
      { left: 'F = m·a', right: 'Zweites Newtonsches Gesetz' },
      { left: 'E = h·f', right: 'Energie eines Photons (Planck)' },
      { left: 'pV = nRT', right: 'Ideales Gasgesetz' }
    ],
    funFact: 'E = mc² bedeutet: 1 g Masse entspricht 90 Billionen Joule Energie – genug, um eine Stadt zu versorgen. Die Atombombe nutzt nur einen Bruchteil dieser Umwandlung. Plancks Entdeckung der Lichtquanten (E = hf) begründete die Quantenmechanik – gegen seinen eigenen Willen.'
  },
  {
    id: 9029,
    type: 'matching',
    category: 'Geschichte',
    difficulty: 'leicht',
    question: 'Ordne den Weltkriegsereignissen ihre Jahre zu.',
    pairs: [
      { left: 'Beginn des 1. Weltkriegs', right: '1914' },
      { left: 'Ende des 1. Weltkriegs', right: '1918' },
      { left: 'Beginn des 2. Weltkriegs', right: '1939' },
      { left: 'Ende des 2. Weltkriegs (Europa)', right: '1945' }
    ],
    funFact: 'Der Erste Weltkrieg endete um 11 Uhr am 11. Tag des 11. Monats 1918 – ein symbolisches Datum, das vom deutschen Kaiserreich in der Waffenstillstandsverhandlung akzeptiert wurde. Beide Weltkriege zusammen kosteten schätzungsweise 100–120 Millionen Menschen das Leben.'
  },
  {
    id: 9030,
    type: 'matching',
    category: 'Tiere',
    difficulty: 'mittel',
    question: 'Ordne den Tieren ihre Lebensspannen zu.',
    pairs: [
      { left: 'Grönlandwal', right: 'bis zu 200+ Jahre' },
      { left: 'Hauskatze', right: 'ca. 12–18 Jahre' },
      { left: 'Eintagsfliege (Imago)', right: 'Stunden bis wenige Tage' },
      { left: 'Aldabra-Riesenschildkröte', right: '150+ Jahre' }
    ],
    funFact: 'Jonathan, eine Aldabra-Riesenschildkröte auf St. Helena, ist der älteste lebende Landwirbeltier der Welt (ca. 190 Jahre, geboren ca. 1832!). Er hat Napoleons Verbannung überlebt, war dabei, als das erste Automobil erfunden wurde. Grönlandwale können älter als 200 Jahre werden – im Fleisch einiger wurden Harpunen aus dem 19. Jahrhundert gefunden.'
  },
  {
    id: 9031,
    type: 'matching',
    category: 'Geographie',
    difficulty: 'leicht',
    question: 'Ordne den Flüssen ihren Ländern zu (die Flüsse fließen durch oder haben ihre Quelle in diesen Ländern).',
    pairs: [
      { left: 'Rhein', right: 'Schweiz/Deutschland/Niederlande' },
      { left: 'Ganges', right: 'Indien' },
      { left: 'Mississippi', right: 'USA' },
      { left: 'Nil', right: 'Ägypten/Äthiopien' }
    ],
    funFact: 'Der Ganges ist für über 400 Millionen Menschen die wichtigste Süßwasserquelle. Er gilt den Hindus als heiliger Fluss – ein Bad darin reinigt von allen Sünden. Der Mississippi entwässert ca. 40 % der Fläche der zusammenhängenden USA. Der Rhein war im Mittelalter die wichtigste Handelsroute Europas.'
  },
  {
    id: 9032,
    type: 'matching',
    category: 'Film',
    difficulty: 'mittel',
    question: 'Ordne den Filmklassikern ihre Erscheinungsjahre zu.',
    pairs: [
      { left: 'Der Pate', right: '1972' },
      { left: 'Star Wars: Eine neue Hoffnung', right: '1977' },
      { left: 'Titanic', right: '1997' },
      { left: 'Herr der Ringe: Die Gefährten', right: '2001' }
    ],
    funFact: '"Der Pate" (1972) von Francis Ford Coppola rettete Paramount Pictures vor dem Bankrott. Star Wars war so unerwartet erfolgreich, dass 20th Century Fox nicht wusste, wie sie mit den Merchandise-Rechten umgehen sollten – George Lucas behielt sie und wurde durch Merchandise-Milliarden zum Milliardär.'
  },
  {
    id: 9033,
    type: 'matching',
    category: 'Wissenschaft',
    difficulty: 'mittel',
    question: 'Ordne den Erfindungen ihren Erfindern zu.',
    pairs: [
      { left: 'Buchdruckkunst (bewegliche Lettern)', right: 'Johannes Gutenberg' },
      { left: 'Flugzeug (motorisiert)', right: 'Wright Brothers' },
      { left: 'Telefon', right: 'Alexander Graham Bell' },
      { left: 'Glühbirne (kommerziell nutzbar)', right: 'Thomas Edison' }
    ],
    funFact: 'Gutenbergs Druckerpresse (ca. 1450) revolutionierte die Wissensverbreitung – die Bibel war das erste Massendruck-Produkt. Die Wright Brothers flogen 1903 zum ersten Mal 12 Sekunden und 37 Meter. Die Erfindung des Telefons ist umstritten: Antonio Meucci meldete 1871 ein Patent an, Bell gewann das Rennen 1876.'
  },
  {
    id: 9034,
    type: 'matching',
    category: 'Musik',
    difficulty: 'schwer',
    question: 'Ordne den Musikern ihren Bands/Gruppen zu.',
    pairs: [
      { left: 'Freddie Mercury', right: 'Queen' },
      { left: 'John Lennon', right: 'The Beatles' },
      { left: 'Jim Morrison', right: 'The Doors' },
      { left: 'David Bowie', right: 'Solokarriere (Alter Egos: Ziggy Stardust u.a.)' }
    ],
    funFact: 'Freddie Mercury (bürgerlicher Name: Farrokh Bulsara) wurde 1946 auf Sansibar geboren. Queen-Konzerte sind berühmt für die Interaktion mit dem Publikum. John Lennon und Paul McCartney schrieben zusammen mehr Nummer-1-Hits als jedes andere Songwriting-Duo der Geschichte.'
  },
  {
    id: 9035,
    type: 'matching',
    category: 'Biologie',
    difficulty: 'mittel',
    question: 'Ordne den Tieren ihre Fortbewegungsweise zu.',
    pairs: [
      { left: 'Gepard', right: 'Galoppieren (höchste Landgeschwindigkeit)' },
      { left: 'Albatros', right: 'Gleiten über Tausende km ohne Schlagen' },
      { left: 'Axolotl', right: 'Schwimmen (aquatisch)' },
      { left: 'Siamang', right: 'Hangeln (Brachiation)' }
    ],
    funFact: 'Der Albatros kann bis zu 1.000 km am Tag zurücklegen, ohne mit den Flügeln zu schlagen – er nutzt Windunterschiede über dem Ozean (dynamisches Segeln). Er kann 50 Jahre alt werden. Siamangs (Gibbons) sind die schnellsten baumlebenden Tiere der Welt (bis zu 56 km/h durch Brachiation).'
  },
  {
    id: 9036,
    type: 'matching',
    category: 'Technik',
    difficulty: 'leicht',
    question: 'Ordne den Abkürzungen ihre Bedeutungen zu.',
    pairs: [
      { left: 'HTML', right: 'Hypertext Markup Language' },
      { left: 'GPS', right: 'Global Positioning System' },
      { left: 'USB', right: 'Universal Serial Bus' },
      { left: 'Wi-Fi', right: 'Wireless Fidelity' }
    ],
    funFact: 'HTML wurde 1990 von Tim Berners-Lee erfunden – zusammen mit HTTP und URL als Grundlagen des World Wide Web. GPS wurde vom US-Militär entwickelt und erst 1983 (nach dem Abschuss eines zivilen Flugzeugs) für die Öffentlichkeit freigegeben. "Wi-Fi" ist eigentlich eine Marke, kein Akronym – die offiziellen Entwickler sagen, es bedeutet nichts.'
  },
  {
    id: 9037,
    type: 'matching',
    category: 'Geschichte',
    difficulty: 'mittel',
    question: 'Ordne den deutschen Bundeskanzlern ihre Amtszeiten zu.',
    pairs: [
      { left: 'Konrad Adenauer', right: '1949–1963' },
      { left: 'Helmut Schmidt', right: '1974–1982' },
      { left: 'Helmut Kohl', right: '1982–1998' },
      { left: 'Angela Merkel', right: '2005–2021' }
    ],
    funFact: 'Angela Merkel war mit 16 Jahren Amtszeit die am längsten amtierende Bundeskanzlerin. Konrad Adenauer war bei Amtsantritt 73 Jahre alt. Helmut Kohl war Kanzler der deutschen Wiedervereinigung 1990. Helmut Schmidt rauchte so exzessiv, dass er extra dafür einen Ausnahmeantrag für EU-Gebäude hatte.'
  },
  {
    id: 9038,
    type: 'matching',
    category: 'Essen & Trinken',
    difficulty: 'schwer',
    question: 'Ordne den Käsesorten ihren Herkunftsländern zu.',
    pairs: [
      { left: 'Roquefort', right: 'Frankreich' },
      { left: 'Gouda', right: 'Niederlande' },
      { left: 'Manchego', right: 'Spanien' },
      { left: 'Gruyère', right: 'Schweiz' }
    ],
    funFact: 'Roquefort ist einer der ältesten bekannten Käse der Welt (urkundlich erwähnt 1070) und wird ausschließlich in den Höhlen von Combalou (Frankreich) gereift. Gruyère ist ein geschützter Käse und war Gegenstand eines Rechtsstreits, als die USA ihn als Gattungsbezeichnung behandelten.'
  },
  {
    id: 9039,
    type: 'matching',
    category: 'Geographie',
    difficulty: 'mittel',
    question: 'Ordne den Vulkanen ihren Ländern zu.',
    pairs: [
      { left: 'Vesuv', right: 'Italien' },
      { left: 'Fuji', right: 'Japan' },
      { left: 'Eyjafjallajökull', right: 'Island' },
      { left: 'Cotopaxi', right: 'Ecuador' }
    ],
    funFact: 'Der Vesuv zerstörte 79 n. Chr. Pompeji und Herculaneum – über 2.000 Menschen starben. Die Ausgrabungen Pompejis (seit 1748) sind eines der wichtigsten archäologischen Projekte der Geschichte. Islands Eyjafjallajökull-Ausbruch (2010) legte drei Wochen den europäischen Luftraum lahm.'
  },
  {
    id: 9040,
    type: 'matching',
    category: 'Mathematik',
    difficulty: 'leicht',
    question: 'Ordne den Zahlen ihre korrekten Eigenschaften zu.',
    pairs: [
      { left: 'π (Pi)', right: 'Verhältnis Kreisumfang zu Durchmesser' },
      { left: 'e (Eulersche Zahl)', right: 'Basis des natürlichen Logarithmus' },
      { left: 'φ (Goldener Schnitt)', right: 'Teilt eine Strecke harmonisch' },
      { left: '0 (Null)', right: 'Von Mathematikern in Indien entwickelt' }
    ],
    funFact: 'Die Null als eigenständige Zahl wurde in Indien im 7. Jahrhundert entwickelt – ein revolutionäres Konzept. Ohne die Null wäre Stellenwertschreibung und damit moderne Mathematik unmöglich. Die Maya entwickelten unabhängig davon ebenfalls ein Konzept der Null.'
  },
  {
    id: 9041,
    type: 'matching',
    category: 'Natur',
    difficulty: 'mittel',
    question: 'Ordne den Naturphänomenen ihre Ursachen zu.',
    pairs: [
      { left: 'Polarlicht', right: 'Sonnenwinde treffen auf Atmosphäre' },
      { left: 'Ebbe und Flut', right: 'Gravitation von Mond und Sonne' },
      { left: 'Regenbogen', right: 'Lichtbrechung in Regentropfen' },
      { left: 'Donner', right: 'Schallwelle durch Luftausdehnung beim Blitz' }
    ],
    funFact: 'Ein Regenbogen ist immer ein vollständiger Kreis – man sieht nur den oberen Teil, weil der Boden im Weg ist. Aus einem Flugzeug kann man manchmal vollständige Regenbogenkreise sehen. Mondregenbogen (Mondbögen) entstehen nachts bei hellem Vollmond und Regen – selten, aber real.'
  }

];

// Gesamtzahl der Fragen
console.log(`✅ ${QUESTIONS_EXTENDED.length} Fragen geladen.`);
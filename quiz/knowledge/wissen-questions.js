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
  }

];

// Gesamtzahl der Fragen
console.log(`✅ ${QUESTIONS_EXTENDED.length} Fragen geladen.`);
// Auto-Preise Quiz — Datenbank
// Jedes Objekt: name (Anzeigename), image (vollständiger Bildpfad inkl. Endung, z.B. jpg/png/webp),
// km (Kilometerstand), year (Zulassungsjahr), hp (PS), price (tatsächlicher Preis in €)
const carPrices = [
  {
    name: "Tesla Model 3",
    image: "/quiz/car-price/img/tesla-3.avif",
    km: 46197,
    year: 2022,
    hp: 498,
    price: 33950
  },
	{
    name: "Audi A6 e-tron",
    image: "/quiz/car-price/img/a6etron.avif",
    km: 0,
    year: 2026,
    hp: 367,
    price: 88949
  },
	{
    name: "Porsche 992 Brabus 900",
    image: "/quiz/car-price/img/992.avif",
    km: 100,
    year: 2026,
    hp: 900,
    price: 831810
  },
	{
    name: "Volkswagen ID.3 GTX Performance",
    image: "/quiz/car-price/img/id3.avif",
    km: 0,
    year: 2026,
    hp: 326,
    price: 52250
  },
	{
    name: "Ferrari F8 Spider Unikat",
    image: "/quiz/car-price/img/f8spyder.avif",
    km: 3850,
    year: 2022,
    hp: 721,
    price: 388000
  },
	{
    name: "Volkswagen Golf 7 Lim. GTI",
    image: "/quiz/car-price/img/golf7.jpeg",
    km: 84900,
    year: 2016,
    hp: 360,
    price: 24900
  },
	{
    name: "Audi S5 3.0 TFSI ",
    image: "/quiz/car-price/img/s5.avif",
    km: 92500,
    year: 2018,
    hp: 450,
    price: 38900
  },
		{
    name: "Audi RS7 4.0 TFSI",
    image: "/quiz/car-price/img/rs7.avif",
    km: 70000,
    year: 2020,
    hp: 600,
    price: 90000
  },
	{
    name: "Mercedes-Benz GLE 450 Mubeam",
    image: "/quiz/car-price/img/gle.avif",
    km: 54652,
    year: 2019,
    hp: 389,
    price: 45950
  },
	{
    name: "Citroën Berlingo Kombi",
    image: "/quiz/car-price/img/berlingo.avif",
    km: 299888,
    year: 2012,
    hp: 114,
    price: 3999
  },
	{
    name: "Audi TT RS",
    image: "/quiz/car-price/img/ttrs.avif",
    km: 59680,
    year: 2018,
    hp: 480,
    price: 55790
  },
	{
    name: "BMW M850i xDrive Performance Stage 2",
    image: "/quiz/car-price/img/m850.avif",
    km: 67800,
    year: 2018,
    hp: 731,
    price: 49990
  },
	{
    name: "BMW M3 Competition Carbon",
    image: "/quiz/car-price/img/m3.avif",
    km: 69678,
    year: 2021,
    hp: 510,
    price: 66900
  },
	{
    name: "BMW X7 M60i xD",
    image: "/quiz/car-price/img/x7.avif",
    km: 95987,
    year: 2022,
    hp: 530,
    price: 75999
  },
	{
    name: "BMW 116",
    image: "/quiz/car-price/img/116.jpeg",
    km: 241000,
    year: 2005,
    hp: 116,
    price: 600
  },
	{
    name: "BMW XM Label Red",
    image: "/quiz/car-price/img/xm.avif",
    km: 16144,
    year: 2024,
    hp: 585,
    price: 198000
  },
	{
    name: "BMW M4 Competiton Coupé",
    image: "/quiz/car-price/img/m4.avif",
    km: 78000,
    year: 2019,
    hp: 450,
    price: 57900
  },
	{
    name: "BMW X2 xDrive M35i",
    image: "/quiz/car-price/img/x2.avif",
    km: 46705,
    year: 2020,
    hp: 306,
    price: 26900
  },
	{
    name: "Audi A3 Sportback 1.4 TFSI",
    image: "/quiz/car-price/img/a3.avif",
    km: 45600,
    year: 2012,
    hp: 125,
    price: 8980
  },
	{
    name: "Audi RSQ3 Sportback 2.5 TFSI Matrix",
    image: "/quiz/car-price/img/rsq3.avif",
    km: 61051,
    year: 2020,
    hp: 400,
    price: 51890
  },
	{
    name: "Audi RSQ8 Ceramic Brakes-Design",
    image: "/quiz/car-price/img/rsq8.avif",
    km: 86000,
    year: 2020,
    hp: 600,
    price: 83300
  },
	{
    name: "Audi R8 V10Plus",
    image: "/quiz/car-price/img/r8.avif",
    km: 81500,
    year: 2013,
    hp: 549,
    price: 85999
  },
	{
    name: "Volkswagen Arteon Shooting Brake R-Line",
    image: "/quiz/car-price/img/arteon.avif",
    km: 64600,
    year: 2023,
    hp: 200,
    price: 30490
  },
	{
    name: "Volkswagen Caddy Trendline 1.4 TSI",
    image: "/quiz/car-price/img/caddy.avif",
    km: 85250,
    year: 2018,
    hp: 125,
    price: 17990
  },
		{
    name: "Volkswagen ID. Buzz GTX LR 4MOTION",
    image: "/quiz/car-price/img/idbuzz.jpeg",
    km: 23838,
    year: 2025,
    hp: 340,
    price: 69850
  },
		{
    name: "Volkswagen Käfer 1600 Speedster",
    image: "/quiz/car-price/img/kaefer.avif",
    km: 61783,
    year: 1971,
    hp: 60,
    price: 11980
  },
		{
    name: "Volkswagen Passat R-Line 2,0",
    image: "/quiz/car-price/img/passat.avif",
    km: 7500,
    year: 2026,
    hp: 193,
    price: 69990
  },
		{
    name: "Volkswagen Touran Comfortline",
    image: "/quiz/car-price/img/touran.avif",
    km: 23600,
    year: 2023,
    hp: 150,
    price: 28950
  },
	{
    name: "Volkswagen Phaeton V6 TDI",
    image: "/quiz/car-price/img/phaeton.avif",
    km: 295400,
    year: 2009,
    hp: 239,
    price: 5490
  },
	{
    name: "Porsche Boxster",
    image: "/quiz/car-price/img/boxter.avif",
    km: 38000,
    year: 2018,
    hp: 299,
    price: 53812
  },
	{
    name: "Porsche Boxster",
    image: "/quiz/car-price/img/boxter.avif",
    km: 38000,
    year: 2018,
    hp: 299,
    price: 53812
  },
	{
    name: "Porsche Cayenne GTS Coupé Burmester",
    image: "/quiz/car-price/img/cayenne.avif",
    km: 9900,
    year: 2026,
    hp: 500,
    price: 148955
  },
	{
    name: "Porsche Cayman 718 GT4",
    image: "/quiz/car-price/img/cayman.avif",
    km: 33000,
    year: 2020,
    hp: 420,
    price: 94999
  },
	{
    name: "Porsche Macan S BOSE Kamera Memory DAB Panorama 20''",
    image: "/quiz/car-price/img/macan.avif",
    km: 53997,
    year: 2021,
    hp: 354,
    price: 56999
  },
		{
    name: "Porsche Panamera Sport Turismo GTS",
    image: "/quiz/car-price/img/panamera.avif",
    km: 87106,
    year: 2020,
    hp: 480,
    price: 79880
  },
		{
    name: "Ford Mustang 2.3 Eco Shelby GT-500 Kit",
    image: "/quiz/car-price/img/mustang.avif",
    km: 82548,
    year: 2019,
    hp: 290,
    price: 27880
  },
		{
    name: "Ford Fiesta Trend",
    image: "/quiz/car-price/img/fiesta.avif",
    km: 126230,
    year: 2017,
    hp: 60,
    price: 4990
  },
		{
    name: "Ford Focus Lim. ST",
    image: "/quiz/car-price/img/focus.avif",
    km: 84908,
    year: 2020,
    hp: 280,
    price: 14900
  },
		{
    name: "Aston Martin DBX 4.0 V8",
    image: "/quiz/car-price/img/dbx.avif",
    km: 84000,
    year: 2021,
    hp: 551,
    price: 97500
  },
		{
    name: "Aston Martin V8 Vantage 4.0",
    image: "/quiz/car-price/img/vantage.avif",
    km: 59600,
    year: 2019,
    hp: 510,
    price: 107700
  },
			{
    name: "Aston Martin New Aston Martin Valkyrie AMR Pro Ferrari Sweden",
    image: "/quiz/car-price/img/andere.avif",
    km: 10,
    year: 2022,
    hp: 999,
    price: 6545000
  },
				{
    name: "Bugatti Chiron",
    image: "/quiz/car-price/img/chiron.avif",
    km: 2585,
    year: 2023,
    hp: 1600,
    price: 5652500
  },
					{
    name: "Corvette ZR1 Cabrio 3LZ",
    image: "/quiz/car-price/img/zr1.avif",
    km: 20,
    year: 2026,
    hp: 1065,
    price: 339500
  },
						{
    name: "Corvette C3 Original",
    image: "/quiz/car-price/img/c3.avif",
    km: 55000,
    year: 1982,
    hp: 250,
    price: 25950
  },
						{
    name: "Ferrari California 4.3 V8",
    image: "/quiz/car-price/img/cali.avif",
    km: 98254,
    year: 2010,
    hp: 460,
    price: 95000
  },
						{
    name: "Ferrari Enzo Ferrari",
    image: "/quiz/car-price/img/enzo.avif",
    km: 15310,
    year: 2004,
    hp: 659,
    price: 6900000
  },
							{
    name: "Jaguar I-Pace EV 400 AWD -S-",
    image: "/quiz/car-price/img/lpace.avif",
    km: 95374,
    year: 2019,
    hp: 400,
    price: 23990
  },
							{
    name: "Lamborghini Revuelto 2026 MANSORY",
    image: "/quiz/car-price/img/revuelto.avif",
    km: 41,
    year: 2026,
    hp: 1016,
    price: 938910
  },
							{
    name: "Lamborghini URUS S",
    image: "/quiz/car-price/img/urus.avif",
    km: 10900,
    year: 2023,
    hp: 666,
    price: 259000
  },
								{
    name: "MAN LION'S COACH R10",
    image: "/quiz/car-price/img/r10.avif",
    km: 94000,
    year: 2021,
    hp: 585,
    price: 239580
  },
									{
    name: "Maserati 3.8 V8 Trofeo ONE OF 100 Launch Edition",
    image: "/quiz/car-price/img/levante.avif",
    km: 59686,
    year: 2020,
    hp: 581,
    price: 85900
  },
									{
    name: "Maybach MERCEDES-MAYBACH S 580 4MATIC !V8! EXKUSIV PAKET",
    image: "/quiz/car-price/img/s580.avif",
    km: 15900,
    year: 2025,
    hp: 526,
    price: 156490
  },
										{
    name: "McLaren P1 CARBON / LIFT / MERIDIAN/ 1OF375",
    image: "/quiz/car-price/img/p1.avif",
    km: 20900,
    year: 2014,
    hp: 916,
    price: 1399000
  },
										{
    name: "Rolls-Royce Ghost 6.6 V12 ALPINE TRIAL CENTENARY 1/35°THEATR",
    image: "/quiz/car-price/img/ghost.avif",
    km: 49997,
    year: 2013,
    hp: 571,
    price: 105490
  },
										{
    name: "Skoda Elroq 85 First Edition",
    image: "/quiz/car-price/img/elroq.avif",
    km: 18980,
    year: 2025,
    hp: 286,
    price: 47970
  },
										{
    name: "XPENG G6 RWD Long Range",
    image: "/quiz/car-price/img/g6.avif",
    km: 14500,
    year: 2025,
    hp: 286,
    price: 39979
  },
										{
    name: "Zeekr 001 AWD Performance 544PK",
    image: "/quiz/car-price/img/001.avif",
    km: 38351,
    year: 2024,
    hp: 544,
    price: 49537
  },
										{
    name: "Tesla Model X 100D",
    image: "/quiz/car-price/img/x.avif",
    km: 128000,
    year: 2018,
    hp: 525,
    price: 33800
  },
											{
    name: "Tesla Cybertruck",
    image: "/quiz/car-price/img/cybertruck.jpg",
    km: 0,
    year: 2026,
    hp: 600,
    price: 150000
  },
										{
    name: "Trabant 601 LX de LUXE",
    image: "/quiz/car-price/img/601.avif",
    km: 88800,
    year: 1982,
    hp: 26,
    price: 9999
  },
										{
    name: "Koenigsegg Jesko",
    image: "/quiz/car-price/img/jesko.avif",
    km: 2500,
    year: 2025,
    hp: 1298,
    price: 5016000
  },
										{
    name: "Changan Deepal S05MAX RWD",
    image: "/quiz/car-price/img/s05.avif",
    km: 2500,
    year: 2026,
    hp: 272,
    price: 44780
  },
										{
    name: "Audi A8 50 TDI quattro",
    image: "/quiz/car-price/img/a8.avif",
    km: 120000,
    year: 2020,
    hp: 286,
    price: 41500
  },
];
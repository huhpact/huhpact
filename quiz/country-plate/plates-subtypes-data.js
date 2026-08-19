/*
 * plates-subtypes-data.js
 * -----------------------------------------------------------------
 * Datenbank für das "Kennzeichen-Unterart"-Quiz.
 *
 * Struktur:
 *   PLATE_COUNTRIES = [
 *     {
 *       id:        eindeutiger Schlüssel, z.B. "de"
 *       name:      Anzeigename auf Deutsch, z.B. "Deutschland"
 *       aliases:   weitere Suchbegriffe für die Live-Suche links
 *                  (Kurzformen, Adjektiv, EU-Code, Umgangssprache …)
 *       euCode:    das Länderkennzeichen im blauen EU-Feld, z.B. "D"
 *       subtypes: [
 *         {
 *           id:      eindeutiger Schlüssel innerhalb des Landes
 *           name:    Anzeigename im rechten Dropdown
 *           image:   VOLLSTÄNDIGER Bildpfad inkl. Dateiendung.
 *                    Kann jede Endung sein (.png, .jpg, .webp, .svg, …)
 *                    und jede Unterordnerstruktur — hier wird nichts
 *                    mehr automatisch zusammengesetzt oder ergänzt.
 *                    Zwei Schreibweisen möglich:
 *                      a) relativ, wird an IMG_BASE_PATH angehängt:
 *                         'de/haendlerkennzeichen.jpg'
 *                         -> IMG_BASE_PATH + '/de/haendlerkennzeichen.jpg'
 *                      b) absolut (beginnt mit '/' oder 'http'), wird
 *                         unverändert 1:1 übernommen, IMG_BASE_PATH wird
 *                         dabei ignoriert:
 *                         '/andere-ablage/bilder/haendler.webp'
 *                         'https://cdn.example.com/plates/haendler.png'
 *           aliases: optionale weitere Schreibweisen für spätere Textsuche
 *         },
 *         ...
 *       ]
 *     },
 *     ...
 *   ]
 *
 * IMG_BASE_PATH ist nur ein optionaler gemeinsamer Präfix für relative
 * image-Pfade (Variante a oben) — praktisch, wenn alle Bilder unter
 * einem gemeinsamen Ordner liegen und du bei einem Umzug nur eine
 * Stelle ändern willst. Wird bei absoluten Pfaden (Variante b) ignoriert.
 * Auf leeren String setzen, falls image immer den kompletten Pfad trägt.
 *
 * Neue Länder ergänzen: einfach ein weiteres Objekt in PLATE_COUNTRIES
 * einfügen. init-Skript und Quiz-Skript brauchen dafür keine Änderung.
 * -----------------------------------------------------------------
 */

var IMG_BASE_PATH = '/quiz/plates-subtypes/plates-subtypes-img';

var PLATE_COUNTRIES = [
  {
    id: 'de',
    name: 'Deutschland',
    aliases: ['deutsch', 'germany', 'brd', 'ger'],
    euCode: 'D',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/de.png',
        aliases: ['normales kennzeichen', 'reguläres kennzeichen']
      },
      {
        id: 'wechsel',
        name: 'Wechselkennzeichen',
        image: '/quiz/country-plate/img/de-wechsel.webp',
        aliases: ['wechsel']
      },
      {
        id: 'historisch',
        name: 'History Kennzeichen',
        image: '/quiz/country-plate/img/de-hist.webp',
        aliases: ['altes kennzeichen', 'H']
      },
      {
        id: 'ev',
        name: 'Elektrofahrzeug-Kennzeichen',
        image: '/quiz/country-plate/img/de-ev.webp',
        aliases: ['ev', 'elektro']
      },
      {
        id: 'saison',
        name: 'Saisonkennzeichen',
        image: '/quiz/country-plate/img/de-saison.webp',
        aliases: ['saisonschild']
      },
      {
        id: 'gewerblich',
        name: 'Gewerbe-Kennzeichen',
        image: '/quiz/country-plate/img/de-gewerblich.webp',
        aliases: ['rotes kennzeichen', 'rot kennzeichen']
      },
      {
        id: 'steuerbefreit',
        name: 'steuerbefreite Fahrzeuge',
        image: '/quiz/country-plate/img/de-steuerbefreit.webp',
        aliases: ['steuer kennzeichen', 'steuerbefreit kennzeichen']
      },
      {
        id: 'ueberfuehrung',
        name: 'Überführungskennzeichen',
        image: '/quiz/country-plate/img/de-ueber.webp',
        aliases: ['diplomatisches kennzeichen']
      },
      {
        id: 'bundeswehr',
        name: 'Bundeswehrkennzeichen',
        image: '/quiz/country-plate/img/de-armee.webp',
        aliases: ['militärkennzeichen', 'bw kennzeichen']
      },
      {
        id: 'exp',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/de-exp.webp',
        aliases: ['Export']
      },
       {
        id: 'wechsel',
        name: 'Wechsel-Kennzeichen',
        image: '/quiz/country-plate/img/de-wechsel.png',
        aliases: ['wechsel']
      },
        {
        id: 'moped',
        name: 'Moped-Kennzeichen',
        image: '/quiz/country-plate/img/de-moped.png',
        aliases: ['moped']
      }
    ]
  },
  {
    id: 'at',
    name: 'Österreich',
    aliases: ['österreichisch', 'austria', 'oesterreich'],
    euCode: 'A',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/at.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektrofahrzeug-Kennzeichen',
        image: '/quiz/country-plate/img/at-ev.webp',
        aliases: ['ev']
      },
      {
        id: 'cd',
        name: 'Diplomaten-Kennzeichen',
        image: '/quiz/country-plate/img/at-cd.webp',
        aliases: ['cd kennzeichen']
      },
      {
        id: 'finanzen',
        name: 'Finanzverwaltung',
        image: '/quiz/country-plate/img/at-finanzen.webp',
        aliases: ['Finanzverwaltung']
      },
      {
        id: 'feuerwehr',
        name: 'Feuerwehr-Kennzeichen',
        image: '/quiz/country-plate/img/at-fw.webp',
        aliases: ['feuerwehr']
      },
      {
        id: 'bp',
        name: 'Bundespräsident',
        image: '/quiz/country-plate/img/at-bundes.webp',
        aliases: ['Bundespräsident']
      },
			 {
        id: 'probe',
        name: 'Probefahrten-Kennzeichen',
        image: '/quiz/country-plate/img/at-probe.webp',
        aliases: ['Probefahrten']
      },
				 {
        id: 'vorueber',
        name: 'vorläufiges Kennzeichen',
        image: '/quiz/country-plate/img/at-temp.jpg',
        aliases: ['Vorläufig']
      },
				 {
        id: 'exp',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/at-exp.jpg',
        aliases: ['Export']
      },
				 {
        id: 'moped',
        name: 'Moped-Kennzeichen',
        image: '/quiz/country-plate/img/at-moped.jpg',
        aliases: ['Moped']
      },
    ]
  },
  {
    id: 'ch',
    name: 'Schweiz',
    aliases: ['schweizer', 'switzerland', 'suisse', 'svizzera'],
    euCode: 'CH',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/ch.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'landwirtschaft',
        name: 'Landwirtschaftskennzeichen',
        image: '/quiz/country-plate/img/ch-landwirtschaft.jpeg',
        aliases: ['landwirtschaft']
      },
      {
        id: 'militaer',
        name: 'Militärkennzeichen',
        image: '/quiz/country-plate/img/ch-mili.jpeg',
        aliases: ['armee kennzeichen']
      },
      {
        id: 'cd',
        name: 'CD-Kennzeichen (Diplomaten)',
        image: '/quiz/country-plate/img/ch-cd.webp',
        aliases: ['diplomatenkennzeichen']
      }
    ]
  },
	 {
    id: 'al',
    name: 'Albanien',
    aliases: ['albanisch', 'albania'],
    euCode: 'AL',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/al.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'landwirtschaftskennzeichen',
        name: 'Landwirtschaftskennzeichen',
        image: '/quiz/country-plate/img/al-landwirtschaftskennzeichen.webp',
        aliases: ['landwirtschaftliches kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/al-diplo.webp',
        aliases: ['diplomatisches kennzeichen']
      },
      {
        id: 'militaer',
        name: 'Militärkennzeichen',
        image: '/quiz/country-plate/img/al-mili.webp',
        aliases: ['armee kennzeichen']
      },
      {
        id: 'pol',
        name: 'Polizeikennzeichen',
        image: '/quiz/country-plate/img/al-pol.webp',
        aliases: ['polizeikennzeichen']
      },
			 {
        id: 'taxi',
        name: 'Taxikennzeichen',
        image: '/quiz/country-plate/img/al-taxi.webp',
        aliases: ['taxikennzeichen']
      },
			 {
        id: 'anhaenger',
        name: 'Anhängerkennzeichen',
        image: '/quiz/country-plate/img/al-anhaenger.webp',
        aliases: ['anhängerkennzeichen']
      },
			 {
        id: 'test',
        name: 'Testkennzeichen',
        image: '/quiz/country-plate/img/al-test.webp',
        aliases: ['testkennzeichen']
      },
			 {
        id: 'motorrad',
        name: 'Motorradkennzeichen',
        image: '/quiz/country-plate/img/al-mot.webp',
        aliases: ['motorradkennzeichen']
      }
    ]
  },
	 {
    id: 'and',
    name: 'Andorra',
    aliases: ['andorranisch', 'andorra'],
    euCode: 'AND',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/and.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'temporäres',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/and-temp.webp',
        aliases: ['temporäres kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/and-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
      {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/and-old.webp',
        aliases: ['oldtimer kennzeichen']
      }
    ]
  },
	 {
    id: 'be',
    name: 'Belgien',
    aliases: ['belgisch', 'belgien'],
    euCode: 'BE',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/be.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/be-exp.webp',
        aliases: ['export kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/be-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
      {
        id: 'motorrad',
        name: 'Motorradkennzeichen',
        image: '/quiz/country-plate/img/be-moto.webp',
        aliases: ['motorradkennzeichen']
      },
			 {
        id: 'taxi',
        name: 'Taxikennzeichen',
        image: '/quiz/country-plate/img/be-taxi.webp',
        aliases: ['taxikennzeichen']
      },
			 {
        id: 'haendler',
        name: 'Händlerkennzeichen',
        image: '/quiz/country-plate/img/be-haendler.webp',
        aliases: ['händlerkennzeichen']
      },
    ]
  },
		 {
    id: 'bih',
    name: 'Bosnien und Herzegowina',
    aliases: ['bosnisch', 'herzegowinisch'],
    euCode: 'BIH',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/bih.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'taxi',
        name: 'Taxikennzeichen',
        image: '/quiz/country-plate/img/bih-taxi.webp',
        aliases: ['taxikennzeichen']
      },
      {
        id: 'temp',
        name: 'Temporäres Kennzeichen',
        image: '/quiz/country-plate/img/bih-temp.webp',
        aliases: ['temporäres kennzeichen']
      },
      {
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/bih-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
	 {
    id: 'bg',
    name: 'Bulgarien',
    aliases: ['bulgarisch'],
    euCode: 'BG',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/bg.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'vorl',
        name: 'Vorläufiges Kennzeichen',
        image: '/quiz/country-plate/img/bg-vorl.webp',
        aliases: ['vorlaufiges kennzeichen']
      },
      {
        id: 'temp',
        name: 'Temporäres Kennzeichen',
        image: '/quiz/country-plate/img/bg-temp.webp',
        aliases: ['temporäres kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektrofahrzeug-Kennzeichen',
        image: '/quiz/country-plate/img/bg-ev.webp',
        aliases: ['elektrofahrzeug-kennzeichen']
      },
      	{
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/bg-cd.png',
        aliases: ['diplomatisches kennzeichen']
      }
			
    ]
  },
	 {
    id: 'dk',
    name: 'Dänemark',
    aliases: ['dänisch'],
    euCode: 'DK',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/dk.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'koenig',
        name: 'Königliches Kennzeichen',
        image: '/quiz/country-plate/img/dk-koenig.webp',
        aliases: ['königliches kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/dk-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'gewerbe-anhaenger',
        name: 'Gewerbeanhänger-Kennzeichen',
        image: '/quiz/country-plate/img/dk-gewerbe-anhaenger.webp',
        aliases: ['gewerbeanhänger-kennzeichen']
      },
			{
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/dk-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/dk-temp.png',
        aliases: ['temp kennzeichen']
      },
			
    ]
  },
	 {
    id: 'est',
    name: 'Estland',
    aliases: ['estnisch'],
    euCode: 'EE',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/est.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'moped',
        name: 'Moped-Kennzeichen',
        image: '/quiz/country-plate/img/est-moped.webp',
        aliases: ['moped-kennzeichen']
      },
      {
        id: 'probe',
        name: 'Probe-Kennzeichen',
        image: '/quiz/country-plate/img/est-probe.webp',
        aliases: ['probe-kennzeichen']
      },
      {
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/est-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			{
        id: 'sport',
        name: 'Sportkennzeichen',
        image: '/quiz/country-plate/img/est-sport.webp',
        aliases: ['sportkennzeichen']
      },
			{
        id: 'militaer',
        name: 'Militärkennzeichen',
        image: '/quiz/country-plate/img/est-mili.png',
        aliases: ['militärkennzeichen']
      },
			{
        id: 'praesident',
        name: 'Präsidentenkennzeichen',
        image: '/quiz/country-plate/img/est-praesi.webp',
        aliases: ['präsidiumskennzeichen']
      }
			
    ]
  },
	   {
    id: 'fin',
    name: 'Finland',
    aliases: ['finnisch'],
    euCode: 'FI',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/fin.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/fin-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/fin-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
	   {
    id: 'fr',
    name: 'Frankreich',
    aliases: ['französisch'],
    euCode: 'F',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/fr.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'provisoire',
        name: 'Provisorisches Kennzeichen',
        image: '/quiz/country-plate/img/fr-prov.webp',
        aliases: ['provisoire kennzeichen']
      },
      {
        id: 'temptransit',
        name: 'Temporäres Transit-Kennzeichen',
        image: '/quiz/country-plate/img/temp-transit.webp',
        aliases: ['temporäres transit kennzeichen']
      },
			 {
        id: 'zollfrei',
        name: 'Zollfreies Kennzeichen',
        image: '/quiz/country-plate/img/fr-zollfrei.webp',
        aliases: ['zollfreies kennzeichen']
      }
    ]
  },
	  {
    id: 'gr',
    name: 'Griechenland',
    aliases: ['griechisch'],
    euCode: 'GR',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/gr.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'lkw',
        name: 'LKW-Kennzeichen',
        image: '/quiz/country-plate/img/gr-lkw.webp',
        aliases: ['lkw kennzeichen']
      },
      {
        id: 'regierung',
        name: 'Regierungskennzeichen',
        image: '/quiz/country-plate/img/gr-regierung.webp',
        aliases: ['regierungskennzeichen']
      },
			 {
        id: 'steuerlichbeguenstigt',
        name: 'Steuerlich Begünstigtes Kennzeichen',
        image: '/quiz/country-plate/img/gr-steuerlich.webp',
        aliases: ['steuerlich begünstigtes kennzeichen']
      },
			 {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/gr-anhaenger.webp',
        aliases: ['anhänger-kennzeichen']
      },
			 {
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/gr-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'armee',
        name: 'Armee-Kennzeichen',
        image: '/quiz/country-plate/img/gr-armee.webp',
        aliases: ['armee-kennzeichen']
      },
			 {
        id: 'pol',
        name: 'Polizeikennzeichen',
        image: '/quiz/country-plate/img/gr-pol.webp',
        aliases: ['polizei-kennzeichen']
      },
			 {
        id: 'feuerwehr',
        name: 'Feuerwehr-Kennzeichen',
        image: '/quiz/country-plate/img/gr-feuerwehr.webp',
        aliases: ['feuerwehr-kennzeichen']
      },
			 {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/gr-exp.webp',
        aliases: ['export-kennzeichen']
      }
    ]
  },
	   {
    id: 'irl',
    name: 'Irland',
    aliases: ['irland'],
    euCode: 'IRL',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/irl.webp',
        aliases: ['normales kennzeichen']
      }
    ]
  },
   {
    id: 'is',
    name: 'Island',
    aliases: ['isländisch'],
    euCode: 'IS',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/is.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'kommerziell',
        name: 'Kommerzielles Kennzeichen',
        image: '/quiz/country-plate/img/is-kom.webp',
        aliases: ['kommerzielles kennzeichen']
      },
      {
        id: 'steuerlichvergünstigt',
        name: 'Steuerlich Vergünstigtes Kennzeichen',
        image: '/quiz/country-plate/img/is-steuerlichverg.webp',
        aliases: ['steuerlich vergünstigtes kennzeichen']
      },
			 {
        id: 'temporär',
        name: 'Temporäres Kennzeichen',
        image: '/quiz/country-plate/img/is-temp.png',
        aliases: ['temporäres kennzeichen']
      },
			 {
        id: 'cd',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/is-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'praesident',
        name: 'Präsidenten-Kennzeichen',
        image: '/quiz/country-plate/img/is-praesi.webp',
        aliases: ['praesident kennzeichen']
      }
    ]
  },
	   {
    id: 'it',
    name: 'Italien',
    aliases: ['italien'],
    euCode: 'I',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/it.webp',
        aliases: ['normales kennzeichen']
      },
			 {
        id: 'luftwaffe',
        name: 'Luftwaffe-Kennzeichen',
        image: '/quiz/country-plate/img/it-luftwaffe.webp',
        aliases: ['luftwaffe kennzeichen']
      },
			 {
        id: 'armee',
        name: 'Armee-Kennzeichen',
        image: '/quiz/country-plate/img/it-armee.webp',
        aliases: ['armee kennzeichen']
      },
			{
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/it-pol.png',
        aliases: ['Polizei kennzeichen']
      },
			{
        id: 'cd',
        name: 'Diplomat-Kennzeichen',
        image: '/quiz/country-plate/img/it-cd.webp',
        aliases: ['Diplomat kennzeichen']
      }
    ]
  },
	   {
    id: 'rks',
    name: 'Kosovo',
    aliases: ['kosovo'],
    euCode: 'RKS',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/rks.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/rks-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'behoerde',
        name: 'Behörden-Kennzeichen',
        image: '/quiz/country-plate/img/rks-behoerde.webp',
        aliases: ['behoerde kennzeichen']
      },
			 {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/rks-pol.webp',
        aliases: ['Polizei kennzeichen']
      },
			 {
        id: 'zoll',
        name: 'Zoll-Kennzeichen',
        image: '/quiz/country-plate/img/rks-zoll.webp',
        aliases: ['Zoll kennzeichen']
      },
			 {
        id: 'cd',
        name: 'Diplomaten-Kennzeichen',
        image: '/quiz/country-plate/img/rks-cd.webp',
        aliases: ['CD kennzeichen']
      },
    ]
  },
	   {
    id: 'hr',
    name: 'Kroatien',
    aliases: ['kroatisch'],
    euCode: 'HR',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/hr.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/hr-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/hr-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'moto',
        name: 'Motorrad-Kennzeichen',
        image: '/quiz/country-plate/img/hr-moto.webp',
        aliases: ['Motorrad kennzeichen']
      },
			{
        id: 'mili',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/hr-mili.webp',
        aliases: ['Militär kennzeichen']
      }
    ]
  },
	   {
    id: 'lv',
    name: 'Lettland',
    aliases: ['lettisch'],
    euCode: 'LV',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/lv.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/lv-ev.webp',
        aliases: ['ev-kennzeichen']
      },
      {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/lv-taxi.webp',
        aliases: ['Taxi kennzeichen']
      },
			 {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/lv-anhaenger.webp',
        aliases: ['Anhänger kennzeichen']
      },
			 {
        id: 'haendler',
        name: 'Händler-Kennzeichen',
        image: '/quiz/country-plate/img/lv-haendler.webp',
        aliases: ['Händler kennzeichen']
      },
			 {
        id: 'temp',
        name: 'Temporäres Kennzeichen',
        image: '/quiz/country-plate/img/lv-temp.webp',
        aliases: ['temp kennzeichen']
      },
			 {
        id: 'cd',
        name: 'Diplomaten-Kennzeichen',
        image: '/quiz/country-plate/img/lv-cd.webp',
        aliases: ['cd kennzeichen']
      },
    ]
  },
   {
    id: 'fl',
    name: 'Liechtenstein',
    aliases: ['liecht'],
    euCode: 'FL',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/fl.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'tageskurzeit',
        name: 'Tages-Kurzzeitkennzeichen',
        image: '/quiz/country-plate/img/fl-tages.webp',
        aliases: ['tages-kennzeichen']
      },
      {
        id: 'landwirtschaft',
        name: 'Landwirtschaftskennzeichen',
        image: '/quiz/country-plate/img/fl-landwirtschaft.png',
        aliases: ['landwirtschaft kennzeichen']
      },
			      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/fl-anhaenger.webp',
        aliases: ['anhaenger kennzeichen']
      },
			      {
        id: 'wiederholung',
        name: 'Wiederholungs-Kennzeichen',
        image: '/quiz/country-plate/img/fl-wiederholung.webp',
        aliases: ['wiederholung kennzeichen']
      },
			      {
        id: 'Moped',
        name: 'Moped-Kennzeichen',
        image: '/quiz/country-plate/img/fl-moped.png',
        aliases: ['moped kennzeichen']
      },
    ]
  },
	   {
    id: 'lt',
    name: 'Litauen',
    aliases: ['litauisch'],
    euCode: 'LT',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/lt.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'haendler',
        name: 'Händler-Kennzeichen',
        image: '/quiz/country-plate/img/lt-haendler.webp',
        aliases: ['haendler-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/lt-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			{
        id: 'militaer',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/lt-mili.webp',
        aliases: ['mili kennzeichen']
      }
    ]
  },
   {
    id: 'lu',
    name: 'Luxemburg',
    aliases: ['luxembourg'],
    euCode: 'L',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/lu.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/lu-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/lu-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			  {
        id: 'behoerde',
        name: 'Behördenkennzeichen',
        image: '/quiz/country-plate/img/lu-behoerde.webp',
        aliases: ['behoerden kennzeichen']
      },
			  {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/lu-temp.webp',
        aliases: ['temp kennzeichen']
      },
			  {
        id: 'mili',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/lu-mili.webp',
        aliases: ['militaer kennzeichen']
      }
    ]
  },
	   {
    id: 'm',
    name: 'Malta',
    aliases: ['malte'],
    euCode: 'M',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/m.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/m-old.webp',
        aliases: ['oldtimer-kennzeichen']
      },
      {
        id: 'bus',
        name: 'Bus-Kennzeichen',
        image: '/quiz/country-plate/img/m-bus.webp',
        aliases: ['bus kennzeichen']
      },
			{
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/m-taxi.webp',
        aliases: ['taxi kennzeichen']
      },
				{
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/m-anhaenger.webp',
        aliases: ['anhaenger kennzeichen']
      },
    ]
  },
   {
    id: 'md',
    name: 'Moldau',
    aliases: ['moldavien'],
    euCode: 'MD',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/md.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/md-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/md-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			{
        id: 'opnv',
        name: 'ÖPNV-Kennzeichen',
        image: '/quiz/country-plate/img/md-opnv.webp',
        aliases: ['Öpnv kennzeichen']
      }
    ]
  },
   {
    id: 'mc',
    name: 'Monaco',
    aliases: ['monaco'],
    euCode: 'MC',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/mc.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'fuerst',
        name: 'Fürsten-Kennzeichen',
        image: '/quiz/country-plate/img/mc-fuerst.webp',
        aliases: ['fuerst-kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/mc-temp.png',
        aliases: ['temp kennzeichen']
      }
    ]
  },
   {
    id: 'mne',
    name: 'Montenegro',
    aliases: ['monte'],
    euCode: 'MNE',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/mne.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/mne-temp.webp',
        aliases: ['temp-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/mne-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			   {
        id: 'landwirtschaft',
        name: 'Landwirtschaftskennzeichen',
        image: '/quiz/country-plate/img/mne-landwirtschaft.webp',
        aliases: ['landwirtschaft kennzeichen']
      },
			   {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/mne-oldtimer.png',
        aliases: ['oldtimer kennzeichen']
      }
    ]
  },
   {
    id: 'nl',
    name: 'Niederlande',
    aliases: ['Holland'],
    euCode: 'NL',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/nl.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/nl-old.webp',
        aliases: ['oldtimer-kennzeichen']
      },
      {
        id: 'wiederholung',
        name: 'Wiederholungskennzeichen',
        image: '/quiz/country-plate/img/nl-wiederholung.webp',
        aliases: ['wiederholung kennzeichen']
      },
			 {
        id: 'koenigshaus',
        name: 'Königshaus-Kennzeichen',
        image: '/quiz/country-plate/img/nl-koenighaus.webp',
        aliases: ['koenigshaus kennzeichen']
      },
			 {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/nl-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'mili',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/nl-mili.webp',
        aliases: ['mili kennzeichen']
      },
    ]
  },
   {
    id: 'nmk',
    name: 'Nordmazedonien',
    aliases: ['Mazedonien'],
    euCode: 'NMK',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/nmk.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'kurzzeit',
        name: 'Kurzzeit-Kennzeichen',
        image: '/quiz/country-plate/img/nmk-kurzzeit.webp',
        aliases: ['kurzzeit-kennzeichen']
      },
      {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/nmk-pol.webp',
        aliases: ['polizei kennzeichen']
      }
    ]
  },
   {
    id: 'no',
    name: 'Norwegen',
    aliases: ['norway'],
    euCode: 'N',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/no.png',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'haendler',
        name: 'Händler-Kennzeichen',
        image: '/quiz/country-plate/img/no-haendler.webp',
        aliases: ['haendler-kennzeichen']
      },
      {
        id: 'probe',
        name: 'Probe-Kennzeichen',
        image: '/quiz/country-plate/img/no-probe.webp',
        aliases: ['probe kennzeichen']
      },
			 {
        id: 'exp',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/no-exp.webp',
        aliases: ['exp kennzeichen']
      },
			 {
        id: 'koenigshaus',
        name: 'Königshaus-Kennzeichen',
        image: '/quiz/country-plate/img/no-koenighaus.webp',
        aliases: ['koenig kennzeichen']
      },
			 {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/no-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
   {
    id: 'pl',
    name: 'Polen',
    aliases: ['pol'],
    euCode: 'PL',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/pl.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/pl-ev.webp',
        aliases: ['ev-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/pl-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/pl-old.webp',
        aliases: ['oldtimer kennzeichen']
      }
    ]
  },
   {
    id: 'p',
    name: 'Portugal',
    aliases: ['port'],
    euCode: 'P',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/p.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'st',
        name: 'Standard-Kennzeichen 2005-2020',
        image: '/quiz/country-plate/img/p-2005.webp',
        aliases: ['2005-kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/p-anhaenger.webp',
        aliases: ['anhaenger kennzeichen']
      },
			{
        id: 'exp',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/p-exp.webp',
        aliases: ['exp kennzeichen']
      }
    ]
  },
   {
    id: 'ro',
    name: 'Rumänien',
    aliases: ['rum'],
    euCode: 'RO',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/ro.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'leasing',
        name: 'Leasing-Kennzeichen',
        image: '/quiz/country-plate/img/ro-leasing.webp',
        aliases: ['leasing-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/ro-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			  {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/ro-temp.webp',
        aliases: ['temporäres kennzeichen']
      }
    ]
  },
   {
    id: 'rus',
    name: 'Russland',
    aliases: ['russ'],
    euCode: 'RUS',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/rus.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'praesi',
        name: 'Präsidenten-Kennzeichen',
        image: '/quiz/country-plate/img/rus-praesi.webp',
        aliases: ['praesi-kennzeichen']
      },
      {
        id: 'opnv',
        name: 'ÖPNV-Kennzeichen',
        image: '/quiz/country-plate/img/rus-opnv.webp',
        aliases: ['opnv kennzeichen']
      },
			 {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/rus-pol.webp',
        aliases: ['pol kennzeichen']
      },
			 {
        id: 'mili',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/rus-mili.webp',
        aliases: ['mili kennzeichen']
      },
				 {
        id: 'uberfuehrung',
        name: 'Überführungskennzeichen',
        image: '/quiz/country-plate/img/rus-uber.webp',
        aliases: ['ueber kennzeichen']
      },
			 {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/rus-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
   {
    id: 'rsm',
    name: 'San Marino',
    aliases: ['san'],
    euCode: 'RSM',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/rsm.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/rsm-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/rsm-temp.webp',
        aliases: ['temp kennzeichen']
      },
			{
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/rsm-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
				{
        id: 'croixrouge',
        name: 'Rotes Kreuz Kennzeichen',
        image: '/quiz/country-plate/img/rsm-cr.webp',
        aliases: ['cr kennzeichen']
      },
				{
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/rsm-pol.webp',
        aliases: ['pol kennzeichen']
      },
			{
        id: 'test',
        name: 'Test-Kennzeichen',
        image: '/quiz/country-plate/img/rsm-test.webp',
        aliases: ['test kennzeichen']
      }
    ]
  },
   {
    id: 'se',
    name: 'Schweden',
    aliases: ['schweden'],
    euCode: 'S',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/se.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/se-taxi.webp',
        aliases: ['taxi-kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/se-temp.webp',
        aliases: ['temp kennzeichen']
      },
			 {
        id: 'uberfuehrung',
        name: 'Überführungskennzeichen',
        image: '/quiz/country-plate/img/se-uber.webp',
        aliases: ['ueber kennzeichen']
      },
			 {
        id: 'old',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/se-old.webp',
        aliases: ['oldtimer kennzeichen']
      },
    ]
  },
   {
    id: 'srb',
    name: 'Serbien',
    aliases: ['serbia'],
    euCode: 'SRB',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/srb.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/srb-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/srb-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			  {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/srb-pol.webp',
        aliases: ['polizei kennzeichen']
      },
			
    ]
  },
   {
    id: 'sk',
    name: 'Slowakei',
    aliases: ['slowakia'],
    euCode: 'SK',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/sk.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/sk-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'import',
        name: 'Import-Kennzeichen',
        image: '/quiz/country-plate/img/sk-imp.webp',
        aliases: ['import kennzeichen']
      },
			 {
        id: 'haendler',
        name: 'Händler-Kennzeichen',
        image: '/quiz/country-plate/img/sk-haendler.webp',
        aliases: ['haendler kennzeichen']
      },
				 {
        id: 'behoerde',
        name: 'Behörden-Kennzeichen',
        image: '/quiz/country-plate/img/sk-behoerde.webp',
        aliases: ['behoerde kennzeichen']
      },
			 {
        id: 'militaer',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/sk-mili.webp',
        aliases: ['mili kennzeichen']
      },
			 {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/sk-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/sk-ev.webp',
        aliases: ['ev kennzeichen']
      },
    ]
  },
   {
    id: 'slo',
    name: 'Slowenien',
    aliases: ['Slovenia'],
    euCode: 'SLO',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/slo.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/slo-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'probe',
        name: 'Probe-Kennzeichen',
        image: '/quiz/country-plate/img/slo-probe.webp',
        aliases: ['probe kennzeichen']
      },
			  {
        id: 'exp',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/slo-exp.webp',
        aliases: ['exp kennzeichen']
      },
			  {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/slo-pol.webp',
        aliases: ['pol kennzeichen']
      }
    ]
  },
	   {
    id: 'es',
    name: 'Spanien',
    aliases: ['Espana'],
    euCode: 'E',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/es.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/es-temp.webp',
        aliases: ['temp-kennzeichen']
      },
			 {
        id: 'haendler',
        name: 'Händler-Kennzeichen',
        image: '/quiz/country-plate/img/es-haendler.webp',
        aliases: ['haendler-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/es-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			  {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/es-anhaenger.webp',
        aliases: ['anhaenger kennzeichen']
      },
			  {
        id: 'ausfuhr',
        name: 'Ausfuhr-Kennzeichen',
        image: '/quiz/country-plate/img/es-ausfuhr.webp',
        aliases: ['ausfuhr kennzeichen']
      },
			  {
        id: 'cc',
        name: 'Konsulat-Kennzeichen',
        image: '/quiz/country-plate/img/es-cc.webp',
        aliases: ['konsulat kennzeichen']
      },
			  {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/es-taxi.webp',
        aliases: ['taxi kennzeichen']
      },
			 {
        id: 'ert',
        name: 'Ertzaintza-Kennzeichen',
        image: '/quiz/country-plate/img/es-ert.png',
        aliases: ['Ertzaintza kennzeichen']
      },
				 {
        id: 'umwelt',
        name: 'Umweltministerium-Kennzeichen',
        image: '/quiz/country-plate/img/es-umwelt.webp',
        aliases: ['Umwelt kennzeichen']
      }
    ]
  },
   {
    id: 'cz',
    name: 'Tschechien',
    aliases: ['Czechia'],
    euCode: 'CZ',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/cz.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'export',
        name: 'Export-Kennzeichen',
        image: '/quiz/country-plate/img/cz-exp.webp',
        aliases: ['export-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/cz-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
   {
    id: 'tr',
    name: 'Türkei',
    aliases: ['turk'],
    euCode: 'TR',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/tr.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/tpol.jpeg',
        aliases: ['pol-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/tr-cd.jpeg',
        aliases: ['diplomatisches kennzeichen']
      }
    ]
  },
   {
    id: 'ua',
    name: 'Ukraine',
    aliases: ['ukr'],
    euCode: 'UA',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/ua.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/ua-ev.webp',
        aliases: ['ev-kennzeichen']
      },
      {
        id: 'ÖPNV',
        name: 'ÖPNV-Kennzeichen',
        image: '/quiz/country-plate/img/ua-opnv.webp',
        aliases: ['opnv kennzeichen']
      },
			 {
        id: 'probe',
        name: 'Probe-Kennzeichen',
        image: '/quiz/country-plate/img/ua-probe.webp',
        aliases: ['probe kennzeichen']
      },
			 {
        id: 'polizei',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/ua-pol.webp',
        aliases: ['pol kennzeichen']
      },
			 {
        id: 'mili',
        name: 'Militär-Kennzeichen',
        image: '/quiz/country-plate/img/ua-mili.gif',
        aliases: ['mili kennzeichen']
      }
    ]
  },
   {
    id: 'hu',
    name: 'Ungarn',
    aliases: ['hungary'],
    euCode: 'HU',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/hu.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/hu-temp.webp',
        aliases: ['temp-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/hu-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			 {
        id: 'umweltfreundlich',
        name: 'umweltfreundliches Kennzeichen',
        image: '/quiz/country-plate/img/hu-umwelt.webp',
        aliases: ['umwelt kennzeichen']
      },
				 {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/hu-tx.webp',
        aliases: ['taxi kennzeichen']
      },
					 {
        id: 'fahrrad',
        name: 'Fahrradträger-Kennzeichen',
        image: '/quiz/country-plate/img/hu-fahrrad.webp',
        aliases: ['fahrrad kennzeichen']
      },
					 {
        id: 'oldtimer',
        name: 'Oldtimer-Kennzeichen',
        image: '/quiz/country-plate/img/hu-old.webp',
        aliases: ['oldtimer kennzeichen']
      }
    ]
  },
   {
    id: 'v',
    name: 'Vatikan',
    aliases: ['vatikan'],
    euCode: 'V',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/v.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'kardinal',
        name: 'Kardinal-Kennzeichen',
        image: '/quiz/country-plate/img/v-k.webp',
        aliases: ['export-kennzeichen']
      }
    ]
  },

   {
    id: 'uk',
    name: 'Vereinigtes Königreich',
    aliases: ['UK'],
    euCode: 'GB',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/uk.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'nordirland',
        name: 'Nordirland-Kennzeichen',
        image: '/quiz/country-plate/img/uk-nordirland.webp',
        aliases: ['nordirland-kennzeichen']
      },
      {
        id: 'gibraltar',
        name: 'Gibraltar',
        image: '/quiz/country-plate/img/uk-gibr.webp',
        aliases: ['gibraltar kennzeichen']
      },
			 {
        id: 'isleofman',
        name: 'Isle of Man',
        image: '/quiz/country-plate/img/uk-iom.webp',
        aliases: ['Isle of Man kennzeichen']
      }
    ]
  },
	   {
    id: 'by',
    name: 'Belarus',
    aliases: ['Weissrussland'],
    euCode: 'BY',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/by.jpeg',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'anhaenger',
        name: 'Anhänger-Kennzeichen',
        image: '/quiz/country-plate/img/by-anhaenger.webp',
        aliases: ['anhaenger-kennzeichen']
      },
      {
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/by-ev.png',
        aliases: ['ev-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/by-cd.png',
        aliases: ['diplomatisches kennzeichen']
      },
       {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/by-taxi.png',
        aliases: ['Taxi kennzeichen']
      },
       {
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/by-temp.png',
        aliases: ['temp kennzeichen']
      }
    ]
  },
   {
    id: 'cy',
    name: 'Zypern',
    aliases: ['Cyprus'],
    euCode: 'CY',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/cy.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/cy-taxi.webp',
        aliases: ['taxi-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/cy-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			{
        id: 'temp',
        name: 'temporäres Kennzeichen',
        image: '/quiz/country-plate/img/cy-temp.webp',
        aliases: ['temp kennzeichen']
      }
    ]
  },
   {
    id: 'afg',
    name: 'Afghanistan',
    aliases: ['Afghn'],
    euCode: 'AFG',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/afg.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'bus',
        name: 'Bus-Kennzeichen',
        image: '/quiz/country-plate/img/afg-bus.png',
        aliases: ['bus-kennzeichen']
      },
      {
        id: 'regierung',
        name: 'Regierungskennzeichen',
        image: '/quiz/country-plate/img/afg-reg.png',
        aliases: ['regierung kennzeichen']
      },
			{
        id: 'un',
        name: 'UN-Kennzeichen',
        image: '/quiz/country-plate/img/afg-un.png',
        aliases: ['UN kennzeichen']
      }
    ]
  },
   {
    id: 'EG',
    name: 'Ägypten',
    aliases: ['Egypt'],
    euCode: 'EG',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/eg.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'taxi',
        name: 'Taxi-Kennzeichen',
        image: '/quiz/country-plate/img/eg-taxi.png',
        aliases: ['taxi-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/eg-cd.png',
        aliases: ['diplomatisches kennzeichen']
      },
			  {
        id: 'pol',
        name: 'Polizei-Kennzeichen',
        image: '/quiz/country-plate/img/eg-pol.png',
        aliases: ['pol kennzeichen']
      }
    ]
  },
   {
    id: 'cn',
    name: 'China',
    aliases: ['China'],
    euCode: 'CN',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/cn.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'auslunter',
        name: 'ausländisches Unternehmen-Kennzeichen',
        image: '/quiz/country-plate/img/cn-auslunter.webp',
        aliases: ['auslunter-kennzeichen']
      },
      {
        id: 'diplomat',
        name: 'Diplomatenkennzeichen',
        image: '/quiz/country-plate/img/cn-cd.webp',
        aliases: ['diplomatisches kennzeichen']
      },
			{
        id: 'ev',
        name: 'Elektro-Kennzeichen',
        image: '/quiz/country-plate/img/cn-ev.webp',
        aliases: ['ev kennzeichen']
      }
    ]
  },
   {
    id: 'jp',
    name: 'Japan',
    aliases: ['jp'],
    euCode: 'JP',
    subtypes: [
      {
        id: 'standard',
        name: 'Standard-Kennzeichen',
        image: '/quiz/country-plate/img/jp.webp',
        aliases: ['normales kennzeichen']
      },
      {
        id: 'gewerblich',
        name: 'gewerblich genutzte Kennzeichen',
        image: '/quiz/country-plate/img/jp-gewerblich.webp',
        aliases: ['gewerblich-kennzeichen']
      },
      {
        id: 'klein',
        name: 'Kleinwagen-Kennzeichen',
        image: '/quiz/country-plate/img/jp-klein.webp',
        aliases: ['klein kennzeichen']
      },
			 {
        id: 'gewerblichklein',
        name: 'gewerblicher Kleinwagen-Kennzeichen',
        image: '/quiz/country-plate/img/jp-gewerblichklein.webp',
        aliases: ['gewerblich klein kennzeichen']
      },
    ]
  },




];
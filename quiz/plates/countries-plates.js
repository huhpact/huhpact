const countriesPlates = [

    /* ─── EUROPE ─── */

    // Standard EU plates (white background, EU blue left strip, black text)
    { name: "Germany",        region: "europe", plate: { type: "eu_standard", code: "D",   bg: "#fff", text: "#000", border: "#aaa", sample: "B · AB 1234" } },
    { name: "Austria",        region: "europe", plate: { type: "eu_standard", code: "A",   bg: "#fff", text: "#000", border: "#aaa", sample: "W 1234 AB"   } },
    { name: "Poland",         region: "europe", plate: { type: "eu_standard", code: "PL",  bg: "#fff", text: "#000", border: "#aaa", sample: "WA 12345"    } },
    { name: "Portugal",       region: "europe", plate: { type: "eu_standard", code: "P",   bg: "#fff", text: "#000", border: "#aaa", sample: "AB-12-CD"    } },
    { name: "Sweden",         region: "europe", plate: { type: "eu_standard", code: "S",   bg: "#fff", text: "#000", border: "#aaa", sample: "ABC 123"     } },
    { name: "Denmark",        region: "europe", plate: { type: "eu_standard", code: "DK",  bg: "#fff", text: "#000", border: "#aaa", sample: "AB 12 345"   } },
    { name: "Finland",        region: "europe", plate: { type: "eu_standard", code: "FIN", bg: "#fff", text: "#000", border: "#aaa", sample: "ABC-123"     } },
    { name: "Norway",         region: "europe", plate: { type: "eu_standard", code: "N",   bg: "#fff", text: "#000", border: "#aaa", sample: "AB 12345"    } },
    { name: "Czech Republic", region: "europe", plate: { type: "eu_standard", code: "CZ",  bg: "#fff", text: "#000", border: "#aaa", sample: "1AB 2345"    } },
    { name: "Hungary",        region: "europe", plate: { type: "eu_standard", code: "H",   bg: "#fff", text: "#000", border: "#aaa", sample: "ABC-123"     } },
    { name: "Romania",        region: "europe", plate: { type: "eu_standard", code: "RO",  bg: "#fff", text: "#000", border: "#aaa", sample: "B 12 ABC"    } },
    { name: "Greece",         region: "europe", plate: { type: "eu_standard", code: "GR",  bg: "#fff", text: "#000", border: "#aaa", sample: "AAA 1234"    } },
    { name: "Croatia",        region: "europe", plate: { type: "eu_standard", code: "HR",  bg: "#fff", text: "#000", border: "#aaa", sample: "ZG 123-AB"   } },
    { name: "Slovakia",       region: "europe", plate: { type: "eu_standard", code: "SK",  bg: "#fff", text: "#000", border: "#aaa", sample: "BA 123AB"    } },
    { name: "Ireland",        region: "europe", plate: { type: "eu_standard", code: "IRL", bg: "#fff", text: "#000", border: "#aaa", sample: "241-D-1234"  } },
    { name: "Lithuania",      region: "europe", plate: { type: "eu_standard", code: "LT",  bg: "#fff", text: "#000", border: "#aaa", sample: "ABC 123"     } },
    { name: "Latvia",         region: "europe", plate: { type: "eu_standard", code: "LV",  bg: "#fff", text: "#000", border: "#aaa", sample: "AB 1234"     } },
    { name: "Estonia",        region: "europe", plate: { type: "eu_standard", code: "EST", bg: "#fff", text: "#000", border: "#aaa", sample: "123 ABC"     } },
    { name: "Bulgaria",       region: "europe", plate: { type: "eu_standard", code: "BG",  bg: "#fff", text: "#000", border: "#aaa", sample: "CB 1234 AB"  } },
    { name: "Spain",          region: "europe", plate: { type: "eu_standard", code: "E",   bg: "#fff", text: "#000", border: "#aaa", sample: "1234 BCD"    } },

    // EU special layout plates
    { name: "France",      region: "europe", plate: { type: "eu_fr",  code: "F",  bg: "#fff",    text: "#000",    border: "#aaa",    sample: "AB-123-CD"  } },
    { name: "Italy",       region: "europe", plate: { type: "eu_it",  code: "I",  bg: "#fff",    text: "#000",    border: "#aaa",    sample: "AB 123 CD"  } },
    { name: "Netherlands", region: "europe", plate: { type: "eu_nl",  code: "NL", bg: "#FFEE00", text: "#000",    border: "#aaa",    sample: "AB-12-CD"   } },
    { name: "Belgium",     region: "europe", plate: { type: "eu_be",  code: "B",  bg: "#fff",    text: "#CC0000", border: "#aaa",    sample: "1-ABC-234"  } },
    { name: "Luxembourg",  region: "europe", plate: { type: "eu_lu",  code: "L",  bg: "#FFEE00", text: "#000",    border: "#aaa",    sample: "AB 1234"    } },

    // Non-EU / special format
    { name: "Switzerland",    region: "europe", plate: { type: "ch",  bg: "#fff", text: "#000", border: "#DD0000", sample: "ZH 123456"  } },
    { name: "United Kingdom", region: "europe", plate: { type: "uk",  bg: "#fff", text: "#000", border: "#333",    sample: "AB12 CDE"   } },
    { name: "Ukraine",        region: "europe", plate: { type: "ua",  bg: "#fff", text: "#000", border: "#003399", sample: "AA 1234 BB" } },
    { name: "Belarus",        region: "europe", plate: { type: "by",  bg: "#fff", text: "#000", border: "#CF101A", sample: "1234 AB-7"  } },
    { name: "Serbia",         region: "europe", plate: { type: "rs",  bg: "#fff", text: "#000", border: "#003399", sample: "BG 123-AB"  } },

    /* ─── ASIA ─── */

    { name: "Japan",        region: "asia", plate: { type: "jp",  bg: "#fff",    text: "#2b6b2b", border: "#2b6b2b", sample: "1234"        } },
    { name: "China",        region: "asia", plate: { type: "cn",  bg: "#0033BB", text: "#FFDD00", border: "#0033BB", sample: "A12345"      } },
    { name: "South Korea",  region: "asia", plate: { type: "kr",  bg: "#fff",    text: "#000",    border: "#003399", sample: "123가 4567"   } },
    { name: "India",        region: "asia", plate: { type: "in",  bg: "#fff",    text: "#000",    border: "#FF9933", sample: "MH 01 AB 1234" } },
    { name: "Thailand",     region: "asia", plate: { type: "th",  bg: "#fff",    text: "#000",    border: "#CC0000", sample: "กข 1234"     } },
    { name: "Singapore",    region: "asia", plate: { type: "sg",  bg: "#fff",    text: "#000",    border: "#EF3340", sample: "SBA 1234A"   } },
    { name: "Malaysia",     region: "asia", plate: { type: "my",  bg: "#111",    text: "#fff",    border: "#333",    sample: "WA 1234 B"   } },
    { name: "Indonesia",    region: "asia", plate: { type: "id",  bg: "#CC0000", text: "#fff",    border: "#880000", sample: "B 1234 ABC"  } },
    { name: "Turkey",       region: "asia", plate: { type: "tr",  bg: "#fff",    text: "#000",    border: "#E30A17", sample: "34 ABC 123"  } },
    { name: "Iran",         region: "asia", plate: { type: "ir",  bg: "#fff",    text: "#000",    border: "#239F40", sample: "12-345-ب-67" } },
    { name: "Israel",       region: "asia", plate: { type: "il",  bg: "#fff",    text: "#000",    border: "#888",    sample: "123-45-678"  } },
    { name: "Saudi Arabia", region: "asia", plate: { type: "sa",  bg: "#fff",    text: "#000",    border: "#006C35", sample: "أ ب ج · 1234" } },
    { name: "UAE",          region: "asia", plate: { type: "ae",  bg: "#fff",    text: "#000",    border: "#888",    sample: "A · 12345"   } },

    /* ─── NORTH AMERICA ─── */

    { name: "United States", region: "north-america", plate: { type: "us", bg: "#fff", text: "#000", border: "#002868", sample: "1ABC234", state: "CALIFORNIA" } },
    { name: "Canada",        region: "north-america", plate: { type: "ca", bg: "#fff", text: "#000", border: "#CC0000", sample: "ABCD 123", state: "ONTARIO"    } },
    { name: "Mexico",        region: "north-america", plate: { type: "mx", bg: "#fff", text: "#000", border: "#006847", sample: "ABC-D-123"                     } },

    /* ─── SOUTH AMERICA ─── */

    { name: "Brazil",    region: "south-america", plate: { type: "br", bg: "#fff",    text: "#000", border: "#009c3b", sample: "ABC1D23" } },
    { name: "Argentina", region: "south-america", plate: { type: "ar", bg: "#ADD8E6", text: "#000", border: "#74acdf", sample: "AB 123 CD" } },
    { name: "Chile",     region: "south-america", plate: { type: "cl", bg: "#fff",    text: "#000", border: "#CC0000", sample: "ABCD 12" } },
    { name: "Colombia",  region: "south-america", plate: { type: "co", bg: "#FFEE00", text: "#000", border: "#888",    sample: "ABC 123" } },
    { name: "Peru",      region: "south-america", plate: { type: "pe", bg: "#fff",    text: "#000", border: "#CC0000", sample: "ABC-123" } },

    /* ─── AFRICA ─── */

    { name: "South Africa", region: "africa", plate: { type: "za", bg: "#fff",    text: "#111",    border: "#111",    sample: "CA 123-456" } },
    { name: "Nigeria",      region: "africa", plate: { type: "ng", bg: "#fff",    text: "#000",    border: "#006600", sample: "ABC 123 DE" } },
    { name: "Kenya",        region: "africa", plate: { type: "ke", bg: "#fff",    text: "#000",    border: "#006600", sample: "KCA 123A"   } },
    { name: "Egypt",        region: "africa", plate: { type: "eg", bg: "#fff",    text: "#000",    border: "#CC0000", sample: "أ · 12345"  } },
    { name: "Morocco",      region: "africa", plate: { type: "ma", bg: "#fff",    text: "#000",    border: "#C1272D", sample: "12345 · أ"  } },

    /* ─── OCEANIA ─── */

    { name: "Australia",   region: "oceania", plate: { type: "au", bg: "#f8f8f8", text: "#000", border: "#00008B", sample: "ABC 12D", state: "VICTORIA"     } },
    { name: "New Zealand", region: "oceania", plate: { type: "nz", bg: "#fff",    text: "#000", border: "#00247D", sample: "ABC 123"                         } },

];
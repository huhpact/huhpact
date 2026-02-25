const countriesPlates = [

    /* ─── EUROPE ─── */

    { name: "Germany", region: "europe", plates: [
        { label: "Standard", url: "/quiz/plates/plates-img/de.png" },
        { label: "Electric", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/GER_plate_private_electric_2015.svg/320px-GER_plate_private_electric_2015.svg.png" },
    ]},
    { name: "Austria", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/AUT_plate_W_private.svg/320px-AUT_plate_W_private.svg.png" },
    ]},
    { name: "Poland", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/POL_plate_private_2000.svg/320px-POL_plate_private_2000.svg.png" },
    ]},
    { name: "Portugal", region: "europe", plates: [
        { label: "Current", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/PRT_plate_private_2020.svg/320px-PRT_plate_private_2020.svg.png" },
        { label: "Older", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/PRT_plate_private_2005.svg/320px-PRT_plate_private_2005.svg.png" },
    ]},
    { name: "Sweden", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/SWE_plate_private_2021.svg/320px-SWE_plate_private_2021.svg.png" },
    ]},
    { name: "Denmark", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/DNK_plate_private_2009.svg/320px-DNK_plate_private_2009.svg.png" },
    ]},
    { name: "Finland", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/FIN_plate_private_2001.svg/320px-FIN_plate_private_2001.svg.png" },
    ]},
    { name: "Norway", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/NOR_plate_private_2006.svg/320px-NOR_plate_private_2006.svg.png" },
    ]},
    { name: "Czech Republic", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/CZE_plate_private_2001.svg/320px-CZE_plate_private_2001.svg.png" },
    ]},
    { name: "Hungary", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HUN_plate_private_2004.svg/320px-HUN_plate_private_2004.svg.png" },
    ]},
    { name: "Romania", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/ROU_plate_private_2007.svg/320px-ROU_plate_private_2007.svg.png" },
    ]},
    { name: "Greece", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/GRC_plate_private_2004.svg/320px-GRC_plate_private_2004.svg.png" },
    ]},
    { name: "Croatia", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/HRV_plate_private_2003.svg/320px-HRV_plate_private_2003.svg.png" },
    ]},
    { name: "Slovakia", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SVK_plate_private_1997.svg/320px-SVK_plate_private_1997.svg.png" },
    ]},
    { name: "Ireland", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/IRL_plate_private_2013.svg/320px-IRL_plate_private_2013.svg.png" },
    ]},
    { name: "Lithuania", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/LTU_plate_private_2004.svg/320px-LTU_plate_private_2004.svg.png" },
    ]},
    { name: "Latvia", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/LVA_plate_private_2004.svg/320px-LVA_plate_private_2004.svg.png" },
    ]},
    { name: "Estonia", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/EST_plate_private_2004.svg/320px-EST_plate_private_2004.svg.png" },
    ]},
    { name: "Bulgaria", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/BGR_plate_private_2007.svg/320px-BGR_plate_private_2007.svg.png" },
    ]},
    { name: "Spain", region: "europe", plates: [
        { label: "Current", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/ESP_plate_private_2000.svg/320px-ESP_plate_private_2000.svg.png" },
        { label: "Old provincial", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ESP_plate_private_1997.svg/320px-ESP_plate_private_1997.svg.png" },
    ]},
    { name: "France", region: "europe", plates: [
        { label: "Current (SIV)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/FRA_plate_private_2009.svg/320px-FRA_plate_private_2009.svg.png" },
        { label: "Old (FNI)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/FRA_plate_private_2004.svg/320px-FRA_plate_private_2004.svg.png" },
    ]},
    { name: "Italy", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/ITA_plate_private_2013.svg/320px-ITA_plate_private_2013.svg.png" },
    ]},
    { name: "Netherlands", region: "europe", plates: [
        { label: "Yellow current", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NLD_plate_private_2006.svg/320px-NLD_plate_private_2006.svg.png" },
        { label: "Yellow older", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/NLD_plate_private_1978.svg/320px-NLD_plate_private_1978.svg.png" },
    ]},
    { name: "Belgium", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BEL_plate_private_2010.svg/320px-BEL_plate_private_2010.svg.png" },
    ]},
    { name: "Luxembourg", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/LUX_plate_private_2003.svg/320px-LUX_plate_private_2003.svg.png" },
    ]},
    { name: "Switzerland", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/CHE_plate_private_1990.svg/320px-CHE_plate_private_1990.svg.png" },
    ]},
    { name: "United Kingdom", region: "europe", plates: [
        { label: "Front (white)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/GBR_plate_private_front_2001.svg/320px-GBR_plate_private_front_2001.svg.png" },
        { label: "Rear (yellow)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/GBR_plate_private_rear_2001.svg/320px-GBR_plate_private_rear_2001.svg.png" },
    ]},
    { name: "Ukraine", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/UKR_plate_private_2004.svg/320px-UKR_plate_private_2004.svg.png" },
    ]},
    { name: "Belarus", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/BLR_plate_private_2013.svg/320px-BLR_plate_private_2013.svg.png" },
    ]},
    { name: "Serbia", region: "europe", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/SRB_plate_private_2011.svg/320px-SRB_plate_private_2011.svg.png" },
    ]},

    /* ─── ASIA ─── */

    { name: "Japan", region: "asia", plates: [
        { label: "Standard white", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/JPN_plate_private_1998.svg/320px-JPN_plate_private_1998.svg.png" },
        { label: "Green (kei)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/JPN_plate_private_kei_1998.svg/320px-JPN_plate_private_kei_1998.svg.png" },
        { label: "YoshiKo (Expo)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/JPN_plate_private_special_2020.svg/320px-JPN_plate_private_special_2020.svg.png" },
    ]},
    { name: "China", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CHN_plate_private_2007.svg/320px-CHN_plate_private_2007.svg.png" },
        { label: "Police", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CHN_plate_police_2007.svg/320px-CHN_plate_police_2007.svg.png" },
    ]},
    { name: "South Korea", region: "asia", plates: [
        { label: "Current", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/KOR_plate_private_2019.svg/320px-KOR_plate_private_2019.svg.png" },
        { label: "Older", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/KOR_plate_private_2006.svg/320px-KOR_plate_private_2006.svg.png" },
    ]},
    { name: "India", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/IND_plate_private_2019.svg/320px-IND_plate_private_2019.svg.png" },
        { label: "High Security", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/IND_plate_private_HSRP_2019.svg/320px-IND_plate_private_HSRP_2019.svg.png" },
    ]},
    { name: "Thailand", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/THA_plate_private_2018.svg/320px-THA_plate_private_2018.svg.png" },
    ]},
    { name: "Singapore", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SGP_plate_private_2001.svg/320px-SGP_plate_private_2001.svg.png" },
    ]},
    { name: "Malaysia", region: "asia", plates: [
        { label: "Standard (black)", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MYS_plate_private_1984.svg/320px-MYS_plate_private_1984.svg.png" },
    ]},
    { name: "Indonesia", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/IDN_plate_private_2009.svg/320px-IDN_plate_private_2009.svg.png" },
    ]},
    { name: "Turkey", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TUR_plate_private_1994.svg/320px-TUR_plate_private_1994.svg.png" },
    ]},
    { name: "Iran", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/IRN_plate_private_2007.svg/320px-IRN_plate_private_2007.svg.png" },
    ]},
    { name: "Israel", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/ISR_plate_private_2013.svg/320px-ISR_plate_private_2013.svg.png" },
    ]},
    { name: "Saudi Arabia", region: "asia", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SAU_plate_private_2012.svg/320px-SAU_plate_private_2012.svg.png" },
    ]},
    { name: "UAE", region: "asia", plates: [
        { label: "Abu Dhabi", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/ARE_plate_private_Abu_Dhabi_2009.svg/320px-ARE_plate_private_Abu_Dhabi_2009.svg.png" },
        { label: "Dubai", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ARE_plate_private_Dubai_2009.svg/320px-ARE_plate_private_Dubai_2009.svg.png" },
    ]},

    /* ─── NORTH AMERICA ─── */

    { name: "United States", region: "north-america", plates: [
        { label: "California", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/USA_plate_private_California_2009.svg/320px-USA_plate_private_California_2009.svg.png" },
        { label: "New York", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/USA_plate_private_New_York_2010.svg/320px-USA_plate_private_New_York_2010.svg.png" },
        { label: "Texas", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/USA_plate_private_Texas_2012.svg/320px-USA_plate_private_Texas_2012.svg.png" },
        { label: "Florida", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/USA_plate_private_Florida_2014.svg/320px-USA_plate_private_Florida_2014.svg.png" },
    ]},
    { name: "Canada", region: "north-america", plates: [
        { label: "Ontario", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CAN_plate_private_Ontario_2015.svg/320px-CAN_plate_private_Ontario_2015.svg.png" },
        { label: "Quebec", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/CAN_plate_private_Quebec_2009.svg/320px-CAN_plate_private_Quebec_2009.svg.png" },
        { label: "British Columbia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/CAN_plate_private_British_Columbia_2013.svg/320px-CAN_plate_private_British_Columbia_2013.svg.png" },
    ]},
    { name: "Mexico", region: "north-america", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/MEX_plate_private_2008.svg/320px-MEX_plate_private_2008.svg.png" },
    ]},

    /* ─── SOUTH AMERICA ─── */

    { name: "Brazil", region: "south-america", plates: [
        { label: "Mercosur", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/BRA_plate_private_2018.svg/320px-BRA_plate_private_2018.svg.png" },
        { label: "Old", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/BRA_plate_private_2014.svg/320px-BRA_plate_private_2014.svg.png" },
    ]},
    { name: "Argentina", region: "south-america", plates: [
        { label: "Mercosur", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/ARG_plate_private_2016.svg/320px-ARG_plate_private_2016.svg.png" },
        { label: "Old", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/ARG_plate_private_1995.svg/320px-ARG_plate_private_1995.svg.png" },
    ]},
    { name: "Chile", region: "south-america", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CHL_plate_private_2007.svg/320px-CHL_plate_private_2007.svg.png" },
    ]},
    { name: "Colombia", region: "south-america", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/COL_plate_private_2011.svg/320px-COL_plate_private_2011.svg.png" },
    ]},
    { name: "Peru", region: "south-america", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/PER_plate_private_2010.svg/320px-PER_plate_private_2010.svg.png" },
    ]},

    /* ─── AFRICA ─── */

    { name: "South Africa", region: "africa", plates: [
        { label: "Gauteng", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/ZAF_plate_private_Gauteng_2001.svg/320px-ZAF_plate_private_Gauteng_2001.svg.png" },
        { label: "Western Cape", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/ZAF_plate_private_Western_Cape_2001.svg/320px-ZAF_plate_private_Western_Cape_2001.svg.png" },
    ]},
    { name: "Nigeria", region: "africa", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NGA_plate_private_2011.svg/320px-NGA_plate_private_2011.svg.png" },
    ]},
    { name: "Kenya", region: "africa", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/KEN_plate_private_2012.svg/320px-KEN_plate_private_2012.svg.png" },
    ]},
    { name: "Egypt", region: "africa", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EGY_plate_private_2008.svg/320px-EGY_plate_private_2008.svg.png" },
    ]},
    { name: "Morocco", region: "africa", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/MAR_plate_private_2009.svg/320px-MAR_plate_private_2009.svg.png" },
    ]},

    /* ─── OCEANIA ─── */

    { name: "Australia", region: "oceania", plates: [
        { label: "Victoria", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/AUS_plate_private_Victoria_2013.svg/320px-AUS_plate_private_Victoria_2013.svg.png" },
        { label: "New South Wales", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/AUS_plate_private_New_South_Wales_2009.svg/320px-AUS_plate_private_New_South_Wales_2009.svg.png" },
        { label: "Queensland", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/AUS_plate_private_Queensland_2014.svg/320px-AUS_plate_private_Queensland_2014.svg.png" },
    ]},
    { name: "New Zealand", region: "oceania", plates: [
        { label: "Standard", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/NZL_plate_private_2006.svg/320px-NZL_plate_private_2006.svg.png" },
    ]},

];
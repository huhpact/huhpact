'use strict';

/* ============================================================
   WEATHERCODE MAPPING (Open-Meteo / WMO)
   ============================================================ */

const WMO = {
  0:  { label: 'Klar',                icon: 'sun',        sky: 'clear' },
  1:  { label: 'Meist klar',          icon: 'sun-cloud',  sky: 'clear' },
  2:  { label: 'Teils bewölkt',       icon: 'cloud-sun',  sky: 'cloudy' },
  3:  { label: 'Bedeckt',             icon: 'cloud',       sky: 'overcast' },
  45: { label: 'Nebel',               icon: 'fog',         sky: 'overcast' },
  48: { label: 'Reifnebel',           icon: 'fog',         sky: 'overcast' },
  51: { label: 'Leichter Nieselregen',icon: 'drizzle',     sky: 'rain' },
  53: { label: 'Nieselregen',         icon: 'drizzle',     sky: 'rain' },
  55: { label: 'Starker Nieselregen', icon: 'drizzle',     sky: 'rain' },
  56: { label: 'Gefrierender Nieselregen', icon: 'sleet',  sky: 'rain' },
  57: { label: 'Gefrierender Nieselregen', icon: 'sleet',  sky: 'rain' },
  61: { label: 'Leichter Regen',      icon: 'rain',        sky: 'rain' },
  63: { label: 'Regen',               icon: 'rain',        sky: 'rain' },
  65: { label: 'Starker Regen',       icon: 'rain-heavy',  sky: 'rain' },
  66: { label: 'Gefrierender Regen',  icon: 'sleet',       sky: 'rain' },
  67: { label: 'Gefrierender Regen',  icon: 'sleet',       sky: 'rain' },
  71: { label: 'Leichter Schneefall', icon: 'snow',        sky: 'snow' },
  73: { label: 'Schneefall',          icon: 'snow',        sky: 'snow' },
  75: { label: 'Starker Schneefall',  icon: 'snow-heavy',  sky: 'snow' },
  77: { label: 'Schneegriesel',       icon: 'snow',        sky: 'snow' },
  80: { label: 'Leichte Schauer',     icon: 'rain',        sky: 'rain' },
  81: { label: 'Schauer',             icon: 'rain',        sky: 'rain' },
  82: { label: 'Heftige Schauer',     icon: 'rain-heavy',  sky: 'rain' },
  85: { label: 'Schneeschauer',       icon: 'snow',        sky: 'snow' },
  86: { label: 'Starke Schneeschauer',icon: 'snow-heavy',  sky: 'snow' },
  95: { label: 'Gewitter',            icon: 'storm',       sky: 'storm' },
  96: { label: 'Gewitter mit Hagel',  icon: 'storm',       sky: 'storm' },
  99: { label: 'Schweres Gewitter',   icon: 'storm',       sky: 'storm' },
};

function wmoInfo(code) {
  return WMO[code] || WMO[0];
}

/* ============================================================
   SVG ICON SET
   ============================================================ */

function iconSVG(name, isNight) {
  const sun = '#FFC876';
  const sunCore = '#FFD98C';
  const cloudLight = '#E8ECF5';
  const cloudDark = '#C4CCDC';
  const moon = '#D8DEEE';
  const rainColor = '#8FCBFF';
  const snowColor = '#EDF3FF';
  const bolt = '#FFD24C';

  if (isNight && (name === 'sun' || name === 'sun-cloud' || name === 'cloud-sun')) {
    if (name === 'sun') name = 'moon';
    else name = 'moon-cloud';
  }

  const icons = {
    sun: `<circle cx="32" cy="32" r="14" fill="${sunCore}"/>
      <g stroke="${sun}" stroke-width="3.2" stroke-linecap="round">
        <path d="M32 6v7M32 51v7M58 32h-7M13 32H6M49.9 14.1l-5 5M19.1 44.9l-5 5M49.9 49.9l-5-5M19.1 19.1l-5-5"/>
      </g>`,
    moon: `<path d="M40 12a20 20 0 1 0 12 24 15 15 0 0 1-12-24z" fill="${moon}"/>
      <circle cx="22" cy="30" r="1.6" fill="#9AA3BE"/><circle cx="30" cy="42" r="1.2" fill="#9AA3BE"/>`,
    'sun-cloud': `<circle cx="24" cy="24" r="11" fill="${sunCore}"/>
      <g stroke="${sun}" stroke-width="3" stroke-linecap="round"><path d="M24 4v5M24 39v5M44 24h-5M4 24H-1M37.6 10.4l-3.5 3.5M13.9 34.1l-3.5 3.5"/></g>
      <ellipse cx="38" cy="42" rx="16" ry="11" fill="${cloudLight}"/>
      <ellipse cx="27" cy="46" rx="12" ry="8.5" fill="${cloudDark}"/>`,
    'moon-cloud': `<path d="M34 10a13 13 0 1 0 8 15.6 9.5 9.5 0 0 1-8-15.6z" fill="${moon}"/>
      <ellipse cx="38" cy="42" rx="16" ry="11" fill="${cloudLight}"/>
      <ellipse cx="27" cy="46" rx="12" ry="8.5" fill="${cloudDark}"/>`,
    'cloud-sun': `<circle cx="40" cy="20" r="10" fill="${sunCore}"/>
      <g stroke="${sun}" stroke-width="2.8" stroke-linecap="round"><path d="M40 3v4M40 33v4M57 20h-4M23 20h-4"/></g>
      <ellipse cx="28" cy="40" rx="18" ry="12.5" fill="${cloudLight}"/>
      <ellipse cx="16" cy="45" rx="13" ry="9" fill="${cloudDark}"/>`,
    cloud: `<ellipse cx="34" cy="34" rx="19" ry="13.5" fill="${cloudLight}"/>
      <ellipse cx="20" cy="39" rx="14" ry="10" fill="${cloudDark}"/>`,
    fog: `<g stroke="${cloudDark}" stroke-width="3.4" stroke-linecap="round">
      <path d="M10 24h44"/><path d="M6 34h52"/><path d="M12 44h40"/><path d="M10 54h44"/>
      </g>`,
    drizzle: `<ellipse cx="34" cy="26" rx="18" ry="13" fill="${cloudLight}"/>
      <ellipse cx="21" cy="30" rx="13" ry="9.5" fill="${cloudDark}"/>
      <g stroke="${rainColor}" stroke-width="2.6" stroke-linecap="round"><path d="M22 48v6M34 48v6M46 48v6"/></g>`,
    rain: `<ellipse cx="34" cy="24" rx="18" ry="13" fill="${cloudLight}"/>
      <ellipse cx="21" cy="28" rx="13" ry="9.5" fill="${cloudDark}"/>
      <g stroke="${rainColor}" stroke-width="3" stroke-linecap="round"><path d="M20 46l-4 9M33 46l-4 9M46 46l-4 9"/></g>`,
    'rain-heavy': `<ellipse cx="34" cy="22" rx="19" ry="13.5" fill="${cloudLight}"/>
      <ellipse cx="20" cy="26" rx="14" ry="10" fill="${cloudDark}"/>
      <g stroke="${rainColor}" stroke-width="3.2" stroke-linecap="round"><path d="M16 44l-5 11M27 44l-5 11M38 44l-5 11M49 44l-5 11"/></g>`,
    sleet: `<ellipse cx="34" cy="24" rx="18" ry="13" fill="${cloudLight}"/>
      <ellipse cx="21" cy="28" rx="13" ry="9.5" fill="${cloudDark}"/>
      <g stroke="${rainColor}" stroke-width="2.8" stroke-linecap="round"><path d="M22 46l-3 7M46 46l-3 7"/></g>
      <circle cx="34" cy="52" r="2.4" fill="${snowColor}"/>`,
    snow: `<ellipse cx="34" cy="22" rx="18" ry="13" fill="${cloudLight}"/>
      <ellipse cx="21" cy="26" rx="13" ry="9.5" fill="${cloudDark}"/>
      <g fill="${snowColor}"><circle cx="20" cy="47" r="2.6"/><circle cx="34" cy="52" r="2.6"/><circle cx="48" cy="47" r="2.6"/></g>`,
    'snow-heavy': `<ellipse cx="34" cy="20" rx="19" ry="13.5" fill="${cloudLight}"/>
      <ellipse cx="20" cy="24" rx="14" ry="10" fill="${cloudDark}"/>
      <g fill="${snowColor}"><circle cx="16" cy="44" r="2.6"/><circle cx="28" cy="50" r="2.6"/><circle cx="40" cy="44" r="2.6"/><circle cx="50" cy="50" r="2.6"/></g>`,
    storm: `<ellipse cx="34" cy="22" rx="18" ry="13" fill="${cloudLight}"/>
      <ellipse cx="21" cy="26" rx="13" ry="9.5" fill="${cloudDark}"/>
      <path d="M36 42l-9 13h7l-4 10 11-15h-7z" fill="${bolt}"/>`,
    wind: `<g stroke="${cloudDark}" stroke-width="3.4" stroke-linecap="round" fill="none">
      <path d="M6 24h34a7 7 0 1 0-6-11"/><path d="M6 36h44a7 7 0 1 1-6 11"/><path d="M6 48h28"/>
      </g>`,
  };

  const body = icons[name] || icons.cloud;
  return `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}

/* ============================================================
   STATE
   ============================================================ */

const state = {
  units: 'celsius',
  coords: null,
  place: null,
  data: null,
  saved: [],
};

const $ = (id) => document.getElementById(id);

const els = {
  sky: $('sky'),
  celestial: $('celestial'),
  clouds: $('clouds'),
  rain: $('rain'),
  snow: $('snow'),
  stars: $('stars'),
  loadingState: $('loadingState'),
  loadingText: $('loadingText'),
  errorState: $('errorState'),
  errorText: $('errorText'),
  content: $('content'),
  cityName: $('cityName'),
  heroIcon: $('heroIcon'),
  tempNow: $('tempNow'),
  weatherDesc: $('weatherDesc'),
  tempMax: $('tempMax'),
  tempMin: $('tempMin'),
  feelsLike: $('feelsLike'),
  hourlySummary: $('hourlySummary'),
  hourlyScroll: $('hourlyScroll'),
  dailyList: $('dailyList'),
  detailGrid: $('detailGrid'),
  lastUpdated: $('lastUpdated'),
  searchOverlay: $('searchOverlay'),
  searchInput: $('searchInput'),
  searchResults: $('searchResults'),
  savedList: $('savedList'),
  savedSection: $('savedSection'),
};

/* ============================================================
   PERSISTENCE (gespeicherte Orte)
   ============================================================ */

function loadSaved() {
  try {
    const raw = localStorage.getItem('aurora_saved_places');
    state.saved = raw ? JSON.parse(raw) : [];
  } catch (e) { state.saved = []; }
}

function persistSaved() {
  try { localStorage.setItem('aurora_saved_places', JSON.stringify(state.saved)); } catch (e) {}
}

/* ============================================================
   GEOLOCATION + REVERSE GEOCODING
   ============================================================ */

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation wird von diesem Browser nicht unterstützt.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => {
        if (err.code === 1) reject(new Error('PERMISSION_DENIED'));
        else if (err.code === 2) reject(new Error('POSITION_UNAVAILABLE'));
        else reject(new Error('TIMEOUT'));
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 5 * 60 * 1000 }
    );
  });
}

async function reverseGeocode(lat, lon) {
  const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=de&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Reverse-Geocoding fehlgeschlagen');
  const json = await res.json();
  const r = json.results && json.results[0];
  if (!r) return { name: 'Aktueller Standort', admin1: '', country: '' };
  return { name: r.name, admin1: r.admin1 || '', country: r.country || '', lat, lon };
}

async function geocodeSearch(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=8&language=de&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Suche fehlgeschlagen');
  const json = await res.json();
  return json.results || [];
}

/* ============================================================
   WEATHER FETCH
   ============================================================ */

async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,uv_index',
    hourly: 'temperature_2m,weather_code,precipitation_probability,is_day,uv_index',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max,wind_speed_10m_max',
    timezone: 'auto',
    forecast_days: '8',
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Wetterdaten konnten nicht geladen werden.');
  return res.json();
}

async function fetchAirQuality(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'european_aqi,pm2_5,pm10',
    timezone: 'auto',
  });
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?${params.toString()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

/* ============================================================
   SKY THEMING
   ============================================================ */

const SKY_THEMES = {
  clear_day:    { grad: 'linear-gradient(160deg, #4A90D9 0%, #6FB1E8 45%, #A8D4F0 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.55)', stars: 0, clouds: 0, precip: 0 },
  clear_night:  { grad: 'linear-gradient(160deg, #0B1230 0%, #1A2350 50%, #2D3A6B 100%)', celestial: '#E4E8F5', glow: 'rgba(228,232,245,0.35)', stars: 1, clouds: 0, precip: 0 },
  cloudy_day:   { grad: 'linear-gradient(160deg, #7A8CAE 0%, #94A4C2 50%, #B8C4DA 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.4)', stars: 0, clouds: 0.7, precip: 0 },
  cloudy_night: { grad: 'linear-gradient(160deg, #12172E 0%, #232B4A 50%, #363F63 100%)', celestial: '#D8DEEE', glow: 'rgba(216,222,238,0.25)', stars: 0.4, clouds: 0.6, precip: 0 },
  overcast_day: { grad: 'linear-gradient(160deg, #5C6577 0%, #78829B 50%, #9AA3B8 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.15)', stars: 0, clouds: 0.85, precip: 0 },
  overcast_night:{grad: 'linear-gradient(160deg, #0E111E 0%, #1B2035 50%, #2A3048 100%)', celestial: '#D8DEEE', glow: 'rgba(216,222,238,0.1)', stars: 0.15, clouds: 0.7, precip: 0 },
  rain_day:     { grad: 'linear-gradient(160deg, #3E4C63 0%, #55647D 50%, #71809A 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.1)', stars: 0, clouds: 0.8, precip: 0.8, precipType: 'rain' },
  rain_night:   { grad: 'linear-gradient(160deg, #090C16 0%, #151A2C 50%, #212842 100%)', celestial: '#D8DEEE', glow: 'rgba(216,222,238,0.08)', stars: 0, clouds: 0.75, precip: 0.8, precipType: 'rain' },
  snow_day:     { grad: 'linear-gradient(160deg, #8FA0B8 0%, #ADBDD0 50%, #D3DDE9 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.2)', stars: 0, clouds: 0.7, precip: 0.7, precipType: 'snow' },
  snow_night:   { grad: 'linear-gradient(160deg, #14192E 0%, #232B45 50%, #3A4460 100%)', celestial: '#D8DEEE', glow: 'rgba(216,222,238,0.15)', stars: 0.2, clouds: 0.6, precip: 0.7, precipType: 'snow' },
  storm_day:    { grad: 'linear-gradient(160deg, #2A3040 0%, #3D4356 50%, #565C70 100%)', celestial: '#FFE9A8', glow: 'rgba(255,233,168,0.05)', stars: 0, clouds: 0.9, precip: 0.9, precipType: 'rain' },
  storm_night:  { grad: 'linear-gradient(160deg, #05060E 0%, #0F1220 50%, #1A1E32 100%)', celestial: '#D8DEEE', glow: 'rgba(216,222,238,0.05)', stars: 0, clouds: 0.85, precip: 0.9, precipType: 'rain' },
};

let cloudsBuilt = false;
let precipBuilt = { rain: false, snow: false };

function applySkyTheme(sky, isDay) {
  const key = `${sky}_${isDay ? 'day' : 'night'}`;
  const theme = SKY_THEMES[key] || SKY_THEMES.clear_day;
  const root = document.documentElement;
  root.style.setProperty('--sky-grad', theme.grad);
  root.style.setProperty('--celestial-color', theme.celestial);
  root.style.setProperty('--celestial-glow', theme.glow);
  root.style.setProperty('--stars-opacity', theme.stars);
  root.style.setProperty('--clouds-opacity', theme.clouds);
  root.style.setProperty('--precip-opacity', theme.precip);
  root.style.setProperty('--celestial-opacity', theme.clouds > 0.75 ? 0.25 : 1);

  if (!cloudsBuilt) buildClouds();
  if (theme.precip > 0) {
    if (theme.precipType === 'snow' && !precipBuilt.snow) buildSnow();
    if (theme.precipType === 'rain' && !precipBuilt.rain) buildRain();
  }
  els.rain.style.display = theme.precipType === 'rain' ? 'block' : 'none';
  els.snow.style.display = theme.precipType === 'snow' ? 'block' : 'none';
}

function buildClouds() {
  cloudsBuilt = true;
  const specs = [
    { w: 180, h: 50, top: '12%', dur: 68, delay: -10, op: 0.9 },
    { w: 130, h: 38, top: '22%', dur: 54, delay: -30, op: 0.75 },
    { w: 220, h: 60, top: '6%', dur: 82, delay: -50, op: 0.65 },
    { w: 100, h: 30, top: '30%', dur: 44, delay: -5, op: 0.55 },
  ];
  els.clouds.innerHTML = specs.map(s =>
    `<div class="cloud" style="width:${s.w}px;height:${s.h}px;top:${s.top};opacity:${s.op};animation-duration:${s.dur}s;animation-delay:${s.delay}s;"></div>`
  ).join('');
}

function buildRain() {
  precipBuilt.rain = true;
  let html = '';
  for (let i = 0; i < 60; i++) {
    const left = Math.random() * 100;
    const dur = 0.5 + Math.random() * 0.5;
    const delay = Math.random() * -2;
    html += `<div class="drop" style="left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s;"></div>`;
  }
  els.rain.innerHTML = html;
}

function buildSnow() {
  precipBuilt.snow = true;
  let html = '';
  for (let i = 0; i < 45; i++) {
    const left = Math.random() * 100;
    const dur = 4 + Math.random() * 4;
    const delay = Math.random() * -6;
    const size = 3 + Math.random() * 3;
    html += `<div class="flake" style="left:${left}%;width:${size}px;height:${size}px;animation-duration:${dur}s;animation-delay:${delay}s;"></div>`;
  }
  els.snow.innerHTML = html;
}

/* ============================================================
   HELPERS
   ============================================================ */

function round(n) { return Math.round(n); }

function formatHour(isoString, timezone) {
  const d = new Date(isoString);
  return d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: undefined, hour12: false });
}

function dayLabel(isoDateStr, index) {
  if (index === 0) return 'Heute';
  const d = new Date(isoDateStr + 'T12:00:00');
  const label = d.toLocaleDateString('de-DE', { weekday: 'short' });
  return label.charAt(0).toUpperCase() + label.slice(1).replace('.', '');
}

function windDirLabel(deg) {
  const dirs = ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

function uvLevel(uv) {
  if (uv < 3) return { label: 'Niedrig', color: 'var(--accent-good)' };
  if (uv < 6) return { label: 'Moderat', color: 'var(--accent-warn)' };
  if (uv < 8) return { label: 'Hoch', color: '#FFA45C' };
  if (uv < 11) return { label: 'Sehr hoch', color: 'var(--accent-bad)' };
  return { label: 'Extrem', color: '#E85D75' };
}

function aqiLevel(aqi) {
  if (aqi == null) return { label: 'Keine Daten', color: 'var(--text-3)', bg: 'rgba(255,255,255,0.1)' };
  if (aqi <= 20) return { label: 'Sehr gut', color: '#0F6E56', bg: '#7CE0C6' };
  if (aqi <= 40) return { label: 'Gut', color: '#3B6D11', bg: '#C0DD97' };
  if (aqi <= 60) return { label: 'Mäßig', color: '#854F0B', bg: '#FAC775' };
  if (aqi <= 80) return { label: 'Schlecht', color: '#993C1D', bg: '#F0997B' };
  if (aqi <= 100) return { label: 'Sehr schlecht', color: '#A32D2D', bg: '#F09595' };
  return { label: 'Gefährlich', color: '#791F1F', bg: '#F09595' };
}

/* ============================================================
   RENDER
   ============================================================ */

function renderAll(weather, air, place) {
  const tz = weather.timezone;
  const cur = weather.current;
  const daily = weather.daily;
  const hourly = weather.hourly;
  const info = wmoInfo(cur.weather_code);
  const isDay = cur.is_day === 1;

  applySkyTheme(info.sky, isDay);

  els.cityName.textContent = place.name;
  document.title = `${round(cur.temperature_2m)}° · ${place.name}`;

  els.heroIcon.innerHTML = iconSVG(info.icon, !isDay);
  els.tempNow.textContent = round(cur.temperature_2m);
  els.weatherDesc.textContent = info.label;
  els.tempMax.textContent = `${round(daily.temperature_2m_max[0])}°`;
  els.tempMin.textContent = `${round(daily.temperature_2m_min[0])}°`;
  els.feelsLike.textContent = `${round(cur.apparent_temperature)}°`;

  renderHourly(hourly, tz, cur.weather_code);
  renderDaily(daily);
  renderDetails(cur, daily, air);

  const now = new Date();
  els.lastUpdated.textContent = `Aktualisiert um ${now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}`;
}

function renderHourly(hourly, tz, currentCode) {
  const nowMs = Date.now();
  let startIdx = hourly.time.findIndex(t => new Date(t).getTime() >= nowMs - 30 * 60 * 1000);
  if (startIdx < 0) startIdx = 0;

  const nextRainIdx = hourly.time.slice(startIdx, startIdx + 12).findIndex((t, i) => hourly.precipitation_probability[startIdx + i] >= 40);
  if (nextRainIdx === 0) {
    els.hourlySummary.textContent = `${hourly.precipitation_probability[startIdx]}% Niederschlagswahrscheinlichkeit jetzt`;
  } else if (nextRainIdx > 0) {
    els.hourlySummary.textContent = `Regen ab ca. ${formatHour(hourly.time[startIdx + nextRainIdx])} Uhr`;
  } else {
    els.hourlySummary.textContent = 'Stündliche Vorhersage';
  }

  let html = '';
  for (let i = startIdx; i < Math.min(startIdx + 24, hourly.time.length); i++) {
    const isNow = i === startIdx;
    const t = hourly.time[i];
    const code = hourly.weather_code[i];
    const info = wmoInfo(code);
    const isNight = hourly.is_day[i] === 0;
    const precip = hourly.precipitation_probability[i];
    html += `<div class="hour-item ${isNow ? 'now' : ''}">
      <span class="hour-time">${isNow ? 'Jetzt' : formatHour(t) + ' Uhr'}</span>
      <span class="hour-icon">${iconSVG(info.icon, isNight)}</span>
      <span class="hour-precip">${precip >= 15 ? precip + '%' : ''}</span>
      <span class="hour-temp">${round(hourly.temperature_2m[i])}°</span>
    </div>`;
  }
  els.hourlyScroll.innerHTML = html;
}

function renderDaily(daily) {
  const allMax = daily.temperature_2m_max;
  const allMin = daily.temperature_2m_min;
  const globalMax = Math.max(...allMax);
  const globalMin = Math.min(...allMin);
  const span = Math.max(globalMax - globalMin, 1);

  let html = '';
  for (let i = 0; i < Math.min(7, daily.time.length); i++) {
    const info = wmoInfo(daily.weather_code[i]);
    const hi = daily.temperature_2m_max[i];
    const lo = daily.temperature_2m_min[i];
    const leftPct = ((lo - globalMin) / span) * 100;
    const widthPct = ((hi - lo) / span) * 100;
    const precip = daily.precipitation_probability_max[i];
    html += `<div class="day-row">
      <span class="day-name ${i === 0 ? 'today' : ''}">${dayLabel(daily.time[i], i)}</span>
      <span class="day-icon">${iconSVG(info.icon, false)}</span>
      <span class="day-precip">${precip >= 15 ? precip + '%' : ''}</span>
      <span class="day-range">
        <span class="day-lo">${round(lo)}°</span>
        <span class="bar-track"><span class="bar-fill" style="left:${leftPct}%;width:${Math.max(widthPct, 6)}%;"></span></span>
        <span class="day-hi">${round(hi)}°</span>
      </span>
    </div>`;
  }
  els.dailyList.innerHTML = html;
}

function renderDetails(cur, daily, air) {
  const uv = uvLevel(cur.uv_index);
  const uvPct = Math.min((cur.uv_index / 11) * 100, 100);

  const sunrise = new Date(daily.sunrise[0]);
  const sunset = new Date(daily.sunset[0]);
  const nowT = new Date();
  let sunPct = 0;
  const dayLen = sunset.getTime() - sunrise.getTime();
  if (dayLen > 0) {
    sunPct = Math.max(0, Math.min(100, ((nowT.getTime() - sunrise.getTime()) / dayLen) * 100));
  }
  const isBeforeSunrise = nowT < sunrise;
  const isAfterSunset = nowT > sunset;

  let aqi = null, aqiInfo, pm25 = null, pm10 = null;
  if (air && air.current) {
    aqi = air.current.european_aqi;
    pm25 = air.current.pm2_5;
    pm10 = air.current.pm10;
  }
  aqiInfo = aqiLevel(aqi);

  const humidity = cur.relative_humidity_2m;
  const windSpeed = round(cur.wind_speed_10m);
  const windDir = windDirLabel(cur.wind_direction_10m);
  const pressure = round(cur.pressure_msl);

  const cards = [];

  // UV-Index
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke-linecap="round"/></svg>UV-Index</div>
    <div class="detail-value">${round(cur.uv_index)}</div>
    <div class="detail-sub" style="color:${uv.color}">${uv.label}</div>
    <div class="mini-bar"><span class="mini-bar-fill" style="width:100%;background:linear-gradient(90deg,#7CE0C6,#FFC876,#FFA45C,#FF9B8A,#E85D75);"></span><span class="mini-bar-dot" style="left:${uvPct}%;"></span></div>
  </div>`);

  // Luftfeuchtigkeit
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s7 8.5 7 13a7 7 0 0 1-14 0c0-4.5 7-13 7-13z" stroke-linejoin="round"/></svg>Luftfeuchtigkeit</div>
    <div class="detail-value">${round(humidity)}<small>%</small></div>
    <div class="detail-sub">${humidity >= 70 ? 'Schwül' : humidity >= 40 ? 'Angenehm' : 'Trocken'}</div>
    <div class="mini-bar"><span class="mini-bar-fill" style="width:${humidity}%;background:#8FCBFF;"></span></div>
  </div>`);

  // Luftqualität
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3a3 3 0 1 1 3 3H3M14 21a3 3 0 1 0-3-3H3M6 9a2.5 2.5 0 1 1 2.5 2.5H2" stroke-linecap="round" stroke-linejoin="round"/></svg>Luftqualität</div>
    <div class="detail-value">${aqi != null ? aqi : '–'}<small>AQI</small></div>
    <div class="aqi-badge" style="background:${aqiInfo.bg};color:${aqiInfo.color};">${aqiInfo.label}</div>
    ${pm25 != null ? `<div class="detail-sub" style="margin-top:6px;">PM2.5 ${round(pm25)} · PM10 ${round(pm10)} µg/m³</div>` : ''}
  </div>`);

  // Wind
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.6 7.6A2.5 2.5 0 1 1 19.5 12H2" stroke-linecap="round" stroke-linejoin="round"/></svg>Wind</div>
    <div class="detail-value">${windSpeed}<small>km/h</small></div>
    <svg class="wind-compass" viewBox="0 0 42 42">
      <circle cx="21" cy="21" r="17" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
      <text x="21" y="7" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.5)" font-weight="600">N</text>
      <g class="wind-needle" style="transform:rotate(${cur.wind_direction_10m}deg)">
        <path d="M21 8 L25 24 L21 20 L17 24 Z" fill="#8FCBFF"/>
      </g>
    </svg>
    <div class="detail-sub">${windDir}</div>
  </div>`);

  // Sonnenauf-/-untergang
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v6M5.6 8.6l1.4 1.4M18.4 8.6L17 10M2 15h20M4 19h16" stroke-linecap="round"/><path d="M6 15a6 6 0 0 1 12 0" stroke-linecap="round"/></svg>${isAfterSunset ? 'Sonnenaufgang' : 'Sonnenuntergang'}</div>
    <div class="detail-value" style="font-size:24px;">${isAfterSunset ? sunrise.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) : sunset.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}</div>
    <div class="sun-arc-wrap">
      <svg viewBox="0 0 100 42" width="100%" height="38">
        <path d="M6 38 A44 44 0 0 1 94 38" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2" stroke-linecap="round"/>
        ${!isBeforeSunrise && !isAfterSunset ? `<circle cx="${6 + (sunPct/100)*88}" cy="${38 - Math.sin((sunPct/100)*Math.PI)*33}" r="4" fill="#FFC876"/>` : ''}
      </svg>
    </div>
    <div class="detail-sub">Auf ${sunrise.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})} · Unter ${sunset.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})}</div>
  </div>`);

  // Luftdruck
  cards.push(`<div class="detail-card">
    <div class="detail-head"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2" stroke-linecap="round" stroke-linejoin="round"/></svg>Luftdruck</div>
    <div class="detail-value">${pressure}<small>hPa</small></div>
    <div class="detail-sub">${pressure >= 1013 ? 'Hochdruck' : 'Tiefdruck'}</div>
  </div>`);

  els.detailGrid.innerHTML = cards.join('');
}
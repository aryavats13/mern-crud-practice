const express = require('express');
const fetch = require('node-fetch'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: "City is required" });

    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
    const geoData = await geoRes.json();
    if (!geoData.length) return res.status(404).json({ error: "City not found" });

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    res.json({ city, weather: weatherData.current_weather });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

module.exports = router;

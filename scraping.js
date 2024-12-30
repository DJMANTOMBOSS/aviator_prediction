const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

// Fetch live results from Hollywoodbets (replace URL with the actual game page URL)
router.get('/fetch-live-results', async (req, res) => {
    try {
        const url = 'https://www.hollywoodbets.net'; // Placeholder URL
        const response = await axios.get(url);
        const html = response.data;

        // Use cheerio to scrape the HTML content
        const $ = cheerio.load(html);
        const results = [];

        // Example: Scraping game results (adjust selectors based on the actual HTML structure)
        $('.game-result-selector').each((i, elem) => {
            results.push($(elem).text().trim());
        });

        if (results.length === 0) {
            return res.status(404).json({ message: 'No results found. Check the source selectors.' });
        }

        res.json({ results });
    } catch (error) {
        console.error('Error fetching live results:', error.message);
        res.status(500).json({ message: 'Failed to fetch live results', error: error.message });
    }
});

module.exports = router;
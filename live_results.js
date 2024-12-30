document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');

    const fetchLiveResults = async () => {
        try {
            const response = await fetch('http://localhost:5000/scraping/fetch-live-results');
            const data = await response.json();
            
            if (data.results && data.results.length > 0) {
                resultsContainer.innerHTML = '<ul>' + data.results.map(result => `<li>${result}</li>`).join('') + '</ul>';
            } else {
                resultsContainer.innerHTML = '<p>No results available. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Error fetching live results:', error);
            resultsContainer.innerHTML = '<p>Error fetching live results. Please check the backend.</p>';
        }
    };

    // Fetch live results every 5 seconds
    fetchLiveResults();
    setInterval(fetchLiveResults, 5000);
});
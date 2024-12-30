let results = [];

function addResult() {
    const input = document.getElementById('result-input');
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
        results.push(value);
        displayResults();
        input.value = ''; // Clear input
    } else {
        alert('Please enter a valid number.');
    }
}

function displayResults() {
    const resultDiv = document.getElementById('result-display');
    if (resultDiv) {
        resultDiv.innerHTML = results.map((res, index) => `<p>${index + 1}: ${res}</p>`).join('');
    }
}

function predictNext() {
    if (results.length < 5) {
        alert('Not enough data for prediction!');
        return;
    }
    const avg = results.slice(-5).reduce((a, b) => a + b) / 5;
    const predictionDiv = document.getElementById('prediction');
    if (predictionDiv) {
        predictionDiv.textContent = `Next Predicted Value: ${avg.toFixed(2)}`;
    }
}
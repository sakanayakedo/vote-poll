function submitVote(option) {
    // Mock vote submission for demonstration
    document.getElementById("response").innerText = `You voted for ${option}! Thank you!`;

    // Example API call for storing votes (uncomment and modify if a backend is available)
    // fetch('https://your-backend-url/vote', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ vote: option })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     document.getElementById("response").innerText = "Thank you for voting!";
    // })
    // .catch(error => {
    //     document.getElementById("response").innerText = "Error submitting your vote.";
    // });
}

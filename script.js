// Mock backend URL for demonstration purposes
const backendUrl = "https://your-backend-url.com";

// Step 1: Send verification code to the phone number
function sendVerificationCode() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Make sure all fields are filled
    if (!firstName || !lastName || !email || !phone) {
        document.getElementById("verificationMessage").innerText = "Please fill in all fields.";
        return;
    }

    // Mock API call to send verification code
    fetch(`${backendUrl}/send-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("registration-section").style.display = "none";
            document.getElementById("verification-section").style.display = "block";
            document.getElementById("verificationMessage").innerText = "Verification code sent!";
        } else {
            document.getElementById("verificationMessage").innerText = "Failed to send verification code.";
        }
    })
    .catch(error => {
        document.getElementById("verificationMessage").innerText = "Error sending verification code.";
    });
}

// Step 2: Verify the code entered by the user
function verifyCode() {
    const verificationCode = document.getElementById("verificationCode").value;

    // Mock API call to verify code
    fetch(`${backendUrl}/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verificationCode })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("verification-section").style.display = "none";
            document.getElementById("vote-section").style.display = "block";
            document.getElementById("codeMessage").innerText = "Phone verified! You may now vote.";
        } else {
            document.getElementById("codeMessage").innerText = "Invalid verification code.";
        }
    })
    .catch(error => {
        document.getElementById("codeMessage").innerText = "Error verifying code.";
    });
}

// Step 3: Submit the vote
function submitVote(option) {
    // Mock vote submission
    document.getElementById("response").innerText = `You voted for ${option}! Thank you!`;

    // For actual vote collection, use an API request
    // fetch(`${backendUrl}/vote`, {
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

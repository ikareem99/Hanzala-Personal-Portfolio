// Show/hide 'Other' project type field
document.getElementById("projectType").addEventListener("change", function () {
    var otherField = document.getElementById("otherTypeField");
    if (this.value === "Other") {
        otherField.style.display = "block";
    } else {
        otherField.style.display = "none";
    }
});

// Reset form after successful submission and show a message temporarily
document.getElementById('serviceRequestForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const statusMessage = document.getElementById('statusMessage-service-form');
        
        if (response.ok) {
            form.reset(); // Reset the form
            statusMessage.innerText = 'Offer sent successfully!';
            statusMessage.style.display = 'block';
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        } else {
            statusMessage.innerText = 'There was an issue submitting your proposal.';
            statusMessage.style.display = 'block';
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        const statusMessage = document.getElementById('statusMessage-service-form');
        statusMessage.innerText = 'There was an error submitting your proposal. Please try again later.';
        statusMessage.style.display = 'block';
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    }
});
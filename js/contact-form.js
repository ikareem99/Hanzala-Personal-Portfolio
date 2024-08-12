document.getElementById('contact-form').addEventListener('submit', async function(event) {
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

        const statusMessage = document.getElementById('statusMessage-contact-form');
        
        if (response.ok) {
            form.reset(); // Reset the form
            statusMessage.innerText = 'Message sent successfully!';
            statusMessage.style.display = 'block';
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        } else {
            statusMessage.innerText = 'There was an issue submitting your Message.';
            statusMessage.style.display = 'block';
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        const statusMessage = document.getElementById('statusMessage-contact-form');
        statusMessage.innerText = 'There was an error submitting your Message. Please try again later.';
        statusMessage.style.display = 'block';
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    }
});
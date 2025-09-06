// Simple contact form submission simulation
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message){
        document.getElementById('form-message').textContent = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill all fields.';
    }
});

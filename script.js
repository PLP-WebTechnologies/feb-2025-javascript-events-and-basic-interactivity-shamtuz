// Form validation function
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const message = document.getElementById('formMessage');
    
    if (name) {
        message.textContent = `Hello, ${name}! Your form has been submitted.`;
    } else {
        message.textContent = 'Please enter your name.';
    }
});

// Function to change text dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.textContent = "The text has been changed dynamically!";
});
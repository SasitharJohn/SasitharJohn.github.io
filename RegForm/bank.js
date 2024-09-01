function validateForm(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;

    // Regular expressions for validation
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var contactRegex = /^[6-9][0-9]{9}$/; // Adjust based on your contact number format

    // Validate Name
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name. Only letters and spaces are allowed.');
        return false;
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Contact Number
    if (!contactRegex.test(contact)) {
        alert('Please enter a valid contact number. It should be exactly 10 digits.');
        return false;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    // Optionally, you can submit the form here using AJAX or simply allow default submission
    // e.g., document.querySelector('form').submit();
}
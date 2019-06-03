//Start of IIFE
var pokemonRepository = (function () {
    // Defining contact form elements
    var $form = document.querySelector('#contact-form');
    var $emailInput = document.querySelector('#contact-email');
    var $messageInput = document.querySelector('#message');
    var $numberInput = document.querySelector('#telephone-number');
    

    function showErrorMessage($input, message) {
        var $container = $input.parentElement; // the input wrapper which is #contact-form

        //Remove an exisiting error 
        var error = $container.querySelector('.error-message');
        if (error) {
            $container.removeChild(error);
        }

        // Now add the error if the message isn't empty
        if (message) {
            var error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            $container.appendChild(error);
        }

    }



    function validateEmail() {
        var value = $emailInput.value;

        if (!value) {
            showErrorMessage($emailInput, 'Email is a required field');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage($emailInput, 'You must enter a valid email address.');
            return false;
            
        }

        showErrorMessage($emailInput,null);
        return true;
       
        
    }

    function validateMessage() {
        var value = $messageInput.value;

        if (!value) { 
            showErrorMessage($messageInput, 'Please enter a message here.');
            return false;
        }

        if (value.length >= 240) {
            showErrorMessage($messageInput, '240 character limit');
            return false;
        }

        showErrorMessage($messageInput, null);
        return true;
    }

    function validateNumber() {
        var value = $numberInput.value;
        var regEx = /^\d{3}[-]\d{3}[-]\d{4}$/g;

        if (!value) {
            showErrorMessage($numberInput, 'Please enter your phone number here.');
            return false;
        }

        if (!regEx.test($numberInput.value)) {
            showErrorMessage($numberInput, 'Please enter a valid phone number.');
            return false;
        }

        showErrorMessage($numberInput, null);
        return true;
    }



    function validateForm() {
        var isValidNumber = validateNumber();
        var isValidEmail = validateEmail();
        var isValidMessage = validateMessage();
        return isValidEmail && isValidMessage && isValidNumber;
    }

    $form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
    });

    $numberInput.addEventListener('input', validateNumber);
    $emailInput.addEventListener('input', validateEmail);
    $messageInput.addEventListener('input', validateMessage);

 
  
      
})(); //End of IIFE




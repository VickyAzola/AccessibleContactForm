
document.querySelectorAll('.radioBox input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.radioBox').forEach(box => {
            box.classList.remove('checked');
        });
        if (radio.checked) {
            radio.closest('.radioBox').classList.add('checked');
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const message = document.getElementById('message')
const consent = document.getElementById('cbox')
const errorMsg = document.querySelectorAll('.errorMsg')
const alertBox = document.getElementById('alertBox')

function showAlert() {
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

function validateForm(event) {
    event.preventDefault()
    let formIsValid = true;

    if (firstName.value == '') {
        errorMsg[0].innerText = 'This field is required'
        firstName.style.border = '1px solid hsl(0, 66%, 56%)'
        formIsValid = false;

        firstName.addEventListener('focus', function() {
            errorMsg[0].innerText = ''
            firstName.style.border = '1px solid hsl(186, 15%, 59%)'
        })
    }

    if (lastName.value == '') {
        errorMsg[1].innerText = 'This field is required'
        lastName.style.border = '1px solid hsl(0, 66%, 56%)'
        formIsValid = false;

        lastName.addEventListener('focus', function() {
            errorMsg[1].innerText = ''
            lastName.style.border = '1px solid hsl(186, 15%, 59%)'
        })
    }

    if (email.value == '') {
        errorMsg[2].innerText = 'This field is required'
        email.style.border = '1px solid hsl(0, 66%, 56%)'
        formIsValid = false;

        email.addEventListener('focus', function() {
            errorMsg[2].innerText = ''
            email.style.border = '1px solid hsl(186, 15%, 59%)'
        })
    }

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (!email.value.match(emailFormat)) {
        errorMsg[2].innerText = 'Please enter a valid email address'
        email.style.border = '1px solid hsl(0, 66%, 56%)'
        formIsValid = false;

        email.addEventListener('focus', function() {
            errorMsg[2].innerText = ''
            email.style.border = '1px solid hsl(186, 15%, 59%)'
        })
    }

    if (!radio1.checked && !radio2.checked) {
        errorMsg[3].innerText = 'Please select a query type';
        formIsValid = false;

        radio2.addEventListener('change', function() {
            errorMsg[3].innerText = ''
        })

        radio1.addEventListener('change', function() {
            errorMsg[3].innerText = ''
        })
    }

    if (message.value == '') {
        errorMsg[4].innerText = 'This field is required'
        message.style.border = '1px solid hsl(0, 66%, 56%)'
        formIsValid = false;

        message.addEventListener('focus', function() {
            errorMsg[4].innerText = ''
            message.style.border = '1px solid hsl(186, 15%, 59%)'
        })
    }

    if (!consent.checked) {
        errorMsg[5].innerText = 'To submit this form, please consent to being contacted';
        formIsValid = false;

        consent.addEventListener('change', function() {
            errorMsg[5].innerText = ''
        })
    }

    if (formIsValid) {
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            queryType: radio1.checked ? radio1.value : radio2.value,
            message: message.value,
            consent: consent.checked
        };

        showAlert();
        scrollToTop()

        document.getElementById('form').reset();
        document.querySelectorAll('.radioBox').forEach(box => box.classList.remove('checked'));
        
        console.log(formData);
    }
}

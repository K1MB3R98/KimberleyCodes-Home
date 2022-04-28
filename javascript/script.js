// Hamburger Menu JS
function menuOnClick() {
    document.getElementById("hamburg").classList.toggle("change");
    document.getElementById("hamNav").classList.toggle("change");
    document.getElementById("hamMenuBGND").classList.toggle("changeBGND");
}

// Make the Contact Form recaptcha required
// window.onload = function () {
//     var el = document.getElementById('g-recaptcha-response');
//     if (el) {
//         el.setAttribute('required', 'required');
//     }
// }

// Contact Form Error Handling
const form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contactFormStatus");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}

form.addEventListener("submit", handleSubmit)
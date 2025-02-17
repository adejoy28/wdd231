const formContainer = document.querySelector("#formContainer");
const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const userName = document.querySelector("#userName");
        const email = document.querySelector("#email");
        const content = document.querySelector("#content");

        alert(`${email.value}, ${userName.value}, ${content.value}`);
        formContainer.innerHTML = `               <div class="thank-you">
                    <h1 class="thank-you_title">THANK YOU!</h1>
                    <i class="fa fa-check thank-you-checkmark" id="checkmark"></i>
                    <p class="thank-you-body" data-lead-id="thank-you-body">Thanks a bunch for reaching out. Our
                        representative will reach out to you shortly.</p>
                </div>`
    });
}
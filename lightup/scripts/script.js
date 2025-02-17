const smallMenuButton = document.querySelector("#smallMenuButton");
const navContainer = document.querySelector("#navContainer");

smallMenuButton.addEventListener("click", () => {
    navContainer.classList.toggle("open");
});

// Subscribe Newsletter Scripting

const newsletterSubscription = document.querySelector("#newsletterSubscription");

newsletterSubscription.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email");
    let messageH1 = "";
    let messageP = "";

    if (localStorage.getItem("subscribedEmail") !== null && email.value === localStorage.getItem("subscribedEmail")) {
        messageH1 = "Email is subscribed already";
        messageP = `Your ${email.value} has already been subscribed.`;
    } else {
        localStorage.setItem("subscribedEmail", email.value);
        messageH1 = "Subscription Successful.";
        messageP = `Your ${email.value} has been successfully subscribed. You'll now receive updates from our marketing team.`;
    }

    showNewsletterModal(messageH1, messageP);
});

function showNewsletterModal(msgH1, msgP) {
    const modal = document.querySelector("#subscriptionModal");
    modal.showModal();
    const closeModalBtn = document.querySelector("#closeModal");
    const messageH3 = document.querySelector("#subscriptionModal h3");
    const messagePElement = document.querySelector("#subscriptionModal p");

    messageH3.textContent = msgH1;
    messagePElement.textContent = msgP;
    closeModalBtn.addEventListener("click", () => {
        modal.close();
    });
}

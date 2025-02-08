// Select the membership dialog element
const membershipDialog = document.querySelector('#membership-level-details');

// Membership level information array
const memberLevelInfo = [
    {
        title: "NP Membership (Non-Profit Membership)",
        price: 0,
        shortDesc: "For Non-Profit Organizations",
        description: "This membership level is designed for registered non-profit organizations. As part of our community, non-profits can enjoy the full benefits of membership without any financial cost. By joining, non-profits gain access to networking opportunities, visibility, and resources to help enhance their community impact. The NP membership offers:",
        benefits: [
            "Listing in the Chamber’s online directory",
            "Access to networking events and community activities",
            "Eligibility for non-profit specific grants and sponsorship opportunities",
            "Invitations to participate in educational workshops and business development seminars",
            "Advocacy and representation at the local and state level",
        ],
        eligibity: "Must be a registered non-profit organization with proof of status",
    },
    {
        title: "Bronze Membership",
        price: 150000,
        shortDesc: "",
        description: "Bronze Membership is an excellent option for businesses just starting out or small businesses looking to connect and grow. With affordable access, this level offers essential benefits to help businesses establish their presence in the community. Bronze Members receive:",
        benefits: [
            "Listing in the Chamber’s online directory",
            "Access to exclusive member-only events",
            "Invitations to monthly networking mixers and business luncheons",
            "Discounts on Chamber-sponsored workshops and events",
            "Access to basic promotional opportunities",
            "Eligibility to participate in local community initiatives",
            "Access to Chamber resources and business advice",
        ],
        eligibity: "Ideal for small businesses or new start-ups looking to grow and network.",
    },
    {
        title: "Silver Membership",
        price: 400000,
        shortDesc: "For Growing Businesses",
        description: "Silver Membership is tailored for businesses looking to expand their influence and reach. This level offers more visibility and resources to help you scale your operations while connecting with other businesses in the region. Silver Members enjoy:",
        benefits: [
            "All benefits of Bronze Membership, plus:",
            "Premium listing in the Chamber’s online directory",
            "Increased exposure at Chamber events and through marketing campaigns",
            "Priority access to networking events with local business leaders",
            "Access to Chamber-hosted business development and growth seminars",
            "Participation in community sponsorship and partnership opportunities",
            "Opportunities to submit press releases or business updates in Chamber communications",
            "Invitations to roundtable discussions with local policymakers and influencers"
        ],
        eligibity: "Best for businesses focused on growth and seeking greater local presence.",
    },
    {
        title: "Gold Membership",
        price: 1200000,
        shortDesc: "For Established and High-Growth Businesses",
        description: "Gold Membership is the highest level of membership, designed for businesses that are well-established and looking to maximize their visibility and influence. With extensive benefits, Gold Members receive:",
        benefits: [
            "All benefits of Silver Membership, plus:",
            "Exclusive sponsorship opportunities at major Chamber events",
            "Featured recognition on the Chamber’s website and promotional materials",
            "Priority seating at all Chamber events and VIP access to key networking functions",
            "Access to executive-level roundtables and leadership training programs",
            "Dedicated Chamber staff to assist with business solutions and needs",
            "Personalized business consultations, including market expansion and strategic development advice",
            "The opportunity to sit on the Chamber’s advisory committees and help shape local business initiatives",
        ],
        eligibity: "Perfect for established companies looking to solidify their leadership role in the community and benefit from high-level exposure.",
    }
];

// Select all elements with the class 'level'
const btn = document.querySelectorAll('.level');

// Add click event listeners to each button
btn.forEach((level, i) => {
    level.addEventListener('click', () => {
        const currLevel = memberLevelInfo[i];
        populateModal(currLevel);
        membershipDialog.showModal();
    });
});

// Function to populate the modal with membership details
function populateModal(level) {
    const modal = document.querySelector('#membership-level-details');
    let div = `
        <button id="closeModal">❌</button>
        <h2>${level.title}</h2>
        <span>${level.shortDesc}</span>
        <p>${level.description}</p>
        <ul>`;
    level.benefits.forEach(benefit => {
        div += `<li>${benefit}</li>`;
    });
    div += `</ul>
        <p><strong>Eligibility:</strong> ${level.eligibity}</p>
        <p><strong>Price:</strong> ₦${level.price}</p>
    `;
    modal.innerHTML = div;

    // Add event listener to close the modal
    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

// Set the current date in the hidden date input
const hDate = document.querySelector("#datetime");
const newDate = new Date();
const [dd, mm, yyyy] = [
    newDate.getDate(),
    newDate.getMonth() + 1,
    newDate.getFullYear(),
];
hDate.value = `${dd}-${mm}-${yyyy}`;

// Validate the Title input
const title = document.querySelector("#organization-title");
const regExp = /^[a-zA-Z\s-]{7,}$/;

title.addEventListener("input", () => {
    if (!regExp.test(title.value)) {
        title.setCustomValidity("Please enter a valid organization title");
        title.classList.add("invalid");
        title.classList.remove("valid");
    } else {
        title.setCustomValidity("");
        title.classList.add("valid");
        title.classList.remove("invalid");
    }
});

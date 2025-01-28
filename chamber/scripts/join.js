const learnMoreBtn = document.querySelector('#np-level');
const membershipBtn = document.querySelector('#membership-level-details');


learnMoreBtn.addEventListener('click', () => {
    // window.location.href = 'join.html';
    membershipBtn.showModal();
});
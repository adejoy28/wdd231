export function gridListBtnFunction() {
    const gridBtn = document.querySelector("#grid-btn");
    const listBtn = document.querySelector("#list-btn");
    // const sectionX = document.querySelector("#card");

    // console.log(sectionX);
    gridBtn.addEventListener('click', () => {
        cards.classList.remove('list');
        cards.classList.add('grid');
        gridBtn.classList.add('active')
        listBtn.classList.remove('active')
    })
    listBtn.addEventListener('click', () => {
        cards.classList.remove('grid');
        cards.classList.add('list');
        listBtn.classList.add('active')
        gridBtn.classList.remove('active')
        // alert('clicked list');
    })

}


// export { gridBtn, listBtn };
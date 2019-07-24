function cardsController() {
    let pageIndex = 0;
    const masterItems = document.querySelectorAll('.cardMaster__item');
    generatePage(pageIndex);

    masterItems.forEach((item, index) => {
        const name = item.querySelector('.js-name-src').innerText;
        const title = item.querySelector('.js-title-src').innerText;

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card__heading">${name}</div>
            <div class="card__subheading">${title}</div>
        `;

        if ( index !== 0 && index % 6 == 0 ) {
            pageIndex++;
            generatePage(pageIndex);
        }

        document.querySelector(`.page-${pageIndex} .card__container`).appendChild(card);

    });
}

function generatePage(index) {
    const page = document.createElement('div');
    page.classList.add('page', `page-${index}`);
    document.body.appendChild(page);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');
    page.appendChild(cardContainer);
}

cardsController();
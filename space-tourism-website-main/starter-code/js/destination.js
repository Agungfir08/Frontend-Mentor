gsap.registerPlugin(SplitText);

const pageTitle = document.querySelector('.page-title');
const buttonsWrapper = document.querySelector('.destination__buttons-wrapper');
const contentWrapper = document.querySelector('.destination__content');
const title = document.querySelector('.destination__details--title');
const paragraph = document.querySelector('.page-paragraph');
const line = document.getElementById('line-break');
const labels = document.querySelectorAll('.destination__details--label');
const values = document.querySelectorAll('.destination__details--value');
const destinationDetailsWrapper = document.querySelector(
    '.destination__details-wrapper'
);

let data = [];
let index = 0;
let matchMedia = gsap.matchMedia();
let desktopBreakpoint = 1440;
let ctx;

function updateContent(index) {
    const destination = data[index];
    const image = document.querySelector('.destination__image');

    image.src = destination.images.webp;
    image.alt = destination.name;
    title.textContent = destination.name;
    paragraph.textContent = destination.description;
    values[0].textContent = destination.distance;
    values[1].textContent = destination.travel;
    destinationDetailsWrapper.id = `destination-${destination.name.toLowerCase()}`;
    destinationDetailsWrapper.setAttribute(
        'aria-labelledby',
        `destination-tab-${destination.name.toLowerCase()}`
    );

    animation();
}

function animation() {
    matchMedia.add(
        `(min-width: ${desktopBreakpoint}px) and (prefers-reduced-motion: no-preference)`,
        () => {
            if (ctx) ctx.revert();
            ctx = gsap.context(() => {
                const image = document.querySelector('.destination__image');
                const tl = gsap.timeline();
                const paragraphSplit = new SplitText(paragraph, {
                    type: 'lines',
                });

                tl.fromTo(
                    title,
                    {
                        y: 50,
                        alpha: 0,
                    },
                    {
                        duration: 0.48,
                        y: 0,
                        alpha: 1,
                        ease: 'power2.out',
                    }
                )
                    .fromTo(
                        image,
                        {
                            x: -100,
                            alpha: 0,
                        },
                        {
                            duration: 0.58,
                            x: 0,
                            alpha: 1,
                            ease: 'power2.out',
                        },
                        '<'
                    )
                    .fromTo(
                        paragraphSplit.lines,
                        {
                            y: 25,
                            alpha: 0,
                        },
                        {
                            duration: 0.32,
                            y: 0,
                            alpha: 1,
                            ease: 'power2.out',
                            stagger: 0.22,
                        },
                        '<+0.34'
                    )
                    .fromTo(
                        line,
                        {
                            origin: 'center',
                            scaleX: 0,
                        },
                        {
                            duration: 0.32,
                            scaleX: 1,
                            ease: 'power2.out',
                        }
                    )
                    .fromTo(
                        labels,
                        {
                            y: 25,
                            alpha: 0,
                        },
                        {
                            duration: 0.32,
                            y: 0,
                            alpha: 1,
                            ease: 'power2.out',
                        }
                    )
                    .fromTo(
                        values,
                        {
                            y: 25,
                            alpha: 0,
                        },
                        {
                            duration: 0.32,
                            y: 0,
                            alpha: 1,
                            ease: 'power2.out',
                        }
                    );
            });
        }
    );
}

function animationTitle() {
    const buttons = document.querySelectorAll('.destination__button');

    matchMedia.add(
        `(min-width: ${desktopBreakpoint}px) and (prefers-reduced-motion: no-preference)`,
        () => {
            gsap.fromTo(
                pageTitle,
                {
                    x: -100,
                    alpha: 0,
                },
                {
                    duration: 0.65,
                    x: 0,
                    alpha: 1,
                    ease: 'power2.out',
                }
            );

            gsap.fromTo(
                buttons,
                {
                    y: 25,
                    alpha: 0,
                },
                {
                    duration: 0.4,
                    y: 0,
                    alpha: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                }
            );
        }
    );
}

function renderButtons() {
    data.forEach((destination, i) => {
        const button = document.createElement('button');
        button.classList.add('destination__button');
        button.setAttribute('role', 'tab');
        button.setAttribute(
            'aria-controls',
            `destination-${destination.name.toLowerCase()}`
        );
        button.setAttribute('aria-selected', i === index ? 'true' : 'false');
        button.setAttribute('aria-label', `Select ${destination.name}`);
        if (i === index) {
            button.classList.add('destination__button--active');
        }
        button.id = `destination-tab-${destination.name.toLowerCase()}`;
        button.textContent = destination.name;
        button.dataset.destination = destination.name.toLowerCase();
        button.addEventListener('click', () => {
            updateActiveButton(button);
            index = i;
            updateContent(index);
        });
        buttonsWrapper.appendChild(button);
    });
}

function updateActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.destination__button');
    buttons.forEach((btn) => {
        btn.classList.remove('destination__button--active');
        btn.setAttribute('aria-selected', 'false');
    });
    activeButton.classList.add('destination__button--active');
    activeButton.setAttribute('aria-selected', 'true');
}

function createImageElement(index) {
    const img = document.createElement('img');
    img.src = data[index].images.webp;
    img.alt = data[index].name;
    img.classList.add('destination__image');

    contentWrapper.prepend(img);
}

async function init() {
    try {
        const response = await fetch('../data.json');
        if (!response.ok) {
            window.alert('Failed to fetch data. Please try again later.');
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        data = json.destinations;

        console.log('Data fetched successfully:', data);

        renderButtons();
        createImageElement(index);
        updateContent(index);
        animationTitle();
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

init();

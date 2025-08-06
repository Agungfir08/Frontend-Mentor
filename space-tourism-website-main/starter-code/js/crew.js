gsap.registerPlugin(SplitText);

const pageTitle = document.querySelector('.page-title'); //page title
const buttonsWrapper = document.querySelector('.crew__pagination');
const crewMemberWrapper = document.querySelector('.crew__member');
const crewName = document.querySelector('.crew__member--name');
const crewRole = document.querySelector('.crew__member--role');
const crewBio = document.querySelector('.crew__member--bio');
const imageWrapper = document.querySelector('.crew__image-container');

let data = [];
let index = 0;
let matchMedia = gsap.matchMedia();
let desktopBreakpoint = 1440;
let ctx;

function animationTitle() {
    const button = document.querySelectorAll('.crew__pagination-button');
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
                button,
                {
                    y: 25,
                    alpha: 0,
                },
                {
                    duration: 0.38,
                    y: 0,
                    alpha: 1,
                    ease: 'power2.out',
                    stagger: 0.1,
                }
            );
        }
    );
}

function animation() {
    matchMedia.add(
        `(min-width: ${desktopBreakpoint}px) and (prefers-reduced-motion: no-preference)`,
        () => {
            if (ctx) ctx.revert();
            ctx = gsap.context(() => {
                const timeline = gsap.timeline();
                const image = document.querySelector('.crew__image');
                const splitBio = new SplitText(crewBio, { type: 'lines' });

                timeline
                    .fromTo(
                        crewRole,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.39,
                            x: 0,
                            alpha: 0.5,
                            ease: 'power2.out',
                        }
                    )
                    .fromTo(
                        crewName,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.39,
                            x: 0,
                            alpha: 1,
                            ease: 'power2.out',
                        }
                    )
                    .fromTo(
                        image,
                        {
                            x: 100,
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
                        splitBio.lines,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.39,
                            x: 0,
                            alpha: 1,
                            ease: 'power2.out',
                            stagger: 0.18,
                        }
                    );
            });
        }
    );
}

function updateContent(index) {
    const image = document.querySelector('.crew__image');
    const crew = data[index];

    crewName.textContent = crew.name;
    crewRole.textContent = crew.role;
    crewBio.textContent = crew.bio;
    image.src = crew.images.webp;
    image.alt = `Image of ${crew.name}`;
    crewMemberWrapper.id = `crew-${crew.name
        .split(' ')
        .join('-')
        .toLowerCase()}`;

    animation();
}

function renderButtons() {
    data.forEach((crew, i) => {
        const button = document.createElement('button');
        button.classList.add('crew__pagination-button');
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', i === index ? 'true' : 'false');
        button.setAttribute(
            'aria-controls',
            `crew-${crew.name.split(' ').join('-').toLowerCase()}`
        );
        button.setAttribute('aria-label', `Select ${crew.name}`);
        if (i === index) {
            button.classList.add('crew__pagination-button--active');
        }
        button.dataset.crew = crew.name.split(' ').join('-').toLowerCase();
        const dot = document.createElement('div');
        dot.classList.add('crew__pagination-dot');
        dot.setAttribute('aria-hidden', 'true');
        button.appendChild(dot);
        button.addEventListener('click', () => {
            updateActiveButton(button);
            index = i;
            updateContent(index);
        });
        buttonsWrapper.appendChild(button);
    });
}

function updateActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.crew__pagination-button');
    buttons.forEach((button) => {
        button.classList.remove('crew__pagination-button--active');
        button.setAttribute('aria-selected', 'false');
    });
    activeButton.classList.add('crew__pagination-button--active');
    activeButton.setAttribute('aria-selected', 'true');
}

function createImageElement(index) {
    const image = document.createElement('img');
    image.classList.add('crew__image');
    image.alt = `Image of ${data[index].name}`;
    image.src = data[index].images.webp;

    imageWrapper.appendChild(image);
}

async function init() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            window.alert('Failed to fetch data');
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        data = json.crew;

        renderButtons();
        createImageElement(index);
        updateContent(index);
        animationTitle();
    } catch (error) {
        console.error(
            'There has been a problem with your fetch operation:',
            error
        );
    }
}

init();

gsap.registerPlugin(SplitText);

const pageTitle = document.querySelector('.page-title');
const buttonsWrapper = document.querySelector('.technology__buttons');
const technologyInfo = document.querySelector('.technology__info');
const term = document.querySelector('.technology__info--term');
const title = document.querySelector('.technology__info--title');
const description = document.querySelector('.technology__info--description');
const contentWrapper = document.querySelector('.technology__content');

let data = [];
let matchMedia = gsap.matchMedia();
let desktopBreakpoint = 1440;
let index = 0;
let ctx;

function animationTitle() {
    const button = document.querySelectorAll('.technology__button');
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
                    x: -50,
                    alpha: 0,
                },
                {
                    duration: 0.56,
                    x: 0,
                    alpha: 1,
                    ease: 'power2.out',
                    stagger: 0.24,
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
                const image = document.querySelector('.technology__image');
                const splitDescription = new SplitText(description, {
                    type: 'lines',
                });

                timeline
                    .fromTo(
                        term,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.38,
                            x: 0,
                            alpha: 0.5,
                            ease: 'power2.out',
                        }
                    )
                    .fromTo(
                        title,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.38,
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
                        splitDescription.lines,
                        {
                            x: -50,
                            alpha: 0,
                        },
                        {
                            duration: 0.32,
                            x: 0,
                            alpha: 1,
                            ease: 'power2.out',
                            stagger: 0.2,
                        }
                    );
            });
        }
    );
}

function updateContent(index) {
    const technology = data[index];

    const picture = document.querySelector('.technology__image-container');
    const sourcemd = picture.querySelector(
        'source[media="(max-width: 767px)"]'
    );
    const sourcelg = picture.querySelector(
        'source[media="(min-width: 768px) and (max-width: 1439px)"]'
    );
    const sourcexl = picture.querySelector(
        'source[media="(min-width: 1440px)"]'
    );
    const image = picture.querySelector('.technology__image');

    title.textContent = technology.name;
    description.textContent = technology.description;
    sourcemd.setAttribute('srcset', technology.images.portrait);
    sourcelg.setAttribute('srcset', technology.images.landscape);
    sourcexl.setAttribute('srcset', technology.images.portrait);
    image.src = technology.images.portrait;
    image.alt = `Image of ${technology.name}`;
    technologyInfo.id = `technology-${technology.name
        .split(' ')
        .join('-')
        .toLowerCase()}`;

    animation();
}

function createImageElement(index) {
    const technology = data[index];
    const picture = document.createElement('picture');
    picture.classList.add('technology__image-container');

    const sourcemd = document.createElement('source');
    sourcemd.setAttribute('media', '(max-width: 767px)');
    sourcemd.setAttribute('srcset', technology.images.portrait);

    const sourcelg = document.createElement('source');
    sourcelg.setAttribute(
        'media',
        '(min-width: 768px) and (max-width: 1439px)'
    );
    sourcelg.setAttribute('srcset', technology.images.landscape);

    const sourcexl = document.createElement('source');
    sourcexl.setAttribute('media', '(min-width: 1440px)');
    sourcexl.setAttribute('srcset', technology.images.portrait);

    const image = document.createElement('img');
    image.classList.add('technology__image');
    image.src = technology.images.portrait;
    image.alt = `Image of ${technology.name}`;
    picture.appendChild(sourcemd);
    picture.appendChild(sourcelg);
    picture.appendChild(sourcexl);
    picture.appendChild(image);

    contentWrapper.prepend(picture);
}

function renderButtons() {
    data.forEach((technology, i) => {
        const button = document.createElement('button');
        button.classList.add('technology__button');

        button.setAttribute('role', 'tab');
        button.setAttribute(
            'aria-controls',
            `technology-${technology.name.split(' ').join('-').toLowerCase()}`
        );
        button.setAttribute('aria-selected', i === index ? 'true' : 'false');
        button.setAttribute('aria-label', `Select ${technology.name}`);
        if (i === index) {
            button.classList.add('technology__button--active');
        }
        button.textContent = `${i + 1}`;
        button.dataset.technology = technology.name
            .split(' ')
            .join('-')
            .toLowerCase();
        button.addEventListener('click', () => {
            updateActiveButton(button);
            index = i;
            updateContent(index);
        });
        buttonsWrapper.appendChild(button);
    });
}

function updateActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.technology__button');
    buttons.forEach((button) => {
        button.classList.remove('technology__button--active');
        button.setAttribute('aria-selected', 'false');
    });
    activeButton.classList.add('technology__button--active');
    activeButton.setAttribute('aria-selected', 'true');
}

async function init() {
    try {
        const response = await fetch('../starter-code/data.json');
        if (!response.ok) {
            window.alert('Failed to fetch data');
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        data = json.technology;

        renderButtons();
        createImageElement(index);
        animationTitle();
        updateContent(index);
    } catch (error) {
        console.error(
            'There has been a problem with your fetch operation:',
            error
        );
    }
}

init();

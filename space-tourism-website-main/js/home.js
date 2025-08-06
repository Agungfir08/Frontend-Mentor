gsap.registerPlugin(SplitText);

const title = document.querySelector('.hero__title');
const splitTitle = new SplitText(title, { type: 'lines' });
const description = document.querySelector('.hero__description');
const splitDescription = new SplitText(description, { type: 'lines' });
const button = document.querySelector('.hero__explore-button');

let matchMedia = gsap.matchMedia();
let desktopBreakpoint = 1440;

function animation() {
    matchMedia.add(`(min-width: ${desktopBreakpoint}px)`, () => {
        const tl = gsap.timeline();

        tl.from(splitTitle.lines, {
            duration: 0.38,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.2,
        })
            .from(
                button,
                {
                    duration: 1.6,
                    scale: 0.5,
                    opacity: 0,
                    ease: 'elastic.out(1,0.3)',
                },
                '<'
            )

            .from(
                splitDescription.lines,
                {
                    duration: 0.32,
                    y: 50,
                    opacity: 0,
                    ease: 'power2.out',
                    stagger: 0.2,
                },
                '<0.44'
            );
    });
}

animation();

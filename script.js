/* =========================================================
   SANKETH GOWDA — PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   PORTFOLIO DATA
   ========================================================= */

const portfolioData = {

    projects: [

        {
            title: "Sliky Due",

            description:
                "A web-based project focused on organizing and tracking tasks and due items.",

            technology:
                "PHP • MySQL • JavaScript",

            link:
                "https://github.com/Sankethgowda04/sliky-due"
        },


        {
            title: "Data Analytics Dashboard",

            description:
                "A dashboard concept for presenting analytical insights through charts and visual summaries.",

            technology:
                "Excel • Tableau • Data Analytics",

            link:
                "https://github.com/Sankethgowda04"
        },


        {
            title: "Personal Portfolio",

            description:
                "A responsive personal website combining professional information, projects and interactive analytics.",

            technology:
                "HTML • CSS • JavaScript",

            link:
                "https://github.com/Sankethgowda04"
        }

    ],


    certifications: [

        {
            title:
                "Deloitte Data Analytics Job Simulation",

            provider:
                "FORAGE",

            icon:
                "◈",

            description:
                "Practical data analytics experience involving analysis, classification and dashboard work."
        },


        {
            title:
                "Google Analytics",

            provider:
                "GOOGLE",

            icon:
                "◎",

            description:
                "Learning experience focused on analytics concepts, measurement and understanding user interaction data."
        },


        {
            title:
                "Microsoft Learn",

            provider:
                "MICROSOFT",

            icon:
                "▣",

            description:
                "Technology learning through Microsoft Learn modules and hands-on exploration."
        },


        {
            title:
                "Power BI Learning",

            provider:
                "MICROSOFT / SELF LEARNING",

            icon:
                "◫",

            description:
                "Developing practical skills in business intelligence, dashboards and data visualization."
        }

    ]

};


/* =========================================================
   PRELOADER
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const preloader =
            document.getElementById("preloader");

        if (preloader) {

            preloader.classList.add("hide");

        }

    }, 1600);

});


/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects() {

    const container =
        document.getElementById("projectsContainer");

    if (!container) return;

    container.innerHTML = "";


    portfolioData.projects.forEach((project, index) => {

        const card =
            document.createElement("article");

        card.className =
            "project-card reveal";


        card.innerHTML = `

            <span class="project-number">
                PROJECT ${String(index + 1).padStart(2, "0")}
            </span>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <p class="project-tech">
                ${project.technology}
            </p>

            <a
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
            >
                View Project ↗
            </a>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   RENDER CERTIFICATIONS
   ========================================================= */

function renderCertifications() {

    const container =
        document.getElementById("certificationsContainer");

    if (!container) return;

    container.innerHTML = "";


    portfolioData.certifications.forEach(
        (cert, index) => {

            const card =
                document.createElement("article");

            card.className =
                "cert-card reveal";


            card.innerHTML = `

                <div class="cert-icon">
                    ${cert.icon}
                </div>

                <span class="project-number">
                    LEARNING ${String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                    ${cert.title}
                </h3>

                <p class="cert-provider">
                    ${cert.provider}
                </p>

                <p>
                    ${cert.description}
                </p>

            `;


            container.appendChild(card);

        }
    );

}


/* =========================================================
   NUMBER COUNTER
   ========================================================= */

function animateCounter(element) {

    const target =
        Number(element.dataset.count);

    if (Number.isNaN(target)) return;


    let current = 0;

    const duration = 1200;

    const startTime =
        performance.now();


    function update(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) / duration,
                1
            );


        const eased =
            1 - Math.pow(1 - progress, 3);


        current =
            Math.floor(target * eased);


        element.textContent =
            current;


        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(update);

}


/* =========================================================
   COUNTER OBSERVER
   ========================================================= */

function setupCounters() {

    const counters =
        document.querySelectorAll("[data-count]");


    if (!counters.length) return;


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !entry.target.dataset.done
                    ) {

                        entry.target.dataset.done =
                            "true";


                        animateCounter(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.6
            }

        );


    counters.forEach(counter => {

        observer.observe(counter);

    });

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!elements.length) return;


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   CHANGING HERO WORD
   ========================================================= */

function setupChangingRole() {

    const element =
        document.getElementById(
            "changingRole"
        );


    if (!element) return;


    const words = [

        "Business",
        "Analytics",
        "Finance",
        "Marketing",
        "Technology",
        "Entrepreneurship"

    ];


    let index = 0;


    setInterval(() => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(10px)";


        setTimeout(() => {

            index =
                (index + 1) % words.length;


            element.textContent =
                words[index];


            element.style.opacity =
                "1";


            element.style.transform =
                "translateY(0)";

        }, 300);

    }, 2200);

}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

    const button =
        document.getElementById(
            "themeButton"
        );


    if (!button) return;


    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark"
        );

        button.textContent =
            "☀️";

    } else {

        button.textContent =
            "🌙";

    }


    button.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );


            const isDark =
                document.body.classList.contains(
                    "dark"
                );


            button.textContent =
                isDark
                    ? "☀️"
                    : "🌙";


            localStorage.setItem(
                "portfolio-theme",
                isDark
                    ? "dark"
                    : "light"
            );

        }
    );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "menuButton"
        );


    const menu =
        document.getElementById(
            "mobileMenu"
        );


    if (!button || !menu) return;


    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "open"
            );


            document.body.classList.toggle(
                "no-scroll"
            );


            const isOpen =
                menu.classList.contains(
                    "open"
                );


            button.textContent =
                isOpen
                    ? "✕"
                    : "☰";


            button.setAttribute(
                "aria-label",
                isOpen
                    ? "Close menu"
                    : "Open menu"
            );

        }
    );


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "open"
                    );


                    document.body.classList.remove(
                        "no-scroll"
                    );


                    button.textContent =
                        "☰";


                    button.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                }
            );

        });

}


/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

function setupMagneticElements() {

    if (window.innerWidth < 850) return;


    const elements =
        document.querySelectorAll(
            ".magnetic"
        );


    elements.forEach(element => {

        element.addEventListener(
            "mousemove",
            event => {

                const rect =
                    element.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                element.style.transform =
                    `translate(${x * 0.18}px, ${y * 0.18}px)`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "translate(0, 0)";

            }
        );

    });

}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

function setupCursor() {

    if (window.innerWidth < 850) return;


    const cursor =
        document.querySelector(
            ".cursor"
        );


    const follower =
        document.querySelector(
            ".cursor-follower"
        );


    if (!cursor || !follower) return;


    let mouseX = 0;

    let mouseY = 0;

    let followerX = 0;

    let followerY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            cursor.style.left =
                mouseX + "px";

            cursor.style.top =
                mouseY + "px";

        }
    );


    function animateFollower() {

        followerX +=
            (mouseX - followerX) * 0.12;


        followerY +=
            (mouseY - followerY) * 0.12;


        follower.style.left =
            followerX + "px";


        follower.style.top =
            followerY + "px";


        requestAnimationFrame(
            animateFollower
        );

    }


    animateFollower();


    document
        .querySelectorAll(
            "a, button, .project-card, .cert-card, .stack-layer"
        )
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "active"
                    );

                    follower.classList.add(
                        "active"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "active"
                    );

                    follower.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
   PROFILE 3D TILT
   ========================================================= */

function setupProfileTilt() {

    if (window.innerWidth < 850) return;


    const card =
        document.querySelector(
            ".profile-card"
        );


    if (!card) return;


    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                ((x / rect.width) - 0.5) * 10;


            const rotateX =
                ((y / rect.height) - 0.5) * -10;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        }
    );

}


/* =========================================================
   PARALLAX EFFECT
   ========================================================= */

function setupParallax() {

    if (window.innerWidth < 850) return;


    const floatingCards =
        document.querySelectorAll(
            ".floating-card"
        );


    if (!floatingCards.length) return;


    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            floatingCards.forEach(
                (card, index) => {

                    const amount =
                        index === 0
                            ? scroll * 0.025
                            : scroll * -0.018;


                    card.style.marginTop =
                        `${amount}px`;

                }
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   YEAR
   ========================================================= */

function setYear() {

    const year =
        document.getElementById(
            "year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   PROFESSIONAL MIX INTERACTION
   ========================================================= */

function setupProfessionalMix() {

    const nodes =
        document.querySelectorAll(
            ".mix-node"
        );


    const description =
        document.getElementById(
            "mixDescription"
        );


    if (!nodes.length || !description)
        return;


    const areaData = {

        business: {

            title:
                "Business",

            text:
                "Finance, marketing and strategic thinking shaped by my MBA journey."

        },


        data: {

            title:
                "Data",

            text:
                "Excel, Power BI, Tableau and data analysis used to turn information into useful insights."

        },


        technology: {

            title:
                "Technology",

            text:
                "Web development and databases built from my BCA foundation."

        },


        entrepreneurship: {

            title:
                "Entrepreneurship",

            text:
                "Exploring ideas such as ITS MAAN and learning how technology, experiences and business can connect."

        }

    };


    nodes.forEach(node => {

        node.addEventListener(
            "click",
            () => {

                nodes.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                node.classList.add(
                    "active"
                );


                const area =
                    node.dataset.area;


                const data =
                    areaData[area];


                if (!data) return;


                description.innerHTML = `

                    <strong>
                        ${data.title}
                    </strong>

                    <p>
                        ${data.text}
                    </p>

                `;

            }
        );

    });

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function setupSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) return;


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   STACK CARD INTERACTION
   ========================================================= */

function setupStackInteraction() {

    const cards =
        document.querySelectorAll(
            ".stack-layer"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "hovered"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "hovered"
                );

            }
        );

    });

}


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializePortfolio() {

    renderProjects();

    renderCertifications();

    setupRevealAnimations();

    setupCounters();

    setupChangingRole();

    setupTheme();

    setupMobileMenu();

    setupMagneticElements();

    setupCursor();

    setupProfileTilt();

    setupParallax();

    setupProfessionalMix();

    setupSmoothScroll();

    setupStackInteraction();

    setYear();

}


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializePortfolio
);
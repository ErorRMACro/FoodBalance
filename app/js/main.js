document.addEventListener('DOMContentLoaded', () => {

    const contactsBtn = document.querySelector('.contacts-link');
    const contactsWindow = document.querySelector('.contacts-window');
    const contactsCloseBtn = document.querySelector('.close-btn');
    const contactsMobileBtn = document.querySelector('.contacts-btn');
    const bodyContent = document.querySelector('.body');
    const bodyOverlay = document.querySelector('.overlay');

    contactsBtn.addEventListener('click', () => {
        contactsWindow.classList.add('active');
        bodyOverlay.classList.add('active');

    });

    contactsMobileBtn.addEventListener('click', () => {
        contactsWindow.classList.add('active');
        bodyContent.classList.add('overflow-hiden');
        bodyOverlay.classList.add('active');

    });

    contactsCloseBtn.addEventListener('click', () => {
        contactsWindow.classList.remove('active');
        bodyOverlay.classList.remove('active');
        if (!menuWindow.classList.contains('active')) {
            bodyContent.classList.remove('overflow-hiden');
        } 
        else {
            bodyContent.classList.add('overflow-hiden');
        }

    });

    bodyOverlay.addEventListener('click', () => {
        contactsWindow.classList.remove('active');
        bodyOverlay.classList.remove('active');
        if (!menuWindow.classList.contains('active')) {
            bodyContent.classList.remove('overflow-hiden');
        } 
        else {
            bodyContent.classList.add('overflow-hiden');
        }

    });


    const menuBtn = document.querySelector('.menu-btn');
    const menuWindow = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuWindow.classList.toggle('active');
        bodyContent.classList.toggle('overflow-hiden');
        if (!menuBtn.classList.contains('active')) {
            menuBtn.classList.add('holder');
        } else {
            menuBtn.classList.remove('holder');
        }
    });


    const anchorsLink = document.querySelectorAll('.menu__list-item-link--anchor, .footer__content-logo-link, .order-btn, .contacts-window__btn');

    anchorsLink.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = item.getAttribute('href')
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            menuWindow.classList.remove('active');
            menuBtn.classList.remove('active');
            bodyContent.classList.remove('overflow-hiden');
            contactsWindow.classList.remove('active');
            bodyOverlay.classList.remove('active');
        })
    });

    const faqItems = document.querySelectorAll('.faq__accordion-item');

    document.querySelectorAll('.faq__accordion-item-question').forEach((item) =>

        item.addEventListener('click', () => { 
            item.parentNode.classList.toggle('active');
        })
    )


    document.querySelectorAll('.faq__accordion-item').forEach((item) =>
        item.addEventListener('click', () => { 

            faqItems.forEach((other, idx) => {
                if (other !== item) {
                    other.classList.remove("active");
                    return
                }
                return;
            });

        })
    )

    function Menu() {

        const programOptions = document.querySelectorAll('.program__options-list-item');
        const programTables = document.querySelectorAll('.program__menu-table');
        const programDays = document.querySelectorAll('.program__menu-info-days-item');
        const programDayTables = document.querySelectorAll('.program__menu-table-content');
        const programDescr = document.querySelectorAll('.program__options-description-item');
        const programDayBtn = document.querySelectorAll('.program__menu-info-days');
        const programPrices = document.querySelectorAll('.program__menu-prices-info');

        function chooseMenu(optionitem, menutable, dayitem, daytable, description, daybtn, prices, activeElement) {

            optionitem.forEach((item, idx) => {

                item.addEventListener('click', () => { 

                    const first = document.querySelectorAll('.first');

                    optionitem.forEach((other, idx) => {
                        if (other !== item) {
                            other.classList.remove("active");
                            menutable[idx].classList.remove("active");
                            daybtn[idx].classList.remove("active");
                            description[idx].classList.remove("active");
                            prices[idx].classList.remove("active");
                            return
                        }
                        return;
                    });

                    daytable.forEach((item) => {
                        item.classList.remove('active');

                    });

                    item.classList.add('active');

                    menutable[idx].classList.add("active");

                    daybtn[idx].classList.add("active");

                    description[idx].classList.add("active");

                    prices[idx].classList.add("active");

                    first[idx].classList.add('active');

                });
                
            });
            
            dayitem.forEach((item, idx) => {

                item.addEventListener('click', () => { 

                    dayitem.forEach((other, idx) => {
                        if (other !== item) {
                            other.classList.remove("active");
                            daytable[idx].classList.remove("active");
                            return
                        }
                        return;
                    });

                    item.classList.add('active');

                    daytable[idx].classList.add("active");

                });

            });

            prices[activeElement].classList.add("active");
            daytable[activeElement].classList.add("active");
            dayitem[activeElement].classList.add("active");
            daybtn[activeElement].classList.add("active");
            dayitem[activeElement].classList.add("active");
            optionitem[activeElement].classList.add("active");
            menutable[activeElement].classList.add("active");
            description[activeElement].classList.add("active");
            daybtn[activeElement].classList.add("active");
            

        };

        chooseMenu(programOptions, programTables, programDays, programDayTables, programDescr, programDayBtn, programPrices, 0);

    };

    if (document.querySelector('#menu')) Menu();

});





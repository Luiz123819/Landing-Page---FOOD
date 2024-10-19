$(document).ready(function () {
    // .on('click'): Porque ele vai ser clicado
    $('#mobile-icon').on('click', function () {
        // 'active': É a classe que vai ser criada no CSS
        // para tirar e adicionar quando eu clicar no mobile menu: toggleClass('active')
        $('#mobile_menu').toggleClass('active01');
        // Troca o ícone
        $('#mobile-icon').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item'); // Verifique a classe aqui
    console.log(navItems);

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '8px 1px 8px rgba(0, 0, 0, 0.4)');
        }

        console.log(scrollPosition);

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active'); // Remove 'active' de todos os itens
        $(navItems[activeSectionIndex]).addClass('active');
        console.log(navItems);
    });

    // ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right', // Corrigido de 'rigth'
        duration: 2000,
        distance: '20%'
    });
});

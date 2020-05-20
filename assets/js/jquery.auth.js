$(function () {
    // login
    $('.login-click').click(function (e) { 
        e.preventDefault();
        $('.form__login').addClass('hienra');       
    });

    $('.btn--back').click(function (e) { 
        e.preventDefault();
        $('.form__login').removeClass('hienra');
        
    });
    $('.form__login-overlay').click(function (e) { 
        e.preventDefault();
        $('.form__login').removeClass('hienra');
    });

    $('.btn-register').click(function (e) { 
        e.preventDefault();
        $('.form__register').removeClass('hienra');
        $('.form__login').addClass('hienra');
        console.log('daclick')

    });

    // register
    $('.register-click').click(function (e) { 
        e.preventDefault();
        $('.form__register').addClass('hienra');       
    });

    $('.btn--back').click(function (e) { 
        e.preventDefault();
        $('.form__register').removeClass('hienra');
    });
    $('.form__register-overlay').click(function (e) { 
        e.preventDefault();
        $('.form__register').removeClass('hienra');
    });

    $('.btn-login').click(function (e) { 
        e.preventDefault();
        $('.form__login').removeClass('hienra');
        $('.form__register').addClass('hienra');
    });

});
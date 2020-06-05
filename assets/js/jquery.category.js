$(document).ready(function () {
    $('.category-item').click(function (e) { 
        e.preventDefault();
        $('.category-item').removeClass('category-item--active');
        $(this).addClass('category-item--active');
    });
});
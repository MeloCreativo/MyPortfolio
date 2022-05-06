var arrLang = {
    'es': {
        'hola': 'Hola! yo soy',
        'mi_nombre': 'Francisco Melo',
        'quien_soy': 'Diseñador UX/UI y desarrollador web'
    },
    'en': {
        'hola': 'Hi! my name is',
        'mi_nombre': 'Francisco Melo',
        'quien_soy': 'UX/UI designer and Web Developer'
    }
};

$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
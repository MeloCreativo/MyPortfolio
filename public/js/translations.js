var arrLang = {
    'es': {
        'casa': 'Yo vivo en una casa muy, muy linda',
        'perrito': 'Tengo un perro muy chiquito'
    },
    'en': {
        'casa': 'I live In a very fancy and beautifull house.',
        'perrito': 'I have a really small doggy.'
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
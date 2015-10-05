Typograf.rule({
    name: 'ru/dash/centuries',
    handler: function(text) {
        var dashes = '(' + Typograf.data('common/dash') + ')',
            re = new RegExp('(X|I|V)[ |\u00A0]?' + dashes + '[ |\u00A0]?(X|I|V)', 'g');

        return text.replace(re, '$1' + this.setting('ru/dash/centuries', 'dash') + '$3');
    },
    settings: {
        dash: '\u2014' // &mdash;
    }
});
var knife = require('../knife');

module.exports = {
    name: 'id-class-value',
    description: 'If set, ids and classes must fit the given format.'
};

module.exports.process = function (element, opts) {
    var format = opts[this.name];
    if (!format || element.type !== 'tag') {
        return [];
    }

    var verify = knife.getFormatTest(format),
        a = element.attribs;
    if ('id' in a && !verify(a.id.value) || 'class' in a && !verify(a.class.value)) {
        return {
            index: element.index,
            line: element.openLineCol[0],
            column: element.openLineCol[1],
            msg: 'ids and classes must match the format: ' + format
        };
    }
};
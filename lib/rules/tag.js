var lodash = require('lodash'),
    knife = require('../knife');

module.exports = {
    name: 'tag',
    on: ['dom'],
    trigger: ['tag']
};

module.exports.lint = function(element, opts) {
    var s = this.subscribers.filter(function(rule) {
        return !rule.trigger
            || rule.trigger.indexOf(element.name) > -1;
    });
    return knife.applyRules(s, element, opts);
};
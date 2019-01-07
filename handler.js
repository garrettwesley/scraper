const request = require('axios');
const { formatData } = require('./helpers')

module.exports.getData = (event, context, callback) => {
    request('https://classes.berkeley.edu/content/2019-spring-compsci-61a-001-lec-001')
        .then(({ data }) => {
            const formatted = formatData(data);
            callback(null, formatted);
        })
        .catch(callback);
};

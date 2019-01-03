const request = require('axios');
const { formatData } = require('./helpers')

module.exports.getData = (event, context, callback) => {
    request('https://smash.gg/tournaments?per_page=10&filter=%7B%22upcoming%22%3Atrue%2C%22videogameIds%22%3A%220%22%7D&page=1')
        .then(({ data }) => {
            const tourneys = formatData(data);
            callback(null, tourneys);
        })
        .catch(callback);
};

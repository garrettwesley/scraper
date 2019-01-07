const request = require('axios');
const { formatData } = require('./helpers')
const TO_NUMBER = '16198707007'
const FROM_NUMBER = '14123873196'

module.exports.getData = (event, context, callback) => {
    request('https://classes.berkeley.edu/content/2019-spring-compsci-61a-001-lec-001')
        .then(({ data }) => {
            const res = formatData(data);
            if (res.length) {
              var nexmo = new Nexmo({
                apiKey: process.env.NEXMO_API_KEY,
                apiSecret: process.env.NEXMO_API_SECRET
              });
              nexmo.message.sendSms(FROM_NUMBER, TO_NUMBER,
                    `${res.class} has ${res.enrolled}/${res.maxEnroll} already enrolled with
                    already ${res.waitlisted}/${res.waitlistedCount} waitlisted.`);
            }
            callback(null, res);
        })
        .catch(callback);
};

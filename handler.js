const request = require('axios');
const Nexmo = require('nexmo')
const { formatData } = require('./helpers')
const from = '14123873196'
const to = '16198707007'

module.exports.getData = (event, context, callback) => {
    request('https://classes.berkeley.edu/content/2019-spring-compsci-61a-001-lec-001')
        .then(({ data }) => {
            const res = formatData(data)
            if (res) {
              var nexmo = new Nexmo({
                apiKey: process.env.NEXMO_API_KEY,
                apiSecret: process.env.NEXMO_API_SECRET
              })
              const text = `${res.class} currently has ${res.enrolled}/${res.maxEnroll}  enrolled with already ${res.waitlisted}/${res.maxWaitlist} waitlisted.`
              nexmo.message.sendSms(from, to, text)
              console.log("should have sent")
            }
            callback(null, res)
        })
        .catch(callback)
};

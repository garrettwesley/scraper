const cheerio = require('cheerio')

function formatData(html) {
    const $ = cheerio.load(html)
    const data = $('.handlebarData').data('enrollment').available.enrollmentStatus
    let values = {  class:           'CS 61a',
                    enrolledCount:   data.enrolledCount,
                    maxEnroll:       data.maxEnroll,
                    waitlistedCount: data.waitlistedCount,
                    maxWaitlist:     data.maxWaitlist
                }

    return values
}

module.exports = {
    formatData
}

const cheerio = require('cheerio')

function formatData(html) {
    const $ = cheerio.load(html)
    const rows = $('.TournamentCardContainer')
    const tourneys = []

    rows.each((i, el) => {
        let name = $(el).children().first().children().last().children().first().text()
        let date = $(el).children().first().children().last().children().last().text()
        tourneys.push({ name, date })
    })
    return tourneys
}


module.exports = {
    formatData
}

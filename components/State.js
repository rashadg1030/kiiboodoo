m = require("mithril")
stream = require("mithril/stream")

module.exports = {
    selected: 0,
    strokeCount: 0,
    listCount: 0,
    list: [],
    fetchKanji: function(kun) {
        var count = 0
        if(localStorage.getItem(kun) === null && kun !== "") {
            m.request({
                method: "GET",
                url: "https://kanjialive-api.p.mashape.com/api/public/search/advanced?kun=" + kun,
                headers: {
                    "X-RapidAPI-Key": "f7cfadc53amsh08a1da10a37aed3p11453djsnfe6bf6a82e3d"
                }
            })
            .then(function(res) {
                var kanji = [{ id: count++, character: kun, stroke: 0 }]
                kanji = kanji.concat(res.map(detail => ({ id: count++, character: detail.kanji.character, stroke: detail.kanji.stroke })))
                localStorage.setItem(kun, JSON.stringify(kanji))
            })
        }

        this.list = JSON.parse(localStorage.getItem(kun) || "[]")
        this.listCount = this.list.length

        return this.list
    },
    incStrokeCount: function(count) {
        this.strokeCount = this.strokeCount + count
    }
}

// setKanji: function(kun, kanji) {
//     localStorage.setItem(kun, JSON.stringify(kanji))
// },
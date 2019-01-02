m = require("mithril")
stream = require("mithril/stream")
t = require("../js/translate")

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
                var hiragana = [{ id: count, character: t.translateH(kun), stroke: 0 }]
                var kanjis = hiragana.concat(res.map(detail => ({ id: ++count, character: detail.kanji.character, stroke: detail.kanji.stroke })))
                localStorage.setItem(kun, JSON.stringify(kanjis))
            })
        }

        this.list = JSON.parse(localStorage.getItem(kun) || "[]")
        this.listCount = this.list.length

        return this.list
    },
    nextKanji: function() {
        if (this.selected < (this.listCount - 1))
            this.selected++
    },
    prevKanji: function() {
        if (this.selected > 0)
            this.selected--
    },
    incStrokeCount: function(count) {
        this.strokeCount = this.strokeCount + count
    },
    setSelected: function(num) {
        this.selected = num
    }
}

// setKanji: function(kun, kanji) {
//     localStorage.setItem(kun, JSON.stringify(kanji))
// },
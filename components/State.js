m = require("mithril")
stream = require("mithril/stream")

module.exports = {
    dispatch: function(action, args) {
        this[action].apply(this, args || [])
    },
    fetchKanji: function(kun) {
        if(localStorage.getItem(kun) === null) {
            m.request({
                method: "GET",
                url: "https://kanjialive-api.p.mashape.com/api/public/search/advanced?kun=" + kun,
                headers: {
                    "X-RapidAPI-Key": "f7cfadc53amsh08a1da10a37aed3p11453djsnfe6bf6a82e3d"
                }
            })
            .then(function(res) {
                var kanji = res.map(detail => ({ character: detail.kanji.character, stroke: detail.kanji.stroke }))
                localStorage.setItem(kun, JSON.stringify(kanji))
            })
        } 

        return JSON.parse(localStorage.getItem(kun) || "[]")
    },
    setKanji: function(kun, kanji) {
        localStorage.setItem(kun, JSON.stringify(kanji))
    },
    strokeCount: 0
}
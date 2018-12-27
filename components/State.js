module.exports = {
    hiragana: "",
    sub: "",
    kanji: [],
    apiKey: "f7cfadc53amsh08a1da10a37aed3p11453djsnfe6bf6a82e3d",
    getKanji: function(kun) {
        if(localStorage.getItem(kun) === null) {
            console.log("hello1")
            m.request({
                method: "GET",
                url: "https://kanjialive-api.p.mashape.com/api/public/search/advanced?kun=" + kun,
                headers: {
                    "X-RapidAPI-Key": this.apiKey
                }
            })
            .then(function(res) {
                console.log(res)
                this.kanji = res.map(kanjiObj => ({ character: kanjiObj.kanji.character, stroke: kanjiObj.kanji.stroke }))
                console.log(this.kanji)
                localStorage.setItem(kun, this.kanji)
                
            })
        } else {
            this.kanji = localStorage.getItem(kun)
            console.log(this.kanji)
        }
    }
}
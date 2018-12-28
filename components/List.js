m = require("mithril")
s = require("./State")
stream = require("mithril/stream")

module.exports = function(initialVnode) {  

    function transform(kanji) {
        return m("li", { class: "listItem" }, [ m("h1", kanji.character), m("h1", kanji.stroke) ])
    }

    return {
        view: function(vnode) {
            return m("ul", s.fetchKanji(vnode.attrs.text).map(transform))
        }
    }
}
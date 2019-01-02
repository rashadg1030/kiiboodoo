m = require("mithril")
s = require("./State")
stream = require("mithril/stream")

module.exports = function(initialVnode) { 

    function transform(kanji) {
        // Might need refactoring
        if (kanji.id === s.selected)
            listItem = m("li", { id: kanji.id, class: "selected" }, [ m("h1", kanji.character), m("h1", kanji.stroke) ])
        else 
            listItem = m("li", { id: kanji.id, class: "listItem" }, [ m("h1", kanji.character), m("h1", kanji.stroke) ])
        
        return listItem
    }


    return {
        view: function(vnode) {
            return m("ul", s.fetchKanji(vnode.attrs.buffer).map(transform))
        }
    }
}
m = require("mithril")
s = require("./State")
stream = require("mithril/stream")

module.exports = function(initialVnode) { 

    function transform(kanji) {
        // Might need refactoring
        if (kanji.id === s.selected)
            listItem = m("div", { id: kanji.id, class: "has-background-primary column" }, [ m("h1", kanji.character), m("h1", kanji.stroke) ])
        else 
            listItem = m("div", { id: kanji.id, class: "column" }, [ m("h1", kanji.character), m("h1", kanji.stroke) ])
        
        return listItem
    }


    return {
        view: function(vnode) {
            return m("div", {class: "columns is-multiline"}, s.fetchKanji(vnode.attrs.buffer).map(transform))
        }
    }
}
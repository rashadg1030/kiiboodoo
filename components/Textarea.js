m = require("mithril")
t = require("../js/translate")
s = require("./State")
Paragraph = require("./Paragraph")
List = require("./List")

module.exports = function(initialVNode) {

    var text = ""
    var buffer = ""
    var bufferLoaded = false

    function setBuffer(romaji) {
        hiragana = t.translateH(romaji)
        buffer = hiragana
        bufferLoaded = true
    }

    function flushBuffer() {
        buffer = ""
        bufferLoaded = false
    }

    function toHiragana(e) {
        setBuffer(e.target.value) 
    }

    function replace(e) {
        if (e.keyCode === 40 && s.selected < (s.listCount - 1))
            s.selected++
        else if (e.keyCode === 38 && s.selected > 0)
            s.selected--
        else if (e.keyCode === 13)
            flushBuffer()
        else
            s.selected = 0
    }
    
    return {   
        view: function(vnode) {
            return m("div", [
                m("textarea", { placeholder: "Type here", onkeyup: toHiragana, onkeydown: replace }),
                m(Paragraph, { buffer }),
                m(List, { buffer })
            ]) 
        }
    }
}


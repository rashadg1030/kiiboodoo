m = require("mithril")
t = require("../js/translate")
s = require("./State")
Paragraph = require("./Paragraph")
List = require("./List")

module.exports = function(initialVNode) {

    var buffer = ""

    function setBuffer(text) {
        buffer = text.replace(/[^a-zA-z]/g, "")
    }

    // Instead of thinking about what to add, think about what to take away
    function flushBuffer() {
        buffer = ""
    }

    function doThis(e) {
        if (e.keyCode === 9) {
            var current = e.target.value.trim()
            var replacement = document.getElementsByClassName("selected")[0].children[0].textContent
            e.target.value = current.replace(buffer, replacement)
            flushBuffer()
        } else
            setBuffer(e.target.value.trim())
    }

    function doThat(e) {
        if (e.keyCode === 9) 
            e.preventDefault()
        else if (e.keyCode === 40) {
            s.nextKanji()
        } else if (e.keyCode === 38) {
            s.prevKanji()
        } else 
            s.setSelected(0)
    }
    
    return {   
        view: function(vnode) {
            return m("div", [
                m("textarea", { placeholder: "Type here", onkeyup: doThis, onkeydown: doThat }),
                m(Paragraph, { buffer }),
                m(List, { buffer })
            ]) 
        }
    }
}


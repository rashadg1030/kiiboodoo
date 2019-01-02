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

    function doThing(e) {
        if (e.keyCode === 40 && s.selected < (s.listCount - 1))
            s.selected++
        else if (e.keyCode === 38 && s.selected > 0)
            s.selected--
        else if (e.keyCode === 9) {
            e.preventDefault()
            var current = e.target.value.trim()
            var replacement = document.getElementsByClassName("selected")[0].children[0].textContent
            console.log(buffer)
            e.target.value = current.replace(buffer, replacement)
            flushBuffer()
        } else
            setBuffer(e.target.value.trim())
    }
    
    return {   
        view: function(vnode) {
            return m("div", [
                m("textarea", { placeholder: "Type here", onkeyup: doThing }),
                m(Paragraph, { buffer }),
                m(List, { buffer })
            ]) 
        }
    }
}


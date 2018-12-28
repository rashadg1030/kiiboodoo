m = require("mithril")
translate = require("../js/translate")
s = require("./State")
Paragraph = require("./Paragraph")
List = require("./List")

module.exports = function(initialVNode) {

    var text = ""

    function doSomething(e) {
       e.target.value = text = translate(e.target.value);
       s.dispatch("fetchKanji", [text])
    }
    
    return {   
        view: function(vnode) {
            return m("div", [
                m("textarea", { placeholder: "Type here", onkeyup: doSomething }),
                m(Paragraph, { text }),
                m(List, { text })
            ]) 
        }
    }
}


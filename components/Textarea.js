m = require("mithril")
translate = require("../js/translate")
State = require("./State")

module.exports = {
    view: function(vnode) {
        return m("textarea", { placeholder: "Type here", onkeyup: function() { vnode.dom.value = translate(vnode.dom.value); State.hiragana = vnode.dom.value; State.getKanji(vnode.dom.value) } })
    }
}


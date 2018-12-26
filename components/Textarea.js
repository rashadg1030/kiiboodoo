m = require("mithril")
translate = require("../js/translate")
State = require("./State")

module.exports = {
    view: function(vnode) {
        return m("textarea", { placeholder: "Type here", onkeyup: function() { vnode.dom.value = translate(vnode.dom.value); State.text = vnode.dom.value } })
    }
}


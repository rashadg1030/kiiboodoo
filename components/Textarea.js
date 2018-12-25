m = require("mithril");
translate = require("../js/translate");

function sayHi() {
    alert("hello");
}

module.exports = {
    view: function(vnode) {
        return m("textarea", {placeholder: "Type here", onkeyup: function() {vnode.dom.value = translate(vnode.dom.value)}})
    }
}
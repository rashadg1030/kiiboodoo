m = require("mithril");
translate = require("../js/translate");

module.exports = {
    view: function(vnode) {
        return m("textarea", {placeholder: "Type here"})
    },
    onupdate: function(vnode) {
        alert(this.text);
    }
}
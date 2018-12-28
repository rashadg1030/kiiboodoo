m = require("mithril")

module.exports = function(initalVNode) {
    return {
        view: function(vnode) {
            return m("p", vnode.attrs.text)
        }
    }
}
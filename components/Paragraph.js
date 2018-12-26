m = require("mithril")
State = require("./State")

module.exports = {
    view: function() {
        return m("p", State.text)
    }
}
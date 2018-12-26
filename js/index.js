m = require("mithril")
Textarea = require("../components/Textarea")
Paragraph = require("../components/Paragraph")

var root = document.body

var App = {
    view: function() {
        return m("main", [ m("h1", {class: "title"}, "Kiiboodoo"), m(Textarea), m(Paragraph) ])
    }
}



m.mount(root, App)
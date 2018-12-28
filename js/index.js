m = require("mithril")
Textarea = require("../components/Textarea")
Paragraph = require("../components/Paragraph")
List = require("../components/List")
State = require("../components/State")

var root = document.body

function App(initialVnode) {
    // POJO component instance: any object with a
    // view function which returns a vnode
    return {
        view: function() {
            return m("main", [ m("h1", {class: "title"}, "Kiiboodoo"), m(Textarea)])
        }
    }
}

m.mount(root, App)
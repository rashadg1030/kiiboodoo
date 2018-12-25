m = require("mithril");
Textarea = require("../components/Textarea");

var root = document.body;

var Main = {
    view: function() {
        return m("main", [ m("h1", {class: "title"}, "Kiiboodoo"), m(Textarea) ])
    }
}



m.mount(root, Main);
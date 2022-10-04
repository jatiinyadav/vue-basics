const app = Vue.createApp({
    // data, functions
    // template: '<h1>Hello Wolrdd</h1>'
    data() {
        return {
            title: "Vue Basics",
            age: 21,
            area: "New Delhi",
            heading: "Vue School Learning",
            items: [{id: 1, label :"Item1"}, {id: 2, label: "Item2"}, {id: 3, label: "Item3"}]
        }
    }
})

app.mount("#app")
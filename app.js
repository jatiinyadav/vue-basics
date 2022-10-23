const app = Vue.createApp({
    // data, functions
    // template: '<h1>Hello Wolrdd</h1>'
    data() {
        return {
            title: "Vue Basics",
            heading: "",
            headingTrim:"",
            headingLazy: "",
            itemArray: [],
            headingNumber: "",
            items: [{id: 1, label :"Item1"}, {id: 2, label: "Item2"}, {id: 3, label: "Item3"}],
            awesome: true,
            count: 0,
            myObject: {
                Title: 'How to do lists in Vue',
                Author: 'Jatin Yadav',
                PublishedAt: '2022-10-23'
              }
        }
    }
})

app.mount("#app")
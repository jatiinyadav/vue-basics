const app = Vue.createApp({
    // data, functions
    // template: '<h1>Hello Wolrdd</h1>'
    data() {
        return {
            title: "Jatin Yadav",
            age: 21,
            area: "New Delhi",
            heading: "I am Jatin Yadav"
        }
    }
})

app.mount("#app")
const app = Vue.createApp({
  // data, functions
  // template: '<h1>Hello Wolrdd</h1>'
  data() {
    return {
      title: "Vue Basics",
      heading: "",
      headingTrim: "",
      headingLazy: "",
      itemArray: [],
      headingNumber: "",
      items: [
        { id: 1, label: "Item1" },
        { id: 2, label: "Item2" },
        { id: 3, label: "Item3" },
      ],
      awesome: true,
      count: 0,
      myObject: {
        Title: "How to do lists in Vue",
        Author: "Jatin Yadav",
        PublishedAt: "2022-10-23",
      },
      typed: new Typed(".typed", {
        strings: [
          "Welcome to Vue Basics",
          "Create your own PR's",
          "Star us on Github ⭐",
        ],
        typeSpeed: 40,
        backSpeed: 40,
        fadeOut: true,
        loop: true,
      }),
      typedBulk: new Typed(".typedBulk", {
        strings: [
          "npm install^1000\n <br> `installing components...` ^1000\n <br> `Fetching from source...`",
        ],
        typeSpeed: 40,
        backSpeed: 0,
        fadeOut: true,
        loop: true,
      }),
    };
  },
});

app.mount("#app");

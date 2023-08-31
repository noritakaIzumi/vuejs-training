import { createApp } from "vue"

const app = createApp({
  data() {
    return {
      count: 0,
      msg: "hello",
      rawHtml: `<span style="color: red">This should be red.</span>`,
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
    }
  },
})

app.mount("#app")

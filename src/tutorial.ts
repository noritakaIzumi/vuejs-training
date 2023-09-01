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
      number: 1,
      ok: true,
      ng: false,
      date: new Date(),
      toTitleDate: (date: Date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
      formatDate: (date: Date) =>
        `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`,
      seen: true,
      url: "https://google.co.jp",
      attribute_name: "href",
      action: "click",
      onSubmit: () => {
        alert("hello, world!")
      },
    }
  },
})

app.mount("#app")

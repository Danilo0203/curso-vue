const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  // <h1>Hola Mundo, soy {{author}} </h1>
  // <p>{{message}}</p>
  // `,
  setup() {
    const message = ref("Soy Batman");
    const author = ref("Bruce Wayne");
    const onChangeName = () => {
      message.value = "Hola, soy Danilo otra vez xd";
    };
    // setTimeout(() => {
    //   message.value = "Soy Danilo xd";
    //   author.value = "Ya no soy ese jejeje";
    // }, 1500);

    return { message, author, onChangeName };
  },
});

app.mount("#app");

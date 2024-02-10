export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.hook("app:created", () => {
    console.log("Hello from plugin");
  })
  // console.log(nuxtApp);
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}`,
    },
  };
});

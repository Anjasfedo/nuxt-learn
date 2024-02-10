export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}`,
    },
  };
});

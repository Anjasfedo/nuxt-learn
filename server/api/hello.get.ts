export default defineEventHandler((event) => {
  // console.log(event);
  const data = {
    createdAt: new Date(),

    toJSON() {
      return {
        createdAt: {
          year: this.createdAt.getFullYear(),
          month: this.createdAt.getMonth(),
          day: this.createdAt.getDate(),
        },
      };
    },
  };
  
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 4000);
  });
});

let count = 0;

setInterval(() => {
  count++;
}, 1000);

export default defineEventHandler((event) => {
  return {
    count,
  };
});

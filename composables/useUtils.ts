export const useUtils = () => {
  const sayHello = () => console.log("Hello");

  const sayGoodBye = () => console.log("Good Bye");

  return {
    sayHello,
    sayGoodBye,
  };
};

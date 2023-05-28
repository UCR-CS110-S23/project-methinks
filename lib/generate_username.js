export const generateRandomUsername = (input) => {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return `${input}${randomNumber}`;
};

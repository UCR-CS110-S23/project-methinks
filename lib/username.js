export const generateRandomUsername = (input) => {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return `${input}${randomNumber}`;
};

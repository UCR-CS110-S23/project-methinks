export const generateRandomUID = () => {
  const characters = "abcdef0123456789";
  let uid = "";

  for (let i = 0; i < 24; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uid += characters[randomIndex];
  }

  return uid;
};

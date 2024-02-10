let sentences = [
  "Please refrain from using inappropriate language. This is a family-friendly server and we want to keep it that way.",
  "Your language is not welcome here. Please respect the rules and the other members of this server.",
  "We do not tolerate inappropriate language on this server. Please edit or delete your message, or you may face a warning.",
  "This server has a strict policy against inappropriate language. Please use more appropriate words.",
  "You have used inappropriate language in your message. Please be more mindful of your language.",
  "Please refrain from using inappropriate language.",
];
function getRandomElement() {
  let index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

module.exports = {
  getRandomElement,
};

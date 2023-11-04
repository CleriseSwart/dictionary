// src/data/words.js
const fetchWords = async () => {
  try {
    const response = await fetch('/assets/dictionary.txt');
    const text = await response.text();
    return text.trim().split('\n');
  } catch (error) {
    console.error('Error fetching words:', error);
    return [];
  }
};

export default fetchWords;

const wordleCore = (correct, input) => {
  let inputString = input.toUpperCase();
  let correctList = correct.toUpperCase().split('');
  let correctCheckerList = [];
  let result = [];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === correctList[i]) {
      result[i] = { letter: inputString[i], result: 'correct' };
      correctList[i] = null;
      correctCheckerList.push(i);
    }
  }

  for (let i = 0; i < inputString.length; i++) {
    if (!correctCheckerList.includes(i)) {
      if (correctList.includes(inputString[i])) {
        result[i] = { letter: inputString[i], result: 'misplaced' };
      }
      if (!correctList.includes(inputString[i])) {
        result[i] = { letter: inputString[i], result: 'incorrect' };
      }
    }
  }
  return result;
};

export default wordleCore;

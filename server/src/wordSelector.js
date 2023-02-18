const wordSelector = (listOfWords, length, isUnique) => {
  let listOfWordsCorrectLength = listOfWords.filter((e) => e.length == length);

  const uniqueChars = listOfWordsCorrectLength.filter(
    (e) => [...new Set(e.split(''))].join('') == e
  );

  if (isUnique === true) {
    return uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
  }

  return listOfWordsCorrectLength[
    Math.floor(Math.random() * listOfWordsCorrectLength.length)
  ];
};
export default wordSelector;

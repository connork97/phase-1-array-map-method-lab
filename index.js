const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tutorialArr) {
    return tutorialArr.split(' ').map(function(splitWord) {
      return (splitWord[0].toUpperCase() + splitWord.substring(1));
    }).join(' ');
  });
}

// Demonstrating in console that the function works without affecting the original "tutorials" array:

console.log(tutorials);
titleCased();
console.log(titleCased());
console.log(tutorials);


// Working Method Below But Without Map Method

/*
function titleCased(tutorialsArr) {
  const tutorialsArrCopy = []
  for (let i = 0; i < tutorialsArr.length; i++) {
    const sentenceArr = tutorialsArr[i].split(" ");
    for (let j = 0; j < sentenceArr.length; j++) {
        sentenceArr[j] = sentenceArr[j][0].toUpperCase() + sentenceArr[j].substring(1);
      }
    const joinedSentence = sentenceArr.join(" ")
    tutorialsArrCopy.push(joinedSentence)
  }
  return tutorialsArrCopy;
}

titleCased(tutorials);
console.log(tutorials);
console.log(titleCased(tutorials));
*/
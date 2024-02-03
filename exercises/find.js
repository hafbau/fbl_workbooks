// Given an array, write a loop to find the string 'zoqdub', print its index,
// and print how many iterations it took to find it.

const arr = [
  "avrgpy",
  "bllyxk",
  "bozbvwsw",
  "buqa",
  "cheddpyu",
  "coxsqclbk",
  "crhyyjn",
  "cvzcjev",
  "dbafkvcgvv",
  "diphtwtsl",
  "dqs",
  "eagxadgbe",
  "edkrmoni",
  "ejpqfy",
  "ekgvp",
  "etf",
  "fil",
  "fubi",
  "fwuegsiak",
  "fxlt",
  "fzv",
  "gdcpdsmv",
  "gdry",
  "giqqzgd",
  "gwva",
  "hrl",
  "huervuaz",
  "ivedjo",
  "iwsv",
  "izrap",
  "jazaxvqicd",
  "jbacwy",
  "jhxgujryq",
  "kdbecrgrnj",
  "khlqo",
  "kiqxvbbfcf",
  "kpyp",
  "lllvv",
  "mnwjsax",
  "mpkaqpisb",
  "mprzov",
  "mwidhb",
  "mxy",
  "niiv",
  "nkhm",
  "ocjw",
  "ovbe",
  "pdrywjcz",
  "pjla",
  "pyrrawu",
  "qaszjnrcs",
  "qbaewosypu",
  "qhtzzynxwf",
  "qkzdslj",
  "qmd",
  "qqjumq",
  "raeilugdhu",
  "ralfyer",
  "rebeiw",
  "riqjiavc",
  "rkjqao",
  "rmih",
  "rusgsxw",
  "scqs",
  "sdnipf",
  "sdpmhew",
  "shgrjjre",
  "sjlr",
  "snlr",
  "sro",
  "sul",
  "suumezsppo",
  "tggvi",
  "tiuborrfw",
  "tpydfr",
  "tsdt",
  "tzcrzruv",
  "ubfzml",
  "ugkeexldad",
  "ugmavm",
  "ujxm",
  "ulosh",
  "ultfyt",
  "untczjd",
  "utmy",
  "uxkmnnsf",
  "vcpzcqqmj",
  "veosegfto",
  "vftgjo",
  "vluuirir",
  "wifgbhdix",
  "woya",
  "xqfvc",
  "xvgssiad",
  "yccgr",
  "yejuswh",
  "zgw",
  "zlz",
  "zoqdub",
  "zxjmglvfy",
];

// Your code here

//Output examples
// index: 78 ---> this is the index of the string 'zoqdub'
// loopCount: 79 ---> this is the number of iterations it took to find the string 'zoqdub'

// console.log(`index: ${index}`);
// console.log(`loopCount: ${loopCount}`);

// index: undefined
// loopCount: 100

const word = "zoqdub";
function findWordInArr(givenArr, wordToFind) {
  // loop through the array
  // at each loop check if current word is equal to wordTo find
  // if true print index
  let loopCount = 0;
  const startTime = Date.now();
  let foundIndex;
  for (let index = 0; index < givenArr.length; index += 1) {
    loopCount = index + 1;
    const currentWord = givenArr[index];
    if (currentWord === wordToFind) {
      foundIndex = index;
      break;
    }
  }
  console.log("Time it took", Date.now() - startTime);
  console.log(`index: ${foundIndex}, loopCount: ${loopCount}`);
}

const calculateMid = function (start, end) {
  const distanceBetween = end - start;
  // using Math.floor here to avoid decimal values as index
  const halfWay = Math.floor(distanceBetween / 2);
  return start + halfWay;
};

// Binary Search
function findWordInArr2(givenArr, wordToFind) {
  let startIndex = 0;
  let endIndex = givenArr.length - 1;
  // break the problem in half
  let midIndex = calculateMid(startIndex, endIndex);

  let loopCount = 0;
  let foundIndex;
  while (startIndex < endIndex) {
    loopCount += 1;
    const wordAtMid = givenArr[midIndex];
    if (wordAtMid === wordToFind) {
      foundIndex = midIndex;
      break;
    } else if (wordToFind < wordAtMid) {
      // then word is at the beginning half i.e between startIndex - midIndex.
      // We can ignore from midIndex and above.
      endIndex = midIndex;
      midIndex = calculateMid(startIndex, endIndex);
    } else {
      // then word is at the ending half i.e between midIndex - endIndex.
      // we can ignore from startIndex to midIndex.
      startIndex = midIndex + 1;
      midIndex = calculateMid(startIndex, endIndex);
    }
  }

  console.log(`index: ${foundIndex}, loopCount: ${loopCount}`);
}

function findWordInArr3(givenArr, wordToFind) {
  // loop through the array
  // at each loop check if current word is equal to wordTo find
  // if true print index
  let loopCount = 0;
  const startTime = Date.now();
  let foundIndex = givenArr.indexOf(wordToFind);
  console.log("Time it took", Date.now() - startTime);
  console.log(
    `index: ${
      foundIndex < 0 ? "undefined" : foundIndex
    }, loopCount: ${loopCount}`
  );
}
// Example Use
findWordInArr2(arr, word); // index: 78, loopCount: 79

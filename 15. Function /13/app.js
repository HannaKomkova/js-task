let word1 = prompt('введите 1е слово');
let word2 = prompt('введите 2е слово');

const checkAnagrama = (firstWord, secondWord) => {
   firstWord.split('').sort().join('') === secondWord.split('').sort().join('') ?
   console.log(true) : console.log(false);

}

checkAnagrama(word1, word2)




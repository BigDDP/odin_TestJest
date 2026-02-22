export default function getCapital(input) {
    let wordArr = [];

    input.split(' ').forEach(word => {
        let newWord = word[0].toUpperCase()+word.slice(1);
        
        wordArr.push(newWord);
    })

    let capitalWord = wordArr.join(' ')

    return capitalWord;
}
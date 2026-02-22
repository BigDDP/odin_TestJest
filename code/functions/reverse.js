export default function getReverse(inp) {
    let arr = inp.split('').reverse();

    let reverseWord = arr.join('');

    return reverseWord;
}
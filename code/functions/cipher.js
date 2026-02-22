export default function getCipher(inp1, inp2) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = inp1.split('');

    let newArr = arr.map(item => {
        if (item === ' ') return ' '; 

        let itemNum = alphabet.indexOf(item)
        let loop = (itemNum + inp2) > 25;

        let translate;

        loop 
            ? translate = Number((itemNum + inp2) - 26)
            : translate = Number(itemNum + inp2);
        
        let translatedItem = alphabet[translate];
        
        return translatedItem;
    });

    let newCipher = newArr.join("")

    return newCipher;
};
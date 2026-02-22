export default function getArray(inp1) {
    let regex = /[0-9]/
    intArray = (inp1.split(','))
        .filter(char => regex.test(char))
        .map(Number);

    let paramObject = {
        average: intArray.reduce((sum, currentValue) => sum + currentValue, 0) / intArray.length, 
        min: Math.min(...intArray), 
        max: Math.max(...intArray), 
        length: intArray.length
    }

    return paramObject;
};
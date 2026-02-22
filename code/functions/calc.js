export default function getCalc(inp1, inp2) {
    console.log(inp1, inp2)
    let calculations = [
        `Sum: ${inp1 + inp2}`,
        `Subtract: ${inp1 - inp2}`,
        `Multiply: ${inp1 * inp2}`,
        `Divide: ${inp1 / inp2}`
    ]
    return calculations.join(", ")
}
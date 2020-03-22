function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {   

    let expression = `return ${expr}`;

    let solution = new Function(expression);

    return solution();

}

module.exports = {
    expressionCalculator
}
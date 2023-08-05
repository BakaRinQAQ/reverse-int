module.exports = function reverse (n) {
    n = Math.abs(n).toString();
    let result = "";
    result = n.split("").reverse().join("");
    return result
}
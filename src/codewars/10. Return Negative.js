function makeNegative(num) {
    // Code?
    var chk = Math.sign(num);
    if (chk === 1) {
        return -1 * num
    } else if (chk === 0 || chk === -1) {
        return num
    }
}
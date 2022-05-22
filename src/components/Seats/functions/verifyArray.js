export default function verifyArray(array, id) {
    let result = array.find((e) => (e === id));
    if (result !== undefined) {
        return true;
    } else {
        return false;
    }
}
export default function removeElement(array, element, setNewArray) {
    setNewArray(
        array.filter((e) => e !== element)
    )
}
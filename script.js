    function linkedList() {
        let head = null
        function getHead() {
            return head
        }

    function append(value) {
    if (head === null) {
        head = node(value)
    } else {
        let current = head
        while (current.next != null) {
            current = current.next
        }
        current.next = node(value)
    }
    }

    function prepend(value) {
        if (head === null) {
            head = node(value)
        } else {
            let newNode = node(value)
            newNode.next = head
            head = newNode
        }
    }

    function size() {
        let count = 0
        let current = head
        if (head != null) {
            count += 1
        }

        if (head === null) {
            return count
        } else {
            while (current.next != null) {
            current = current.next
            count += 1
        }
        return count
        }
    }

    function getHeadValue() {
    if (head === null) {
            return undefined
    } else {
        return head.value
    }
    }

    function tail() {
        let current = head

        if (head === null) {
            return undefined
        } else {
            while (current.next != null) {
                current = current.next
            }
            return current.value
        }
    }

    function at(index) {
        let current = head
        let count = 0

        if (head === null) {
            return undefined
        } else {
            if (index === 0) return head.value
            while (current.next != null) {
                current = current.next
                count += 1
                if (count === index) {
                    return current.value
                }
            }
        }
    }

    function pop() {
        if (head === null) {
            return undefined
        } else {
            let headValue = head.value
            head = head.next
            return headValue
        }
    }

    function contains(value) {
        let current = head
        if (current.value === value) return true
        while (current.next != null) {
            current = current.next
            if (current.value === value) {
                return true
            }
        }
        return false
    }

    function findIndex(value) {
        let current = head
        let count = 0

        if (current.value === value) {
            return 0
        }

        while (current.next != null) {
        current = current.next
        count += 1
        if (current.value === value) {
            return count
        }
}

        return -1
    }

    function toString() {
        let current = head
        let result = ""

        while (current.next != null) {
            result += `( ${current.value} ) -> `
            current = current.next
        }

        if (current.next === null) {
            result += `( ${current.value} ) -> null`
        }

        return result
    }

        return  { append, getHead, prepend, size, getHeadValue, tail, at, pop, contains, findIndex, toString }
    }

    function node(value) {
        return { value, next: null  }
    }

const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

console.log(list.toString());
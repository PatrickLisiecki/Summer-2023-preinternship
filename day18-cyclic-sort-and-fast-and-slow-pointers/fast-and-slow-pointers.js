class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function hasCycle(head) {
    let slow = head,
        fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

module.exports = {
    hasCycle,
    Node,
};

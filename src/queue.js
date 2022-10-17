const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let current = this.head;
    if (this.head === null) {
      this.head = new ListNode(value);
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
    return;
  }

  dequeue() {
    let current = this.head;
    if (current.next === null) {
      this.head = null;
      return current.value;
    }
    this.head = current.next;
    return current.value;
  }
}

module.exports = {
  Queue,
};

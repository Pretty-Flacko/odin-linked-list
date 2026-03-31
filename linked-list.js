class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let current = this.head;
    let i = 0;

    while (current !== null) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }

    return undefined;
  }

  pop() {
    let removedHead = this.head.value;
    this.head = this.head.nextNode;

    return removedHead;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }
}

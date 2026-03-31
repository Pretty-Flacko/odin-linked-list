export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
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

    while (current.nextNode) {
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

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  getHead() {
    if (!this.head) return undefined;

    return this.head.value;
  }

  getTail() {
    if (!this.head) return undefined;

    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }

    return undefined;
  }

  pop() {
    if (!this.head) return undefined;

    let removedHead = this.head.value;
    this.head = this.head.nextNode;

    return removedHead;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;

      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let result = "";

    if (!this.head) return result;

    let current = this.head;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return result + "null";
  }
}

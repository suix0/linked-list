function Node(data) {
  let value = null;
  let next = null;

  if (data) {
    value = data;
  }

  return { value, next };
}

function linkedList() {
  let head = Node(); // named head because that's the start of the list

  function append(value, headRef = head) {
    if (head.value === null && head.next === null) {
      head = Node(value);
    } else {
      if (headRef.next === null) {
        headRef.next = Node(value);
      } else {
        return append(value, headRef.next)
      }
    }
  }

  function prepend(value) {
    if (head.value === null) {
      head.value = value;
    } else {
      const newHead = Node(value);
      newHead.next = head;
      head = newHead;
    }
  }

  function size(headRef = head, count = 1) {
    if (headRef.next === null) {
      return count
    } else {
      return size(headRef.next, count + 1)
    }
  }

  function getHead() {
    return head;
  }

  function tail(headRef = head) {
    if (headRef.next === null) {
      return headRef;
    } else {
      return tail(headRef.next);
    }
  }

  // zero based indexing
  function at(index) {
    let currentNode = head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function pop() {
    if (head.size() === 2) {
      head.next = null;
    } else {
      let currentNode = head;
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

  function contains(value, headRef = head) {
    try {
      if (headRef.value === value) { 
        return true
      } else {
        return contains(value, headRef.next)
      }
    } catch {
      return false
    }
  }

  function find(value, headRef = head, counter = 0) {
    try {
      if (headRef.value === value) {
        return counter
      } else {
        return find(value, headRef.next, counter + 1)
      }
    } catch {
      return null
    }
  }

  function toString() {
    let currentNode = head;
    let linkedListStr = '';
    while (currentNode.next !== null) {
      linkedListStr += `( ${currentNode.value} ) -> `
      currentNode = currentNode.next
    }
    linkedListStr += `null`;
    console.log(linkedListStr);
  }
  return { head, append, prepend, getHead, tail, size, at, pop, contains, find, toString }
}

// example uses class syntax - adjust as necessary
const list = new linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
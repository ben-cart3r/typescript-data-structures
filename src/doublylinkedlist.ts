const inspect = Symbol.for("nodejs.util.inspect.custom");

type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
  private _head?: Node<T>;
  private _tail?: Node<T>;

  append(value: T): void {
    return this.insertAfter(this.tail(), value);
  }

  clear(): void {
    this._head = undefined;
    this._tail = undefined;
  }

  empty(): boolean {
    return this._head == undefined;
  }

  head(): Node<T> {
    if (this._head) {
      return this._head;
    }
    throw new Error("Out Of Bounds Exception");
  }

  insert(value: T): void {
    const newNode: Node<T> = {
      value,
    };

    if (this._head == undefined) {
      this._head = this._tail = newNode;
    } else {
      this.insertBefore(this._head, value);
    }
  }

  insertAfter(node: Node<T>, value: T): void {
    const newNode: Node<T> = {
      value,
      next: undefined,
      prev: node,
    };

    if (node.next == undefined) {
      this._tail = newNode;
    } else {
      newNode.next = node.next;
      node.next.prev = newNode;
    }

    node.next = newNode;
  }

  insertBefore(node: Node<T>, value: T): void {
    const newNode: Node<T> = {
      value,
      next: node,
    };

    if (node.prev == undefined) {
      this._head = newNode;
    } else {
      newNode.prev = node.prev;
      node.prev.next = newNode;
    }

    node.prev = newNode;
  }

  remove(node: Node<T>): void {
    if (node.prev == undefined) {
      this._head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node.next == undefined) {
      this._tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }
  }

  tail(): Node<T> {
    if (this._tail) {
      return this._tail;
    }
    throw new Error("Out Of Bounds Exception");
  }

  [Symbol.iterator]() {
    let node = this._head;
    return {
      next: (): IteratorResult<T, undefined> => {
        if (node === undefined) {
          return {
            done: true,
            value: undefined,
          };
        } else {
          const value = node.value;

          node = node.next;

          return {
            done: false,
            value,
          };
        }
      },
    };
  }

  [inspect]() {
    return [...this];
  }
}

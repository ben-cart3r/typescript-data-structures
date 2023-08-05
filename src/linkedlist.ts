const inspect = Symbol.for("nodejs.util.inspect.custom");

type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class LinkedList<T> implements Iterable<T> {
  private _head?: Node<T>;

  append(value: T): void {
    return this.insertAfter(this.tail(), value);
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

  insertAfter(node: Node<T>, value: T): void {
    node.next = {
      value,
      next: node.next,
    };
  }

  insert(value: T): void {
    if (this._head) {
      this._head = {
        value,
        next: this._head,
      };
    } else {
      this._head = {
        value,
      };
    }
  }

  removeAfter(node: Node<T>): void {
    if (node.next && node.next.next) {
      node.next = node.next.next;
    }
  }

  removeBeginning(): void {
    if (this._head) {
      this._head = this._head?.next;
    } else {
      throw new Error("Out Of Bounds Exception");
    }
  }

  tail(): Node<T> {
    if (this._head) {
      let node = this._head;

      while (node.next) {
        node = node.next;
      }

      return node;
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

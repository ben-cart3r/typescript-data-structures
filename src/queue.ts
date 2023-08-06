import DoublyLinkedList from "./doublylinkedlist";

const inspect = Symbol.for("nodejs.util.inspect.custom");

export default class Queue<T> implements Iterable<T> {
  private _list: DoublyLinkedList<T>;

  constructor() {
    this._list = new DoublyLinkedList();
  }

  empty(): boolean {
    return this._list.empty();
  }

  peek(): T {
    return this._list.head().value;
  }

  dequeue(): T {
    const head = this._list.head();

    this._list.remove(head);

    return head.value;
  }

  enqueue(value: T): void {
    if (this._list.empty()) {
      this._list.insert(value);
    } else {
      this._list.append(value);
    }
  }

  [Symbol.iterator]() {
    return {
      next: (): IteratorResult<T, undefined> => {
        if (this.empty()) {
          return {
            done: true,
            value: undefined,
          };
        } else {
          return {
            done: false,
            value: this.dequeue(),
          };
        }
      },
    };
  }

  [inspect]() {
    return [...this];
  }
}

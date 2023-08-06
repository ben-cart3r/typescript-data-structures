import DoublyLinkedList from "./doublylinkedlist";

const inspect = Symbol.for("nodejs.util.inspect.custom");

export default class Stack<T> implements Iterable<T> {
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

  pop(): T {
    const head = this._list.head();

    this._list.remove(head);

    return head.value;
  }

  push(value: T): void {
    this._list.insert(value);
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
            value: this.pop(),
          };
        }
      },
    };
  }

  [inspect]() {
    return [...this];
  }

  static fromArray<T>(items: Array<T>): Stack<T> {
    const stack = new Stack<T>();

    for (const item of items) {
      stack.push(item);
    }

    return stack;
  }
}

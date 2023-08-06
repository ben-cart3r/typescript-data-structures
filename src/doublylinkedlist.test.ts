import { describe, expect, it } from "vitest";
import { inspect } from "node:util";
import DoublyLinkedList from "./doublylinkedlist";

describe("DoublyLinkedList", () => {
  it("should be empty by default", () => {
    const list = new DoublyLinkedList<string>();

    expect(list.empty()).toBeTruthy();
  });

  it("should throw an out of bounds error when accessing the head node if there is no data", () => {
    const list = new DoublyLinkedList<string>();

    expect(() => list.head()).to.throw("Out Of Bounds Exception");
  });

  it("should throw an out of bounds error when accessing the tail node if there is no data", () => {
    const list = new DoublyLinkedList<string>();

    expect(() => list.tail()).to.throw("Out Of Bounds Exception");
  });

  it("should be possible to be insert a single item", () => {
    const list = new DoublyLinkedList<string>();

    list.insert("test");

    expect(list.empty()).toBeFalsy();
    expect(list.head().value).toEqual("test");
    expect(list.tail().value).toEqual("test");
  });

  it("should be possible to be insert multiple items", () => {
    const list = new DoublyLinkedList<string>();

    list.insert("test");
    list.insert("test 2");
    list.insert("test 3");

    expect(list.empty()).toBeFalsy();
    expect(list.head().value).toEqual("test 3");
    expect(list.tail().value).toEqual("test");
  });

  it("should be possible to append data", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.append(2);

    expect(list.empty()).toBeFalsy();
    expect(list.head().value).toEqual(1);
    expect(list.tail().value).toEqual(2);
  });

  it("should be possible to remove data", () => {
    const list = new DoublyLinkedList<string>();

    list.insert("test");
    list.remove(list.head());

    expect(list.empty()).toBeTruthy();
  });

  it("should implement a custom inspection function that returns a stringified array", () => {
    const list = new DoublyLinkedList<string>();

    list.insert("1");
    list.insert("2");

    expect(inspect(list)).toEqual("[ '2', '1' ]");
  });

  it("should be iterable", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.insert(2);

    expect([...list]).toEqual([2, 1]);
  });

  it("should be possible to remove all nodes from the list", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.clear();

    expect(list.empty()).toBeTruthy();
    expect(() => list.head()).to.throw("Out Of Bounds Exception");
    expect(() => list.tail()).to.throw("Out Of Bounds Exception");
  });

  it("should be possible to insert data after a node", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.append(3);
    list.insertAfter(list.head(), 2);

    expect([...list]).toEqual([1, 2, 3]);
  });

  it("should be possible to insert data before a node", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.append(3);
    list.insertBefore(list.tail(), 2);

    expect([...list]).toEqual([1, 2, 3]);
  });

  it("should be possible to remove the head node", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.insert(2);
    list.remove(list.head());

    expect(list.head().value).toEqual(1);
    expect(list.tail().value).toEqual(1);
  });

  it("should be possible to remove the tail node", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.insert(2);
    list.remove(list.tail());

    expect(list.head().value).toEqual(2);
    expect(list.tail().value).toEqual(2);
  });

  it("should be possible to remove a node in the middle", () => {
    const list = new DoublyLinkedList<number>();

    list.insert(1);
    list.insert(2);
    list.insert(3);

    const head = list.head();

    expect(head.next).not.toBe(undefined);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    list.remove(list.head().next!);

    expect(list.head().value).toEqual(3);
    expect(list.head().next?.value).toEqual(1);
    expect(list.tail().value).toEqual(1);
  });
});

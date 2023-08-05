import { describe, expect, it } from "vitest";
import { inspect } from "node:util";
import LinkedList from "./linkedlist";

describe("LinkedList", () => {
  it("should be empty by default", () => {
    const list = new LinkedList<string>();

    expect(list.empty()).toBeTruthy();
  });

  it("should throw an out of bounds error when accessing the head node if there is no data", () => {
    const list = new LinkedList<string>();

    expect(() => list.head()).to.throw("Out Of Bounds Exception");
  });

  it("should throw an out of bounds error when accessing the tail node if there is no data", () => {
    const list = new LinkedList<string>();

    expect(() => list.tail()).to.throw("Out Of Bounds Exception");
  });

  it("should be possible to be insert data", () => {
    const list = new LinkedList<string>();

    list.insert("test");
    list.insert("test 2");
    list.insert("test 3");

    expect(list.empty()).toBeFalsy();
    expect(list.head().value).toEqual("test 3");
  });

  it("should be possible to append data", () => {
    const list = new LinkedList<number>();

    list.insert(1);
    list.append(2);

    expect(list.empty()).toBeFalsy();
    expect(list.head().value).toEqual(1);
    expect(list.tail().value).toEqual(2);
  });

  it("should throw an out of bounds error if the list is empty when trying to remove the first node", () => {
    const list = new LinkedList<number>();

    expect(() => list.removeBeginning()).to.throw("Out Of Bounds Exception");
  });

  it("should be possible to remove the first node", () => {
    const list = new LinkedList<string>();

    list.insert("test");
    list.removeBeginning();

    expect(list.empty()).toBeTruthy();
  });

  it("should be possible to remove a node", () => {
    const list = new LinkedList<number>();

    list.insert(1);
    list.insert(2);
    list.insert(3);

    list.removeAfter(list.head());

    expect([...list]).toEqual([3, 1]);
  });

  it("should implement a custom inspection function that returns a stringified array", () => {
    const list = new LinkedList<string>();

    list.insert("1");
    list.insert("2");

    expect(inspect(list)).toEqual("[ '2', '1' ]");
  });

  it("should be iterable", () => {
    const list = new LinkedList<number>();

    list.insert(1);
    list.insert(2);

    expect([...list]).toEqual([2, 1]);
  });
});

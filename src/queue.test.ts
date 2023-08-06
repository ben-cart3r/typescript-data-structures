import { describe, expect, it } from "vitest";
import { inspect } from "node:util";
import Queue from "./queue";

describe("Queue", () => {
  describe("push", () => {
    it("should add items to the queue", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);

      expect(queue.empty()).toBeFalsy();
    });
  });

  describe("pop", () => {
    it("should return items in the order they were added", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
    });

    it("should throw when the stack is empty", () => {
      const queue = new Queue<number>();

      expect(() => queue.dequeue()).to.throw("Out Of Bounds Exception");
    });
  });

  describe("empty", () => {
    it("should return true if empty", () => {
      const queue = new Queue<number>();

      expect(queue.empty()).toBeTruthy();
    });

    it("should return false if not empty", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);

      expect(queue.empty()).toBeFalsy();
    });
  });

  describe("peek", () => {
    it("should return the value of top node without removing it", () => {
      const queue = new Queue<number>();

      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
    });
  });

  it("should be iterable", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);

    expect([...queue]).toEqual([1, 2]);
  });

  it("should be inspectable", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(inspect(queue)).toEqual("[ 1, 2 ]");
  });
});

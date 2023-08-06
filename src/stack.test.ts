import { describe, expect, it } from "vitest";
import { inspect } from "node:util";
import Stack from "./stack";

describe("Stack", () => {
  describe("push", () => {
    it("should add items to the stack", () => {
      const stack = new Stack<number>();

      stack.push(1);

      expect(stack.empty()).toBeFalsy();
    });
  });

  describe("pop", () => {
    it("should return items in the reverse order they were added", () => {
      const stack = new Stack<number>();

      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });

    it("should throw when the stack is empty", () => {
      const stack = new Stack<number>();

      expect(() => stack.pop()).to.throw("Out Of Bounds Exception");
    });
  });

  describe("empty", () => {
    it("should return true if empty", () => {
      const stack = new Stack<number>();

      expect(stack.empty()).toBeTruthy();
    });

    it("should return false if not empty", () => {
      const stack = new Stack<number>();

      stack.push(1);

      expect(stack.empty()).toBeFalsy();
    });
  });

  describe("peek", () => {
    it("should return the value of top node without removing it", () => {
      const stack = new Stack<number>();

      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toEqual(2);
      expect(stack.peek()).toEqual(2);
    });
  });

  it("should be iterable", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect([...stack]).toEqual([2, 1]);
  });

  it("should be inspectable", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);

    expect(inspect(stack)).toEqual("[ 2, 1 ]");
  });
});

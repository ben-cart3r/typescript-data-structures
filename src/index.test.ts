import { describe, expect, it } from "vitest";
import { helloWorld } from ".";

describe("helloworld", () => {
  it("should export a string containing Hello World", () => {
    expect(helloWorld).to.eq("Hello World");
  });
});

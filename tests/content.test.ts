import { describe, it, expect } from "vitest";
import { projects } from "../src/data/projects";
import { certifications } from "../src/data/certifications";

describe("portfolio content", () => {
  it("has three documented projects", () =>
    expect(projects).toHaveLength(3));

  it("links the three repositories found on the supplied public GitHub profile", () =>
    expect(projects.every((p) => Boolean(p.github))).toBe(true));

  it("lists eight certifications", () =>
    expect(certifications).toHaveLength(8));
});
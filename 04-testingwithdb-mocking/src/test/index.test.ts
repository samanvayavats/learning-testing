import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";

// Mock BEFORE importing app
vi.mock("../models/sum.js", () => ({
    Sum: {
        create: vi.fn(),
    },
}));

import { app } from "../index.js";
import { Sum } from "../models/sum.js";


describe("POST /sum", () => {
    
    it("returns sum with status 200", async () => {

        const res = await request(app)
            .post("/sum")
            .send({
                a: 4,
                b: 5,
            });

        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(9);
    });

    it("returns 411 for invalid input", async () => {
        const res = await request(app)
            .post("/sum")
            .send({
                a: "4",
                b: "5",
            });

        expect(res.status).toBe(411);
        expect(res.body.message).toBe("INVALID INPUT");
    });

    it("returns a different sum for different inputs", async () => {

        const res = await request(app)
            .post("/sum")
            .send({
                a: 12,
                b: 8,
            });

        expect(res.status).toBe(200);
        expect(res.body.sum).toBe(20);
    });
});
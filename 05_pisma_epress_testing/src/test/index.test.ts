import { vi } from "vitest";
// import {mockingThePrismaReqeust} from '../__mock__/db.js'

// vi.mock("../db.js", () => (mockingThePrismaReqeust));
vi.mock("../db.js", async () => {
  const mock = await import("../__mock__/db.js");

  return {
    prismaClient: mock.prismaClient,
  };
});

import { prismaClient } from '../__mock__/db.js'
import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { app } from '../index.js'

describe('sum module ', () => {
    
    it('should return the postive answer', async () => {
     
        prismaClient.request.create.mockResolvedValue({
            id: 1,
            a: 4,
            b: 4,
            result: 8,
        });

        const res = await request(app).post('/request').send({
            a: 4,
            b: 4
        })

     console.log("res " , res.body)
        expect(res.body.answer).toBe(8)
        expect(res.body.id).toBe(1)
        expect(res.status).toBe(200)

    })
})
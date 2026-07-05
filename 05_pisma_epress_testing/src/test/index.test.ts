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
            a: 2,
            b: 4,
            result: 6,
        });

        vi.spyOn(prismaClient.request , 'create')

        const res = await request(app).post('/request').send({
            a: 2,
            b: 4
        })

        expect(prismaClient.request.create).toHaveBeenCalledWith({
            data: {
                a: 2,
                b: 4,
                result: 6,
            },
        })

        expect(res.body.answer).toBe(6)
        expect(res.body.id).toBe(1)
        expect(res.status).toBe(200)

    })
})
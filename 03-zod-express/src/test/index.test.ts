import { it, expect, describe, should } from 'vitest'
import request from 'supertest'
import { app } from '../index.js'


describe('POST /sum', () => {

    it('checks the sum should be postive for postive input', async () => {
        const res = await request(app).post('/sum').send({
            a: 2,
            b: 3
        })

        expect(res.status).toBe(200)
        expect(res.body.sum).toBe(5)
    })

    it('checks if the input is invalid', async () => {
        const res = await request(app).post('/sum').send({
            a: 'q',
            b: '2'
        })

        expect(res.status).toBe(411)
        expect(res.body.message).toBe('invalid input')
    })

})

describe('GET /sum ', () => {
    it('should return postive number and status code 200', async () => {
        const res = await request(app).get('/sum').set({
            a: '4',
            b: '4'
        }).send()

        expect(res.status).toBe(200)
        expect(res.body.sum).toBe(8)
    })

    it('should return postive number and status code 200', async () => {
        const res = await request(app).get('/sum').set({
            a: '4',
            b: '4'
        })

        expect(res.status).toBe(200)
        expect(res.body.sum).toBe(8)
    })

    it('should return the invalid input with status code 411', async () => {
        const res = await request(app).get('/sum').send()

        expect(res.status).toBe(411)
        expect(res.body.message).toBe('invalid input')
    })
})
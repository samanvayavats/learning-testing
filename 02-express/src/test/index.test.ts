import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '../index.js'

describe('post /sum', () => {
  
    it('should return the positive sum and status code 200', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 1, b: 3 })

      expect(res.statusCode).toBe(200)
    expect(res.body.sum).toBe(4)
  })
  
  it('should return the negative sum if both the value are negative and status code 200', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: -1, b: -3 })

      expect(res.statusCode).toBe(200)
    expect(res.body.sum).toBe(-4)
  })
  
  it('should return the sum according to bigger value and status code 200', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 1, b: -3 })

      expect(res.statusCode).toBe(200)
    expect(res.body.sum).toBe(-2)
  })

  it('should return the sum according to bigger value and status code 200', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 5, b: -3 })

      expect(res.statusCode).toBe(200)
    expect(res.body.sum).toBe(2)
  })
})
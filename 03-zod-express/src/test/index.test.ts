import {it , expect , describe} from 'vitest'
import request  from 'supertest'
import { app } from '../index.js'


describe('POST /sum' , ()=>{
   
    it('checks the sum should be postive for postive input' ,async()=>{
        const res = await request(app).post('/sum').send({
            a:2 ,
            b:3
        })

        expect(res.status).toBe(200)
        expect(res.body.sum).toBe(5)
    })

    it('checks if the input is invalid' ,async ()=>{
        const res = await request(app).post('/sum').send({
            a : 'q',
            b:'2'
        })

        expect(res.status).toBe(411)
        expect(res.body.message).toBe('invalid input')
    })

})
import {describe , test , expect} from 'vitest'
import { sum } from '../index.js'

describe('sum-module' ,()=>{
    
    test('checking the sum function for postive number',()=>{
        expect(sum(1,2)).toBe(3)
    })
    
    test('checking the sum function for both negative number',()=>{
        expect(sum(-1,-2)).toBe(-3)
    })

    test('checking the sum function for one negative and one postive number ',()=>{
        expect(sum(1,-2)).toBe(-1)
    })
})
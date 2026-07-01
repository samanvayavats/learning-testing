import express from 'express'
import { number, z } from 'zod'
const app = express()
app.use(express.json())

const Sum = z.object({
    a: z.number(),
    b: z.number()
})

app.post('/sum', (req, res) => {

    const parsedInput = Sum.safeParse(req.body)

    if(!parsedInput.success){
        return res.status(411).json({
            message :'invalid input'
        })
    }

    const sum = parsedInput.data.a + parsedInput.data.b
    return res.status(200).json({
        sum
    })
})

export {app}
import express from "express";
import { z } from "zod";
import { prismaClient } from "./db.js";

export const app = express();
app.use(express.json());

const requestInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/request", async (req, res) => {
    const parsedResponse = requestInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const response = await prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

   return res.status(200).json({
     answer,   
     id : response.id,
    })
});


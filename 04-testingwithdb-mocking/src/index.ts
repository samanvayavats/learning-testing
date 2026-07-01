import express from "express";
import { z } from "zod";
import { Sum } from "./models/sum.js";

const app = express();

app.use(express.json());

const SumZod = z.object({
    a: z.number(),
    b: z.number(),
});

app.post("/sum", async (req, res) => {
    const parsedInput = SumZod.safeParse(req.body);

    if (!parsedInput.success) {
        return res.status(411).json({
            message: "INVALID INPUT",
        });
    }

    const sum = parsedInput.data.a + parsedInput.data.b;


    await Sum.create({ sum });

    return res.status(200).json({
        sum,
    });
});

export { app };
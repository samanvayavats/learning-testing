// import { vi } from "vitest"

// export const mockingThePrismaReqeust = {
//     prismaClient :{
//         request :{
//             create : vi.fn()
//         }
//     }
// }

// lets try to deepmock it now
import { mockDeep } from 'vitest-mock-extended';
// @ts-ignore 
import { PrismaClient } from "../../generated/prisma/client.js";

export const prismaClient = mockDeep<PrismaClient>()
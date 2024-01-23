import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function transactionsRoutes(app: FastifyInstance) {
    app.addHook('preHandler', async (request) => {
        await request.jwtVerify()
    }) 

    // Listagem de transações
    app.get('/transactions', async (request) => {
        const transactions = await prisma.transaction.findMany({
            where: {
                userId: request.user.sub,
            },
            orderBy: {
                createdAt: 'desc',
            },
        })

        return transactions
    })

    // Detalhe de uma transação
    app.get('/transactions/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

    const { id } = paramsSchema.parse(request.params)

    const transaction = await prisma.transaction.findUniqueOrThrow({
        where: {
          id,
        },
      })
  
      if(transaction.userId !== request.user.sub) {
        return reply.status(401).send()
      }

      return transaction
    })

    // Criação de transação
    app.post('/transactions', async (request) => {
        const bodySchema = z.object({
            description: z.string(),
            price: z.coerce.number(),
            category: z.string(),
            type: z.string(),
        })
  
        const { description, price, category, type } = bodySchema.parse(request.body)

        const transaction = await prisma.transaction.create({
            data: {
                description,
                price,
                category,
                type,
                userId: request.user.sub,
            },
        })

        console.log(request.body)

        return transaction
    })
   
    // Atualizar transação
    app.put('/transactions/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = paramsSchema.parse(request.params)

        const bodySchema = z.object({
            description: z.string(),
            price: z.number(),
            category: z.string(),
            type: z.string(),
        })

        const { description, price, category, type  } = bodySchema.parse(request.body)

        let transaction = await prisma.transaction.findUniqueOrThrow({
            where: {
                id,
            }
        })

        if (transaction.userId !== request.user.sub) {
            return reply.status(401).send
        }

        transaction = await prisma.transaction.update({
            where: {
                id,
            },
            data: {
                description,
                price,
                category,
                type,
            },
        })

        return transaction
    })

    // Apagar uma transação
    app.delete('/transactions/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string().uuid(),
        })

    const { id } = paramsSchema.parse(request.params)

    const transaction = await prisma.transaction.findUniqueOrThrow({
        where: {
            id,
        }
    })

    if (transaction.userId !== request.user.sub) {
        return reply.status(401).send
    }

        await prisma.transaction.delete({
            where: {
                id,
            },
        })
    })
}
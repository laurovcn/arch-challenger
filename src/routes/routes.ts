import express, { Request, Response } from "express";

const app = express()

export const router = express.Router()

app.use(express.json())

router.get('/', async (request: Request, response: Response) => {
  response.json('Welcome to arch System Project')
})



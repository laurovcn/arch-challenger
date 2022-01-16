import express, { Request, Response } from "express";
import { notesRouter } from './notes/notes.routes';
import { studentsRouter } from './students/students.routes';

const app = express()

export const router = express.Router()

app.use(express.json())

router.get('/', async (request: Request, response: Response) => {
  response.json('Welcome to arch Project')
})

router.use('/students', studentsRouter)
router.use('/notes', notesRouter)

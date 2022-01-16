import express from 'express'
import * as notesController from '../../controller/notes/notes.controller'

export const notesRouter = express.Router()

notesRouter.use(express.json())

notesRouter.get('/:id', notesController.findOne)



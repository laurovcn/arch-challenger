import express from 'express'
import * as studentsController from '../../controller/students/students.controller'

export const studentsRouter = express.Router()

studentsRouter.use(express.json())

studentsRouter.get('/', studentsController.findAll)

studentsRouter.put('/', studentsController.create)





import express from 'express'
import * as studentsController from '../../controller/students/students.controller'

export const studentsRoute = express.Router()

studentsRoute.use(express.json())

studentsRoute.get('/', studentsController.findAll)

studentsRoute.put('/', studentsController.create)

studentsRoute.get('/:id', studentsController.findOne)



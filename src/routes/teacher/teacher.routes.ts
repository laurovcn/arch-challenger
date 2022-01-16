import express from 'express'
import * as teacherController from '../../controller/teacher/teacher.controller'

export const techerRoute = express.Router()

techerRoute.use(express.json())

techerRoute.get('/', teacherController.findAll)

techerRoute.post('/', teacherController.create)

techerRoute.put('/:id', teacherController.update)


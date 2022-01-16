import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log';
import TeacherInterface from '../../interfaces/teacher/teacher.interface';
import { logService } from '../../service/log.service';

  const prisma = new PrismaClient()

  export const findAll = async (request: Request, response: Response) => {

    try {

      const currentPage: any = request.query.page || 1;
      const take: any = request.query.limit || 10;
      const skip = (currentPage - 1) * take;

      return response.json(await prisma.teachers.findMany(
        {
          skip,
          take
        }
      )) 

    } catch (error) {

      const data = {
        description: 'Cannot find teachers'
      } as LogInterface

      await logService(data)

      return error
    }
}

  export const create = async (request: Request, response: Response) => { 

    const data: TeacherInterface = request.body
    
    try {              

      return response.json(await prisma.teachers.create({
        data
      }))

    } catch (error) {  

      const data = {
        description: 'Cannot create teachers'
      } as LogInterface

      await logService(data)

      return error
  }  
}

  export const update = async (request: Request, response: Response) => {

    try {
        
        const id: string = request.params.id
        const data: TeacherInterface = request.body 
          
        return response.json(await prisma.teachers.update({
          where: {
            id: Number(id),
          },
          data,
        }))

    } catch (error) {

      const data = {
        description: 'Cannot update teachers'
      } as LogInterface

      await logService(data)

      return error
    }
}

 

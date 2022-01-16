import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log';
import StudentsInterface from '../../interfaces/students/students.interface';
import { logService } from '../../service/log.service';

  const prisma = new PrismaClient()

export const findAll = async (request: Request, response: Response) => {

    try {

      const currentPage: any = request.query.page || 1;
      const take: any = request.query.limit || 10;
      const skip = (currentPage - 1) * take;

      return response.json(await prisma.students.findMany(
        {
          skip,
          take,
          include: {
            notes: true
          }        
        }
      )) 

    } catch (error) {

      const data = {
        description: 'Cannot find at students'
      } as LogInterface

      await logService(data)

      return error
    }
}

export const create = async (request: Request, response: Response) => { 

    const data: StudentsInterface = request.body    
    
    try {      
      
      if (data.notes && data.notes.length !== 0) {

        await prisma.students.update({
          where: {
            name: data.name,
          },
          data
        })
        
        return response.json(data)
      }     

       await prisma.students.upsert({ 
        where:{ name: data.name},
        create: data,
        update: data       
     })       

      return response.json(data)

    } catch (error) {  

      const data = {
        description: 'Cannot create at students'
      } as LogInterface

      await logService(data)

      return error
  }  
}

export const findOne = async (request: Request, response: Response) => {

  try { 

    const id: string = request.params.id

    return response.json(await prisma.notes.findUnique(
      {
        where: {
          studentsId: Number(id) 
        }        
      }
    )) 

  } catch (error) {

    const data = {
      description: 'Cannot find at notes'
    } as LogInterface

    await logService(data)

    return error
  }
}
 

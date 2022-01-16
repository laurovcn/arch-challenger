import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log';
import { logService } from '../../service/log.service';

const prisma = new PrismaClient()

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
 

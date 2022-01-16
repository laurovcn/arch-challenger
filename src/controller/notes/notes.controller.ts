import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log';
import { logService } from '../../service/log.service';

const prisma = new PrismaClient()

export const findOne = async (request: Request, response: Response) => {

  try { 

    const id: string = request.params.id

    const notes = await prisma.notes.findUnique(
      {
        where: {
          studentsId: Number(id) 
        }        
      })       
    
      if (notes && notes !== null) {         
        const media: number = ((notes.n1 + notes.n2 + notes.n3 + notes.n4) / 4)        
        if (media < 4){ 
          return response.json({Message: 'Aluno reprovado!'})
        }
        if (media <= 4 || media < 6 ) {
          return response.json({Message: 'Aluno em recuperação!'})
        } 
          return response.json({Message: 'Aluno aprovado!'})
      }
        return response.json({Message: 'Aluno não cadastrado ou sem notas!'})

  } catch (error) {

    const data = {
      description: 'Cannot find at notes'
    } as LogInterface

    await logService(data)

    return response.json(error)
  }
}
 

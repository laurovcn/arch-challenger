import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import LogInterface from '../../interfaces/log/log';
import NotesInterface from '../../interfaces/notes/notes.interface';
import { logService } from '../../service/log.service';

const prisma = new PrismaClient()

export const findOne = async (request: Request, response: Response) => {

  try {     

    const id  = request.params.id
   
    const notes: NotesInterface = await prisma.$queryRaw`SELECT * FROM "public"."Notes" WHERE "studentsId" = ${Number(id)}`
  
    if (notes.result && notes.result.length > 0) {         
      const media: number = ((notes.result[0].n1 + notes.result[0].n2 + notes.result[0].n3 + notes.result[0].n4) / 4)        
      if (media < 4){ 
        return response.json({Message: `Aluno reprovado! Média: ${media}`})
      }
      if (media <= 4 || media < 6 ) {
        return response.json({Message: `Aluno em recuperação! Média: ${media}`})
      }       
        return response.json({Message: `Aluno aprovado! Média: ${media}`})        
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
 

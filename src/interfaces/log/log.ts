import { ObjectId } from "mongodb";

export default interface LogInterface {
  id: ObjectId,
  description: string, 
}
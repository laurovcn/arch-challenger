import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import LogInterface from '../interfaces/log/log';

export const collections: { arch?: mongoDB.Collection }  = {}  

export const logService = async (data: LogInterface ) => {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING || '');
          
  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME || '');
 
  const archCollection: mongoDB.Collection = db.collection(process.env.ARCH_COLLECTION_NAME || '');

  collections.arch = archCollection;
     
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${archCollection.collectionName}`);
  
  await collections.arch?.insertOne(data).then(async ()=> {
    return await client.close();
  })   

}
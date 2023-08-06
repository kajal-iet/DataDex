import mongoose from 'mongoose';

const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-kwbcmn9-shard-00-00.xfpa6o1.mongodb.net:27017,ac-kwbcmn9-shard-00-01.xfpa6o1.mongodb.net:27017,ac-kwbcmn9-shard-00-02.xfpa6o1.mongodb.net:27017/PROJECTCRUD?ssl=true&replicaSet=atlas-hwqhbn-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try{
     await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
      console.log('Database Connected');
    }catch(error){
        console.log('error while connecting the database',error);
    }


}
export default Connection;
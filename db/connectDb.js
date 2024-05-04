import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://hiyasoni5:CJoYtM4XFkdPEV2J@cluster0.kw0so5u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/getmeachai`, {
    
      useNewUrlParser: true,
    });
    console.log(`MongoDb Connected : ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;

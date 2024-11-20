import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    console.log(process.env.MONGO_URL);
    const db = "mongodb+srv://myAtlasDBUser:Hm2ZHN9mRNlgbQnL@myatlasclusteredu.wqe0anj.mongodb.net/";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}
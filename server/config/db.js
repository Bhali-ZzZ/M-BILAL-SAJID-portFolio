import mongoose from "mongoose";

const DB = "mongodb://bhalitech512:123@ac-7zpceiz-shard-00-00.30jxoah.mongodb.net:27017,ac-7zpceiz-shard-00-01.30jxoah.mongodb.net:27017,ac-7zpceiz-shard-00-02.30jxoah.mongodb.net:27017/reg_form?replicaSet=atlas-t4j9yy-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

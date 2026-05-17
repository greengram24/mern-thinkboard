import mongoose from "mongoose"
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MONGODB:", error);
        process.exit(1); // exit with failure
    }
}
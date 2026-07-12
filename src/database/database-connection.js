import mongoose from "mongoose"

export const databaseConnection = async () => {
    // DATABASE URL 
    const databaseUrl = process.env.DATABASE_URL;
    // DATABASE CONNECTION 
    try {
        await mongoose.connect(databaseUrl, {
            maxPoolSize: process.env.POOL_SIZE,
            serverSelectionTimeoutMS: process.env.SERVER_TIMEOUT
        })

        console.log("✅ DATABASE IS CONNECTED !")
    } catch (databaseError) {
        console.log("❌ DATABASE ERROR : ", databaseError)
        process.exit(1);
    }
}
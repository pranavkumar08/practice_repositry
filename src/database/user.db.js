import mongoose from "mongoose";
const connect_db = async()=>{
try {
    await mongoose.connect(process.env.MONGOOSE_URL)
    console.log("database is connected")
} catch (error) {
    console.log("database is not connected")
}
}

export default connect_db;
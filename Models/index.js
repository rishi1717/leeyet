import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export default mongoose.connect(process.env.DB_URI, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log("Connected to DataBase")
        process.exit(1)
	}
})

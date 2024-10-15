import express from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import noteRoute from './note/noteRoute'
import cors from'cors'
import envConfig from './config/config'

const app = express() 
//parsing
app.use(express.json())
//cors configure
app.use(cors({
    origin:envConfig.frontendUrl
}))

app.use("/api/notes",noteRoute)
//img public
app.use(express.static("./src/uploads/"))
//error handler
app.use(globalErrorHandler)
export default app


import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { getVehiclesBySteamId } from "./services/vehicles"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.get("/vehicles/:steamId", async (req, res) => {
  const steamId = req.params.steamId
  try {
    const vehicles = await getVehiclesBySteamId(steamId)
    res.json(vehicles)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar veículos." })
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`🚗 Backend rodando na porta ${PORT}`)
})

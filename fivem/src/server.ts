
import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "senha",
  database: "metropole_garage"
})

RegisterCommand("car", async (source: number, args: string[]) => {
  const src = source
  const plate = args[0]
  if (!plate) {
    emitNet("chat:addMessage", src, {
      args: ["Sistema", "Uso correto: /car [placa]"]
    })
    return
  }

  const [rows] = await pool.query("SELECT * FROM vehicles WHERE plate = ?", [plate])
  const vehicle = (rows as any[])[0]
  if (!vehicle) {
    emitNet("chat:addMessage", src, {
      args: ["Sistema", `Veículo com placa ${plate} não encontrado.`]
    })
    return
  }

  const player = GetPlayerPed(src.toString())
  const pos = GetEntityCoords(player, false)
  const veh = CreateVehicle(GetHashKey(vehicle.model), pos[0], pos[1], pos[2], 0.0, true, false)

  SetVehicleNumberPlateText(veh, vehicle.plate)
  SetVehicleColours(veh, vehicle.color1 || 0, vehicle.color2 || 0)
  SetPedIntoVehicle(player, veh, -1)

  emitNet("chat:addMessage", src, {
    args: ["Sistema", `Veículo ${vehicle.model} spawnado com placa ${vehicle.plate}.`]
  })
}, true)

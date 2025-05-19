
import { pool } from "../db"

export async function getVehiclesBySteamId(steamId: string) {
  const [rows] = await pool.query("SELECT * FROM vehicles WHERE owner = ?", [steamId])
  return rows
}

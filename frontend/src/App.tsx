
import { useState } from "react"

const vehicles = [
  { plate: "ABC1234", model: "Sultan RS", color: "Verde", customization: "Spoiler esportivo" },
  { plate: "XYZ9876", model: "Elegy RH8", color: "Preto", customization: "Turbo, Rodas 22" }
]

export default function App() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-4xl font-bold">Garagem Metrópole</h1>
      <div className="grid gap-4">
        {vehicles.map(vehicle => (
          <div
            key={vehicle.plate}
            className={`border p-4 rounded-xl bg-zinc-900 cursor-pointer ${selected === vehicle.plate ? "ring-2 ring-primary" : ""}`}
            onClick={() => setSelected(vehicle.plate)}
          >
            <p><strong>Modelo:</strong> {vehicle.model}</p>
            <p><strong>Cor:</strong> {vehicle.color}</p>
            <p><strong>Customização:</strong> {vehicle.customization}</p>
          </div>
        ))}
      </div>
      {selected && (
        <button className="mt-4 px-6 py-2 bg-primary text-black font-bold rounded-xl">
          Spawnar Veículo
        </button>
      )}
    </main>
  )
}

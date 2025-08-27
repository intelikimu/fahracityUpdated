"use client"

export default function HeroHexagonBackground() {
  // 🔹 Generate hexagon positions
  const rows = 23
  const cols = 47
  const hexSize = 40
  const hexHeight = Math.sqrt(3) * hexSize / 2

  const hexagons = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexSize * 0.9
      const y = row * hexHeight
      if (col % 2 === 1) {
        hexagons.push({ x, y: y + hexHeight / 2 })
      } else {
        hexagons.push({ x, y })
      }
    }
  }

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden w-full h-[100vh]"
      style={{
        background: "radial-gradient(circle at center, #0f0f0f 0%, #000 100%)",
      }}
    >
      <svg width="100%" height="100vh">
        {hexagons.map((pos, i) => (
          <polygon
            key={i}
            className="hexagon"
            points="25,0 50,12 50,32 25,44 0,32 0,12"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="0.6"
            transform={`translate(${pos.x}, ${pos.y})`}
          />
        ))}
      </svg>
    </div>
  )
}

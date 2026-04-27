interface Allocation {
  label: string
  pct: number
  color: string
}

interface DonutChartProps {
  allocations: Allocation[]
}

export const DonutChart = ({ allocations }: DonutChartProps) => {
  const size = 200
  const center = size / 2
  const radius = 80
  const circumference = 2 * Math.PI * radius

  let currentOffset = 0

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {allocations.map((item, index) => {
          const strokeDasharray = `${(item.pct / 100) * circumference} ${circumference}`
          const strokeDashoffset = -currentOffset
          currentOffset += (item.pct / 100) * circumference

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth="20"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-display font-extrabold text-white">100%</span>
        <span className="text-[10px] uppercase tracking-widest text-muted">Total Supply</span>
      </div>
    </div>
  )
}

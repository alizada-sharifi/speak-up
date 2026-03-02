import { Star } from "lucide-react";

type Props = {
  value: number;
};

function RatingCircle({ value }: Props) {
  const max = 10;
  const size = 40;
  const stroke = 3;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(value, max);
  const percentage = progress / max;
  const strokeDashoffset = circumference - percentage * circumference;

  const rotation = percentage * 360;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* ================== the colorize section ========== */}
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {/* =============== hole background ============= */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray="3 4"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* ================ gradient progress section =========== */}
        <circle
          stroke={"url(#progressGradient)"}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-500"
        />
      </svg>

      {/* ================= star section ============= */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          style={{
            transform: `translateY(-${radius}px) rotate(90deg)`,
          }}
        >
          <Star size={18} className="text-secondary-200" fill="currentColor" />
        </div>
      </div>

      {/* ==================== value section ============= */}
      <p className="absolute text-lg font-semibold">{value}</p>
    </div>
  );
}

export default RatingCircle;

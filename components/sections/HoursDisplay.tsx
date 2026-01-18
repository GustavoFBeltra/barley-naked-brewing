interface HoursDisplayProps {
  variant?: "full" | "compact";
  className?: string;
}

const hours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "4pm - 9pm" },
  { day: "Friday", hours: "2pm - 10pm" },
  { day: "Saturday", hours: "12pm - 10pm" },
  { day: "Sunday", hours: "12pm - 7pm" },
];

export default function HoursDisplay({ variant = "full", className = "" }: HoursDisplayProps) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  if (variant === "compact") {
    return (
      <div className={`space-y-1 ${className}`}>
        {hours
          .filter((h) => h.hours !== "Closed")
          .map((item) => (
            <div
              key={item.day}
              className={`flex justify-between text-sm ${
                item.day === today ? "text-gold font-semibold" : "text-cream/70"
              }`}
            >
              <span>{item.day.slice(0, 3)}</span>
              <span>{item.hours}</span>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {hours.map((item) => (
        <div
          key={item.day}
          className={`flex justify-between py-2 border-b border-gold/10 last:border-0 ${
            item.day === today ? "text-gold" : "text-cream/70"
          }`}
        >
          <span className={item.day === today ? "font-semibold" : ""}>
            {item.day}
            {item.day === today && (
              <span className="ml-2 text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">
                Today
              </span>
            )}
          </span>
          <span className={item.hours === "Closed" ? "text-cream/40" : ""}>
            {item.hours}
          </span>
        </div>
      ))}
    </div>
  );
}

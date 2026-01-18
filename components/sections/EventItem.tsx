import type { EventItem as EventItemType } from "@/lib/events";

interface EventItemProps {
  event: EventItemType;
}

export default function EventItem({ event }: EventItemProps) {
  const isMusic = event.type === "music";

  return (
    <div className="flex items-start gap-4 p-4 bg-dark-brown/50 rounded-lg border border-gold/10 hover:border-gold/30 transition-colors">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
          isMusic ? "bg-purple-900/50" : "bg-orange-900/50"
        }`}
      >
        {isMusic ? (
          <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-gold font-semibold">{event.name}</h4>
        {event.description && (
          <p className="text-cream/70 text-sm mt-1">{event.description}</p>
        )}
        {event.time && (
          <p className="text-amber text-sm mt-2">
            <svg
              className="w-4 h-4 inline mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {event.time}
          </p>
        )}
      </div>
    </div>
  );
}

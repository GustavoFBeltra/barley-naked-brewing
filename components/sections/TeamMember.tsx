import Card from "@/components/ui/Card";
import type { TeamMember as TeamMemberType } from "@/lib/team";

interface TeamMemberProps {
  member: TeamMemberType;
  size?: "normal" | "large";
}

export default function TeamMember({ member, size = "normal" }: TeamMemberProps) {
  const isVIP = member.category === "vip";

  return (
    <Card className={`text-center ${size === "large" ? "p-8" : "p-6"}`}>
      {/* Avatar Placeholder */}
      <div
        className={`mx-auto rounded-full bg-warm-brown border-2 border-gold/30 flex items-center justify-center mb-4 ${
          size === "large" ? "w-32 h-32" : "w-24 h-24"
        }`}
      >
        {isVIP ? (
          <svg
            className={`text-gold ${size === "large" ? "w-16 h-16" : "w-12 h-12"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        ) : (
          <span className={`text-gold font-heading ${size === "large" ? "text-4xl" : "text-2xl"}`}>
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      <h3 className={`text-gold font-heading ${size === "large" ? "text-2xl" : "text-xl"}`}>
        {member.name}
      </h3>
      <p className="text-amber text-sm mt-1">{member.role}</p>
      <p className={`text-cream/70 mt-4 ${size === "large" ? "text-base" : "text-sm"}`}>
        {member.bio}
      </p>
    </Card>
  );
}

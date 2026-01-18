"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import type { TeamMember as TeamMemberType } from "@/lib/team";

interface TeamMemberProps {
  member: TeamMemberType;
  size?: "normal" | "large" | "small";
}

export default function TeamMember({ member, size = "normal" }: TeamMemberProps) {
  const sizeClasses = {
    small: {
      card: "p-4",
      image: "w-32 h-32",
      name: "text-lg",
      bio: "text-sm",
    },
    normal: {
      card: "p-6",
      image: "w-40 h-40",
      name: "text-xl",
      bio: "text-sm",
    },
    large: {
      card: "p-8",
      image: "w-48 h-48",
      name: "text-2xl",
      bio: "text-base",
    },
  };

  const classes = sizeClasses[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`text-center ${classes.card} h-full`}>
        {/* Profile Image */}
        <motion.div
          className={`mx-auto rounded-full overflow-hidden border-2 border-gold/30 mb-4 ${classes.image} relative`}
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 200, 43, 0.6)" }}
          transition={{ duration: 0.3 }}
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 192px"
            />
          ) : (
            <div className="w-full h-full bg-warm-brown flex items-center justify-center">
              <span className={`text-gold font-heading ${size === "large" ? "text-4xl" : "text-2xl"}`}>
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>

        <h3 className={`text-gold font-heading ${classes.name}`}>
          {member.name}
        </h3>
        <p className="text-amber text-sm mt-1">{member.role}</p>
        {member.bio && (
          <p className={`text-cream/70 mt-4 ${classes.bio}`}>
            {member.bio}
          </p>
        )}
      </Card>
    </motion.div>
  );
}

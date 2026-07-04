import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-4
      py-1
      text-sm
      text-cyan-300
    "
    >
      {children}
    </span>
  );
}
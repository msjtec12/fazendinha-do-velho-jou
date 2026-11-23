"use client";

import React from "react";
import { useBooking } from "./booking-context";
import { ExperienceType } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface BookingTriggerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  experience?: ExperienceType;
  variant?: "primary" | "terracotta" | "outline" | "light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function BookingTriggerButton({
  experience,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BookingTriggerButtonProps) {
  const { openBookingModal } = useBooking();

  const variantClasses = {
    primary:
      "bg-[#315B3D] text-[#F7F0E3] hover:bg-[#24452D] border border-transparent shadow-xs",
    terracotta:
      "bg-[#C47A45] text-[#FBF8F1] hover:bg-[#A6602E] border border-transparent shadow-xs",
    outline:
      "bg-transparent text-[#303A2C] border border-[#303A2C]/25 hover:border-[#315B3D] hover:bg-[#315B3D]/6",
    light:
      "bg-[#F7F0E3] text-[#303A2C] hover:bg-[#EFE6D5] border border-transparent shadow-sm",
  }[variant];

  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base",
  }[size];

  return (
    <button
      type="button"
      onClick={() => openBookingModal(experience)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all cursor-pointer",
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

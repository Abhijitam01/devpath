// Utility functions
// Contains helper functions used throughout the application
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str
  return str.slice(0, length) + "..."
}


import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlaceholderImageURL(imageURL: string): string {
  return `/_next/image?url=${encodeURIComponent(imageURL)}&q=1&w=64`;
}

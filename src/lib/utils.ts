import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Scheme } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function truncate(str: string, length: number): string {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateBenefitTotal(schemes: Scheme[]): number {
  return schemes.reduce((total, scheme) => {
    const match = scheme.benefitAmount.match(/\d+(?:,\d+)*(?:\.\d+)?/);
    if (match) {
      const amount = parseFloat(match[0].replace(/,/g, ""));
      return total + (isNaN(amount) ? 0 : amount);
    }
    return total;
  }, 0);
}

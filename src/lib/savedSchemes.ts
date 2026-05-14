import type { Scheme } from "@/types";

const KEY = "schemebot_saved_schemes";

export function getSavedSchemes(): Scheme[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Scheme[]) : [];
  } catch {
    return [];
  }
}

export function saveScheme(scheme: Scheme): void {
  const current = getSavedSchemes();
  if (current.some((s) => s.id === scheme.id)) return;
  localStorage.setItem(KEY, JSON.stringify([...current, scheme]));
  window.dispatchEvent(new Event("savedSchemesUpdated"));
}

export function unsaveScheme(id: string): void {
  const current = getSavedSchemes();
  localStorage.setItem(KEY, JSON.stringify(current.filter((s) => s.id !== id)));
  window.dispatchEvent(new Event("savedSchemesUpdated"));
}

export function isSchemesSaved(id: string): boolean {
  return getSavedSchemes().some((s) => s.id === id);
}

export function clearAllSaved(): void {
  localStorage.setItem(KEY, JSON.stringify([]));
  window.dispatchEvent(new Event("savedSchemesUpdated"));
}

export function getDeadlineSoonSaved(days: number): Scheme[] {
  const schemes = getSavedSchemes();
  const now = new Date();
  const targetDate = new Date();
  targetDate.setDate(now.getDate() + days);

  return schemes.filter(s => {
    if (!s.deadline) return false;
    const d = new Date(s.deadline);
    if (isNaN(d.getTime())) return false;
    return d >= now && d <= targetDate;
  }).sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime());
}

export function exportSavedAsPDF(): void {
  if (typeof window !== "undefined") {
    window.print();
  }
}
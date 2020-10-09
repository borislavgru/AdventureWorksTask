export const toISODate = (date: Date): string | undefined => {
  if (!date) return date;

  return date.toISOString().slice(0, 10); // NOTE: Use proper date formatting pattern by some Date manipulation lib
};

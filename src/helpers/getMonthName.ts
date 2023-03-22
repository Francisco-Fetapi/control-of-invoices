export function getMonthName(date: Date) {
  const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );
  return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

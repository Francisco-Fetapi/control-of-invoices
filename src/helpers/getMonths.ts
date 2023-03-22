export function getMonths() {
  const months = [];
  for (let month = 0; month < 12; month++) {
    const testDate = new Date(Date.UTC(2000, month, 1, 0, 0, 0));
    let monthName = testDate.toLocaleString("pt-BR", { month: "long" });
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    months.push(monthName);
  }
  return months;
}

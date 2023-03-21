export default function getMonth(date: Date) {
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month}`;
}

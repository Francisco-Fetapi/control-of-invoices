export function formatMoney(value: string) {
  const number = Number(value.replace(/[^0-9.-]+/g, ""));
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(number);
}

export type CNPJ =
  | "MEI"
  | "EI"
  | "LTDA"
  | "SLU"
  | "Sociedade Simples"
  | "Sociedade Anônima";

export interface User {
  name: string;
  corporationName: string;
  cnpj: CNPJ;
  email: string;
  password: string;
  phoneNumber: string;
}

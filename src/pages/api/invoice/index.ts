import { NextApiRequest, NextApiResponse } from "next";
import getInvoices, { InvoiceDoc } from "services/getInvoices";

export interface GetInvoicesApiResponse {
  invoices: InvoiceDoc[];
}

async function getInvoicesApi(req: NextApiRequest, res: NextApiResponse) {
  try {
    const uid = req.headers.uid as string;
    const invoices = await getInvoices(uid);
    res.status(200).send({ invoices });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default getInvoicesApi;

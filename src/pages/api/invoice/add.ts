import { Invoice } from "entities/Invoice";
import { NextApiRequest, NextApiResponse } from "next";
import { createInvoice } from "services/createInvoice";

interface Request {
  invoice: Invoice;
}

export interface AddInvoiceApiResponse {
  msg: string;
  created: boolean;
}

async function addInvoice(req: NextApiRequest, res: NextApiResponse) {
  const { body, headers } = req;
  const { invoice } = <Request>body;
  const uid = headers.uid as string;

  try {
    await createInvoice(uid, invoice);

    res.status(200).send({ created: true, msg: "Invoice created." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
  }
}

export default addInvoice;

import { Invoice } from "entities/Invoice";
import { NextApiRequest, NextApiResponse } from "next";
import { updateInvoice } from "services/updateInvoice";

interface Request {
  invoice: Invoice & { id: string };
}

export interface EditInvoiceApiResponse {
  msg: string;
  updated: boolean;
}

async function EditInvoice(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { invoice } = <Request>body;

  try {
    const updated = await updateInvoice(invoice);

    res.status(200).send({ updated, msg: "Invoice updated." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default EditInvoice;

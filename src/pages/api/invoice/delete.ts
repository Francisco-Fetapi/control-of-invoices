import { NextApiRequest, NextApiResponse } from "next";
import { deleteInvoices } from "services/deleteInvoices";

interface Request {
  documents: { id: string }[];
}

export interface DeleteInvoiceApiResponse {
  msg: string;
  deleted: boolean;
}

async function DeleteInvoice(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { documents } = <Request>body;

  try {
    const deleted = await deleteInvoices(documents);

    res.status(200).send({ deleted, msg: "Documents deleted." });
  } catch (e: any) {
    res.status(200).send({ msg: e.message });
    console.log(e.message);
  }
}

export default DeleteInvoice;

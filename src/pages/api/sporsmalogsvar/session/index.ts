import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export const post = <ResponseData>(
  url: string,
  data: Record<string, any>,
): Promise<ResponseData> => {
  return axios
    .post(url, data, {
      headers: {
        "content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
        throw new Error(error.message, error.code);
    });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const url = "sporsmalogsvar.dev.intern.nav.no/api/v1/session"
  post(url, req.body).then((response) => res.status(200))
}


import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export const get = <ResponseData>(
  url: string,
): Promise<ResponseData> => {
  return axios
    .get(url, {
      headers: {
        "content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error.message, error.code);
      throw new Error(error.message, error.code);
    });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("Trying to get sporsmal");
  const url = "https://sporsmalogsvar.dev.intern.nav.no/api/v1/sporsmal"
  get(url).then((response) => res.status(200))
}


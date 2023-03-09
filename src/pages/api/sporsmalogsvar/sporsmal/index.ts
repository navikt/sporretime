import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("Trying to get sporsmal");
  const url = "https://sporsmalogsvar.dev.intern.nav.no/api/v1/sporsmal"

  await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .catch((error) => {
      console.log("Got error! :(", error);
    });

  res.status(200);
}


import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const primisc = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_API_TOKEN,
  });

  return primisc;
}

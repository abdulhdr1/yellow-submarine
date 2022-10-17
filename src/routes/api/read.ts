import { json } from "solid-start";
import { request } from "~/services/cms";

export async function GET() {
  const query = `
    {
      allReads {
        title
        author
        platform
        link
      }
    }
  `;
  const {
    data: { data },
  } = await request(query);
  console.log(data);
  return json(data);
}

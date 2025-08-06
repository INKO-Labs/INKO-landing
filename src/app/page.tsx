import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Root() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  console.log(acceptLanguage);

  const isKorean = acceptLanguage.toLowerCase().startsWith("ko");

  redirect(isKorean ? "/ko" : "/en");
}

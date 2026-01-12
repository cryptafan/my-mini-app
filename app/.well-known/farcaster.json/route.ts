// app/.well-known/farcaster.json/route.ts
import { minikitConfig } from "../../../minikit.config";

export async function GET() {
  return Response.json(minikitConfig);
}

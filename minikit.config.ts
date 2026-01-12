// minikit.config.ts
const ROOT_URL = "https://my-mini-app-rose.vercel.app";

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjMxMTc5NiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDgwOTNkMjVDZjJlQmE1MWYyNTFDNDZmZjRCQjE4MDc2QTM1ZjNDMjcifQ",
    payload: "eyJkb21haW4iOiJteS1taW5pLWFwcC1yb3NlLnZlcmNlbC5hcHAifQ",
    signature: "ER3zH8pU2cyjBPDaKpZs3KBM8HxL/NXbLIyIhTu9R7hdoX/3iO89XEtQRtitJMNq6JDmHc2MHr3XcjhG0wTD3hs=",
  },
  miniapp: {
    version: "1",
    name: "Ai Guitarist Mini",
    subtitle: "Simple demo application",
    description: "Minimalist demo mini-app from Ai Guitarist project for Base Mini Apps",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["music", "demo", "ai"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Rock n roll is alive",
    ogTitle: "Ai Guitarist Mini",
    ogDescription: "Demo mini-app on Base from Ai Guitarist project",
    ogImageUrl: `${ROOT_URL}/og.png`,
  },
} as const;

// minikit.config.ts
const ROOT_URL = "https://my-mini-app-rose.vercel.app";

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjQ1ODA4LCJ0eXBlIjoiY3VzdG9keSIsImtleSI6IjB4NzYwQjA0NDc5NjM4MTExNzNmRjg3YDPBYzA5OEJBQ0YxNzNCYkU0OCJ9",
    payload: "eyJkb21haW4iOiJteS1taW5pLWFwcC1yb3NlLnZlcmNlbC5hcHAifQ==",
    signature: "MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  miniapp: {
    version: "1",
    name: "Ай, гитарист! Mini",
    subtitle: "Простое демо-приложение",
    description: "Минималистичное демо-миниприложение проекта «Ай, гитарист!» для Base Mini Apps.",
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["music", "demo", "ai"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Рок-н-ролл жив!",
    ogTitle: "Ай, гитарист! Mini",
    ogDescription: "Демо-миниапп на Base от проекта «Ай, гитарист!»",
    ogImageUrl: `${ROOT_URL}/og.png`,
  },
} as const;

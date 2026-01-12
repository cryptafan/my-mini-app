"use client";  // добавь ЭТУ строку первой

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        Ай, гитарист! mini app
      </h1>
      <p style={{ fontSize: "16px", opacity: 0.8, marginBottom: "24px" }}>
        Простое демо‑приложение для Base Mini Apps.
      </p>
      <button
        onClick={() => alert("Рок-н-ролл жив!")}
        style={{
          padding: "12px 20px",
          borderRadius: "999px",
          border: "none",
          background:
            "linear-gradient(135deg, #3b82f6 0%, #22c55e 50%, #eab308 100%)",
          color: "#000",
          fontWeight: 600,
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Сыграть рифф
      </button>
    </main>
  );
}

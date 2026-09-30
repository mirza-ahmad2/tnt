export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load — TTN Talent</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <link rel="icon" href="/favicon-32.png" type="image/png" />
    <style>
      :root { color-scheme: dark; }
      body {
        font: 15px/1.5 "DM Sans", system-ui, -apple-system, sans-serif;
        background: #111214;
        color: #F6F6F5;
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        padding: 1.5rem;
      }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-family: "Space Grotesk", system-ui, sans-serif; font-size: 1.25rem; margin: 0 0 0.5rem; letter-spacing: -0.02em; }
      p { color: #b4b5b8; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button {
        padding: 0.75rem 1.25rem;
        font: inherit;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid transparent;
        transition: transform 180ms ease, opacity 180ms ease;
      }
      a:hover, button:hover { transform: translateY(-1px); }
      .primary { background: #2E6FF2; color: #F6F6F5; }
      .secondary { background: transparent; color: #F6F6F5; border-color: rgba(246,246,245,0.16); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" type="button" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}

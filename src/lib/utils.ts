export function absoluteUrl(path = "") { const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"; return `${base}${path.startsWith("/") ? path : `/${path}`}`; }

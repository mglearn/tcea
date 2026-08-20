
const ARDENT_AUTH_KEY = "ardent_access";
const EXPECTED_HASH = "cb5e87e62f4a975bd91ff2d5008633052126fecbd5aacb32f87ee8fee241ecbf";
async function digest(value) {
  const bytes = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2,"0")).join("");
}
function requireAccess() {
  if (sessionStorage.getItem(ARDENT_AUTH_KEY) !== "granted") {
    const current = location.pathname.split("/").pop() || "index.html";
    location.replace((current === "access.html" ? "" : "../".repeat(current.includes("/") ? 1 : 0)) + "access.html");
  }
}

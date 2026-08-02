import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"

const port = Number.parseInt(process.env.PORT || "8443", 10)
const healthUrl = `http://127.0.0.1:${port}/@vite/client`

async function hasHealthyViteServer() {
  try {
    const response = await fetch(healthUrl, {
      signal: AbortSignal.timeout(1500),
    })

    if (!response.ok) return false
    const source = await response.text()
    return source.includes("vite") && source.includes("createHotContext")
  } catch {
    return false
  }
}

if (await hasHealthyViteServer()) {
  console.log(`\n✓ Vite is already running at http://localhost:${port}/`)
  console.log("  Reusing the active development server.\n")
  process.exit(0)
}

const viteBin = fileURLToPath(
  new URL("../node_modules/vite/bin/vite.js", import.meta.url),
)
const child = spawn(process.execPath, [viteBin, "--host", "0.0.0.0"], {
  stdio: "inherit",
  env: process.env,
})

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal))
}

child.on("exit", (code) => process.exit(code ?? 0))

const express = require("express");

const app = express();
const PORT = 3000;
const VERSION = "1.0.0";

app.get("/", (_req, res) => {
  res.json({
    app: "bp-nonroot",
    version: VERSION,
    user: process.env.USER || "unknown",
    uid: process.getuid ? process.getuid() : "N/A",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    version: VERSION,
  });
});

app.listen(PORT, () => {
  const username = process.env.USER || "unknown";
  const uid = process.getuid ? process.getuid() : "N/A";
  console.log(`Server running on port ${PORT} as user: ${username} (UID: ${uid})`);
});

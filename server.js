const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://example.com", // Change this dynamically
    changeOrigin: true,
    pathRewrite: {
      "^/proxy/": "/", // Rewrite URL to remove /proxy prefix
    },
  })
);

app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
});

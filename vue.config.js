const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
let historyApiFallback = require("connect-history-api-fallback");
let httpProxy = require("http-proxy");
let apiProxy = httpProxy.createProxyServer({
  target: {
    protocol: "https:",
    host: "next.zarinpal.com",
    port: 443,
  },
  changeOrigin: true,
  secure: false,
  cookieDomainRewrite: "",
  onProxyRes: function(proxyRes, req, res) {
    res["set-cookie"] = proxyRes.headers["set-cookie"].map((sc) => {
      return sc
        .split("; ")
        .filter((v) => {
          console.log("res['set-cookie']", res["set-cookie"]);

          return v !== "secure";
        })
        .join("; ");
    });

    console.log("res['set-cookie']", res["set-cookie"]);
  },
});
module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
  configureWebpack: {
    plugins: [
      new BrowserSyncPlugin(
        {
          host: "localhost",
          port: 3000,
          proxy: {
            target: "http://localhost:8080/",
            middleware: [
              function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                if (req.url.indexOf("api") !== -1) {
                  apiProxy.web(req, res, () => {});
                } else {
                  next();
                }
              },
              historyApiFallback(),
            ],
          },
        },
        {
          reload: false,
        }
      ),
    ],
  },
};

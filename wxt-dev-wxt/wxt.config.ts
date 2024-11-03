import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    manifest_version: 3,
    permissions: ["tabs", "scripting"],
    host_permissions: ["https://twitter.com/*"],
    content_scripts: [
      {
        matches: ["https://twitter.com/home"],
        js: ["contentScript.js"]
      }
    ]
  }
});

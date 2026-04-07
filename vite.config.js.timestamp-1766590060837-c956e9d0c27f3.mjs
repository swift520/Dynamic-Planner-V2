// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import mdx from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/@mdx-js/rollup/index.js";
import remarkMath from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/remark-math/index.js";
import rehypeKatex from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/rehype-katex/index.js";
import remarkGfm from "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/node_modules/remark-gfm/index.js";
var __vite_injected_original_import_meta_url = "file:///E:/18734/Documents/%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%A3%AB/%E8%AE%BA%E6%96%87/%E9%81%BF%E9%9A%9C-%E9%9B%B7%E8%BE%BE/Dynamic-Planner-V2/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: "vue",
      remarkPlugins: [
        remarkMath,
        remarkGfm
      ],
      rehypePlugins: [
        rehypeKatex
      ]
    })
  ],
  base: "/Dynamic-Planner-V2/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFwxODczNFxcXFxEb2N1bWVudHNcXFxcXHU1MzE3XHU1OTI3XHU1MzVBXHU1OEVCXFxcXFx1OEJCQVx1NjU4N1xcXFxcdTkwN0ZcdTk2OUMtXHU5NkY3XHU4RkJFXFxcXER5bmFtaWMtUGxhbm5lci1WMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcMTg3MzRcXFxcRG9jdW1lbnRzXFxcXFx1NTMxN1x1NTkyN1x1NTM1QVx1NThFQlxcXFxcdThCQkFcdTY1ODdcXFxcXHU5MDdGXHU5NjlDLVx1OTZGN1x1OEZCRVxcXFxEeW5hbWljLVBsYW5uZXItVjJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LzE4NzM0L0RvY3VtZW50cy8lRTUlOEMlOTclRTUlQTQlQTclRTUlOEQlOUElRTUlQTMlQUIvJUU4JUFFJUJBJUU2JTk2JTg3LyVFOSU4MSVCRiVFOSU5QSU5Qy0lRTklOUIlQjclRTglQkUlQkUvRHluYW1pYy1QbGFubmVyLVYyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCdcbmltcG9ydCByZW1hcmtNYXRoIGZyb20gJ3JlbWFyay1tYXRoJztcbmltcG9ydCByZWh5cGVLYXRleCBmcm9tICdyZWh5cGUta2F0ZXgnO1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBtZHgoe1xuICAgICAganN4SW1wb3J0U291cmNlOiAndnVlJyxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtcbiAgICAgICAgcmVtYXJrTWF0aCxcbiAgICAgICAgcmVtYXJrR2ZtLFxuICAgICAgXSxcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtcbiAgICAgICAgcmVoeXBlS2F0ZXgsXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBiYXNlOicvRHluYW1pYy1QbGFubmVyJyxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlhLFNBQVMsZUFBZSxXQUFXO0FBRTVjLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUVoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBUnFNLElBQU0sMkNBQTJDO0FBVzVRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE1BQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

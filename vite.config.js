import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 📱 로컬 네트워크(휴대폰 등) 접속 허용 설정 추가
  server: {
    host: true, // 또는 "0.0.0.0"
    port: 5173, // 사용할 포트 번호 (선택사항)
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/variables" as *;`,
      },
    },
  },
});

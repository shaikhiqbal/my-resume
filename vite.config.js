/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path"; // Correct import statement

const aliases = {
  "@profile": path.resolve(__dirname, "src/config/profileConfig.js"),
  "@Button": path.resolve(__dirname, "src/@core/components/Button"),
  "@Icon": path.resolve(__dirname, "src/@core/images/icons"),
  "@ProfileSidebar": path.resolve(__dirname, "src/@core/components/profile-sidebar/ProfileSide"),
  "@SkillSidebar": path.resolve(__dirname, "src/@core/components/skill-sidebar/SkillSidebar"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});

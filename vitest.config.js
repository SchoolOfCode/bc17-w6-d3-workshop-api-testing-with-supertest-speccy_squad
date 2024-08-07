import { defineConfig } from "vitest/config"; //importing the instructions

//creating the set up plan
export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"], //set up files with secret info
  },
});

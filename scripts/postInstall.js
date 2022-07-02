/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 *
 */

const { exec } = require("child_process");

function runPostInstall() {
  const currentDir = process.cwd();
  if (!currentDir.includes("node_modules")) return;

  const cleanCommand =
    "rimraf src node_modules .github .storybook .eslintrc.json .gitignore .npmignore .prettierrc rollup.config.js tsconfig.json yarn.lock";
  const moveBuildCommand = "mv build/* . && yarn clean";
  exec(`${cleanCommand} && ${moveBuildCommand}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

runPostInstall();

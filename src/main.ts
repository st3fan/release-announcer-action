// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import * as core from "@actions/core";
import * as github from "@actions/github";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_TOKEN: string;
    }
  }
}

const octokit = new github.GitHub(process.env.GITHUB_TOKEN);

async function run(): Promise<void> {
  try {
    core.info("Hello, this is release-announcer-action");
    core.info(JSON.stringify(github.context.payload, undefined, 2));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

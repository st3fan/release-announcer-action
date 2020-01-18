// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    core.debug("Hello, this is release-announcer-action");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

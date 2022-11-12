import core from "@actions/core";
import github from "@actions/github";

async function run(): Promise<void> {
  try {
    const nameToGreet: string = core.getInput("who-to-greet");
    console.log(`Hello ${nameToGreet}`);

    const time: string = new Date().toTimeString();
    core.setOutput("time", time);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload: string = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run()

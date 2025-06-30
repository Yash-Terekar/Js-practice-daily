function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("Snooze alarm!");
      } else {
        console.log("Waking up");
        resolve();
      }
    }, 2000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting ready");
      resolve();
    }, 1500);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Leaving for work");
      resolve();
    }, 1000);
  });
}

async function steps() {
  try {
    await step1();
    await step2();
    await step3();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
steps();

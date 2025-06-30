async function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1st Promise");
      resolve();
    }, 2000);
  });
}
async function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2nd Promise");
      resolve();
    }, 2000);
  });
}
async function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3rd Promise");
      resolve();
    }, 2000);
  });
}

// Sequential ------
async function sequential() {
  try {
    const start = Date.now();
    console.log(`Starting Sequential: ${start}`);
    await step1();
    await step2();
    await step3();
    console.log(`Sequential Finished: ${Date.now() - start}ms`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

// Parallel ------
async function parallelFunc() {
  try {
    const start = Date.now();
    console.log(`Starting Parallel: ${start}`);
    await Promise.all([step1(), step2(), step3()]);
    console.log(`Parallel Finished: ${Date.now() - start}ms`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function runAll() {
  await sequential();
  await parallelFunc();
}
runAll();

export class Animator {
  constructor() {
    this.previousTimestamp = 0;
    this.maxStepsize = 0.1;
  }

  run(callback) {
    const onFrame = timestamp => {
      const elapsedTime = (timestamp - this.previousTimestamp) / 1000;
      this.previousTimestamp = timestamp;
      if (elapsedTime > 0) {
        const stepsize = Math.min(elapsedTime, this.maxStepsize);
        callback(stepsize, elapsedTime);
      }
      requestAnimationFrame(onFrame);
    };

    this.previousTimestamp = performance.now();
    requestAnimationFrame(onFrame);
  }
}

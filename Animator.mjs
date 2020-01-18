export class Animator {
  constructor() {
    this.previousTimestamp = 0;
    this.maxElapsedTime = 1;
  }
  run(callback) {
    const onFrame = timestamp => {
      const elapsedTime = (timestamp - this.previousTimestamp) / 1000;
      this.previousTimestamp = timestamp;
      if (elapsedTime > 0) {
        callback(Math.min(elapsedTime, this.maxElapsedTime));
      }
      requestAnimationFrame(onFrame);
    };

    this.previousTimestamp = performance.now();
    requestAnimationFrame(onFrame);
  }
}

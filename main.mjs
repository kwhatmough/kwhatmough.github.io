import { Animator } from "./Animator.mjs";

export function run(canvasId) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext("2d");
  let x = 0;
  new Animator().run(elapsedTime => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(x % canvas.width, 10, 40, 30);
    context.fillText(`x=${Math.floor(x)}`, 10, 50);
    x += 50 * elapsedTime;
  });
}

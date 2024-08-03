export interface AngleProps {
  angle: number;
  randomScale: number;
  randomRotation: number;
}

/**
 * Draw the angle at the given x, y position
 * Randomizes the rotation and scale of the angle
 *
 * @param ctx
 * @param x
 * @param y
 * @param length - canvas length
 * @param angleProps - angle properties
 */
export function draw(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  length: number,
  angleProps: AngleProps
) {
  const { angle, randomScale, randomRotation } = angleProps;

  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';

  ctx.translate(x, y);

  const angleInRadians = (angle * Math.PI) / 180;

  // Randomize the scale and rotation
  ctx.rotate(randomRotation);
  ctx.beginPath();
  ctx.moveTo(-length * randomScale, 0);
  ctx.lineTo(0, 0);

  const targetX = length * Math.cos(angleInRadians) * randomScale;
  const targetY = length * Math.sin(angleInRadians) * randomScale;
  ctx.lineTo(targetX, targetY);
  ctx.stroke();
  ctx.restore();
}

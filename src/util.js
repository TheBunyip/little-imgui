export function inside(x, y, left, top, width, height) {
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

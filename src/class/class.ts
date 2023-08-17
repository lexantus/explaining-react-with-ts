class Point {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

class C {
  _length = 0;

  get length() {
    return this._length;
  }
  set length(value) {
    if (value > 1000) {
      this._length = 1000;
    }
    this._length = value;
  }
}

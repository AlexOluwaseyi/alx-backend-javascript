export default class ClassRoom {
  constructor(maxStudentsSize) {
    this.maxStudentsSize = maxStudentsSize;
  }

  // Getter
  // eslint-disable-next-line no-underscore-dangle
  get _maxStudentsSize() {
    return this.maxStudentsSize;
  }
}

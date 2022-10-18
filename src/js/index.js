export default class ErrorRepository {
  constructor(storage) {
    this.members = new Map(storage);
  }

  translate(code) {
    if (this.members.has(code)) {
      return this.members.get(code);
    }
    return 'Unknown error';
  }
}

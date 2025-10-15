const DataHandler = {

  assign(target, source) {
    if (Array.isArray(target) && Array.isArray(source)) {
      this.assignArray(target, source)
    } else {
      this.assignObject(target, source)
    }
  },

  assignObject(target, source) {
    for (const key in target) {
      delete target[key]
    }
    Object.assign(target, source)
  },

  assignArray(target, source) {
    target.length = 0;
    target.push(...source);
  }

}

export default DataHandler;

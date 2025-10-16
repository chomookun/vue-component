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
    // for (const key in target) {
    //   if (!(key in source)) delete target[key];
    // }
    // for (const key in source) {
    //   target[key] = source[key]; // 직접 할당 → 반응성 유지
    // }
  },

  assignArray(target, source) {
    target.length = 0;
    target.push(...source);
  }

}

export default DataHandler;

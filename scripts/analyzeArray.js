class ArrayProps {
  // Create private variable to hold arr argument
  #privateArr;

  constructor(arr) {
    this.#privateArr = arr;
    this.average = this.getAvg();
    this.min = this.getMin();
    this.max = this.getMax();
    this.length = arr.length;
  }

  getAvg() {
    if (!this.#privateArr.length) return undefined;

    const sum = this.#privateArr.reduce((x, y) => x + y, 0);
    return +(sum / this.#privateArr.length).toFixed(10);
  }

  getMin() {
    const sortedArr = this.#privateArr.sort((a, b) => a - b);
    return sortedArr[0];
  }

  getMax() {
    const sortedArr = this.#privateArr.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1];
  }
}

function analyzeArray(arr) {
  const properties = new ArrayProps(arr);
  return properties;
}

export default analyzeArray;

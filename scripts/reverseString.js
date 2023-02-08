function reverseString(str) {
  return [...str].reduce((x, y) => y + x);
}

export default reverseString;

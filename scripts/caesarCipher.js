function caesarCipher(str, shift) {
  const alphaArr = [...'abcdefghijklmnopqrstuvwxyz'];
  const strArr = [...str];

  const shifted = strArr.map((ltr) => {
    const isCapitalized = ltr === ltr.toUpperCase();
    const letter = ltr.toLowerCase();

    if (alphaArr.indexOf(letter) === -1) return ltr;

    let num = alphaArr.indexOf(letter) + shift;
    if (num > 25) num -= 26;
    if (num < 0) num += 26;

    return isCapitalized ? alphaArr[num].toUpperCase() : alphaArr[num];
  });

  return shifted.join('');
}

export default caesarCipher;

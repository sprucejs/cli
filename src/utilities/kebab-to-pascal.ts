export function kebabToPascal(label: string): string {
  const splitWord: Array<string> = label.split('-');

  return splitWord.reduce((accum, nextWord) => {
    const pascalCased: string =
      nextWord.charAt(0).toUpperCase() + nextWord.slice(1).toLowerCase();

    return accum + pascalCased;
  }, '');
}

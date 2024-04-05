export function isNum(v: string) {
  return /\d|\./.test(v);
}

export function containsNumbers(str: string) {
  return /\d/.test(str);
}

export function isSpecialCharacter(c: string): boolean {
  return [
    '.',
    '/',
    '<',
    '>',
    ',',
    '?',
    ':',
    ';',
    '"',
    "'",
    '{',
    '}',
    '[',
    ']',
    '|',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '+',
    '=',
    '~',
    '`'
  ].includes(c);
}

export const isJSON = (str?: string): boolean => {
  try {
    if (!str) return false;
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
};

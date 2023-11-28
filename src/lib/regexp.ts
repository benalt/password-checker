const commonPasswords = [
  'password',
  '1234',
  '12345',
  '123456',
  'qwerty',
  'admin',
  'letmein',
  'welcome',
  'monkey',
  '123abc',
  '123321',
  '654321',
  '111111',
  'abcdef',
  'sunshine',
  'password1',
  'admin123',
  'qwerty123',
  '123qwe',
  'qwertyuiop'
];

export const regexpLib = {
  email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, // email 
  minLength: /^(.{8,})$/, // Minimum length of 8 characters
  uppercaseLetter: /^(?=.*[A-Z])/, // At least one uppercase letter
  lowercaseLetter: /^(?=.*[a-z])/, // At least one lowercase letter
  digit: /^(?=.*\d)/, // At least one digit
  specialCharacter: /^(?=.*[@#$%^&+=])/, // At least one special character (you can customize the characters in the square brackets)
  noSpaces: /^(\S*)$/, // No spaces allowed
  noCommonPhrases: new RegExp(`^(?!.*(?:${commonPasswords.join('|')})).*$`, 'i')
};

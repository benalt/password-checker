import { StringValidator } from "./StringValidator";
import { regexpLib } from "./regexp"

export const passwordValidators:Array<StringValidator> = [
  new StringValidator('Is least 12 characters long', regexpLib.minLength, 1),
  new StringValidator('Does not include spaces', regexpLib.noSpaces, 2),
  new StringValidator('Includes at least one lowercase', regexpLib.lowercaseLetter, 3),
  new StringValidator('Includes at least one uppercase letter', regexpLib.uppercaseLetter, 4),
  new StringValidator('Includes at least one number', regexpLib.digit, 5 ),
  new StringValidator('Includes at least one specual character', regexpLib.specialCharacter, 6),
  new StringValidator('Does not include common password phrases', regexpLib.noCommonPhrases, 7)
];

export type ValidationResponse = {
  isValid: boolean,
  failingValidators: Array<StringValidator>,
  setSuccess?: boolean
}
export class StringValidator {
  label: string;
  regExp:RegExp;
  id: number
  
  constructor( label:string, regExp:RegExp, id: number) {
    this.regExp = regExp;
    this.label = label;  
    this.id = id;
  }

  isValid(str:string):boolean {
    if (str.match(this.regExp)) {
      return true;
    }
    return false;
  }
  
}
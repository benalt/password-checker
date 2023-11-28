import type { StringValidator } from '../lib/StringValidator';
import {passwordValidators} from '../lib/validators';

export async function POST({ request }:{request:Request}):Promise<Response> {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const password = body.password;
    const validateOnly = body.validateOnly;
    
    let isValid = true
    let failingValidators:Array<StringValidator> = []

    passwordValidators.forEach((vd)=>{
      const passesValidation = vd.isValid(password)
      if (!passesValidation) {
        isValid = false; 
        failingValidators.push(vd);
      }
    })

    return new Response(
      JSON.stringify({
        isValid,
        failingValidators: failingValidators,
        setSuccess: !validateOnly //  faked for demo purposes
      }),{
        status: 200
      })
  }
  return new Response(null, { status: 400 });
}
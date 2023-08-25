import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ignoreElements } from "rxjs"

export function primeraLetra():ValidatorFn{
  return (control:AbstractControl) =>{
    const valor = <string>control.value;
    if(!valor) return'';
    if(valor.length === 0) return''

    const primera = valor[0]
    if(primera !== primera.toUpperCase())
      return{
        primeraLetra:{
          mensaje: 'La primera letra tiene que ser mayuscula'
        }

    }
    return'';
  }
}

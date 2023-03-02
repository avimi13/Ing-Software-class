
//tipos de datos
export let name: string = "Avimilex"

name = "Alfredo"

export const age : number = 21
export const lastname : string = "Requenez"
export const isValid : boolean = false
export const isInvalid : boolean = true
//String multilineas con interpolaciones de datos
export const templateString : string = `
hola mi nombre es ${name} edad : ${age}
booleano ${isValid} : ${lastname}
`;

console.log(templateString);

;

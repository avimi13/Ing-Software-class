// import "./style.css";
// import { pokemon } from "./intro/objects";
// import { human } from "./intro/objects";
// import { blastoise } from "./intro/clases";
// import { pikachu } from "./intro/ijection";
import { golem } from "./intro/injectionDos";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 
    <h3> hola ${golem.name}, tu id es ${golem.id}</h3>

`;
document.querySelector<HTMLButtonElement>("#counter")!;

import { Greeter } from 'tslibrary';

const greeter = new Greeter('Stranger');
const selector = document.querySelector('#greeting');
selector!.innerHTML = `<h1>${greeter.greet()}</h1>`
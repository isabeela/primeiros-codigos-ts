// Import stylesheets
import './style.css';

// Write TypeScript code!

let title: string = 'Meu App';

let paragraph = 'Blaah';
const appDiv: HTMLElement = document.getElementById('app.title');
appDiv.innerHTML = `<h1> ${title} </h1>`;
`<p>  ${paragraph} </p>`;

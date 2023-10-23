import "./style.css"
import { DOMEvents } from './DOM_events.js'
import { renderSavedData } from "./renderStorage";

window.addEventListener('DOMContentLoaded', () => {
    renderSavedData();
});

document.addEventListener('DOMContentLoaded', () => {
    DOMEvents();
});

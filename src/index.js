import "./style.css"
import { DOMEvents } from './DOM_events.js'
import { renderSavedData } from "./renderStorage";

renderSavedData();
document.addEventListener('DOMContentLoaded', () => {
    DOMEvents();
});

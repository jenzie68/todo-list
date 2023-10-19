import "./style.css"
import { DOMEvents, renderSavedData } from './DOM.js'

renderSavedData();
document.addEventListener('DOMContentLoaded', () => {
    DOMEvents();
});


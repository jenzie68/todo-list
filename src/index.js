import "./style.css";
import { UI } from "./DOM";
import { todayAndUpcomingTask} from "./logic";
import { DOMEvents } from "./DOM_events.js";
import { renderSavedData } from "./renderStorage";

window.addEventListener("DOMContentLoaded", () => {
  renderSavedData();
  UI.emptyToDoPage();
  UI.headerDisplay("TODAY");
  todayAndUpcomingTask().displayTodayTasks();
});

document.addEventListener("DOMContentLoaded", () => {
  DOMEvents();
});


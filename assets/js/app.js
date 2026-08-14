import { projectsList } from "./data.js";
import { renderProjects } from "./render.js";

document.addEventListener("DOMContentLoaded", renderProjects.bind(this, projectsList));
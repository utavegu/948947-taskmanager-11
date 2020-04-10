import {createSiteMenu} from "./components/site-menu.js";
import {createSorting} from "./components/sorting";
import {createFilter} from "./components/filter.js";
import {createTask} from "./components/task.js";
import {createTaskEdit} from "./components/task-edit.js";
import {createLoadButton} from "./components/load-more-button.js";
import {createBoard} from "./components/board.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMain = document.querySelector(`.main`);
const siteHeader = siteMain.querySelector(`.main__control`);

render(siteHeader, createSiteMenu(), `beforeend`);
render(siteMain, createFilter(), `beforeend`);
render(siteMain, createBoard(), `beforeend`);

const board = siteMain.querySelector(`.board`);
const taskList = siteMain.querySelector(`.board__tasks`);

render(board, createSorting(), `afterbegin`);
render(taskList, createTaskEdit(), `beforeend`);

Array(TASK_COUNT).fill().forEach(() => render(taskList, createTask(), `beforeend`));

render(board, createLoadButton(), `beforeend`);

/*
МИХАИЛУ:
Я в этом пулреквесте исправил имена переменных в соответствии с вашими рекомендациями, но в следующем модуле обратно верну "авторские", как мы с вами и договорились, чтобы:
1) Уважительно отнестись к их (авторы учебного проекта) коду))
2) Чтобы мне не путаться в каждом модуле учебного проекта
В личном же буду этих рекомендаций придерживаться. Тем более мне самому не нравиться везде городить *Element
*/

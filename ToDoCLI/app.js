import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(chalk.yellow.bold("⛄⛄⛄⛄ To Do App 🛩🛩🛩🛩🛩"));
  console.log(chalk.blackBright("Menu de opciones: "));
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. Completar tarea");
  console.log("4. Salir");
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregado con éxito: "));
    displayMenu();
    chooseOption();
    console.log("\n ", tasks);
  });
}

function chooseOption() {
  rl.question("Elige una opcion digita el numero de tu opcion ", (choise) => {
    switch (choise) {
      case "1":
        addTask();
        break;
      case "2":
        console.log("Listar tareas");
        break;
      case "3":
        console.log("Completar tarea");
        break;
      case "4":
        console.log(chalk.yellow("Adios 🤙"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Opcion invalida intente nuevamente!!!\n"));
        displayMenu();
        chooseOption();
        break;
    }
  });
}

displayMenu();
chooseOption();

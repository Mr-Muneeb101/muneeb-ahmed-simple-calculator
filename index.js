#! /usr/bin/env node
import inquirer from "inquirer";
async function calculate() {
    while (true) {
        let answers = await inquirer.prompt([
            {
                name: "num1",
                type: "number",
                message: "Enter the first number",
            },
            {
                name: "num2",
                type: "number",
                message: "Enter the Second number",
            },
            {
                name: "Operation",
                type: "list",
                message: "Select any operation from below",
                choices: ["+", "-", "*", "/", "Back"],
            }
        ]);
        if (answers.Operation === '+') {
            console.log(` ${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `);
        }
        else if ((answers.Operation === '-')) {
            console.log(` ${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `);
        }
        else if ((answers.Operation === '/')) {
            console.log(` ${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `);
        }
        else if ((answers.Operation === '*')) {
            console.log(` ${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2} `);
        }
        else if ((answers.Operation === 'Back')) {
            return false;
        }
    }
}
calculate();
//# sourceMappingURL=index.js.map
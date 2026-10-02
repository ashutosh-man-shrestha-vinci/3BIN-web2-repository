import fs from "fs";

import { Expense } from "../types/Expense.js";

const expensesFilePath = "data/expenses.json";

export function getAllExpenses(): Expense[] {
  try {
    const data = fs.readFileSync(expensesFilePath, "utf-8");

    return JSON.parse(data) as Expense[];
  } catch (error) {
    console.error("Error reading expenses file:", error);

    return [];
  }
}

export function addExpense(expense: Expense): Expense {
  const expenses = getAllExpenses();

  expenses.push(expense);

  try {
    fs.writeFileSync(
      expensesFilePath,
      JSON.stringify(expenses, null, 2)
    );

    return expense;
  } catch (error) {
    console.error("Error writing to expenses file:", error);

    throw error;
  }
}
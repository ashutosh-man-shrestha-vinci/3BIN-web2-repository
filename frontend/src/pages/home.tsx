import { useState } from "react";
import ExpenseItem from "../components/ExpenseItem";
import type { Expense } from "../types/Expense";
import ExpenseAdd from "../components/ExpenseAddItem";

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      date: "2023-01-01",
      description: "Groceries",
      payer: "Alice",
      amount: 50,
    },
    {
      id: "2",
      date: "2023-01-02",
      description: "Dinner",
      payer: "Bob",
      amount: 30,
    },
    {
        id: "3",
        date: "2023-01-03",
        description: "Movie tickets",
        payer: "Charlie",
        amount: 20,
      },
  ]);

 const handleAddExpense = (expense: Expense) => {
  setExpenses((prevExpenses) => [...prevExpenses, expense]);
};
    return (
  <div>
    <ExpenseAdd addExpense={handleAddExpense} />

    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ))}
  </div>
);
  };
    export default Home;
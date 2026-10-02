import type { Expense } from "../types/Expense";

type ExpenseAddProps = {
  addExpense: (expense: Expense) => void;
};

function ExpenseAdd({ addExpense }: ExpenseAddProps) {
  const handleAddClick = () => {
    const newExpense: Expense = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        description: "New Expense",
        payer: Math.random() < 0.5 ? "Alice" : "Bob",
        amount: Math.round(Math.random() * 100 * 100) / 100,
      };
      addExpense(newExpense);
  };

  return (
    <button onClick={handleAddClick}>
      Add
    </button>
  );
}

export default ExpenseAdd;
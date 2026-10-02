import type { Expense } from "../types/Expense";

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div>
      <p>{expense.date}</p>
      <p>{expense.description}</p>
      <p>{expense.payer}</p>
      <p>{expense.amount}</p>
    </div>
  );
};

export default ExpenseItem;
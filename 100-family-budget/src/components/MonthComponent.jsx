import AddExpensesOrIncome from "./AddExpensesOrIncome";
import Categories from "./Categories";
import Historical from "./Historical";

//props
const monthName = 'January';

export default function MonthComponent() {


  return (
    <div>
      <h2>{monthName}</h2>
      <Categories categories={categories} historicalItems={historicalItems} />
      <Historical historicalItems={historicalItems} />
      <AddExpensesOrIncome onAddItem={onAddItem} />

    </div>
  )
}
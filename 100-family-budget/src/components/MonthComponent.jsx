import AddExpensesOrIncome from "./AddExpensesOrIncome";
import Categories from "./Categories";
import Historical from "./Historical";
import PropTypes from "prop-types";

MonthComponent.propTypes = {
  monthName: PropTypes.string.isRequired
}

export default function MonthComponent({ monthName }) {

  return (
    <div>
      <h2>{monthName}</h2>
      <Categories
        monthName={monthName} />
      <AddExpensesOrIncome />
      <Historical />

    </div>
  )
}
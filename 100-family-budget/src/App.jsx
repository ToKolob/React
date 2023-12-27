import { useState } from 'react'

import MonthComponent from './components/MonthComponent'

function App() {
  const [count, setCount] = useState(0)

  const [januaryData, setJanuaryData] = useState({
    monthName: 'January',
    categories: ['Housing', 'Food', 'Transportation', 'Health', 'Education', 'Entertainment'],
    historicalItems: [
      { description: 'Rent', value: 1000, category: 'Housing', type: 'Expense' },
      { description: 'Groceries', value: 300, category: 'Food', type: 'Expense' },
      // Adicione mais itens conforme necessário
    ],
  });

  return (
    <div className="app">
      <MonthComponent 
       monthName={januaryData.monthName}
      />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App

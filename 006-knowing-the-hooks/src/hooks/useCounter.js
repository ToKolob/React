import { useState } from 'react'
export default function useCounter() {

  function getInitialValue() {
    console.log('getInitialValue');
    return 1 + 1
  }

  const [count, setCount] = useState(() => getInitialValue())

  const increment = () => {
    setCount(count + 1)
  }
  return {
    count,
    increment
  }
}

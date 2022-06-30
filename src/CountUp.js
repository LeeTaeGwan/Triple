import React, { useEffect, useState, useMemo } from 'react'

function CountUp({ end }) {
  const duration = 2000
  const [count, setCount] = useState(0)
  const step = useMemo(() => {
    return duration / end
  }, [])

  useEffect(() => {
    let num = 0
    const counter = setInterval(() => {
      num += 1
      setCount(num)

      if (num === end) {
        clearInterval(counter)
      }
    }, step)
  }, [])

  return count
}

export default CountUp

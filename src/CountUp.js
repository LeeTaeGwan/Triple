import React, { useEffect, useState, useMemo } from 'react'

function CountUp({ end }) {
  const duration = 2000
  const [count, setCount] = useState(0)
  // const step = useMemo(() => duration / end, []) frameSpeed로 대체해서 필요가 없어질 듯
  const frameSpeed = useMemo(() => duration / 120, [])
  const totalFrame = useMemo(() => Math.round(duration / frameSpeed), [])

  useEffect(() => {
    // let num = 0
    const counter = setInterval(() => {
      // 프레임속도((frameSpeed)와 2초동안 지나가야할 프레임의 개수(totalFrame)를 이용해 내부 로직 구현 해야함
    }, frameSpeed)
  }, [])

  // useEffect(() => {
  //   let num = 0
  //   const counter = setInterval(() => {
  //     num += 1
  //     setCount(num)
  //     if (num === end) {
  //       clearInterval(counter)
  //     }
  //   }, step)
  // }, [])

  return count
}

export default CountUp

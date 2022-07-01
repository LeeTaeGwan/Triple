import React, { useEffect, useState, useMemo } from 'react'

function CountUp({ end }) {
  const duration = 2000
  const [count, setCount] = useState(0)
  const frameSpeed = useMemo(() => duration / 120, []) // 프레임간 속도 ex) 첫번째 프레임에서 frameSpeed만큼 기다린 후 두번째 프레임으로 변경
  const totalFrame = useMemo(() => Math.round(duration / frameSpeed), []) // 총 프레임의 숫자
  const percent = useMemo(() => totalFrame / 100, []) // 1퍼센트가 몇인지

  // useEffect(() => {
  //   let num = 0
  //   const counter = setInterval(() => {
  //     // 프레임속도((frameSpeed)와 2초동안 지나가야할 총 프레임의 개수(totalFrame)를 이용해 내부 로직 구현 해야함
  //     // 1프레임에 더해야하는 숫자와 프레임의 진행상황을 퍼센트로 구해야함(중단조건을 만들기 위해)
  //     const curPercent = ((num++ * percent) / totalFrame) * 100 // 현재 퍼센트
  //     setCount(count + end / 100)
  //     console.log(count + end / 100)
  //     // setCount(Math.round(end * (num / totalFrame)))
  //     if (curPercent === 100) {
  //       return clearInterval(counter)
  //     }
  //   }, 100)

  //   return () => clearInterval(counter)
  // }, [count])

  return count
}

export default CountUp

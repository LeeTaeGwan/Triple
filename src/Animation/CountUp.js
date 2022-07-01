import React, { useEffect, useState, useMemo, useCallback } from 'react'

function CountUp({ end }) {
  const duration = 2000
  const [count, setCount] = useState(0)
  const frameSpeed = useMemo(() => duration / 120, []) // 프레임간 속도 ex) 첫번째 프레임에서 frameSpeed만큼 기다린 후 두번째 프레임으로 변경
  const totalFrame = useMemo(() => Math.round(duration / frameSpeed), []) // 총 프레임의 숫자
  const easeOutExpo = useCallback((time) => {
    if (time === 1) {
      return 1
    } else {
      return 1 - Math.pow(2, -10 * time)
    }
  }, [])

  useEffect(() => {
    let curFrame = 0
    const counter = setInterval(() => {
      const progress = easeOutExpo(curFrame++ / totalFrame)
      const num = Math.round(end * progress)
      setCount(num)
      if (progress === 1) {
        // 중단 조건
        return clearInterval(counter)
      }
    }, frameSpeed)
  }, [])

  return count
}

export default CountUp

'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx.current - 6}px, ${my.current - 6}px)`
      }
    }

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx.current - 18}px, ${ry.current - 18}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const grow = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '56px'
        ringRef.current.style.height = '56px'
      }
    }
    const shrink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
      }
    }

    const interactives = document.querySelectorAll('a, button, [data-cursor-grow]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-g3 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          width: 36, height: 36,
          border: '1.5px solid #2eb82e',
          transition: 'width 0.2s, height 0.2s',
          willChange: 'transform',
        }}
      />
    </>
  )
}

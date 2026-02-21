import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const letters = '01<>{}[]()/*'.split('')
    const fontSize = 16
    const columns = Math.floor(width / fontSize)
    const drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)' // fond légèrement transparent pour effet de traînée
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.5)' // couleur violet clair
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, y * fontSize)
        drops[i] = y * fontSize > height && Math.random() > 0.975 ? 0 : y + 1
      })
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

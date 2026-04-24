'use client'

import { useEffect, useRef, useState } from 'react'

export function useTyping(strings: string[], speed = 45, pause = 2400) {
  const [displayed, setDisplayed] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const stringsRef = useRef(strings)

  useEffect(() => {
    stringsRef.current = strings
    setIdx(0); setCharIdx(0); setDeleting(false); setWaiting(false); setDisplayed('')
  }, [strings])

  useEffect(() => {
    if (waiting) {
      const t = setTimeout(() => setWaiting(false), pause)
      return () => clearTimeout(t)
    }
    const str = stringsRef.current[idx]
    if (!deleting) {
      if (charIdx < str.length) {
        const t = setTimeout(() => { setDisplayed(str.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, speed)
        return () => clearTimeout(t)
      } else {
        setWaiting(true)
        setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setCharIdx(c => c - 1); setDisplayed(str.slice(0, charIdx - 1)) }, speed / 2)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setIdx(i => (i + 1) % stringsRef.current.length)
      }
    }
  }, [charIdx, deleting, idx, speed, pause, waiting])

  return displayed
}

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids])
  return active
}

export function useNavScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return scrolled
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

export function useSkillBars() {
  useEffect(() => {
    const els = document.querySelectorAll('.skill-item')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animated') }),
      { threshold: 0.5 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

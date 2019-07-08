import { useState } from 'react'

export default function useDarkMode() {
  // setup media query
  const mq = window.matchMedia('(prefers-color-scheme: dark)')

  // hook state
  const [darkMode, setDarkMode] = useState(mq.matches)

  // react to media query match change
  mq.addListener(() => {
    setDarkMode(mq.matches)
  })

  return [darkMode, setDarkMode]
}
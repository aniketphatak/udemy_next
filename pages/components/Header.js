import Link from 'next/link'

export default function Header() {
  return (
    <nav>
        <a href="/">Home</a>
        <a href="/weather">Weather</a>
        <a href="/todo">Todo</a>
    </nav>
  )
}

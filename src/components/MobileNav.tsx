import React from 'react'
import { Link } from 'react-router-dom'

interface ComponentProps {
  setMenu: (arg: boolean) => void;
}

const MobileNav = ({ setMenu }: ComponentProps) => {
  return (
    <ul className="absolute left-0 top-0 w-full h-full bg-white z-10 flex flex-col md:hidden mx-auto font-semibold font-heading items-center justify-center gap-8">
      <li onClick={() => setMenu(false)}><Link className="hover:text-zinc-900 text-xl" to="/">Home</Link></li>
      <li onClick={() => setMenu(false)}><Link className="hover:text-zinc-900 text-xl" to="/sneakers">Sneakers</Link></li>
      <li onClick={() => setMenu(false)}><Link className="hover:text-zinc-900 text-xl" to="/faq">FAQ</Link></li>
    </ul>
  )
}

export default MobileNav
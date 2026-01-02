import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div>
      <Link href="/home">home                                                      </Link>
      <Link href="/About">About                                                      </Link>
      <Link href="/Contact">Contact                                                     </Link>


    </div>
  )
}

export default Navbar

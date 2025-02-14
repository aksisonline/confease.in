// import { Twitter, Instagram, Facebook } from "lucide-react"
import {  Instagram } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <>
      {/* <Link href="https://twitter.com/confease" className="text-gray-600 hover:text-black">
        <Twitter size={24} />
        <span className="sr-only">Twitter</span>
      </Link> */}
      <Link href="https://instagram.com/confease.in" className="text-gray-600 hover:text-black">
        <Instagram size={24} />
        <span className="sr-only">Instagram</span>
      </Link>
      {/* <Link href="https://facebook.com/confease" className="text-gray-600 hover:text-black">
        <Facebook size={24} />
        <span className="sr-only">Facebook</span>
      </Link> */}
    </>
  )
}


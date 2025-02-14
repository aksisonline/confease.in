import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function InstagramPost() {
  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <Avatar className="h-8 w-8 mr-3">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@confease" />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
        <Link href="#" className="font-semibold text-sm">
          confease
        </Link>
      </div>

      <div className="relative aspect-square">
        <Image src="/placeholder.svg?height=480&width=480" alt="Instagram post" fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-gray-600">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gray-600">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gray-600">
              <Send className="h-6 w-6" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="hover:text-gray-600">
            <Bookmark className="h-6 w-6" />
            <span className="sr-only">Save</span>
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-sm">
            <Link href="#" className="font-semibold mr-2">
              confease
            </Link>
            Sometimes the weight of our thoughts becomes too heavy to carry alone. That&apos;s why we&apos;re building a safe
            space for you to share, heal, and grow together. #MentalHealth #GenZ #ComingSoon
          </p>
          <p className="text-xs text-gray-500">2 HOURS AGO</p>
        </div>
      </div>
    </div>
  )
}


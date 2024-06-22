"use client"

import Image from "next/image"
import React from "react"

interface AvatarProps{
  img?:string
}

const Avatar: React.FC<AvatarProps> = ({img}) => {
  return (
    <Image
     className="rounded-full"
     height="30"
     width="30"
     alt="Avatar"
     src={ img || '/images/placeholder.jpg'}
    />
  )
}

export default Avatar
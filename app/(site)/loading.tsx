"use client"

import Box from "@/components/Box"
import { BounceLoader } from "react-spinners"

const Loading =()=> {
  return (
    <Box className="h-full flex items-center justify-center">
      <BounceLoader color= "#845ef7" size={40} />
    </Box>
  )
}
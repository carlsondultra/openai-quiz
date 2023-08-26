import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingQuestions = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
        <Image
            src={'/loading.gif'}
            width={400}
            height={400}
            alt="loading animation"
        />
    </div>
  )
}

export default LoadingQuestions
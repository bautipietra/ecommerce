import React from 'react'

interface Props {
  section: string;
  title: string;
  text: string;
}

const Title = ({ section, title, text }: Props) => {
  return (
    <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
      <span className="mb-2 block text-lg font-semibold text-primary text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
        {section}
      </span>
      <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
        {title}
      </h2>
      <p className="text-base text-body-color">
        {text}
      </p>
    </div>
  )
}

export default Title
import React from 'react'
import keyword_extractor from 'keyword-extractor'

type Props = {
    answer: string
}

const BlankAnswerInput = ({answer}: Props) => {
  //dont need to re-calculate every time
  const keywords = React.useMemo(() => {
      const words = keyword_extractor.extract(answer, {
        language: "english",
        remove_digits: true,
        return_changed_case: false,
        remove_duplicates: false,
      })
  }, [answer])
  return (
    <div className="flex justify-start w-full mt-4">
        <h1 className="text-xl font-semibold">{answer}</h1>
    </div>
  )
}

export default BlankAnswerInput
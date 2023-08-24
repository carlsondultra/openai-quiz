import React from 'react'
import keyword_extractor from 'keyword-extractor'

type Props = {
    answer: string
}

const BLANKS = '_____'

const BlankAnswerInput = ({answer}: Props) => {
  //dont need to re-calculate every time
  const keywords = React.useMemo(() => {
      const words = keyword_extractor.extract(answer, {
        language: "english",
        remove_digits: true,
        return_changed_case: false,
        remove_duplicates: false,
      })
      const shuffled = words.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 2);
  }, [answer])

  //looking through keywords, replacing them with blanks
  const answerWithBlanks = React.useMemo(() => {
    const answerWithBlanks = keywords.reduce((acc, keyword) =>{
      return acc.replace(keyword, BLANKS)
    }, answer)
    return answerWithBlanks
  }, [keywords, answer])

  return (
    <div className="flex justify-start w-full mt-4">
        <h1 className="text-xl font-semibold">{answer}</h1>
    </div>
  )
}

export default BlankAnswerInput
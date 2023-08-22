import { Game, Question } from '@prisma/client'
import React from 'react'

type Props = {
    game: Game & {questions: Pick<Question, "question" | "answer">}
}

const OpenEnded = ({game}: Props) => {
  return <pre>{JSON.stringify(game, null, 4)}</pre>
}

export default OpenEnded
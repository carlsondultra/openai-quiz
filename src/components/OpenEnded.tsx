'use client'
import { formatTimeDelta } from '@/lib/utils'
import { Game, Question } from '@prisma/client'
import { differenceInSeconds } from 'date-fns'
import { ChevronRight, Loader2, Timer } from '../../node_modules/lucide-react'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { checkAnswerSchema } from '@/schemas/form/quiz'
import axios from 'axios'

type Props = {
    game: Game & {questions: Pick<Question, "id" | "question" | "answer">}
}

const OpenEnded = ({game}: Props) => {

    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [now, setNow] = React.useState<Date>(new Date())
    const [hasEnded, setHasEnded] = React.useState<boolean>(false)
    const {toast} = useToast()

    const currentQuestion = React.useMemo(() => {
        return game.questions[questionIndex]
    }, [questionIndex, game.questions])

    const {mutate: checkAnswer, isLoading: isChecking} = useMutation({
        mutationFn: async () => {
            const payload: z.infer<typeof checkAnswerSchema> = {
                questionId: currentQuestion.id,
                userAnswer: '',
            }
            const response = await axios.post('/api/checkAnswer', payload)
            return response.data
        }
    })

    const handleNext = React.useCallback(() => {
        if (isChecking) return;
        checkAnswer(undefined, {
            onSuccess: ({percentageSimilar})=>{
                toast({
                    title: `Your answer is ${percentageSimilar}% similar to the correct answer.`,
                    description: "answers are matched based on similarity comparisons",
                })
                if (questionIndex === game.questions.length -1) {
                    setHasEnded(true)
                    return;
                }
                setQuestionIndex((prev) => prev +1)
            }
        })
    }, [checkAnswer, toast, isChecking, questionIndex, game.questions.length])

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
             if (event.key === 'Enter') {
                handleNext();
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    },[handleNext])

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    {/* topic */}
                    <p>
                        <span className="text-slate-400 mr-2">Topic</span>
                        <span className="px-2 py-1 text-white rounded-lg bg-slate-800">{game.topic}</span>
                    </p>
                    <div className="flex self-start mt-3 text-slate-400">
                        <Timer className="mr-2" />
                        {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}
                    </div>
                </div>
                {/* <MCQCounter correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} /> */}
            </div>
            
            <Card className="w-full mt-4">
                <CardHeader className="flex flex-row items-center">
                    <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
                        <div>{questionIndex + 1}</div>
                        <div className="text-base text-slate-400">
                            {game.questions.length}
                        </div>
                    </CardTitle>
                    <CardDescription className="flex-grow text-lg">
                        {currentQuestion.question}
                    </CardDescription>
                </CardHeader>
            </Card>
    
            <div className="flex flex-col items-center justify-center w-full mt-4">
                
                <Button 
                    className="mt-2" 
                    disabled={isChecking}
                    onClick={() => {
                    handleNext()
                    }}
                >
                    {isChecking && <Loader2 className="w-4 h-4 mr-2 animated-spin" />}
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
      )
}

export default OpenEnded
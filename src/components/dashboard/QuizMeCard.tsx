import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { BrainCircuit } from '../../../node_modules/lucide-react';

type Props = {}

const QuizMeCard = (props: Props) => {
  return (
    <Card className='hover:cursor-pointer hover:opacity-75'>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-2xl font-bold'>Take the Quiz!</CardTitle>
            <BrainCircuit size={28} strokeWidth={2.5} />
        </CardHeader>

        <CardContent>
            <p className="text-sm text-muted-foreground">
                Ready to take the challenge?
            </p>
        </CardContent>

    </Card>
  )
}

export default QuizMeCard
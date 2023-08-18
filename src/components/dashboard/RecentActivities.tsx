import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const RecentActivities = (props: Props) => {
  return (
    <Card className='col-span-4 lg:col-span-3'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>
                Recent Activities
            </CardTitle>
            <CardDescription>
                You have done a total of 2 quizzes!
            </CardDescription>
        </CardHeader>

        <CardContent className="max-h-[580px] overflow-scroll">
            History of activities
        </CardContent>
    </Card>
  )
}

export default RecentActivities
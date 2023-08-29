import SignInButton from "@/components/SignInButton";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import {prisma} from '@/lib/db'
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getAuthSession()
  if(session?.user) {
    //user is logged in
    return redirect('/dashboard')
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Introducing "Quiz-It": Your Ultimate AI-Powered Quiz Creation Platform</CardTitle>
          <CardDescription>
            Welcome to Quiz-It, 
            the cutting-edge web application that harnesses the power of artificial intelligence to revolutionize the way quizzes are generated.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google to get started!"/>
        </CardContent>
      </Card>
    </div>
  )
}

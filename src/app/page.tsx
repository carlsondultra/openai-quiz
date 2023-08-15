import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import {prisma} from '@/lib/db'
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
  const session = await getAuthSession()
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to my application!</CardTitle>
          <CardDescription>This is description text</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google!"/>
        </CardContent>
      </Card>
    </div>
  )
}

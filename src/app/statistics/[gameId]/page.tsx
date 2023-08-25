import { buttonVariants } from '@/components/ui/button'
import { prisma } from '@/lib/db'
import { getAuthSession } from '@/lib/nextauth'
import { LucideLayoutDashboard } from '../../../../node_modules/lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

type Props = {
    params: {
        gameId: string
    }
}

const StatisticsPage = async ({params: {gameId}}: Props) => {
    const session = await getAuthSession()
    if(!session?.user) {
        return redirect("/")
    }
    const game = await prisma.game.findUnique({
        where: {id: gameId}
    })
    if (!game) {
        return redirect("/quiz")
    }

    return (
        <>
            <div className="p-8 mx-auto max-w-7xl">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Statistics</h2>
                    <div className="flex items-center space-x-2">
                        <Link href="/dashboard" className={buttonVariants()}>
                            <LucideLayoutDashboard className="mr-2" />
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticsPage
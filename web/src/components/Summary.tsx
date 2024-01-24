'use client'

import Image from "next/image"
import incomeImg from "../assets/income.svg"
import outcomeImg from "../assets/outcome.svg"
import totalImg from "../assets/total.svg"
import { priceFormatter } from "@/utils/formatter"
import { TransactionsContext } from "@/contexts/TransactionsContext"
import { useContext } from "react"

export function Summary() {
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.price;
            acc.total += transaction.price
        } else {
            acc.withdraws += transaction.price;
            acc.total -= transaction.price;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <div className="flex w-full flex-wrap gap-8 justify-between min-gap-8">
            <div className="bg-gray-400 py-8 px-6 rounded-lg  min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Entradas</p>
                    <Image src={incomeImg} alt="Entradas" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">{priceFormatter(summary.deposits)}</strong>
            </div>
            
            <div className="bg-gray-400 py-8 px-6 rounded-lg min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Entradas</p>
                    <Image src={outcomeImg} alt="Saídas" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">{priceFormatter(summary.withdraws)}</strong>
            </div>

            <div className="bg-blue-400 text-gray-900 py-8 px-6 rounded-lg min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Total</p>
                    <Image src={totalImg} alt="Total" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">{priceFormatter(summary.total)}</strong>
            </div>
        </div>
    )
}
'use client'

import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { EmptyTransactions } from "./EmptyTransactions";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import clsx from 'clsx'

export function TransactionsTable() {

    const { transactions } = useContext(TransactionsContext)

    if (transactions.length == 0) {
        return <EmptyTransactions />
    }

    return (
        <div className="my-16">
            {/*{JSON.stringify(transactions)}*/}

            {transactions.map((transaction) => {
                return (
                    <div key={transaction.id} className="relative flex w-full flex-wrap justify-between rounded-md px-6 py-5 p-4 bg-gray-200 gap-2 my-4 font-medium">
                        <div className=" text-gray-900  text-justify lg:w-[30%]">{transaction.description}</div>
                        <div className=
                        {clsx(
                            "text-gray-900 font-bold text-lg lg:w-[20%]",
                            {
                              'text-red-600': transaction.deposit === false,
                              'text-green-800': transaction.deposit === true,
                            },
                        )}
                        
                        >{priceFormatter(transaction.price)}</div>
                        <div className="text-gray-900 lg:w-[25%]">{transaction.category}</div>
                        <time className="text-gray-900 lg:w-[15%]">{dateFormatter(transaction.updatedAt)}</time>
                        <div className="text-gray-900 text-right lg-[10%]">
                            <button className=" text-gray-900 hover:text-red-600 duration-200" type="button"><Trash2 size={20} className="" /></button>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}
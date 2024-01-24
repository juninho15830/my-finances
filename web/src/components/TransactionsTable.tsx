'use client'

import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { TransactionsContext } from "@/contexts/TransactionsContext";
import { EmptyTransactions } from "./EmptyTransactions";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import clsx from 'clsx'

export function TransactionsTable() {

const { transactions, deleteTransaction } = useContext(TransactionsContext)

if (transactions.length == 0) {
    return <EmptyTransactions />
}

function handleDeleteTransaction(id: string) {
    deleteTransaction(id)
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
                              'text-red-600': transaction.type === "withdraw",
                              'text-green-800': transaction.type === "deposit",
                            },
                        )}
                        
                        >{priceFormatter(transaction.price)}</div>
                        <div className="text-gray-900 lg:w-[25%]">{transaction.category}</div>
                        <time className="text-gray-900 lg:w-[15%]">{dateFormatter(transaction.createdAt)}</time>
                        <div className="text-gray-900 text-right lg-[10%]">
                            <button 
                                className=" text-gray-900 hover:text-red-600 duration-200" 
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteTransaction(transaction.id)
                                }}
                            >
                                <Trash2 size={20} className="" />
                            </button>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}
'use client'

import * as RadioGroup from '@radix-ui/react-radio-group';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from '@/contexts/TransactionsContext';

export function NewTransactionForm() {
    const { createTransaction } = useContext(TransactionsContext)

    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(NaN);
    const [category, setCategory] = useState('');
    const [deposit, setDeposit] = useState(Boolean)
    
    async function handleCreateTransaction(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        createTransaction({
            description,
            price,
            category,
            deposit,
        });
         
    }
    return (
        <form 
            onSubmit={handleCreateTransaction}
            className="mt-8 flex flex-col gap-4">
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-200 placeholder:text-gray-500"
            />
            <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Valor"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
            />
            <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoria"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
            />

            <RadioGroup.Root
                name="deposit"
                defaultValue="true"
                onSelect={() => setDeposit(true)}
                //onValueChange={field.onChange}
                //value={field.value}
                className="mx-0 grid grid-cols-2 gap-4"
            >
                <RadioGroup.Item
                    value="true"
                    className="accessibilityFocus button group mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 duration-200 hover:brightness-90 ease-linear data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300 data-[state=checked]:text-gray-50"
                >
                    <ArrowUpCircle
                        size={24}
                        className="duration-200 ease-linear group-data-[state=checked]:text-gray-50 group-data-[state=unchecked]:text-green-500"
                    />
                    <span>Entrada</span>
                </RadioGroup.Item>

                <RadioGroup.Item
                    value=""
                    onSelect={() => setDeposit(false)}
                    className="accessibilityFocus button group mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 hover:brightness-90 duration-200 ease-linear data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-gray-300 data-[state=checked]:text-gray-50 "
                >
                    <ArrowDownCircle
                        size={24}
                        className="duration-200 ease-linear group-data-[state=checked]:text-gray-50 group-data-[state=unchecked]:text-red-500"
                    />
                    <span>Saída</span>
                </RadioGroup.Item>
            </RadioGroup.Root>

            <button
                type="submit"
                className="accessibilityFocus button mt-8 h-12 rounded-md border-0 bg-blue-400 hover:brightness-90 duration-200 px-5 ease-linear disabled:cursor-not-allowed disabled:opacity-60 text-gray-900"
            >
                Cadastrar
            </button>
        </form>
    )
}
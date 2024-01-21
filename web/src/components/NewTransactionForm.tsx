'use client'

import { api } from '@/lib/api';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { FormEvent } from "react";
import Cookie from 'js-cookie';

export function NewTransactionForm() {

    async function handleCreateTransaction(event: FormEvent<HTMLFormElement>) {

        const formData = new FormData(event.currentTarget)

        //console.log(Array.from(formData.entries()))

        const token = Cookie.get('token')

        await api.post(
            '/transactions', 
            {
                description: formData.get('description'),
                price: formData.get('price'),
                category: formData.get('category'),
                deposit: formData.get('deposit')
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            },
        )
    }
    return (
        <form 
            onSubmit={handleCreateTransaction}
            className="mt-8 flex flex-col gap-4">
            <input
                type="text"
                name="description"
                placeholder="Descrição"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-200 placeholder:text-gray-500"
            />
            <input
                type="number"
                name="price"
                placeholder="Valor"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
            />
            <input
                type="text"
                name="category"
                placeholder="Categoria"
                className="accessibilityFocus rounded-md border-0 bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
            />

            <RadioGroup.Root
                name="deposit"
                defaultValue="true"
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
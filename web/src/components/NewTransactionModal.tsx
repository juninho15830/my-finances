'use client'

import { X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { FormEvent, useContext, useState } from "react";
import { TransactionsContext } from '@/contexts/TransactionsContext';
import Link from 'next/link';

export function NewTransactionModal () {
    const { createTransaction } = useContext(TransactionsContext)

    const [open, setOpen] = useState(false);


    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')
    
    async function handleCreateTransaction(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            await createTransaction({
                description,
                price,
                category,
                type,
            });

            setDescription('');
            setPrice(0);
            setCategory('');
            setType('deposit');

            setOpen(false)

        } catch (error) {
            console.error('Erro ao criar transação:', error);
        }

        console.log(setType)
    }

    return (
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <Link href="/transactions/dashboard" className="inline-block bg-blue-400 text-gray-900 text-base border-none leading-none py-5 px-8 rounded-md hover:brightness-90 duration-200 h-14 items-center" type="button">
                        Nova Transação
                    </Link>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75">
                        <Dialog.Content className="fixed flex flex-col bg-gray-400 p-6 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-xl max-w-[525px] w-full">
                            <Dialog.Title className="headline6 font-inter700">
                                Nova transação
                            </Dialog.Title>
                            <Dialog.Close className="accessibilityFocus text-0 absolute right-3 top-3 h-12 w-12 cursor-pointer rounded-md border-0 bg-transparent leading-none">
                                <X
                                    size={24}
                                    className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-gray-500 hover:text-red-400 duration-200"
                                />
                            </Dialog.Close>
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
                                type="text"
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


                            <div className='my-4 mx-0 grid grid-cols-2 gap-2'>
                                <button
                                    className={`${type === 'deposit' ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600'} mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 bg-gray-500
                                    hover:brightness-90 duration-200`}
                                    type="button"
                                    onClick={() => { setType('deposit')}}
                                    disabled={type === 'deposit'}
                                >
                                    <ArrowUpCircle
                                        size={24}
                                        className={type === 'deposit' ? 'text-gray-50' : 'text-green-500'}
                                    />
                                    <span>Entrada</span>
                                </button>

                                <button
                                     className={`${type === 'withdraw' ? 'bg-red-500' : 'bg-gray-500 hover:bg-gray-600'} mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 bg-gray-500
                                     hover:brightness-90 duration-200`}
                                    type="button"
                                    onClick={() => { setType('withdraw')}}
                                    disabled={type === 'withdraw'}
                                >
                                    <ArrowDownCircle
                                        
                                        size={24}
                                        className={type === 'withdraw' ? 'text-gray-50' : 'text-red-500'}
                                    />
                                    <span>Saída</span>
                                </button>
                            </div>


                            {/*<RadioGroup.Root
                                name="type"
                                defaultValue="true"
                                className="mx-0 grid grid-cols-2 gap-4"
                                >
                                <RadioGroup.Item
                                    value="true"
                                    onSelect={() => setType('deposit')}
                                    className="accessibilityFocus button group mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 duration-200 hover:brightness-90 ease-linear data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300 data-[state=checked]:text-gray-50"
                                >
                                    <ArrowUpCircle
                                        size={24}
                                        className="duration-200 ease-linear group-data-[state=checked]:text-gray-50 group-data-[state=unchecked]:text-green-500"
                                    />
                                    <span>Entrada</span>
                                </RadioGroup.Item>
                                <RadioGroup.Item
                                    value="withdraw"
                                    onSelect={() => setType('withdraw')}
                                    className="accessibilityFocus button group mt-4 flex h-16 flex-grow items-center justify-center gap-4 rounded-md border-0 px-4 text-gray-50 hover:brightness-90 duration-200 ease-linear data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-gray-300 data-[state=checked]:text-gray-50 "
                                >
                                    <ArrowDownCircle
                                        size={24}
                                        className="duration-200 ease-linear group-data-[state=checked]:text-gray-50 group-data-[state=unchecked]:text-red-500"
                                    />
                                    <span>Saída</span>
                                </RadioGroup.Item>
    </RadioGroup.Root> */}
                                <button
                                    type="submit"
                                    className="accessibilityFocus button mt-8 h-12 rounded-md border-0 bg-blue-400 hover:brightness-90 duration-200 px-5 ease-linear disabled:cursor-not-allowed disabled:opacity-60 text-gray-900"
                                >
                                    Cadastrar
                                </button>
                
                        </form>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
    )
}
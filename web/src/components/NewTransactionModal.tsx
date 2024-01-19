'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { NewTransactionForm } from './NewTransactionForm'

export function NewTransactionModal () {
    return (
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

                    <NewTransactionForm />
                </Dialog.Content>
            </Dialog.Overlay>
      </Dialog.Portal>
    )
}
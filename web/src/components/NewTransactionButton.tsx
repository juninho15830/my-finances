'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'
import Link from 'next/link'

export function NewTransactionButton() {
    return(
        <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Link href="/transactions/dashboard" className="inline-block bg-blue-400 text-gray-900 text-base border-none leading-none py-5 px-8 rounded-md hover:brightness-90 duration-200 h-14 items-center" type="button">
                        Nova Transação
                    </Link>
                </Dialog.Trigger>
                <NewTransactionModal />
        </Dialog.Root>
    )
}
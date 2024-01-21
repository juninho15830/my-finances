'use client'

import { TransactionsProvider } from "@/contexts/TransactionsContext"
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode}) => {
    return <TransactionsProvider>{children}</TransactionsProvider>
};
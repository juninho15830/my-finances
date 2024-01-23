import { createContext, FormEvent, ReactNode, useCallback, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "@/lib/api";

interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

interface TransactionInput {
  description: string;
  price: number;
  category: string;
  type: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void> 
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const token = Cookies.get('token');

    const fetchTransactions = useCallback(
        async () => {
        try {
            const response = await api.get('/transactions', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            setTransactions([...response.data]);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        }, []
    )

    useEffect(() => {
        fetchTransactions()
      }, [fetchTransactions])

    async function createTransaction(transaction: TransactionInput) {
        await api.post(
            '/transactions', transaction,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            },
        )
    }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { api } from "@/lib/api";

interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  deposit: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

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


  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}

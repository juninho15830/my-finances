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
  deleteTransaction: (id: string) => Promise<void> 
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
        const response = await api.post(
            '/transactions', transaction,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            },
        )

        setTransactions((state) => [response.data, ...state]) 
    }

    async function deleteTransaction(id: string) {
      try {
        const response = await api.delete(
          `/transactions/${id}`,
            {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          },
        )
  
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => transaction.id !== response.data.id,
          ),
        )

        fetchTransactions()
  
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

  return (
    <TransactionsContext.Provider value={{ 
      transactions, 
      createTransaction,
      deleteTransaction,
       }}>
      {children}
    </TransactionsContext.Provider>
  );
}

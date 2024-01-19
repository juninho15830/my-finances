import { Summary } from "@/components/Summary";
import { TransactionsTable } from "@/components/TransactionsTable";

export default function DashboardTransactions() {

    return (
        <div className="max-w-screen-xl m-auto px-8 py-10">
            <Summary />
            <TransactionsTable />
        </div>
    )
}
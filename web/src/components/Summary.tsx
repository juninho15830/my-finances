import Image from "next/image"
import incomeImg from "../assets/income.svg"
import outcomeImg from "../assets/outcome.svg"
import totalImg from "../assets/total.svg"

export function Summary() {
    return (
        <div className="flex w-full flex-wrap gap-8 justify-between min-gap-8">
            <div className="bg-gray-400 py-8 px-6 rounded-lg  min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Entradas</p>
                    <Image src={incomeImg} alt="Entradas" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">R$ 11000,00</strong>
            </div>
            
            <div className="bg-gray-400 py-8 px-6 rounded-lg min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Entradas</p>
                    <Image src={outcomeImg} alt="Saídas" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">R$500,00</strong>
            </div>

            <div className="bg-blue-400 text-gray-900 py-8 px-6 rounded-lg min-w-64 w-96 h-36">
                <header className="flex items-center justify-between">
                    <p>Total</p>
                    <Image src={totalImg} alt="Total" width={32} height={32} />
                </header>
                <strong className="block mt-4 text-4xl font-medium leading-[3rem]">R$500,00</strong>
            </div>
        </div>
    )
}
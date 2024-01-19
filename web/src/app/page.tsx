import Image from "next/image"
import incomeImg from "../assets/income.svg"

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto px-8 py-10">
      <div className="bg-gray-400 py-8 px-6 rounded-lg min-w-64 relative">
        <header className="flex items-center justify-between gap-8 text-justify">
            <p className="text-3xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, expedita nihil? Nesciunt facilis recusandae voluptate rerum minima in nulla, quam repellat fugiat nihil eos enim molestiae ad commodi saepe iure!</p>
            <Image className="absolute right-4 bottom-4" src={incomeImg} alt="Entradas" width={32} height={32} />
        </header>
        <strong className="block mt-4 text-4xl font-medium leading-[3rem]">Fique a vontade para testar</strong>
      </div>
    </div>
  )
}

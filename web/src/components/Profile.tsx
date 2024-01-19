import { getUser } from "@/lib/auth";
import Image from "next/image";

export function Profile() {
    const { name, avatarUrl } = getUser() 

    return(
        <div>
            <div className="duration-200 flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                    <Image
                        src={avatarUrl}
                        width={40}
                        height={40}
                        alt=""
                        className="h-10 w-10 rounded-full"
                    />
                </div>
                    <p>
                        {name}
                        <a href="/api/auth/logout" className="block text-red-300 hover:text-red-400 transition-colors">
                            Quero sair
                        </a>
                    </p>
            </div>

            <h1 className="text-4xl font-bold mt-8">My Finances</h1>
        </div>
    )
}
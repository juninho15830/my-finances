import { User } from "lucide-react";

export function SignIn() {
    return(
        <div>
            <div className="duration-200 flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                    <User className="h-5 w-5 text-gray-500"/>
                </div>
                    <p>
                        Controle suas finanças
                        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="block hover:text-blue-300">
                            Clique aqui para começar
                        </a>
                    </p>
            </div>





            <h1 className="text-4xl font-bold mt-8">My Finances</h1>
        </div>
    )
}
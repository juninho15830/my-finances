import { cookies } from "next/headers"
import { SignIn } from "./SignIn"
import { Profile } from "./Profile"
import { NewTransactionButton } from "./NewTransactionButton"

export function Header() {
    const isAuthenticated = cookies().has('token')

    return (
        <header className="bg-gray-900 ">
            <div className="flex flex-wrap w-full justify-between px-8 max-w-screen-xl my-0 mx-auto pb-36 pt-8 gap-8"> 
                {isAuthenticated ? <Profile /> : <SignIn />} 
                {isAuthenticated ? <NewTransactionButton/> : <div />}
            </div>
        </header>
    )
} 
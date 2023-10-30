import LoginForm from "@/components/LoginForm";

export default function Login(){
    return (
        <main className="flex h-screen">
            <div className="w-1/3 flex justify-center items-center">
               <LoginForm/>
            </div>
            <div className="w-2/3 bg-amber-400 flex items-center justify-center">
                <img className="pt-40 rounded-lg" src="signin_page.png" alt="" />
            </div>
        </main>
    )
}
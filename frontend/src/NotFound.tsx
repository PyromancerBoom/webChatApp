import { useRouteError } from "react-router-dom"


export default function NotFound() {
    const error = useRouteError();



    return (
        <main className="h-screen w-screen overflow-hidden">
            <div className="rounded-md shadow-lg shadow-gray-400 w-fit mx-auto mt-56 px-10 py-8">
                <h1 className="text-2xl">{error.statusText}</h1>
                <h2 className="text-xl">{error.data}</h2>
                <button className="rounded shadow-lg hover:bg-gray-400 transition mt-10 w-full px-2 py-3 text-xl" onClick={() => {
                    window.history.back()
                }}>Go back to previous route</button>
            </div>
        </main>
    )
}
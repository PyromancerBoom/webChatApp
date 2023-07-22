import { useOutlet } from "react-router-dom"

export default function ContactChat() {
    const out = useOutlet()

    console.dir(out)

    return (
        <>
            <h1 className="text-2xl">This is your chat</h1>
        </>
    )
}
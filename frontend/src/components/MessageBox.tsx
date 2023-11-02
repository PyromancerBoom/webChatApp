import { MessageBoxProps } from "../types"

export default function MessageBox(props: MessageBoxProps) {
    const messageTime = new Date(props.timeStamp).toLocaleTimeString("en", {
        timeStyle: "medium"
    })

    return (
        <div className="w-full" style={{
            gridColumnStart: props.username === null ? 1 : 2,
        }}>
            <div className={`max-w-lg px-3 pb-3 my-3 rounded-2xl text-white ${props.username ? "bg-blue-600 float-left" : "bg-slate-800 float-right"} `}>
                <span className="text-xs ">{messageTime}</span>
                <div className="">
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    )
}
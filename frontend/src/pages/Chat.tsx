import { Form } from "react-router-dom";
import { PaperAirplaneIcon as Send } from "@heroicons/react/24/solid"

import MessageBox from "../components/MessageBox";

export default function Chat() {
    return (
        <main className="h-screen flex flex-col bg-zinc-900">
            <section className="px-8 overflow-x-hidden flex flex-col ">
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={null}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={"asdf"}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={null}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={"asdfasdf"}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={null}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={null}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={"akjsdhfkjlh"}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={"ooiwerwe"}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />

                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={null}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf() + 201233}
                />
                <MessageBox
                    // all of the values will be actually recieved from the server and the frontend as well (frontend means using optimistic UI)
                    username={"sdfgii"}
                    message="This is a long message and in here I can't understand what message should I type in here because this is a user sent mesasge and this chat app is under development"
                    timeStamp={new Date().valueOf()}
                />

            </section>
            <Form className="w-full bg-slate-600 mt-2 py-2 px-3 flex ">
                <input type="text" placeholder="Enter your message...." className="rounded focus:outline-none w-[95%] px-3 py-1 text-lg text-left placeholder:text-gray-700" />
                <button type="submit" className="rounded  w-12 h-10 transition-colors hover:bg-gray-400">
                    <Send color="black" height={25} width={25} className="m-auto align-bottom" />
                </button>
            </Form>
        </main>
    )
}
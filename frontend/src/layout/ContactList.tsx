import { useEffect, useState, useRef } from "react"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"

import Spinner from "../components/Spinner"
import Contacts from "../components/Contacts";
import UserActions from "../components/UserActions";

import { userType } from "../types";

export default function ContactList() {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState<userType[]>([]);

    const scrollRef = useRef<HTMLDListElement>();

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = (await fetch("http://localhost:800").then(res => res.json())).response
                setContacts(response)
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }
        }

        fetchList();
    }, [contacts])

    return (
        <div className="bg-[#02010a]">
            {loading ?
                <div className="flex h-screen w-full flex-col ">
                    <div className="h-fit w-fit mx-auto mt-[60%]">
                        <Spinner />
                    </div>
                    <span className="mt-12 text-[0.9em] text-gray-300 text-center">
                        Your chats are loading. This might take a while.
                    </span>
                </div>
                :
                <>
                    <div className="h-screen overflow-scroll">
                        <UserActions ref={scrollRef} />
                        {contacts.map((ele, i) => {
                            return <Contacts key={i} user={ele} />
                        })}
                    </div>
                </>
            }

        </div>
    )
}
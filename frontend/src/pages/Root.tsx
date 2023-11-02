import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";

import ContactList from "../layout/ContactList";

export default function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        document.onkeydown = (ev) => {
            if (ev.key === "Escape") {
                navigate("/")
            }
        }

    })

    return (
        <div className="flex flex-row">
            <section className="w-[37em]">
                <ContactList />
            </section>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}
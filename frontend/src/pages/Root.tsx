import { Outlet } from "react-router-dom";

import ContactList from "../layout/ContactList";

export default function Root() {

    return (
        <div className="flex flex-row">
            <section className="w-[37em] h-full shadow-2xl">
                <ContactList />
            </section>
            <main className="w-full h-screen">
                <Outlet />
            </main>
        </div>
    )
}
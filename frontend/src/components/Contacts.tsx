import { NavLink } from "react-router-dom";

import { userType } from "../types";

export default function Contacts({ user }: { user: userType }) {
    return (
        <NavLink
            to={`chat/${user.id}`}
            className={({ isActive, isPending }) => {
                return (
                    isActive ? `flex px-4 py-[0.6em]  transition bg-[#141052] text-white`
                        : isPending ? `flex px-4 py-[0.6em] transition text-white `
                            : `flex px-4 py-[0.6em] transition hover:bg-[#04052e]  text-white`
                )
            }} >
            <img src={user.picture} className="h-[3.2em] rounded-full" />
            <div className="h-full w-full ml-[1.2em]">
                <span className="text-lg">{`${user.name.first} ${user.name.last}`}</span>
            </div>
        </NavLink >
    )
}
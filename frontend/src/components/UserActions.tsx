import { forwardRef } from "react"

import { Cog6ToothIcon, Cog8ToothIcon } from "@heroicons/react/24/solid"

const UserActions = forwardRef(() => {
    return (
        <div className="flex justify-around border-b border-b-gray-700 py-2 text-white">
            <Cog6ToothIcon className="h-[1.7em]" />
            <Cog8ToothIcon className="h-[1.7em]" />
        </div>
    )
})
export default UserActions
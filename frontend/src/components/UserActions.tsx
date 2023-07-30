import { Cog6ToothIcon } from "@heroicons/react/24/solid"

export default function UserActions() {
    return (
        <div className="flex justify-around border-b border-b-gray-700 py-2 text-white">
            <Cog6ToothIcon className="h-[1.7em]" />
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                className="object-cover h-[1.9em] w-[1.9em] rounded-full" />
        </div>
    )
}
export interface userType {
    id: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    phone: string,
    picture: string,
    std: string,
}

export interface MessageBoxProps {
    username: string | null,
    message: string | string[]
    timeStamp: number,
}
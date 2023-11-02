import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import App from "./App"
import NotFound from "./NotFound"
import Chat from "./pages/Chat"
import DefaultPage from "./pages/DefaultPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/*' errorElement={<NotFound />} />
            <Route path='/' element={<App />} >
                <Route index element={<DefaultPage />} />
                <Route path='chat'>
                    <Route path=':chatId' element={<Chat />} />
                </Route>
            </Route>
        </>
    )
)
export default router;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import App from './App'
import ContactChat from './pages/ContactChat'
import NotFound from './NotFound'

import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/*' errorElement={<NotFound />} />
            <Route path='/' element={<App />} >
                <Route path='chat'>
                    <Route path=':chatId' element={<ContactChat />} />
                </Route>
            </Route>
        </>
    )
)


createRoot(document.getElementById('app-root') as HTMLElement).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)

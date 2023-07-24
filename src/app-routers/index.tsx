import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SampleContainer } from "../features/sample/container";
import { PublicRouter } from "./PublicRouter";
import { MainLayout } from "../layouts/main-layout";
import { ChatHome } from "../features/chat-home/containter";

export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<PublicRouter layout={MainLayout} component={ChatHome}/>}/>
        </Routes>
    </BrowserRouter>
}
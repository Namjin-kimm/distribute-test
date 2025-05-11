import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "../pages/board/Board";


export default function Router() {
    return (
        <Routes>
            <Route path="/board" element={<Board/> } /> 
        </Routes>
    )
}
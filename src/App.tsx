import React, { FC } from "react";
import "./App.css";
import BoardView from "./components/BoardView";
import { board1 } from "./mock/mocks";

const App: FC = () => {
    return <BoardView board={board1} />;
};

export default App;

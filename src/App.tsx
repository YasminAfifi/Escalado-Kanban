import { ThemeProvider } from "@material-ui/styles";
import React, { FC } from "react";
import "./App.css";
import BoardView from "./components/BoardView";
import { board1 } from "./mock/mocks";
import { defaultTheme } from "./theme/default";

const App: FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BoardView board={board1} />
        </ThemeProvider>
    );
};

export default App;

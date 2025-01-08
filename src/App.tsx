import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Button, Theme, ThemePanel } from "@radix-ui/themes";

function App() {
    const [count, setCount] = useState(0);
    return (
        <Theme accentColor="blue" radius="large">
            <div className={"flex flex-col items-center w-full h-screen justify-center gap-y-5"}>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="text-center">
                    <Box></Box>
                    <Button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </Button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p>
                    Click on the Vite and React logos to learn more
                </p>
            </div>
            <ThemePanel />
        </Theme>
    );
}

export default App;

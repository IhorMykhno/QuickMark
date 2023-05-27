import { Route, Routes } from "react-router-dom";
import { StatisticsPage } from "./views/pages/Statistics";
import { NavBar } from "./views/components/NavBar";
import { CreateTestPage } from "./views/pages/CreateTest";
import { TestsPage } from "./views/pages/Tests";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<StatisticsPage />} />
                <Route path="/tests" element={<TestsPage />} />
                <Route path="/create-test" element={<CreateTestPage />} />
            </Routes>
        </>
    );
}

export default App;

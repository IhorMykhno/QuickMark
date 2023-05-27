import { NavBar } from "@components/NavBar";
import { CreateTestPage } from "@pages/CreateTest";
import { StatisticsPage } from "@pages/Statistics";
import { TestsPage } from "@pages/Tests";
import { Route, Routes } from "react-router-dom";


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

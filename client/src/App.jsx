import { NavBar } from "@components/NavBar";
import { CreateTestPage } from "@pages/CreateTest";
import { StatisticsPage } from "@pages/Statistics";
import { TestsPage } from "@pages/Tests";
import { Route, Routes } from "react-router-dom";
import { CodeOnline } from "@pages/CodeOnline/index.jsx";


function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<StatisticsPage />} />
                <Route path="/tests" element={<TestsPage />} />
                <Route path="/create-test" element={<CreateTestPage />} />
                <Route path="/code-online" element={<CodeOnline />} />
            </Routes>
        </>
    );
}

export default App;

import { useState } from "react";
import AgregarEvaluacion from "./AgregarEvaluacion";

const Dashboard = () => {
    const [data, setData] = useState(null);

    return (
        <div>
            <h1>Dashboard</h1>
            {
                <p>Aqui va el dashboard</p>
            }
            <AgregarEvaluacion />
        </div>
    );
};

export default Dashboard;

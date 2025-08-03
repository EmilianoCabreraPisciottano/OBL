import { useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState(null);

    return (
        <div>
            <h1>Dashboard</h1>
            {
                <p>Aqui va el dashboard</p>
            }
        </div>
    );
};

export default Dashboard;

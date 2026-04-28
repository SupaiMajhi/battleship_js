import { useState, useEffect } from "react";
import axios from "axios";

import Row from "../compo/Row";

function Home() {

    const [fleet, setFleet] = useState([]);
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        async function fetch() {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/`);
            setFleet(res.data.fleet);
            setGrid(res.data.grid);
        }

        fetch();
    }, [])

    return (
        <div className="w-full h-full">
            <h1 className="text-xl font-bold underline">BattleShip</h1>
            <p id="game_info" className="mt-2 text-center text-base font-medium bg-yellow-200 py-1">Place the ships.</p>

            <div className="w-full h-full flex flex-col items-center mt-5">
                <div id="own_grid">
                    {grid.map((g, i) => (
                        <Row key={i} g={g} className={i === 0 ? "border-t" : ""} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
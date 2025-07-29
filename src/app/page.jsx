"use client";

import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import data from "./components/data.json";

export default function Home() {
    const nav = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
    const [current, setCurrent] = useState("HOME");
    return (
        <div
            className={` ${
                current === "HOME" &&
                "bg-[url(/assets/home/background-home-desktop.jpg)]"
            } ${
                current === "DESTINATION" &&
                "bg-[url(/assets/destination/background-destination-desktop.jpg)]"
            }
            ${
                current === "CREW" &&
                "bg-[url(/assets/crew/background-crew-desktop.jpg)]"
            } ${
                current === "TECHNOLOGY" &&
                "bg-[url(/assets/technology/background-technology-desktop.jpg)]"
            } bg-no-repeat bg-cover flex flex-col h-screen w-screen`}
        >
            <Navbar nav={nav} current={current} setCurrent={setCurrent} />

            {current === "HOME" && <HomePage />}
            {current === "DESTINATION" && <Destination destinations={data.destinations} />}
            {current === "CREW" && <Crew />}
            {current === "TECHNOLOGY" && <Technology />}
            {/* <HomePage /> */}
        </div>
    );
}

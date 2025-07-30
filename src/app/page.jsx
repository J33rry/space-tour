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
                "bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] xl:bg-[url(/assets/home/background-home-desktop.jpg)]"
            } ${
                current === "DESTINATION" &&
                "bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] xl:bg-[url(/assets/destination/background-destination-desktop.jpg)]"
            }
            ${
                current === "CREW" &&
                "bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] xl:bg-[url(/assets/crew/background-crew-desktop.jpg)]"
            } ${
                current === "TECHNOLOGY" &&
                "bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] xl:bg-[url(/assets/technology/background-technology-desktop.jpg)]"
            } bg-no-repeat bg-cover flex flex-col min-h-screen xl:h-screen w-screen`}
        >
            <Navbar nav={nav} current={current} setCurrent={setCurrent} />

            {current === "HOME" && <HomePage setCurrent={setCurrent} />}
            {current === "DESTINATION" && (
                <Destination destinations={data.destinations} />
            )}
            {current === "CREW" && <Crew crew={data.crew} />}
            {current === "TECHNOLOGY" && (
                <Technology technology={data.technology} />
            )}
        </div>
    );
}

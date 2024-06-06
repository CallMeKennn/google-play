import Header from "@/components/Header/Header";
import Slick from "@/components/Slick/Slick";
import "./globals.css";
import "./globalsicon.css";
import { topRatedGame } from "@/fakedata/data";

export default function Home() {
    return (
        <div className="w-full flex justify-center">
            <Header />

            {/* All device */}
            <div className="w-8/12 mt-20">
                <ul className="flex w-3/5 justify-between">
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">desktop_windows</span>
                        <span className="ml-2">Windows</span>
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">phone_iphone</span>
                        <span className="ml-2">Phone</span>
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">tablet_mac</span>
                        <span className="ml-2">Tablet</span>
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">tv</span>
                        <span className="ml-2">TV</span>
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">laptop_chromebook</span>
                        <span className="ml-2">Chromebook</span>
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border flex">
                        <span className="material-symbols-outlined">watch</span> 
                        <span className="ml-2">Watch</span>
                    </li>
                </ul>

                {/* Top-rated games */}
                <div className="mt-7 text-2xl font-medium">
                    <h2>Top-rated games</h2>
                    <Slick data={topRatedGame}/>
                </div>
            </div>
        </div>
    );
}

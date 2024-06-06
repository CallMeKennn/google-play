import Header from "@/components/Header/Header";
import "./globals.css";

export default function Home() {
    return (
        <div className="w-full flex justify-center">
            <Header />
            <div className="w-8/12 mt-20">
                <ul className="flex w-1/2 justify-between">
                    <li className="rounded-full py-1 px-4 border-slate-500 border">
                        <span class="material-symbols-outlined">desktop_windows</span> Windows
                    </li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border">Phone</li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border">Tables</li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border">TV</li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border">Chormebook</li>
                    <li className="rounded-full py-1 px-4 border-slate-500 border">Watch</li>
                </ul>
            </div>
        </div>
    );
}

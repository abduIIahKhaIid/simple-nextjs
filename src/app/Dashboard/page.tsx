import Displaydata from "@/components/page";
import Myapp from "@/components/displayobject";
import Board from "@/components/conditionalRendering";
export default function Page() {
    return (
        <>
            <div>
                <h1>Hello, Next.js!</h1>
                <Displaydata />
                <Myapp />
            </div>
            <div className="p-12">
                <p className="text-red-600">The conditionalRendering</p>
                <Board />
            </div>
        </>
    );
}
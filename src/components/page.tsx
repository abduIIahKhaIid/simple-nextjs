import Link from "next/link";
function Displaydata() {
    return (
        <div className="p-12">
            <p>How are you</p>
            <Link href={"/setting"}>Settings page</Link>
        </div>
    );
}

export default Displaydata;
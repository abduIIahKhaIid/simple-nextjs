import Image from 'next/image';
function Mybutton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

const user = {
    first: 'Abdullah',
    last: 'Khalid',
    age: 20
}

const na = {
    name: 'Harry',
    ImageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    ImageSize: 90
}

export default function Myapp() {

    return (
        <>
            <div className="flex-1  px-3 py-5 bg-red-700 ">
                <h1>This is the button of</h1>
                <Mybutton />
                <h2>My first name is {user.first}</h2>
                <h2>My last name is {user.last}</h2>
                <h2>My age is {user.age}</h2>
            </div>
            <>
                <h1>{na.name}</h1>
                <img
                    className="avatar"
                    src={na.ImageUrl}
                    alt={'photo of ' + na.name}
                    title={'photo of ' + na.name}
                    style={{ width: na.ImageSize, height: na.ImageSize }}
                ></img>
            </>
        </>
    );
}
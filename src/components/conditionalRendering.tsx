const Board = () => {
    let content;
    let isLoggedIn = true;
    let newCondition = true;
    if (isLoggedIn) {
        content = <div>Admin Panel</div>;
    } else {
        content = <div>Login Panel</div>;
    }
    return (
        <>
            <div>
                {content}
            </div>
            {newCondition && <div><p>Abdullah Khalid</p></div>}
        </>
    );
}

export default Board;
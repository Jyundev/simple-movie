import { useEffect, useState } from "react";

function Hello() {
    function effectFnc() {
        console.log("created :)")
        return destroyFnc; // 정리함수를 반환 
    }
    function destroyFnc() {
        console.log("destroyed :(")
    }
    // useEffect(effectFnc,[])
    useEffect(() => {
        console.log("hi :)")
        return () => console.log("bye :(")
    })
    return <h1>Hello</h1>
}
function Clean() {
    const [showing, setShowwing] = useState(false);
    const onclick = () => setShowwing((prev) => !prev)
    return <div>
        {showing ? <Hello /> : null}
        <button onClick={onclick}>{showing ? "Hide" : "Show"}</button>
    </div>
}


export default Clean;
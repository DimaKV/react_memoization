import React from "react";

const MyTime = () => {
    const [ myTime, setMyTime ] = React.useState(0);
    const intervalRef = React.useRef();

    React.useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setMyTime(myTime + 1);
        }, 2000);
    }, [myTime]);
    return <section>My own time! 😎 {myTime}</section>
}
export {MyTime}
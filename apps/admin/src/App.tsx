import { useEffect } from "react";
import { type CustomError, fetcher } from "./shared/kyInstance";

function App() {
    useEffect(() => {
        fetcher("orders", {
            method: "GET",
        })
            .then(res => console.log(res))
            .catch(e => {
                const err = e as CustomError;
                console.error(`${err.code} - ${err.message}`);
            });
    }, []);
    return <div>백오피스</div>;
}

export default App;

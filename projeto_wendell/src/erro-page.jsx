import { useRouteError } from "react-router-dom";

export default function ErroPage() {    
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1> OOPS</h1>
            <p>Sorry</p>
            <p>
                <i>{error.statuText||error.message}</i>
            </p>
        </div>
    );
}







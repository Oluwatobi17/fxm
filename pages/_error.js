import Link from "next/link";

const Error = () => {
    return <main>
        <center>
            <h1>An Error Occured</h1>
            <p>Go back home</p>
            <Link href="/">
                <a className="request-link">Home</a>
            </Link>
        </center>
    </main>
}

export default Error;
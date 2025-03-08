import { useEffect, useState } from "react";
import './aboutme.css';

function Aboutme() {
    const [content, setContent] = useState(""); // State to store file content
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/aboutme_for_webapp.txt') // File should be inside the 'public' folder
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching the file:", error);
                setError("Failed to load content.");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>About Me</h1>
            {loading ? <p>Loading...</p> : error ? <p style={{ color: "red" }}>{error}</p> : <pre>{content}</pre>}
        </div>
    );
}

export default Aboutme;

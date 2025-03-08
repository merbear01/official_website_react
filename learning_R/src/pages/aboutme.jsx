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
                // Split content into lines
                let lines = data.split("\n");

                // Process each line: Detect headers and wrap them in <h2>
                let formattedContent = lines.map(line => {
                    let trimmed = line.trim();

                    // If the line is short and capitalized, assume it's a header
                    if (trimmed.length > 0 && trimmed.length <= 60 && /^[A-Z]/.test(trimmed)) {
                        return `<h2>${trimmed}</h2>`;
                    }

                    // Otherwise, it's a normal paragraph
                    return `<p>${trimmed}</p>`;
                }).join(""); // Join all lines together

                setContent(formattedContent);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching the file:", error);
                setError("Failed to load content.");
                setLoading(false);
            });
    }, []);

    return (
        <div >
            <h1>About Me</h1>
            {loading ? <p>Loading...</p> : error ? <p style={{ color: "red" }}>{error}</p> :
                <div className="content" dangerouslySetInnerHTML={{__html: content}}/>}
        </div>
    );
}

export default Aboutme;

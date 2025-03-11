import { useParams } from "react-router-dom";
import './Page.css'
import {useEffect, useState} from "react";

const content = {
    Page1: "Why Software Engineering in the first place",
    Page2: "Always ask questions",
    Page3: "Don't be afraid to break things",
    Page4: "The importance of software testing",
    Page5: "Where do you see yourself in the next 5 years",
};

function Page() {
    const { id } = useParams(); // Get the page ID from the URL
    const pageContent = content[id] || "Page not found"; // Get content or show error
    const [fileContent, setFileContent] = useState(""); // State to store file content
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!id) return;
        const filePath = {
            Page1: `/Page1.txt`,
            Page2: `/Page2.txt`,
            Page3: `/Page2.txt`,
            Page4: `/Page2.txt`,
            Page5: `/Page2.txt`
        }[id]; // Assuming each page has a corresponding .txt file; // Assuming each page has a corresponding .txt file

        fetch(filePath) // File should be inside the 'public' folder
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

                setFileContent(formattedContent);
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
            <h1>{pageContent}</h1>
            <p>More details about: {pageContent}</p>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div dangerouslySetInnerHTML={{__html: fileContent}}/>
        </div>
    );
}

export default Page;

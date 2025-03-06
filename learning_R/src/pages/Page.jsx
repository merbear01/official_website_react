import { useParams } from "react-router-dom";
import './Page.css'

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

    return (
        <div>
            <h1>{pageContent}</h1>
            <p>More details about: {pageContent}</p>
        </div>
    );
}

export default Page;

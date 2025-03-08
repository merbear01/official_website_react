import './myprojects.css';

function myprojects() {
    return (
        <>


        <div>
            <h1 style={{textAlign:"center", alignContent:"center"}}>My Projects</h1>

        </div>

            <div className='projects-container'>

                <div className="Project">
                    <a href="https://github.com/merbear01/StudyBuddyFlashcards">
                    <img className="project-image" alt='flashcards-saas' src='/flash-card-icon-free-vector.jpg'/>
                    <h2 className='project-title'>Flashcards SAAS</h2>
                    </a>
                </div>
                <div className="Project">
                    <a href="https://github.com/merbear01/Invoice_Generator">
                    <img className="project-image" alt="invoice-gen" src='/invoice%20image.jpg'/>
                    <h2 className='project-title'>Invoice Generator</h2>
                    </a>

                </div>
                <div className="Project">
                    <a href="https://github.com/merbear01/translator-inator">
                    <img className="project-image" alt='translator-inator'
                         src='/speaker-creative-icon-design-free-vector.jpg'/>
                    <h2 className='project-title'>Translator-Inator</h2>
                    </a>

                </div>
                <div className="Project">
                    <a href="https://github.com/merbear01/chatsupportAI">
                    <img className="project-image" alt='project4' src='/chatbot-ai-image.jpg'/>
                    <h2 className='project-title'>ChatBot support AI</h2>
                    </a>

                </div>

            </div>


        </>
    );
}

export default myprojects;
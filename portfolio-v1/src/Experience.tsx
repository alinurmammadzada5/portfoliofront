import techstackIMG from "./assets/techStack.png"
function Experience(){
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                <div className="works-container">
                    <div className="work">
                        <div className="workName">Andersen Software Company</div>
                        <div className="workPosition">Java Backend Developer (10.2024 - 05.2026)</div>
                    </div>
                    <div className="work">
                        <div className="workName">Self Development</div>
                        <div className="workPosition">Java Backend Developer (01.2024 - 05.2026)</div>
                    </div>
                </div>
                <p className="worked">worked</p>
                <div className="worked-container">
                    <div className="worked-info"> <strong>2</strong> Company Level Project</div>
                    <div className="worked-info"> <strong>1.8</strong> Years of Experience</div>
                </div>
                <h4>TechStack</h4>
                <div className="techStack-container">
                    <img src={techstackIMG} alt="techStack" />
                </div>

            </div>
        </section>
    );
}

    export default Experience;
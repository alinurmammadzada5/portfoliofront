import gitLogo from "./assets/github.png"
import linkedinLogo from "./assets/linkedin.png"
import instagramLogo from "./assets/instagram.png"
import youtubeLogo from "./assets/youtube.png"

function AboutMe(){
    return(
        <section className="aboutMe">
            <h2>About Me</h2>
            <div className="aboutMe-container">
                <div className="aboutMeText">
                    I am Alinur Mammadzada. I am 19. I am studying and working in Warsaw, Poland. I am Java Backend Developer with nearly 2 years of experience. I have an experience of building RESTful APIs with Java and Spring and working with Hibernate, Spring Data, and PostgreSQL. Experienced in database migrations using Liquibase and Flyway, and in writing unit and integration tests with JUnit and Mockito to ensure code reliability. Contributed to banking and logistics platforms, applying clean code principles, participating in code reviews, and delivering stable, production-ready backend solutions. I also have hand on experience with working MicroService Architecture and Apache Kafka. 
                </div>
            </div>
            <div className="accounts-container">
                <h4>accounts</h4>
                <div className="accounts-img-container">
                    <a href="#"> <img src={gitLogo} alt="githubLogo" /> </a>
                    <a href="#"> <img src={linkedinLogo} alt="linkedinLogo" /> </a>
                    <a href="#"> <img src={instagramLogo} alt="instagramLogo" /> </a>
                    <a href="#"> <img src={youtubeLogo} alt="youtubeLogo" /> </a>
                
                </div>
                <div className="moreDetails">
                    To get more details, you can text me via these social media accounts or through <a href="#">contact me</a> section
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
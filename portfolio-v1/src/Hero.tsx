import heroImg from "./assets/allyzada-profile-img.jpeg"
import javaImg from "./assets/java_img.webp"
import springImg from "./assets/spring_boot_img.png"
import kafkaImg from "./assets/kafka_img.png"
import codingImg from "./assets/coding.png"

function Hero(){
    return (
        <section id="hero">

      <div className="content">
        <img src={heroImg} className="profile" />

        <h2>I am Alinur Mammadzada</h2>
        <p>Java Backend Developer</p>
      </div>


      <img src={codingImg} className="icon code" />
      <img src={javaImg} className="icon java" />
      <img src={springImg} className="icon spring" />
      <img src={kafkaImg} className="icon kafka" />
        </section>
    );
}

export default Hero;
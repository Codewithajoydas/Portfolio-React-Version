import bgImage from "../assets/Ajoy.jpg";
import "./style.css";
const Home = () => {
  return (
    <div
      className="container"
      style={{
        background: `url(${bgImage})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 10px 10px 1000px 100px rgb(51, 51, 51)",
      }}
    >
      <span className="heroTitle">
        <span
          style={{
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span
            className="name"
            style={{
              fontWeight: "bolder",
            }}
          >
            <span className="cwajd-word cwajd-c">C</span>
            <span className="cwajd-word cwajd-o">o</span>
            <span className="cwajd-word cwajd-d">d</span>
            <span className="cwajd-word cwajd-e">e</span>
            <span className="cwajd-word cwajd-w">w</span>
            <span className="cwajd-word cwajd-i">i</span>
            <span className="cwajd-word cwajd-t">t</span>
            <span className="cwajd-word cwajd-h">h</span>
            <span className="cwajd-word cwajd-a1">a</span>
            <span className="cwajd-word cwajd-j">j</span>
            <span className="cwajd-word cwajd-o2">o</span>
            <span className="cwajd-word cwajd-y">y</span>
            <span className="cwajd-word cwajd-d2">d</span>
            <span className="cwajd-word cwajd-a2">a</span>
            <span className="cwajd-word cwajd-s">s</span>
          </span>
          <span className="slogan">
            The best coder — and the best at what I do.
          </span>
          <span className="authorname">Ajoy Das</span>
        </span>
      </span>

      <div className="btns">
        <button className="btn hireMe">Hire me</button>
        <button className="btn seePorjects">See Porjects</button>
        <button className="btn contactMe">Contact Me</button>
      </div>
    </div>
  );
};

export default Home;

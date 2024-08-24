import "./App.css";

function Avatar() {
  return <img src="./avatar.jpg" alt="Susovan" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Susovan Sahoo</h1>
      <p>
        I am a Full-stack web developer, working at LTIMindtree over more than 2
        years. Beside my work I love to watch movie, travelling and cooking.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="💪" color="blue" />
      <Skill name="CSS" emoji="😐" color="red" />
      <Skill name="JavaScript" emoji="🤞" color="Yellow" />
      <Skill name="Git & GitHub" emoji="🌿" color="#ad23cf" />
      <Skill name="React" emoji="🧑‍💻" color="#34ef90" />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="skill" style={style}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

export default App;

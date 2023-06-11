const Title = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
      <div className="navbar">
        <h2>
          <a href="">Log in</a>
        </h2>
        <h2>
          <a href="">Register</a>
        </h2>
      </div>
    </>
  );
};

export default Title;

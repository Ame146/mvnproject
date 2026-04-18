function App(){
  return(
    <div style={{border:"3px solid red", padding:"20px"}}>
      Hello World
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
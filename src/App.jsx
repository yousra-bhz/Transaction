import { useState } from "react";
import './App.css';
import Compo from "./function";

function App() {
  const [usertab, setUsertab] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("");
  const [price, setPrice] = useState(0);
  const [usere, setUsere] = useState("");
  const [credit, setCredit] = useState(0);
  const [style , setStyle] = useState("hidden");

  /* Handling the receiver */
  const handleReceiver = (event) => {
    setReceiver(event.target.value);
  };

  /*handle sender*/
  const handleSender = (event) => {
    setSender(event.target.value);
  };

  /* Handling the price */
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCredit = (event) => {
    setCredit(event.target.value);
  };

  const handleUser = (event) => {
    setUsere(event.target.value);
  };

  /* Adding a new user to the list */
  const addNewUser = () => {
    const user = {
      id: usertab.length === 0 ? 1 : usertab[usertab.length - 1].id + 1,
      userName: usere,
      credite: Number(credit),
    };
    setUsertab([...usertab, user]); // Corrected the spread syntax usage
  };

  const retrieve = () => {
    setUsertab(
      usertab.map((user) => {
        if (user.userName === sender) {
          if (user.credite >= price) {
            return {
              ...user,
              credite: user.credite - Number(price),
            };
          }
          else if(user.credite === 0){
            alert('votre credit est null');
          } else {
            alert(' credit insufissant');
            return user;
          }
        }
        return user;
      })
    );
  };
  

  const transform = () => {
    setUsertab(
      usertab.map((user) => {
        if (user.userName === receiver) {
          return {
            ...user,
            credite: user.credite + Number(price),
          };
        } else {
          return user;
        }
      })
    );
  }

  return (
    <div className="big">
       <div className="right">
      <div className="card-to-add">
        <input placeholder="enter your name" onChange={handleUser}></input>
        <input placeholder="enter your credit" onChange={handleCredit}></input>
        <button onClick={addNewUser}>Add new user</button>
      </div>
      <div className="card-to-transaction">
        <input onChange={handleSender} placeholder="sender"></input>
        <input onChange={handleReceiver} placeholder="receiver"></input>
        <input onChange={handlePrice} placeholder="amount"></input>
        <button onClick={retrieve}>Submit the sender</button>
        <button onClick={transform}>Submit the transaction</button>
      </div>
      </div> 
      <div className="buttons">
      <button  className="btn" onClick={() => setStyle("visible")}>See All Users</button>
      <button  className="btn" onClick={() => setStyle("hidden")}>Hide All Users</button>
      </div>
      <div className="interface" style={{visibility:style}}>
        {usertab.map((user) => {return <Compo userName = {user.userName}  credite= {user.credite} />}

        )}
      </div>
    </div>
  );
}

export default App;

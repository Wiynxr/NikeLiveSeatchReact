import { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { dataBase } from "./dataBase";

function App() {
  const [text, setText] = useState("");

  const[sneakers, setSneakers] = useState(dataBase)

  const filterSneakers = sneakers.filter(item => {
    return item.name.toLowerCase().includes(text.toLowerCase())
  })

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="Form">
        <input
          onChange={handleChange}
          value={text}
          className="input"
          placeholder="Username"
          type="text"
          class="input"
          required=""
        />
        <BsSearch className="search-img" />
      </div>
      <div className="Products">
          <Product sneakers12={filterSneakers}/>
    </div>
    </div>
  );
}

export default App;

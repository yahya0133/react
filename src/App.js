import "./App.css";
import Description from "./Components/Description";
import Image from "./Components/Image";
import Name from "./Components/Name";
import Price from "./Components/Price";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleBuyClick = () => {
    alert(`${firstName} ${lastName} you want buy`);
  };

  return (
    <>
      <Card style={{ width: '50%', display: 'flex', marginLeft: '30%' }}>
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
          <div style={{ marginTop: '5%', marginBottom: '5%' }}>
            <label>Your name</label>
            <input
              style={{ marginLeft: '10%' }}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Your lastname</label>
            <input
              style={{ marginLeft: '10%' }}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </Card.Body>
        <Button onClick={handleBuyClick}>
          buy
        </Button>
      </Card>
    </>
  );
}

export default App;
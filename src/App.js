import './App.css';
import Button from './components/button'

function App() {
  return (
    <div>
      <Button text = "Primary" variant="primary"/>
      <Button text = "Secondary" variant="secondary"/>
      <Button text = "Success" variant="success"/>
      <Button text = "Warning" variant="warning"/>
      <Button text = "Danger" variant="danger"/>
      <Button text = "Info" variant="info"/>
      <Button text = "Light" variant="light"/>
      <Button text = "Dark" variant="dark"/>
      <Button text = "Custom" variant="custom" bgColor="#d10ab7" txtColor="#000"/>
      <Button text = "Botón bloque" variant="danger" size="lg"/>
      <Button text = "Outline primary" variant="outline-primary"/>
      <Button text = "Outline custom" variant="outline-custom" borderStyle="1px solid blue" txtColor="blue" bgHover="#aaa" txtHover="#fb00ff"/>
    </div>
  );
}

export default App;

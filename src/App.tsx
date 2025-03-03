import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);
  const [isSigninForm, setIsSigninForm] = useState<boolean>(false);

  return <Body />;
}

export default App;

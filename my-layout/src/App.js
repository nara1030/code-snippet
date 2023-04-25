import './App.css';
import { Gnb } from './component/layout/Gnb';

function App() {
  return (
    <>
      {/* <Gnb user={{id: "user_1", name: "ADMIN", role: ["role_1", "role_2"]}}/> */}
      <Gnb user={{id: "user_2", name: "USER", role: ["role_2"]}}/>
    </>
  );
}

export default App;

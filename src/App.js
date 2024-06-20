import './App.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoTemplate from './components/Todo/TodoTemplate';

const App = () => {

  const onAdd=()=>{
    
  }

  return <TodoTemplate onAdd={onAdd}/>;
};

export default App;
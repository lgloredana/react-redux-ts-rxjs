import React from 'react';
import './App.css';
import GoalsView from "./goals/GoalsView";
import TodosView from "./todos/TodosView";


const App: React.FunctionComponent<{}> = () => {
      return (
          <div>
                  <TodosView />
                  <GoalsView />
          </div>
      );
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import from the components
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* </Navbar> */}
      <Route path='/' exact component={ExerciseList} />
      <Route path='/edit/:id' exact component={EditExercises} />
      <Route path='/create' exact component={CreateExercises} />
      <Route path='/user' exact component={CreateUser} />
    </Router>
  );
}

export default App;

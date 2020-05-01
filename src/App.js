import React from 'react';
import './App.css';
import Student from './component/Student';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: 'Sam Smith', email: 'sam@gmail.com' },
        { id: 2, name: 'Sara Conor', email: 'sarah@gmail.com' },
        { id: 3, name: 'Ada Lovelace', email: 'ada@gmail.com' },
        { id: 4, name: 'John Doe', email: 'john@gmail.com' },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="app">
          {this.state.students.map((student) => (
            <Student
              key={student.id}
              name={student.name}
              email={student.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

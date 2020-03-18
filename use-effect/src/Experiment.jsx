import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experiment = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ username: '', password: '' });
  const [todo, setTodo] = useState({});
  const [placeholderUser, setPlaceholderUser] = useState({});

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    document.getElementById('container').innerHTML = `Clicked ${count} times`;
    // console.log(`count is ${count}`);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(`the count has reached ${count}`);
    }, 1000);

    const arbitrary = () => {
      clearInterval(interval);
      console.log('interval was cleared');
    };

    return arbitrary;
  }, [count]);

  useEffect(() => {
    console.log(`username is ${user.username} and password is ${user.password}`);
  }, [user.username]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
      .then(res => {
        setTodo(res.data);
        const { userId } = res.data;

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(response => {
            setPlaceholderUser(response.data);
          });
      });
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <h2>The current count is: { count }</h2>
      <button
        onClick={ () => setCount(count + 1) }
      >Increment Count</button>
      <p id="container"></p>

      <div>
        <h2>This is my todo:</h2>
        <h3>{ todo.title }</h3>
        <h2>Created by { placeholderUser.name }</h2>
      </div>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={ user.username }
          onChange={ event => setUser({ ...user, username: event.target.value }) }
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          value={ user.password }
          onChange={ event => setUser({ ...user, password: event.target.value }) }
        />
      </div>
    </div>
  );
};

export default Experiment;

import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todos";
import { TodoType } from "./type/TodoType";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./type/User";

const user: User = {
  name: "藤田",
  hobbies: ["映画", "カラオケ"]
};

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  console.log(todos[0]);
  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

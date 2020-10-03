import React, { useState } from "react";
import { useObservable } from "@mindspace-io/react";
import { injector, UserService } from "./services";
import { User } from "./interfaces";
import "./styles.css";

const App = function () {
  const [userService] = useState<UserService>(injector.get(UserService));
  const [users, setUsers$] = useObservable<User[]>(null, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;

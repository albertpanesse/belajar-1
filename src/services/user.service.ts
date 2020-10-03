import * as Axios from "axios";
import { from } from "rxjs";

export class User {
  getUsers() {
    return from(Axios.get("https://randomuser.me/api/?results=10"));
  }
}

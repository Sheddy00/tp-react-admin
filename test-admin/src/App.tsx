import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./user";
import { PostCreate, PostEdit, PostList } from "./post"

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={ListGuesser}
      edit={PostEdit}
      show={ShowGuesser}
    />
    <Resource 
      name="posts"
      list={PostList}
      //edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource 
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource 
      name="users" 
      list={UserList} 
      recordRepresentation="name" 
      
      />
  </Admin>
);

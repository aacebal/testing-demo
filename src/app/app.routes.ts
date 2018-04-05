import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { VoterComponent } from './voter/voter.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes = [
  { path: 'users', component: UserDetailsComponent },
  { path: 'todos', component: TodosComponent },
];
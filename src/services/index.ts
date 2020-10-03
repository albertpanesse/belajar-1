import { makeInjector, DependencyInjector } from "@mindspace-io/react";
import UserService from "./user.service";

const injector: DependencyInjector = makeInjector([
  { provide: UserService, useClass: UserService }
]);

export { injector, UserService };

import RegisterElement from "./regist-element";
import  {registProperties}  from "./regist-properties";
import { App } from "vue";

export function Rootgloble(app: App): void {
  app.use(RegisterElement)
  app.use(registProperties)
}

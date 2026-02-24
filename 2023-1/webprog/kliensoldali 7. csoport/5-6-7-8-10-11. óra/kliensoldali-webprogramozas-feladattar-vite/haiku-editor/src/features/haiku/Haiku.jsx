import { Provider } from "react-redux";
import { Editor } from "./Editor";
import { HaikuList } from "./HaikuList";
import { store } from "../../state/store";

export const Haiku = () => (
  <Provider store={store}>
    <div>
      <h1>Haiku editor</h1>
      <Editor />
      <HaikuList />
    </div>
  </Provider>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import { Hello }from "./Hello"

const root = createRoot(document.getElementById("root"))
root.render(<>
              <Hello name="Bendi" count="3" />
              <Hello name="Bendi" count="3" />
              <Hello name="Bendi" count="3" />
            </>)

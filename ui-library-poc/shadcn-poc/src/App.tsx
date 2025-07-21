import { Select } from "@radix-ui/react-select";
import "./App.css";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

function App() {
  return (
    <div className="w-full h-screen place-content-center">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Age" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"10"}>Ten</SelectItem>
          <SelectItem value={"20"}>Twenty</SelectItem>
          <SelectItem value={"30"}>Thirty</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default App;

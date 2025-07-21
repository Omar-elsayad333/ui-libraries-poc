import { Select } from '@radix-ui/react-select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import Button from './components/ui/button';

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Age" />
        </SelectTrigger>
        <SelectContent className='bg-white'>
          <SelectItem value={'10'}>Ten</SelectItem>
          <SelectItem value={'20'}>Twenty</SelectItem>
          <SelectItem value={'30'}>Thirty</SelectItem>
        </SelectContent>
      </Select>
      <hr className="border border-gray-400 w-full my-10" />
      <div className="flex items-center gap-4">
        <Button variant="primary">Click Me</Button>
        <Button variant="outline">Click Me</Button>
        <Button disabled>Click Me</Button>
      </div>
    </div>
  );
}

export default App;

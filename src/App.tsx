import { useState } from 'react';
import './App.css';
import {Button} from "@/components/ui/button.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Food Website</h1>
            <Button onClick={()=>setCount(dynamicNumber=>dynamicNumber+1)}>
                Clicked me {count} times.
            </Button>
        </div>
    );
}

export default App;
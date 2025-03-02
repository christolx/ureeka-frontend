import './App.css';
import Navbar from './components/Navbar';
// import { useState } from 'react';
// import {Button} from "@/components/ui/button.tsx";

const App = () => {
    // const [count, setCount] = useState(0);

    return (
        // <div className="flex flex-col items-center justify-center min-h-screen">
        //     <h1 className="text-3xl font-bold mb-4">Food Website</h1>
        //     <Button onClick={()=>setCount(dynamicNumber=>dynamicNumber+1)}>
        //         Clicked me {count} times.
        //     </Button>
        // </div>
        <main className='relative min-h-screen w-screen overflow-x-hidden'>
            <Navbar />
        </main>
    );
}

export default App;
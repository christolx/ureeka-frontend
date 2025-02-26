import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Food Website</h1>
            <div className="p-4 border rounded shadow-md">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Clicked me {count} times.
                </button>
            </div>
        </div>
    );
}

export default App;
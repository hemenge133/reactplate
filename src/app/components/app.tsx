import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={(): void => {
                    setCount(count + 1);
                }}
            >
                Click Me
            </button>
        </div>
    );
}

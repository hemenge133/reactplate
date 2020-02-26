import React, { useState } from 'react';

export default function App(): unknown {
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

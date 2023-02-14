import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['App']}>
      <h1 className={styles['app-heading']}>Vite + React + TS + Tailwind</h1>
      <div>
        <button className={styles['button']} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;

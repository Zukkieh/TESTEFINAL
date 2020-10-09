import React, { useState } from 'react';
import './App.css'
import ApiIntegration from './feature/ApiIntegration/ApiIntegration';
import Counter from './feature/Counter/Counter';
import ToDo from './feature/ToDo/ToDo';

const App = () => {
  const [option, setOption] = useState(0);
  return(
    <>
      <aside>
        <button onClick={() => setOption(0)}>Counter</button>
        <button onClick={() => setOption(1)}>To Do</button>
        <button onClick={() => setOption(2)}>Thunk API example</button>
      </aside>

      <main>
        {
            option === 0 &&
            <section className='example'>
                <span>
                  SIMPLE COUNTER AND PERSIST COUNTER EXAMPLE
                </span>
                <Counter />
            </section>
        }
        {
            option === 1 &&
            <section className='example'>
                <span>
                  SIMPLE TODO AND PERSIST TODO EXAMPLE
                </span>
                <ToDo />
            </section>
        }
        {
            option === 2 &&
            <section className='example'>
                <span>
                  SIMPLE THUNKS EXAMPLE
                </span>
                <ApiIntegration />
            </section>
        }
      </main>
    </>
  )
}

export default App;

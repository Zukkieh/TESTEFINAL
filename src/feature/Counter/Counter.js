import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import './Counter.css'

const Counter = () => {

  const count = useStoreState(state => state.counterModel.counter.count);
  const setCount = useStoreActions(state => state.counterModel.counter.setCount);
  const persistedCount = useStoreState(state => state.counterModel.persistedCounter.persistedCount);
  const setPersistedCount = useStoreActions(state => state.counterModel.persistedCounter.setPersistedCount);

  return (
    <div className="app-container">
      <button onClick={() => setCount(count + 1)} className="app-add-button">+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)} className="app-remove-button">-</button>
      <button onClick={() => setPersistedCount(persistedCount + 1)} className="app-add-button">+</button>
      <span>{persistedCount}</span>
      <button onClick={() => setPersistedCount(persistedCount - 1)} className="app-remove-button">-</button>
    </div>
  );
}

export default Counter;

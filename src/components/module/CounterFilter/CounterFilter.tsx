'use client';

import { useStore } from '@/store/store';

export function CounterFilter() {
  const { count, filter, data, increment, decrement, reset, setFilter } = useStore();
  const filteredData = data.filter(item => 
    JSON.stringify(item).toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="p-4 space-y-4">
      <div className="space-x-2">
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button 
          onClick={reset} 
          className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
        >
          Reset
        </button>
      </div>

      <div className="mt-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter..."
          className="px-4 py-2 border rounded"
        />
        <p className="mt-2">Current filter: {filter}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-bold">Data from API:</h3>
        <ul className="list-disc pl-5">
          {filteredData.slice(0, 5).map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
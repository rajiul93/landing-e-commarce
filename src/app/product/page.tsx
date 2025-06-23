 
import { CounterFilter } from '@/components/module/CounterFilter/CounterFilter';
import { ZustandProvider } from '@/providers/ZustandProvider';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-2xl font-bold mb-8">Next.js 15 with Zustand</h1>
      <ZustandProvider data={data}>
        <CounterFilter />
      </ZustandProvider>
    </main>
  );
}
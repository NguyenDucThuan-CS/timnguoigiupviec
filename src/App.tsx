import  { Suspense } from 'react';
import { AppRouter } from './app-routers';
import './App.scss';


export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

"use client";


import styles from './page.module.css';
import TodoUI from '@/components/TodoUI';

export default function Home() {
 
  return (
    <main className={styles.main}>
     <TodoUI />
    </main>
  );
}

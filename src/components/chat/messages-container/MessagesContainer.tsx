import { ReactNode } from 'react';
import styles from './MessagesContainer.module.css';

interface MessagesContainerProps {
  children: ReactNode;
}
export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <section
      className={`flex flex-col items-center py-2 px-4 overflow-auto ${styles.messages}`}
    >
      {children}
    </section>
  );
}

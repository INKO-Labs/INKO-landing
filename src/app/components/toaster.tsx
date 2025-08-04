'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Toast = {
  id: number;
  message: string;
  type: 'info' | 'error';
};

type ToastWithVisible = Toast & { isVisible: boolean };

let toastId = 0;

export function Toaster() {
  const [toasts, setToasts] = useState<ToastWithVisible[]>([]);

  useEffect(() => {
    const handler = (e: CustomEvent<Toast>) => {
      const id = toastId++;
      const newToast: ToastWithVisible = { ...e.detail, id, isVisible: false };

      setToasts((prev) => [...prev, newToast]);

      // Enter animation
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, isVisible: true } : t))
        );
      }, 10); // animation trigger (short delay to apply class)

      // Exit after 3s
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, isVisible: false } : t))
        );
      }, 2900); // start exit animation

      // Remove from DOM after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3400); // wait for exit animation to complete
    };

    window.addEventListener('toast', handler as EventListener);
    return () => window.removeEventListener('toast', handler as EventListener);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col gap-3 items-center z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            'px-4 py-3 rounded shadow-md text-white text-sm transition-all duration-500 text-center',
            'w-[90vw] sm:w-md',
            toast.type === 'info' && 'bg-green-600',
            toast.type === 'error' && 'bg-red-600',
            toast.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          )}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
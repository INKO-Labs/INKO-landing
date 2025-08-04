export function showToast(message: string, type: 'info' | 'error' = 'info') {
  const event = new CustomEvent('toast', {
    detail: { message, type },
  });
  window.dispatchEvent(event);
}
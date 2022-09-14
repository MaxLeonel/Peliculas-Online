import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  // State and setters por valor de rebote
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Actualizar el valor de rebote después de la demora
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancele el tiempo de espera si cambia el valor (también en cambio de retraso o desmontaje)
      // Así es como evitamos que el valor de rebote se actualice si se cambia el valor...
      // .. dentro del plazo de demora. El tiempo de espera se borra y se reinicia.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Solo recuerda el efecto si cambia el valor o el retardo
  );
  return debouncedValue;
}

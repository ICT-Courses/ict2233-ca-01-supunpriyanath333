import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} - Sinhala Library` : "Sinhala Library";
    return () => (document.title = prev);
  }, [title]);
}

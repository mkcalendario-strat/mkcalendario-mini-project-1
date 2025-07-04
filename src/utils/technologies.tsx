import { redirect, RedirectType } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useTechnologies() {
  const [techs, setTechs] = useState<Technology[] | null>(null);

  const fetchTechnologies = useCallback(async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL}/assets/data/technologies.json`;
      const request = await fetch(url);
      const result: Technology[] = await request.json();
      setTechs(result);
    } catch {
      redirect("/404", RedirectType.replace);
    }
  }, []);

  useEffect(() => {
    fetchTechnologies();
  }, [fetchTechnologies]);

  return techs;
}

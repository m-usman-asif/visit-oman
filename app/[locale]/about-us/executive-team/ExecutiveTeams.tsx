'use client';
import React, { useEffect, useRef } from "react";

export const ExecutiveTeams = ({children}:any) => {
    const executiveTeamCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (executiveTeamCardRef.current) {
      executiveTeamCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div ref={executiveTeamCardRef}>{children} </div>
  )
}

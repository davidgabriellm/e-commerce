import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(5 * 60); // 5 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Formatar minutos e segundos no estilo "minutos:segundos"
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "right", marginTop: "20px", background: "rgba(0, 255, 144, 1)", maxWidth: "120px",padding: "10px", borderRadius: "6px" }}>
      <p style={{ fontSize: "24px", color: "teal" }}>{formatTime(timeLeft)}</p>
      {timeLeft === 0 && <p>Tempo esgotado!</p>}
    </div>
  );
};

export default CountdownTimer;
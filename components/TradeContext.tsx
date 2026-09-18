"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { findTrade, trades, type Trade, type TradeKey } from "@/lib/trades";

type TradeContextValue = {
  active: Trade;
  setActive: (key: TradeKey) => void;
  /** true, sobald der Nutzer aktiv gewaehlt hat oder die Hero-Sektion soweit
   *  gescrollt ist, dass wir den Default festschreiben. */
  locked: boolean;
  lock: () => void;
};

const TradeContext = createContext<TradeContextValue | null>(null);

export function TradeProvider({ children }: { children: React.ReactNode }) {
  const [activeKey, setActiveKey] = useState<TradeKey>(trades[0].key);
  const [locked, setLocked] = useState(false);

  // Deep-Link via ?trade=... — landet man auf /projekt-anfragen?trade=dach, soll
  // die Homepage nach einem Rueckklick den gleichen Zustand haben.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const t = params.get("trade");
    if (t && trades.some((x) => x.key === t)) {
      setActiveKey(t);
      setLocked(true);
    }
  }, []);

  const setActive = useCallback((key: TradeKey) => {
    setActiveKey(key);
    setLocked(true);
  }, []);

  const lock = useCallback(() => {
    setLocked(true);
  }, []);

  const value = useMemo<TradeContextValue>(
    () => ({ active: findTrade(activeKey), setActive, locked, lock }),
    [activeKey, setActive, locked, lock]
  );

  return <TradeContext.Provider value={value}>{children}</TradeContext.Provider>;
}

export function useTrade(): TradeContextValue {
  const ctx = useContext(TradeContext);
  if (!ctx) throw new Error("useTrade must be used within TradeProvider");
  return ctx;
}

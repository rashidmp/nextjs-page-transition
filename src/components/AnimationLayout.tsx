'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Inner from '@/components/Inner';
import { PropsWithChildren, useContext, useRef } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
  );
}

export default function AnimationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Inner key={pathname}>
        <FrozenRouter>{children}</FrozenRouter>
      </Inner>
    </AnimatePresence>
  );
}

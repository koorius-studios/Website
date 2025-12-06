"use client";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger ,SplitText } from 'gsap/all';
import ReactLenis ,{ LenisRef } from 'lenis/react';
import { useEffect, useRef } from 'react';
import Hero from '@/component/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText,useGSAP);

export default function Home() {
  const lenisRef = useRef<LenisRef | null>(null);
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 2000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, []);
  
  return (
    <>
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    <Hero />
    </>
  )
}
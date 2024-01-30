import { useMemo } from "react";
import { useEffect, useState } from "react";

export default function useInviewPort(target) {
  const [inView, setInview] = useState(null);

  const observer = useMemo(() => {
    const options = {
      // Document view ports as  root
      threshold: 1,
    };
    let callback = ([entry]) => {
      if (entry.isIntersecting) {
        console.log("Is intersecting");
      }

      setInview(entry.isIntersecting);
    };
    let o = new IntersectionObserver(callback, options);
    return o;
  }, []);

  useEffect(() => {
    console.log(observer);
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [target, observer]);

  // asume target is not an array a single elemnt

  return inView;
}


function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
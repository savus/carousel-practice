import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

type TSlide = {
  id: number;
  content: string;
  name: string;
};

const slides: TSlide[] = [
  {
    id: 0,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "john",
  },
  {
    id: 1,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "jack",
  },
  {
    id: 2,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "mike",
  },
  {
    id: 3,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "mack",
  },
  {
    id: 4,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "james",
  },
  {
    id: 5,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "jane",
  },
  {
    id: 6,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "sam",
  },
];

type TIndexProvider = {
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  prevIndex: number;
  setPrevIndex: (prevIndex: number) => void;
  nextIndex: number;
  setNextIndex: (nextIndex: number) => void;
  slides: TSlide[];
  goToNum: (num: number) => void;
};

const IndexContext = createContext({} as TIndexProvider);

export const IndexProvider = ({ children }: { children: ReactNode }) => {
  const randomIndex = Math.floor(Math.random() * slides.length);
  const [currentIndex, setCurrentIndex] = useState(randomIndex);
  const [prevIndex, setPrevIndex] = useState(
    currentIndex > 0 ? currentIndex - 1 : slides.length - 1
  );
  const [nextIndex, setNextIndex] = useState(
    currentIndex < slides.length - 1 ? currentIndex + 1 : 0
  );

  const updatePrevIndex = () =>
    currentIndex > 0 ? currentIndex - 1 : slides.length - 1;

  const updateNextIndex = () =>
    currentIndex < slides.length - 1 ? currentIndex + 1 : 0;

  const goToNum = (num: number) => {
    setCurrentIndex(num);

    setPrevIndex(updatePrevIndex);

    setNextIndex(updateNextIndex);
  };

  return (
    <IndexContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        prevIndex,
        setPrevIndex,
        nextIndex,
        setNextIndex,
        slides,
        goToNum,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = () => useContext(IndexContext);

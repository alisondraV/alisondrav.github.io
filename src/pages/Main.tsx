import React, { ReactElement, useState } from 'react';
import Alisa from '@assets/Alisa.svg';
import Ukraine from '@assets/Ukraine.svg';
import { motion } from 'framer-motion';

export default function Main(): ReactElement {
  const [alisaVisibility, setAlisaVisibility] = useState('hidden');
  const [ukraineVisibility, setUkraineVisibility] = useState('hidden');

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-background">
      <h1 className="font-header w-3/4 md:w-1/2 text-center text-xl md:text-2xl leading-normal">
        Hi there! My name is <motion.span
          onHoverStart={() => { setAlisaVisibility(''); }}
          onHoverEnd={() => { setAlisaVisibility('hidden'); }}
          className="font-header text-2xl font-semibold underline"
        >
            Alisa Vynohradova
            <img src={Alisa} alt="Alisa" className={`absolute right-1/4 bottom-1/3 ${alisaVisibility}`} />
        </motion.span>
        , I live and work in Canada, but was born in {' '}
        <motion.span
          onHoverStart={() => { setUkraineVisibility(''); }}
          onHoverEnd={() => { setUkraineVisibility('hidden'); }}
          className="font-header text-2xl font-semibold underline">Ukraine
            <img
                src={Ukraine}
                alt="Ukraine"
                className={`absolute right-1/4 bottom-1/3 ${ukraineVisibility}`}
            />
        </motion.span>.
        I have a lot of energy and positivity that I am willing to share with people.
      </h1>
    </div>
  );
}

import React from 'react';
import Alisa from '@assets/Alisa.svg';
import Ukraine from '@assets/Ukraine.svg';

function Main() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-background">
            <h1 className="font-header w-3/4 md:w-1/2 text-center text-xl md:text-2xl leading-normal">Hi there! My name
                is <span className="font-header text-2xl font-semibold underline"> Alisa Vynohradova</span>,
                I live and work in Canada, but was born
                in <span className="font-header text-2xl font-semibold underline"> Ukraine</span>.
                I have a lot of energy and positivity that I am willing to share with people.</h1>
            <img src={Alisa} alt="Alisa" className="absolute right-2" />
            <img src={Ukraine} alt="Ukraine" className="absolute left-2" />
        </div>
    )
}

export default Main;
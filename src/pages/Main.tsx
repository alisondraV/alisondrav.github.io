import React from 'react';

function Main() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-background">
            <h1 className="font-header w-3/4 md:w-1/2 text-center text-2xl md:text-4xl leading-normal">Hi there! My name
                is <span className="font-header font-semibold underline"> Alisa Vynohradova</span>,
                I live and work in Canada, but was born
                in <span className="font-header font-semibold underline"> Ukraine</span>.
                I have a lot of energy and positivity that I am willing to share with people.</h1>
        </div>
    )
}

export default Main;
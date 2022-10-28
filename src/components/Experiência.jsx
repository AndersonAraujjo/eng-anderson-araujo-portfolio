import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import revit from "../assets/revit.png";
import autocad from "../assets/autocad.png";
import excel from "../assets/excel.png";
import project from "../assets/project.png";



const Experiência = () => {
    const techs = [
        {
            id: 1,
            src: revit,
            title: 'Revit',
            style: 'shadow-blue-600'
        },
        {
            id: 2,
            src: autocad,
            title: 'AutoCAD',
            style: 'shadow-red-500'
        },
        {
            id: 3,
            src: excel,
            title: 'Excel',
            style: 'shadow-green-600'
        },
        {
            id: 4,
            src: project,
            title: 'Project',
            style: 'shadow-green-900'
        },
        {
            id: 5,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },

    ];


  return (
    <div
        name="Experiência"
        className="bg-gradient-to-b from-gray-800 to-black w-full
        h-screen"
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white"
        >
            
            <div>
                <p className="text-4xl font-bold border-b-4
                border-gray-500 p-2 inline">
                    Experiência
                </p>
                <p className="py-6">Feramentas que possuo experiência.</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0">
                {techs.map(({ id, src, title, style }) => (
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>

        </div>
    </div>
  );
};

export default Experiência;
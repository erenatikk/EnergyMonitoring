"use client";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Link from 'next/link';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
    labels: [
        'renk1',
        'renk2',
        'renk3'
    ],
    datasets: [{
        label: 'Elektrik Tüketimi (kWh)',
        data: [50, 80, 100],
        backgroundColor: [
            '#74e1f7',
            '#94bbe9',
            '#e7afcc'
        ],
        hoverOffset: 4
    }]
};

function Sayac() {
    const [isVisible, setIsVisible] = useState(true);
    const [counterList, setCounterList] = useState([1, 2, 3, 4, 5]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Link href="/sayac-ekle">
                <button className="sayac-ekle-button">
                    Sayaç Ekle
                </button>
            </Link>

            {isVisible && (
                <div className="flex-card">
                    {counterList.map((_, index) => (
                        <div className="flex-box" key={index}>
                            <Pie data={data} />
                            <div className="button-container">
                                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                                <button className="button"><Icon icon="ic:baseline-add" /></button>
                                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Sayac;

"use client";
import React from "react";
import { Icon } from '@iconify/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Chart.js modüllerini kaydetme
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Veriyi tanımlama
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
    return (
        <div className="flex-card">

            {/* Grafik Bölümü */}

            <div className="flex-box">

                <Pie data={data} />

                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                <button className="button"><Icon icon="ic:baseline-add" /></button>
                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
            </div>


            <div className="flex-box">

                <Pie data={data} />

                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                <button className="button"><Icon icon="ic:baseline-add" /></button>
                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
            </div>

            <div className="flex-box">

                <Pie data={data} />

                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                <button className="button"><Icon icon="ic:baseline-add" /></button>
                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
            </div>

            <div className="flex-box">

                <Pie data={data} />

                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                <button className="button"><Icon icon="ic:baseline-add" /></button>
                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
            </div>

            <div className="flex-box">

                <Pie data={data} />

                <button className="button"><Icon icon="line-md:edit-twotone-full" /></button>
                <button className="button"><Icon icon="ic:baseline-add" /></button>
                <button className="button"><Icon icon="fluent:subtract-12-regular" /></button>
            </div>

        </div>
    );
}

export default Sayac; 


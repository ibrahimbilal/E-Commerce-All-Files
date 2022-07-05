'use strict';

// Apex Chart
var options = {
    series: [{
        name: "Visitors",
        data: [0, 50, 20, 40, 27, 50, 35, 60]
    }],
    chart: {
        height: 360,
        type: 'area',
        toolbar: {
            export: {
                csv: {
                    filename: 'Store Visitors',
                    columnDelimiter: ',',
                    headerCategory: 'Date',
                },
                svg: {
                    filename: 'Store Visitors',
                },
                png: {
                    filename: 'Store Visitors',
                }
            },
        }
    },
    colors: ['#2DCD7A'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "01 Jan 2021",
            "02 Jan 2021",
            "03 Jan 2021",
            "04 Jan 2021",
            "05 Jan 2021",
            "06 Jan 2021",
            "07 Jan 2021",
            "08 Jan 2021"
        ],
        labels: {
            style: {
                colors: 'var(--text-color)',
                fontSize: '10px',
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: 'var(--text-color)',
                fontSize: '10px',
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    tooltip: {
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: 'Montserrat,sans-serif',
        },
        x: {
            format: 'dd/MM/yy',
        },

    },
    title: {
        text: 'Store Visitors',
        align: 'left',
        style: {
            fontSize: '20px',
            fontWeight: '400',
            fontFamily: "Montserrat,sans-serif",
            color: 'var(--text-color)'
        },
    },
};

var chartElement = document.querySelector("#chart");
if (typeof(chartElement) != 'undefined' && chartElement != null) {
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

var options_1 = {
    series: [{
        name: "Susbcribers",
        data: [0, 50, 20, 40, 27, 50, 35, 60]
    }],
    chart: {
        height: 360,
        type: 'area',
        toolbar: {
            export: {
                csv: {
                    filename: 'Store Susbcribers',
                    columnDelimiter: ',',
                    headerCategory: 'Date',
                },
                svg: {
                    filename: 'Store Susbcribers',
                },
                png: {
                    filename: 'Store Susbcribers',
                }
            },
        }
    },
    colors: ['#2DCD7A'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "01 Jan 2021",
            "02 Jan 2021",
            "03 Jan 2021",
            "04 Jan 2021",
            "05 Jan 2021",
            "06 Jan 2021",
            "07 Jan 2021",
            "08 Jan 2021"
        ],
        labels: {
            style: {
                colors: 'var(--text-color)',
                fontSize: '10px',
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: 'var(--text-color)',
                fontSize: '10px',
                fontFamily: 'Montserrat,sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    tooltip: {
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: 'Montserrat,sans-serif',
        },
        x: {
            format: 'dd/MM/yy',
        },

    },
    title: {
        text: 'Store Susbcribers',
        align: 'left',
        style: {
            fontSize: '20px',
            fontWeight: '400',
            fontFamily: "Montserrat,sans-serif",
            color: 'var(--text-color)'
        },
    },
};

var chartElement = document.querySelector("#chart_1");
if (typeof(chartElement) != 'undefined' && chartElement != null) {
    var chart = new ApexCharts(document.querySelector("#chart_1"), options_1);
    chart.render();
}
"use strict"

try {
    const transportationPie = new Chart(
        document.querySelector("#transportationPie"),
        {
            type: "pie",
            data: {
                labels: ["Transportation", "Electricity", "Goods", "Food"],
                datasets: [{
                    label: "Carbon Sources",
                    data: [29,26,39,15],
                    backgroundColor: [
                        "rgba(186,53,50,1)",
                        "rgba(201,194,44,0.3)",
                        "rgba(44,126,201,0.3)",
                        "rgba(71,201,44,0.3)"
                    ],
                    borderColor: [
                        "#000000"
                    ],
                    borderWidth: 2,
                }],
            },
            options: {
    
            }
        }
    );
} catch(error) {}

try {
    const modesOfTransportation = new Chart(
        document.querySelector("#modesOfTransportation"),
        {
            type: "bar",
            data: {
                labels: ["Trucks", "Cars", "Planes", "Boats", "Other"],
                datasets: [{
                    label: "Modes of Transportation",
                    data: [34, 40, 11, 11, 4],
                    backgroundColor: [
                        "rgba(121, 38, 163,0.3)",
                        "rgba(38, 163, 142 ,0.3)",
                        "rgba(168, 142, 39,0.3)",
                        "rgba(168, 39, 119,0.3)",
                        "rgba(61, 39, 168,0.3)",
                    ],
                    borderColor: [
                        "#000000"
                    ],
                    borderWidth: 2,
                }],
            },
            options: {}
        }
    );    
} catch(error){}


try {
    const foodPie = new Chart(
        document.querySelector("#foodPie"),
        {
            type: "pie",
            data: {
                labels: ["Transportation", "Electricity", "Goods", "Food"],
                datasets: [{
                    label: "Carbon Sources",
                    data: [29,26,39,15],
                    backgroundColor: [
                        "rgba(186,53,50,0.3)",
                        "rgba(201,194,44,0.3)",
                        "rgba(44,126,201,0.3)",
                        "rgba(71,201,44,1)"
                    ],
                    borderColor: [
                        "#000000"
                    ],
                    borderWidth: 2,
                }],
            },
            options: {
    
            }
        }
    );
} catch(error){}

try {
    const goodsPie = new Chart(
        document.querySelector("#goodsPie"),
        {
            type: "pie",
            data: {
                labels: ["Transportation", "Electricity", "Goods", "Food"],
                datasets: [{
                    label: "Carbon Sources",
                    data: [29,26,39,15],
                    backgroundColor: [
                        "rgba(186,53,50,0.3)",
                        "rgba(201,194,44,0.3)",
                        "rgba(44,126,201,1)",
                        "rgba(71,201,44,0.3)"
                    ],
                    borderColor: [
                        "#000000"
                    ],
                    borderWidth: 2,
                }],
            },
            options: {
    
            }
        }
    );
} catch(error) {}

try {
    const companiesChart = new Chart (
        document.querySelector("#companiesChart"),
        {
            type: "bar",
            data: {
                labels: ["Walmart", "Amazon", "ExxonMobil", "Costco", "7-11", "Target"],
                datasets: [{
                    label: "Carbon Emissions in Metric Ton of Co2",
                    data: [17600000, 60640000, 120000000, 2660000, 2200000, 238000],
                    backgroundColor: [
                        "rgba(186, 34, 74,0.3)",
                        "rgba(52, 34, 186,0.3)",
                        "rgba(34, 186, 49,0.3)",
                        "rgba(186, 168, 34,0.3)",
                        "rgba(34, 186, 156,0.3)",
                        "rgba(178, 34, 186,0.3)",
                    ],
                    borderColor: "#000000",
                    borderWidth: 2,
                }],
            },
            options: {}
        }
    );
} catch(error) {}


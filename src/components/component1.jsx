import React from "react";
import Card from "./Card";
import download from '../assets/download.jpeg'
import logo from '../assets/logo.jpg'

function CardList(){
    return (
    <div className="d-flex flex-wrap gap-1 text-red">
        <Card title="Advanced Program in Cyber Security - IS153" image={logo} />
        <Card title="Certificate Course in AWS - CC42" image={logo} />
        <Card title="Digital Tanzania: Data Management (Big Data Analytics and Data Science)" image={logo} />
        <Card title="Certificate Course in Core JAVA" image={logo} />
        <Card title="Certificate Course in Generative AI" image={logo} />
        <Card title="ED321 & VL281 Sep 2024 Common Modules" image={logo} />
        <Card title="Linux & Shell Programming" image={logo} />
        <Card title="Certificate Course in Data Structures and Algorithms (DSA) Using Python" image={logo} />
        <Card title="Certificate Course in SystemVerilog and UVM" image={logo} />
        <Card title="ED321 Embedded Software Engineer April 2024" image={logo} />
        <Card title="Internship in IoT Data Analysis GCE Bargur" image={logo} />
    </div>
    )
}

export default CardList;
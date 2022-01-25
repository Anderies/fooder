
import React from "react";
import styles from "../css/meal.css";
// import pic from "../../public/images/feather_edit-2.png";
import companyLogo from "../../src/images/feather.svg";
import rendang from "../../src/images/rendang.png";
import ayamgeprek from "../../src/images/ayamgeprek.png";

import { FaBeer } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { FiTarget } from "react-icons/fi";
function Meal() {
    // var imageName = require('.../../public/images/feather_edit-2.png')
    return (
        <div class="container">
            <div class="mt-5">

            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">
                    <FiTarget className="icon" />
                    <p class="txt-bench-calorie">1600</p>
                    <p class="txt-bench">Target</p>
                </div>
                <div class="mx-3">

                </div>
                <div className="d-flex flex-column">
                    <FiTarget className="icon" />
                    <p class="txt-bench-calorie">2300</p>
                    <p class="txt-bench">Max Intake</p>
                </div>
            </div>

            <div class="row mt-10">
                <div class="col-1">

                </div>
                <div class="col-10">
                    <p class="font-meal">log your meal or snack along with the portion size, the leave it to us to count your daily calorie intake</p>
                </div>
                <div class="col-1">

                </div>


            </div>
            <div class="row my-3">
                <div class="col-4">

                </div>
                <div class="col-4">

                    <button class="btn fooder-button-1" type="button">Add Meal</button>


                </div>
                <div class="col-4">

                </div>
            </div>

            <div class="horizontal-line">

            </div>

            <div>
                <p>Logged Meals</p>
            </div>

            <div class="card my-3">
                <div class="d-flex flex-row mt-2 mx-1 w-100 main-card">
                    <div class="d-flex flex-column sub-card-1 w-15">
                        <img class="img-meal" src={rendang} />
                    </div>
                    <div class="d-flex flex-column sub-card-2 mx-2">
                        <p class="font-makan">Ayam Geprek</p>
                        <p class="font-calorie">413 Kcal</p>
                    </div>

                    <div class="d-flex flex-column sub-card-3 w-20">
                        {/* <img src='../../src/images/feather.png' /> */}
                        <img class="img-edit" src={companyLogo} alt="BigCo Inc. logo" />
                    </div>

                </div>
            </div>

            <div class="card my-3">
                <div class="d-flex flex-row mt-2 mx-1 w-100 main-card">
                    <div class="d-flex flex-column sub-card-1 w-15">
                        <img class="img-meal" src={ayamgeprek} />
                    </div>
                    <div class="d-flex flex-column sub-card-2 mx-2">
                        <p class="font-makan">Ayam Geprek</p>
                        <p class="font-calorie">413 Kcal</p>
                    </div>

                    <div class="d-flex flex-column sub-card-3 w-20">
                        {/* <img src='../../src/images/feather.png' /> */}
                        <img class="img-edit" src={companyLogo} alt="BigCo Inc. logo" />
                    </div>

                </div>
            </div>
        </div>
    );
};
// ReactDOM.render(function Meal() {}, document.getElementById('sandy'));

export default Meal;
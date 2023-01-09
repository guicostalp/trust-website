import React from "react";
import CardItem from "./CardItem";
import './Cards.css'


function Cards () {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside tha Amazon Jungle"
                        label="Adventure"
                        path="/services" />
                        <CardItem
                        src="images/img-2.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-3.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                        <CardItem
                        src="images/img-5.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                        <CardItem
                        src="images/img-7.jpg"
                        text="Come spend one weekend in Bali and enjoy our amazing food and hospitality"
                        label="Tavel"
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Cards
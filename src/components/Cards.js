import React from "react";
import CardItem from "./CardItem";
import './Cards.css'


function Cards () {
    return (
        <div className="cards">
            <h1>Subscribe to our newsletter to receive these amaizing news</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/meg-jerrard-u7lgJ8qrdAM-unsplash.jpg"
                        text="Here goes a very interesting information about WAI 262 or any other relevant article also here we could use this space for links e an redirection pages"
                        label="Adventure"
                        path="/events" />
                        <CardItem
                        src="images/Discovering-New-Zealands-Maori-Culture-_-Image-Via-Trafalgar-800x450.jpg"
                        text="Here goes a very interesting information about WAI 262 or article with less text to look coller"
                        label="Tavel"
                        path="/about-us" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/dd08d87b45817af7ab79590bf7fa7e66.jpg"
                        text="This is a different grid with smaller cards but essentialy with same functionability"
                        label="Tavel"
                        path="/donate" />
                        <CardItem
                        src="images/img-9.jpg"
                        text="This is a different grid with smaller cards with less text again"
                        label="Tavel"
                        path="/about-us" />
                        <CardItem
                        src="images/duskfall-crew-vIQfQjrovW8-unsplash.jpg"
                        text="This is a different grid with smaller cards but essentialy with same functionability"
                        label="Tavel"
                        path="/donate" />
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Cards
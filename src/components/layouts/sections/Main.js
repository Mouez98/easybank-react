import React from "react";
import Articles from "./articles/Articles";
import DigitalBanking from "./DigitalBanking";
import Offers from "./offers/Offers";



const Main = () => {
    return <main>
       <DigitalBanking />
       <Offers />
       <Articles />
    </main>
}

export default Main;
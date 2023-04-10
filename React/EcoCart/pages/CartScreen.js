import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function App(){
    return <CartList {...cartListData} />;
}

export default App;

function CartList(props) {
    const { title, cartItems5, continueScanning, finish, item1Props, item2Props, rectangle10Props, frame132Props }
    = props;

    return (
        <div className = "container-center-horizontal">
            <div className = "cart-list screen">
            <div className = "overlap-group4">
                <div className = "overlap-group2">
                <Heading />
                <PhoneDetails />
            </div>
            <h1 className = "title valign-text-middle poppins-bold-white-25px">
                {title}
            </h1>
        </div>
        <StoreDetails />
        <div className = "cart-items-5 valign-text-middle lexend-normal-black-13px">
            {cartItems5}
        </div>
        <img className = "line-4" src = "line-4-1.svg" alt = "Line 4" />
        <Item frame13props = {item1Props.frame13Props} />
        <Item frame13Props = {item2Props.frame13Props} />
        <div className = "item">
            <div className = "overlap-group">
                <Rectangle10 className = {rectangle10Props.className} />
                <Frame132 frame10Props = {frame132Props.frame10Props} />
                <Details />
            </div>
        </div>
        <div className = "group-3"></div>
        <div className = "group-4"></div>
        <div className = "frame-container">
            <div className = "frame-25">
                <img className = "arrow_back"
                src = "arrow-back.svg" alt = "arrow_back" />
                <div className = "continue-scanning valign-text-middle lexend-semi-bold-black-10px">
                    {continueScanning}
                </div>
            </div>
            <div className = "frame-24">
                <div className = "finish valign-text-middle lexend-semi-bold-black-10px">
                    {finish}
                </div>
                <img className = "done"
                src = "done.svg" alt = "done" />
            </div>
        </div>
        <NavBar />
        </div>
        </div>
    );
}

function Heading() {
    return (
        <div className = "heading">
            <img clasName = "account_circle" src = "account-circle-1.svg" alt = "account_circle"/>
        </div>
    );
}

function PhoneDetails() {
    return (
        <div className = "phone-details">
            <div className = "text-1 inter-bold-white-14px">
                6:00
            </div>
            <div className = "signal-battery">
                <img className = "signal-battery-item" src = "signal-cellular-alt.png" alt = "signal_cellular_alt" />
                <img className = "signal-battery-item" src = "wifi.png" alt = "wifi" />
                <img className = "signal-battery-item" src = "battery-horiz-050.png" alt = "battery_horiz_050" />
            </div>
        </div>
    );
}

function StoreDetails(){
    return (
        <div className = "store-details">
        <div className = "frame-7">
            <div className = "frame-5">
                <img className = "location_on" src = "location-on-2.png" alt = "location_on" />
                <div className = "heb-hancock-center valign-text-middle lexend-semi-bold-black-13px">
                    HEB Hancock Center
                </div>
            </div>
            <div className = "frame-6">
                <p className = "address avenir-light-gray-10px">
                    1000 E 41st St, Austin, TX 78751
                </p>
            </div>
        </div>
        </div>
    );
}

function Item(props) {
    const { frame13Props } = props;

    return (
        <div className = "item-1">
            <div className = "overlap-group-1">
                <Rectangle10 />
                <Frame13
                    freshRomaineLettuce = {frame13Props.freshRomaineLettuce}
                    price = {frame13Props.price}
                    frame10Props = {frame13Props.frame10Props}
                />
                <Details />
            </div>
        </div>
    );
}

function Rectangle10(props) {
    const { className } = props;
    return <div className = {'rectangle-10-2 ${className || ""}'}></div>;
}

function Frame13(props) {
    const { freshRomaineLettuce, price, frame10Props } = props;
    
    return (
        <div className = "frame-13">
            <Frame10 src = {frame10Props.src} />
            <div className = "frame-12">
                <div className = "fresh-r lexend-normal-black-13px">
                    {freshRomaineLettuce}
                </div>
                <div className = "frame-11">
                    <div className = "ea lexend-light-black-8px">
                        ea.
                    </div>
                </div>
                <div className = "price lexend-semi-bold-black-13px">
                    {price}
                </div>
            </div>
        </div>
    );     
}

function Frame10 (props) {
    const { src } = props;

    return (
        <div className = "frame-10">
            <img className = "screenshot-2023-04-06-at626-1" src = {src} alt = "Screenshot 2023-04-04 at 6.26 1" />
        </div>
    );
}

function Details() {
    return (
        <div className = "details">
            <img className = "delete" src = "delete-2.svg" alt = "delete" />
            <PointGain />
        </div>
    );
}

function PointGain(){
    return (
        <div className = "point-gain">
            <div className = "x-pt lexend-extra-bold-wintergreen-dream-8px">
                +X PT
            </div>
        </div>
    );  
}

function Frame132(props) {
    const { frame10Props } = props;

    return (
        <div className = "frame-13-1">
            <Frame10 src = {frame10Props.src} />
            <Frame12 />
        </div>
    );
}

function Frame12(){
    return (
        <div className = "frame-12'1">
            <div className = "non-fat-plain-greek-yogurt lexend-normal-black-13px">
                Non-fat Plain Greek Yogurt
            </div>
            <div className = "frame-11-1">
                <div className = "address-1 lexend-light-black-8px">
                    32 oz
                </div>
            </div>
            <div className = "price-1 lexend-semi-bold-black-13px">
                $5.08
            </div>
        </div>
    );
}

const frame101Data = {
    src: "screenshot-2023-04-06-at6-26-1-2.png",
};

const frame131Data = {
    freshRomaineLettuce: "Fresh ROmaine Lettuce",
    price: "$1.81",
    frame10Props: frame101Data,
};

const item1Data = {
    frame13Props: frame131Data,
};

const frame102Data = {
    src: "screenshot-2023-04-06-at6-26-1-1.png",
};

const frame132Data = {
    freshRomaineLettuce: "Fresh Red Bell Pepper",
    price: "$1.54",
    frame10Props: frame102Data,
}

const item2Data = {
    frame13Props: frame132Data,
};

const rectangle103Data = {
    className: "rectangle-10-1",
};

const frame103Data = {
    src: "screenshot-2023-04-06-at-6-26-1.png",
};

const frame1322Data = {
    frame10Props: frame103Data,
};

const cartListData = {
    title: "Cart",
    cartItems5: "Cart Items (5)",
    continueScanning: "Continue Scanning",
    finish: "Finish",
    item1Props: item1Data,
    item2Props: item2Data,
    rectangle10Props: rectangle103Data,
    frame132Props: frame1322Data,
};

const styles = StyleSheet.create({
    @import url("https://fonts.googleapis.com/css?family=Inter:700|Poppins:400,700,500|Lexend:400,300,500,600,800|League+Gothic:400|Open+Sans:600");
    var FontFace {
        Family: Avenir,Light,
        Style: normal,
        Weight: 300,
        src: url("https://fonts.animaapp.com/Avenir-Light") format("opentype"),
    }

    screen a {
        display: contents;
        text-decoration: none;
    }

    container-center-horizontal {
        display: flex
        flex-direction: row

    }
});


import React from "react";


// function App(){
//     return <CartList {...cartListData} />;
// }

export default function App() {
    return (
        <CartList {...cartListData} />
    );
}



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

//export { CartScreen } from "./CartScreen.jsx"
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  "@font-face": {
    fontFamily: "Avenir-Light",
    fontStyle: "normal",
    fontWeight: "300",
    src: "url(https://fonts.animaapp.com/Avenir-Light) format('opentype')"
  },
  "screen a": {
    display: "contents",
    textDecoration: "none"
  },
  "container-center-horizontal": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    pointerEvents: "none",
    width: "100%"
  },
  "container-center-horizontal > *": {
    flexShrink: 0,
    pointerEvents: "auto"
  },
  "valign-text-middle": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  "cart-list": {
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    display: "flex",
    flexDirection: "column",
    height: 866,
    position: "relative",
    width: 390
  },
  "overlap-group4": {
    height: 102,
    position: "relative",
    width: 390
  },
  "overlap-group2": {
    height: 102,
    left: 0,
    position: "absolute",
    top: 0,
    width: 390
  },
  title: {
    height: 38,
    left: 30,
    letterSpacing: 0,
    lineHeight: "normal",
    position: "absolute",
    textAlign: "center",
    top: 50
  },
  "cart-items-5": {
    alignSelf: "flex-start",
    height: 16,
    letterSpacing: 0,
    lineHeight: "normal",
    marginLeft: 30,
    marginTop: 21
  },
  "line-4": {
    height: 1,
    marginLeft: 0,
    marginTop: 9,
    width: 330
  },
  item: {
    alignItems: "flex-start",
    display: "flex",
    marginLeft: 2,
    marginTop: 21,
    minWidth: 332
  },
  "overlap-group": {
    borderRadius: 5,
    height: 78,
    position: "relative",
    width: 332
  },
  "group-3": {
    backgroundColor: "#F2F2F2",
    height: 42,
    marginLeft: 5,
    marginTop: 20,
    width: 337
  },
  "group-4": {
    backgroundColor: "#F2F2F2",
    height: 42,
    marginLeft: 5,
    marginTop: 17,
    width: 337
  },
  "frame-container": {
    alignItems: "center",
    display: "flex",
    gap: 91,
    marginLeft: 2,
    marginTop: 107,
    minWidth: 332
  },
  "frame-25": {
    alignItems: "center",
    backgroundColor: "#FF2E63",
    borderRadius: 25,
    display: "flex",
    gap: 10,
    height: 44,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "relative",
    width: "fit-content"
  },
    arrow_back: {
        height: 20,
        minWidth: 20,
        position: 'relative'
    },
    done: {
        height: 20,
        minWidth: 20,
        position: 'relative'
    },
    'continue-scanning': {
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
        width: 'fit-content'
    },
    finish: {
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
        width: 'fit-content'
    },
    frame24: {
        alignItems: 'center',
        backgroundColor: 'var(--humming-bird)',
        borderRadius: 25,
        display: 'flex',
        gap: 'брх',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        position: 'relative',
        width: 'fit-content'
    },
    heading: {
        alignItems: 'flex-end',
        backgroundColor: 'var(--aztec)',
        display: 'flex',
        height: 102,
        justifyContent: 'flex-end',
        left: 0,
        minWidth: 390,
        paddingVertical: 17,
        paddingHorizontal: 29,
        position: 'absolute',
        top: 0
    },
    account_circle: {
        height: 30,
        width: 30
    },
    phone_details: {
        alignItems: 'flex-start',
        display: 'flex',
        gap: 210,
        height: 20,
        justifyContent: 'flex-end',
        left: 23,
        minWidth: 344,
        position: 'absolute',
        top: 16
    },
    text1: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1.5,
        minHeight: 17,
        minWidth: 33,
        position: 'relative'
    },
    signal_battery: {
        alignItems: 'flex-start',
        display: 'flex',
        gap: 9,
        marginTop: -2,
        position: 'relative',
        width: 'fit-content'
    },
    signal_battery_item: {
        height: 20,
        minWidth: 20,
        position: 'relative'
    },
    store_details: {
        alignItems: 'center',
        backgroundColor: 'var(--white)',
        borderColor: 'var(--cararra)',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        padding: 10,
        position: 'relative',
        width: 334
    },
    frame7: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        position: 'relative',
        width: 'fit-content'
    },
    frame5: {
        alignItems: 'flex-start',
        display: 'flex',
        gap: 4,
        position: 'relative',
        width: 169
    },
    location_on: {
        height: 15,
        minWidth: 15,
        position: 'relative'
    },
    heb_hancock_center: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 'fit-content'
    },
    frame6: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: '0px 0px 0px 11px',
        position: 'relative',
        width: 'fit-content',
    },
    address: {
        height: 11,
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 141,
    },
    item: {
        alignItems: 'flex-start',
        display: 'flex',
        marginTop: 12,
        minWidth: 330,
    },
    overlapGroup: {
        borderRadius: 5,
        height: 78,
        position: 'relative',
        width: 330,
    },
    rectangle1: {
        backgroundColor: '#ffffff',
        borderColor: '#f2f2f2',
        borderRadius: 5,
        borderWidth: 1,
        height: 78,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 330,
    },
    rectangle2: {
        backgroundColor: '#ffffff',
        borderColor: '#f2f2f2',
        borderRadius: 5,
        borderWidth: 1,
        height: 78,
        left: 0,
        position: 'absolute',
        top: 0,
        width: 332,
    },
    frame1: {
        alignItems: 'flex-end',
        display: 'flex',
        gap: 10,
        left: 17,
        position: 'absolute',
        top: 11,
        width: 249,
    },
    frame2: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginRight: -10.58,
        position: 'relative',
        width: 'fit-content',
    },
    freshR: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 191,
    },
    frame3: {
        alignItems: 'flex-start',
        backgroundColor: '#fff5ee',
        borderRadius: 10,
        display: 'flex',
        gap: 10,
        padding: '2px 9px',
        position: 'relative',
        width: 'fit-content',
    },
    ea: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 'fit-content',
    },
    price: {
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
        width: 'fit-content',
    },
    frame4: {
        alignItems: 'flex-start',
        border: '0.5px solid #d9d9d9',
        borderRadius: 5,
        display: 'flex',
        gap: 10,
        padding: '3px 6px',
        position: 'relative',
        width: 'fit-content',
    },
    screenshot: {
        height: 55,
        minWidth: 47,
        resizeMode: 'cover',
        position: 'relative',
    },
    details: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        gap: 23,
        left: 287,
        minHeight: 57,
        position: 'absolute',
        top: 14,
        width: 30,
    },
    delete: {
        height: 20,
        width: 20,
    },
    pointGain: {
        alignItems: 'flex-start',
        backgroundColor: '#7CE577',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 1,
        paddingHorizontal: 2,
        paddingVertical: 2,
        position: 'relative',
    },
    xPt: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 'auto',
    },
    frame13_1: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: 17,
        position: 'absolute',
        top: 11,
        width: 251,
    },
    frame12_1: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginRight: -9.07,
        position: 'relative',
        width: 'auto',
    },
    nonFatPlainGreekYogurt: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 191,
    },
    frame11_1: {
        alignItems: 'flex-start',
        backgroundColor: '#FFF5EE',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        paddingVertical: 2,
        paddingHorizontal: 9,
        position: 'relative',
        width: 'auto',
    },
    address1: {
        letterSpacing: 0,
        lineHeight: 'normal',
        marginTop: -1,
        position: 'relative',
        width: 'auto',
    },
    price1: {
        letterSpacing: 0,
        lineHeight: 'normal',
        position: 'relative',
        width: 'auto',
    },
    navBar: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 0.5,
        borderTopColor: '#E5E5E5',
        borderTopWidth: 0.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 44,
        height: 64,
        marginTop: 32,
        paddingVertical: 20,
        paddingHorizontal: 0,
        position: 'relative',
        width: 390,
    },
    navBarItem: {
        height: 24,
        minWidth: 24,
        position: 'relative',
    },
});

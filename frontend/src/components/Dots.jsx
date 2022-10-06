import React from 'react'

export default function Dots({ scrollIndex, setScrollIndex, setPage }) {
    function scrollTo(num) {
        setScrollIndex(num);
        setPage(num);
    }
    return (
        <div style={{ position: "fixed", top: "45%", right: 50 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: '20',
                    height: "170px",
                    opacity: "0.5",
                }}
            >
                <Dot num={1} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={2} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={3} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={4} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={5} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={6} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={7} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={8} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
                <Dot num={9} scrollIndex={scrollIndex} scrollTo={scrollTo}></Dot>
            </div>
        </div>
    )
}

const Dot = ({ num, scrollIndex, scrollTo }) => {
    return (
        <div
            style={{
                width: scrollIndex === num ? "10px" : "8px",
                height: scrollIndex === num ? "10px" : "8px",
                border: "1px solid black",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "black" : "transparent",
                transitionDuration: 1000,
                transition: "background-color 0.5s",
            }}
            onClick={(e) => scrollTo(num)}
        ></div>
    );
};

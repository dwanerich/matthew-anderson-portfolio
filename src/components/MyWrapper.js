import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1457459440405-NWWOL6WPWH8LUIRU6VES/Alessandra+3.jpg?format=750w",
    "https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1477363325421-MWQ96FXGQJIIFRI9BKIF/art_56128e46dd379.jpg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1470270245559-25TBAT8PM8XD2SZUYL8O/Screen+Shot+2016-08-03+at+10.09.28+AM.png?format=750w",
    "https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1496337729749-XOTIR5SY719Z9P2OOG68/Screen+Shot+2017-05-31+at+11.28.43+AM.png?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1496337905417-ZCG52DIVJYW2LA84KDMZ/Screen+Shot+2017-05-31+at+11.29.15+AM.png?format=1000w"

]

class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}

export default MyWrapper;

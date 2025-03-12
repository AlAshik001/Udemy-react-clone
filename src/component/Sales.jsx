
import sale from "../assets/image/sale-image.jpg"

// Slaes Image

function Sales()
{
    return(
        <div className="sale-image">
    <img src={sale} alt="Sale image"/>
    <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 Hours to save.</h2>
        <p>Get top courses for just ₹499. just one day to save but a lifetime Learning. </p>
    </div>
</div>
    )
}

export default Sales
import c1 from "../assets/image/c1.jpg"
import c2 from "../assets/image/c2.jpg"
import c3 from "../assets/image/c3.jpg"
import c4 from "../assets/image/c4.jpg"



// Popular

function Popular()
{
    return(
        <div className="popular">
        <h1 className="popular__title">Most Papulor</h1>
        <p className="popular__subtitle">Pick thr best fix</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={c1} alt="c1"/>
                <h3>2025 Python Visaulisation Masterclass</h3>
                <p>col steele </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>₹999</del> </p>
               </div>
        
               <div className="course-card">
                <img src={c2} alt="c1"/>
                <h3>Web Development Bootcamp 2025</h3>
                <p>col steele </p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>
        
               <div className="course-card">
                <img src={c3} alt="c1"/>
                <h3>Master Data Analysis Bootcamp 2025</h3>
                <p>col steele </p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>
        
               <div className="course-card">
                <img src={c4} alt="c1"/>
                <h3> Data scientist Bootcamp 2025</h3>
                <p>col steele </p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>

               <div className="course-card">
                <img src={c1} alt="c1"/>
                <h3>2025 Python Visaulisation Masterclass</h3>
                <p>col steele </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>₹999</del> </p>
               </div>
        
               <div className="course-card">
                <img src={c2} alt="c1"/>
                <h3>Web Development Bootcamp 2025</h3>
                <p>col steele </p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>
        
               <div className="course-card">
                <img src={c3} alt="c1"/>
                <h3>Master Data Analysis Bootcamp 2025</h3>
                <p>col steele </p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>
        
               <div className="course-card">
                <img src={c4} alt="c1"/>
                <h3> Data scientist Bootcamp 2025</h3>
                <p>col steele </p>
                <p>3.5 ⭐⭐⭐</p>
                <p>₹449 <del>₹999</del></p>
               </div>
        </div>

     </div>
    )
}

export default Popular
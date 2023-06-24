import React from "react"
import ReactDOM from "react-dom"


const App =()=>{

  const[arrowClicked, setarrowClicked]=React.useState(false);

 const arrowValue = arrowClicked ? "\u25B2" : "\u25BC";
  
 const handleArrowClick =(e)=>{
   setarrowClicked((prev)=>!prev)
 }


  return(
    <main>
    <div className="topHeading">
    <h1 className="heading"> Menus <input type="button" className="arrow" value={arrowValue} onClick={handleArrowClick}/> </h1>
    </div>

    {arrowClicked && <FilterComponent/> }

    
  
  </main>
  )

}
ReactDOM.render(<App/>, document.getElementById('root'))


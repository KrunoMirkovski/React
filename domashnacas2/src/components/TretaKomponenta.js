import './cssHobi.css'


export function TekstiSlika () {

    const MouseHover = () => {
        console.log('Hello there!!!');
      };
    
    return (
        <div>
            <h3 className="headingOne" >Eve slika od moeto omileno hoby</h3>
            <img className="basketball-img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVYpDYbdkNqUMBLkaOThSAZkYHep_yXK02w&usqp=CAU" alt="basketball" onMouseOver={MouseHover}></img>
        </div>
    )
}

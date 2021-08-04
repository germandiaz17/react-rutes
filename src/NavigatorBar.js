import {Link} from 'react-router-dom'

const NavigatorBar = () =>{
     
    return(
        <>
            <Link className='btn btn-dark mx-1' to='./Home'>Home</Link>
            <Link className='btn btn-dark mx-1' to='/About'>About</Link>
            <Link className='btn btn-dark mx-1' to='/Faq'>F.A.Q</Link>
            <Link className='btn btn-dark mx-1' to='/Store'>Store</Link>
            <Link className='btn btn-dark mx-1' to='/App'>App</Link>
        </>
    )
}

export default NavigatorBar
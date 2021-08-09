import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Card  } from 'react-bootstrap';

interface HeaderProps {
    buttonText:string;  
}

interface BookData {
    name:string,
    lanlag:number,
    image:string,
}

const Header=(props:HeaderProps)=>{
    const [count,setCount] =useState<number>(0);
    const [bookData,setBookData] =useState<any>([])

    const increment=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        loadData();
        
    },[])
    const loadData =()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').
        then((res:any)=>setBookData(res.data)).
        catch((err:any)=>console.log(err));
        console.log('bookData ::',bookData);
    }
    return (<div>
        {props.buttonText}
        <button onClick={increment}>click Me!</button>
        <p>{count}</p>
        {/* <img  src={'https://file-examples-com.github.io/uploads/2020/03/file_example_SVG_20kB.svg'} alt="logo"/> */}
       {bookData && bookData.map((data:any,key:any)=>(
           
           <Card key={key} style={{ width: '18rem' }}>
               
            <Card.Img variant="top" src={data.thumbnailUrl} />
           <Card.Body>
             <Card.Title>{data.id}</Card.Title>
             <Card.Text>
             {data.title}
             </Card.Text>
             <Button variant="primary">Go somewhere</Button> 
           </Card.Body> 
         </Card>
       ))}
        
        </div>)
}
export default Header;
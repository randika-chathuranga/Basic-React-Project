import {useState,useEffect} from 'react';
import BlogList from './BlogList';
 

/*const Home = () => {

    const handleClick = (e) => {
        console.log('hello home',e);
    }

    const handleClickAgain = (name,e) => {
        console.log('hello' + name,e.target);
    }

    return (
        <div className="home">
        <h1>this is home page</h1>
        <button onClick={(e) => handleClick(e)} >click me</button>
        <button onClick={(e) => handleClickAgain('randika',e)}>Click me again</button>
        </div>
    );
    
};
 
export default Home;
*/


/*

const Home = () => {

    const[name,setName] = useState('randika');

    const handleClick = () => {
        setName('chathuranga');
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;

*/



/*
const Home = () => {

        const[blogs,setBlogs] = useState([
            {title:"My new website" ,body:"lorem....", author:"randika", id:1},
            {title:"Welcome party" ,body:"lorem....", author:"sasanka", id:2},
            {title:"Web dev top tips" ,body:"lorem....", author:"randika", id:3},
        ]);

    return (
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;

*/


/*
const Home = () => {

    const[blogs,setBlogs] = useState([
        {title:"My new website" ,body:"lorem....", author:"randika", id:1},
        {title:"Welcome party" ,body:"lorem....", author:"sasanka", id:2},
        {title:"Web dev top tips" ,body:"lorem....", author:"randika", id:3},
    ]);

        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }

    return (
        <div className="home">
            <BlogList blogs={blogs} title='all blogs' />
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'randika')} title="mario's blogs" />
            <BlogList handleDelete={handleDelete}/>
        </div>
    ); 
}
export default Home;

*/

/*
const Home = () => {

    const[blogs,setBlogs] = useState([
        {title:"My new website" ,body:"lorem....", author:"randika", id:1},
        {title:"Welcome party" ,body:"lorem....", author:"sasanka", id:2},
        {title:"Web dev top tips" ,body:"lorem....", author:"randika", id:3},
    ]);


        const[name,setName] = useState('randika');

        const handleDelete = (id) => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }

        useEffect(() => {
           console.log('run effect');
           console.log(name);
        }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='all blogs'  handleDelete={handleDelete} />
            <button onClick={()=>setName('chathuranga')}>change name</button>
            <p>{name}</p>
            
        </div>
    ); 
}
export default Home;

*/



const Home = () => {

        const[blogs,setBlogs] = useState([
            {title:"My new website" ,body:"lorem....", author:"randika", id:1},
            {title:"Welcome party" ,body:"lorem....", author:"sasanka", id:2},
            {title:"Web dev top tips" ,body:"lorem....", author:"randika", id:3},
        ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="all titles" />
        </div>
    );
}
 
export default Home;

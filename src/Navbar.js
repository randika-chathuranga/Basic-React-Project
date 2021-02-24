 const Navbar = () => {
     return ( 
         <nav className="navbar">
             <h1>React Projects</h1>
             <div className="links">
                 <a href="/">Home</a>
                 <a href="/create" style={{
                     color:'white',
                     backgroundColor:'brown',
                     borderRadius:'8px'                 //  {{}}    1st curley = dynamic value       2nd curley = as objects      
                 }}>New blog</a>
             </div>
         </nav>
      );
 }
  
 export default Navbar;
import React, { useState } from 'react';
import styles from './Itenary';


function Itenary({id,image, info, price, name}){
    const [readMore, setReadMore] = useState(false);

    return(
        <article className={styles.Itenary}>
        {/* <img src = {image}/>
        <footer>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </footer>
        <p>{readMore ? info: `${info.substring(0,200)}...`}
        <button onClick={()=>setReadMore(!readMore)}>   
        {readMore?'showless': ' Read more'}
        </button>
        </p>
        <button >Not Interested</button> */}
        </article>
    )
};
 export default Itenary;

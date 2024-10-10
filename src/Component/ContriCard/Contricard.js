import React from 'react';
import './Contricard.css';

const Contricard = (props) => {
    // const itemkom=props.allconty.slice(0,5)
    // console.log(itemkom);
    return (
        <div  className='maincad'>
            <div className="nam">
            {
                   props.allconty.map(con=>
                    <div className="card">
                         
                        <div className="cadimg">
                            <img src={con.avatar_url} alt="" />
                        </div>
                        <div className='cadtex '>
                            {con.login}
                            <p>email:Nishan@email.com</p>
                            <small>age:32</small><br />
                            <button onClick={()=>props.addmambers(con.login ,con.avatar_url)}>add mamver</button>

                        </div>

                    </div>
                    
                )  
                   
            }
            </div>

             
           <div>
            <h1 className='text-danger'>this is tim mamber</h1>
                        <div className="not">
                    
                    <div>
                        <ol>{props.timMan.map(man=><li>{man}</li>)}</ol>
                        </div>

                        <div className='smalldiv'>
                        {
                            props.memimges.map(mam=><img className='smallimg' src={mam} alt="" />)
                        }
                        </div>
                </div>

           </div>
        </div>
    );
};

export default Contricard;
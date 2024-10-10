import React from 'react';
import  Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Boostrap = () => {
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <h6 class="card-subtitle text-muted">Subtitle</h6>
                </div>
                <img src="holder.js/100x180/" alt="" />
                <div class="card-body">
                    <p class="card-text">Text</p>
                    <a href="#" class="card-link">Link 1</a>
                    <a href="#" class="card-link">Link 2</a>
                </div>
            </div>

           


           <Button variant="primary">Primary</Button>
           <Spinner animation="border" variant="primary" />
           
            
            
        </div>
    );
};

export default Boostrap;
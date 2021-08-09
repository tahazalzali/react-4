
import React, { Component } from 'react'
import DISHES from './shared/dishes';
class CardDish extends Component {
    constructor() {
        super();
        this.state = {
            dishes: DISHES,
            selectedDish: null

        }
        this.CardInfo = this.CardInfo.bind(this);
        this.CardRender = this.CardRender.bind(this);
    }
    CardInfo(dish) {
        this.setState({ selectedDish: dish })
    }
    CardRender(dish) {
        if (this.state.selectedDish != null) {
            return (
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' >
                        <div className='card-header'>
                            {dish.name}
                            <div className='bi-card-image'><img src={dish.image} alt={dish.name} /></div>
                        </div>
                        <div className="card-body">
                            <div >{dish.description}</div>
                            <div>{dish.label}</div>
                            <div>{dish.comments[0].name}</div>
                        </div>
                    </div>
                </div>
            )

        }
        else {
            return (
                <div>

                </div>
            )
        }
    }
    CommentsRender(dish) {
        if (this.state.selectedDish != null) {
    
              
           
            return (<div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Comments</h2>
                        <div className='card-body'>
                        
                            <div>-{dish.comments[0].name}</div>
                            <div >{dish.comments[0].comment}</div>
                            
                        </div>
                    </div>
                </div>
            </div>);
        }

        else {
            return (<div></div>)
        }
    }
    render() {


        const ren = this.state.dishes.map(dish => {
            return (
                <div key={this.state.dishes.id} className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='card' onClick={() => { this.CardInfo(dish); this.CardRender(dish) }}>
                        <div className='card-header'>
                            {dish.name}
                            <div className='bi-card-image'><img src={dish.image} alt={dish.name} /></div>
                        </div>
                        <div className="card-body">

                            <div>{dish.label}</div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className='card-group'>
                {ren}
                <div className='row'>

                    {this.CardRender(this.state.selectedDish)}

                    {this.CommentsRender(this.state.selectedDish)}
                </div>

            </div>

        );
    }
}
export default CardDish;
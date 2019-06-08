import React from 'react';

export default class GridStart extends React.Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <ul className='gr00'>
                <li className='cell'>G</li>
                <li className='cell'>R</li>
                <li className='cell'>I</li>
                <li className='cell'>D</li>
                <li className='cell'>E</li>
                <li className='cell'>A</li>
                <li className='cell'><div className='cerchio bg-fc0'></div></li>
                <li className='cell'><div className='cerchio bg-teal'></div></li>
                <li className='cell'><div className='cerchio bg-red'></div></li>
            </ul>
        );
    }

}

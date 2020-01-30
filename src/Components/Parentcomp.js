import React, { Component } from 'react'
import ChildComp from './ChildComp';
import ErrorBoundary from './ErrorBoundary';

export class Parentcomp extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                  <ChildComp hero="SuperMan"/>
                </ErrorBoundary>
                <ErrorBoundary>
                  <ChildComp hero="Joker"/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default Parentcomp

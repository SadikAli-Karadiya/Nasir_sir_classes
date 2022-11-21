import React, { Component } from 'react'

export default class ErrorBound extends Component {
    constructor() {
        super();
        this.state = { error: null };
      }
    
    static getDerivedStateFromError() {
        return { error: true };
    }

    render() {
    return (
      <div>
        {
            this.state.error ?  <div className='h-screen grid grid-cols-1 text-center gap-4 content-center'>
                                    <h1 className='text-2xl font-bold'>Something went wrong...</h1>
                                </div> : this.props.children
        }
      </div>
    )
  }
}
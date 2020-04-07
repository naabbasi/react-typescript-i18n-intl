import React, { Component } from "react";

export default class Keyboard extends Component {
  private readonly appName : string = "React with type script";
  
  constructor(props: any) {
    super(props);
    
  }

  render(){
    return <>
     {this.appName}
    </>
  }
}
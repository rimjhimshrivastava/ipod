import React from "react";
import "./Wheel.css";
import ZingTouch from "zingtouch";

class Wheel extends React.Component {
  
  //when wheel is mounted activate the rotate event
  componentDidMount() {
    const wheel = document.getElementById("wheel");
    const region = new ZingTouch.Region(wheel);
    region.bind(wheel, "rotate", (e) => {
      if(e.detail.distanceFromLast>2){
        //when clockwise rotation move the active status to the next menu element
        this.props.increaseActive();
      }
      else if(e.detail.distanceFromLast<-2){
        //when anti clockwise rotation move the active status to the previous menu element
        this.props.decreaseActive();
      }
    });
  }
  render() {
    return (
      <div className="wheel" id="wheel">
        <span className="menu-button" onClick={this.props.openMenu} >MENU</span>
        <button className="select-button" onClick={this.props.selection}>SELECT</button>
        <span className="material-symbols-outlined play-pause" onClick={this.props.clickPlay}>play_pause</span>
        <span className="material-symbols-outlined fast-forward" onClick={this.props.clickFastForward}>
          fast_forward
        </span>
        <span className="material-symbols-outlined fast-rewind" onClick={this.props.clickFastRewind}>
          fast_rewind
        </span>
      </div>
    );
  }
}

export default Wheel;

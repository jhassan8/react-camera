import React, { Component } from "react";
import "./index.less";
import { Button, message } from "antd";
import { HashRouter as Router, Route, Link } from "react-router-dom";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoSrc: "",
      srcObject: "",
      width: window.innerWidth
    };
  }

  savePhoto = e => {
    console.log(1);
    const ctx = this.canvas.getContext("2d");
    ctx.drawImage(this.video, 0, 0, 300, 200);
  };

  componentDidMount() {}
  startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          this.video.srcObject = stream;
          var playPromise = this.video.play();

          if (playPromise !== undefined) {
            playPromise
              .then(_ => {
                // Automatic playback started!
                // Show playing UI.
              })
              .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.log(error);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  stopCamera = () => {
    var track = this.video.srcObject.getTracks()[0]; // if only
    track.stop();
    message.success("OK");
  };
  render() {
    return (
      <div className="home-container">
        <h2>Camera Demo</h2>
        <div className="link">
          <Link to="/">home</Link>
        </div>
        <div className="content">
          <h2>Acciones</h2>
          <span>Activar: </span>
          <Button type="primary" onClick={this.startCamera}>
            Activar
          </Button>
          <span>Capturar: </span>
          <Button type="primary" onClick={this.savePhoto}>
            Capturar
          </Button>
          <span>Desactivar：</span>
          <Button type="primary" onClick={this.stopCamera}>
            Desactivar
          </Button>
          <div className="video-container">
            <video
              ref={node => (this.video = node)}
              width="300"
              height="auto"
              // src={this.state.videoSrc}
            />
          </div>
          <h2>Captura</h2>
          <div className="canvas-container">
            <canvas
              ref={node => (this.canvas = node)}
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

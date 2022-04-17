import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="title">
        <h1>
          Da Soundboard
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-volume-up"></i>
                  <span>
                    Sound 1
                  </span>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                  lobortis nisl, euismod egestas nisl nunc euismod.
                </p>
                <button className="btn btn-primary">
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-volume-up"></i>
                  <span>
                    Sound 2
                  </span>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                  lobortis nisl, euismod egestas nisl nunc euismod.
                </p>
                <button className="btn btn-primary">
                  Play
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-volume-up"></i>
                  <span>
                    Sound 3
                  </span>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                  lobortis nisl, euismod egestas nisl nunc euismod.
                </p>
                <button className="btn btn-primary">
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

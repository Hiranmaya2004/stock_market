import React from 'react'

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="public/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="public/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5 mx-auto ">
          <img src="public/images/tijori.svg" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 "  style={{ overflow: 'hidden', maxWidth: '100%',whiteSpace: 'nowrap'}}>
          <img src="public/images/streakLogo.svg" style={{ maxWidth: '100%', height: 'auto' }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="public/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3" style={{ overflow: 'hidden',maxWidth: '100%',whiteSpace: 'nowrap'}}>
          <img src="public/images/dittoLogo.svg" style={{ maxWidth: '100%', height: 'auto' }}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
     );
}

export default Universe;
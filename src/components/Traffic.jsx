function Traffic () {
    return (
        <div style={{width: '70%', margin: 'auto',
            paddingBottom: '3em',}}>
            <div style={{display: 'flex', width: '100%', gap: '25px',}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '6%', marginTop: '2em',}}>
                    <i style={{color: 'white', padding: '18px 16px', fontSize: '25px', background: '#5b5bdd', borderRadius: '50%',}} class="fa-solid fa-filter"></i>
                    <i style={{fontSize: '60px', paddingTop: '18px', paddingLeft: '4px',}} class="fa-sharp fa-solid fa-arrow-down"></i>
                </div>
                <div style={{display: 'flex', paddingBottom: '2em', borderBottom: '2px solid rgb(169, 156, 156)'}}>
                    <div style={{paddingTop: '2em',}}>
                        <h2 style={{marginBottom: '0.7em', marginTop: '4px',}}>Searches <span className="search-figure">+5%</span></h2>
                        <h2 style={{fontSize: '28px', marginBottom: '0.5em'}}>29 380 <span className="num-yesterday">yesterday</span></h2>
                        <h2 style={{fontSize: '28px', color: 'rgb(169, 156, 156)',}}>27 985 <span className="num-ls-friday">Last friday</span></h2>
                    </div>
                    <div style={{marginLeft: '7em', paddingTop: '2em'}}>
                        <h2 style={{marginBottom: '0.5em'}}> Mobile traffic: <span className="">100%</span></h2>
                        <h2 style={{marginBottom: '0.5em'}}>Web traffic: <span className="">100%</span></h2>
                        <p style={{fontSize: '20px', lineHeight: '1.8', color: 'rgb(169, 156, 156)'}}>You get 100% traffic on mobile and desktop devices.</p>
                        <p style={{fontSize: '20px',}}>Help: <span style={{color: 'rgb(91, 91, 221)'}}>Searches</span>, <span style={{color: 'rgb(91, 91, 221)'}}>Pessimisation</span></p>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', width: '100%', gap: '25px',}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '6%', marginTop: '2em',}}>
                    <i style={{color: 'white', padding: '18px 16px', fontSize: '25px', background: '#5b5bdd', borderRadius: '50%',}} class="fa-solid fa-hand-pointer"></i>
                    <i style={{fontSize: '55px',  paddingLeft: '8px',}} class="fa-sharp fa-solid fa-arrow-down"></i>
                </div>
                <div style={{display: 'flex', paddingBottom: '2em', borderBottom: '2px solid rgb(169, 156, 156)'}}>
                    <div style={{paddingTop: '2em',}}>
                        <h2 style={{marginBottom: '0.7em', marginTop: '4px',}}>Clicks <span className="click-figure">-13%</span></h2>
                        <h2 style={{fontSize: '28px', marginBottom: '0.5em'}}>243 <span className="clk-num-yesterday">yesterday</span></h2>
                        <h2 style={{fontSize: '28px', color: 'rgb(169, 156, 156)',}}>280 <span className="clk-num-lf">Last friday</span></h2>
                    </div>
                    <div style={{marginLeft: '7em', paddingTop: '2em', paddingRight: '5em',}}>
                        <h2 style={{marginBottom: '0.5em'}}> CTR: <span className=" ctr-num">0,004%</span></h2>
                        <p style={{fontSize: '20px', lineHeight: '1.8', color: 'rgb(169, 156, 156)'}}>Coversions from searches to click on all devices.</p>
                        <p style={{fontSize: '20px',}}>Help: <span style={{color: 'rgb(91, 91, 221)'}}>CTR</span>, <span style={{color: 'rgb(91, 91, 221)'}}>Cliks</span></p>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', width: '100%', gap: '25px',}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '6%', marginTop: '2em',}}>
                    <i style={{color: 'white', padding: '18px 16px', fontSize: '25px', background: '#5b5bdd', borderRadius: '50%',}} class="fa-solid fa-cart-shopping"></i>
                </div>
                <div style={{display: 'flex', paddingBottom: '2em', borderBottom: '2px solid rgb(169, 156, 156)'}}>
                    <div style={{paddingTop: '2em',}}>
                        <h2 style={{marginBottom: '0.7em', marginTop: '4px',}}>Sales</h2>
                        <h2 style={{fontSize: '28px', marginBottom: '0.5em'}}>24 <span className="sale-num-ys">yesterday</span></h2>
                        <h2 style={{fontSize: '28px', color: 'rgb(169, 156, 156)',}}>24 <span className="sale-num-lf">Last friday</span></h2>
                    </div>
                    <div style={{marginLeft: '7em', paddingTop: '2em', paddingRight: '5em'}}>
                        <h2 style={{marginBottom: '0.5em'}}> STR: <span className="">100%</span></h2>
                        <h2 style={{marginBottom: '0.5em'}}>Avg. Check: <span className="">8 908</span></h2>
                        <p style={{fontSize: '20px', lineHeight: '1.8', color: 'rgb(169, 156, 156)'}}>Conversion from clicks to booking on all devices.</p>
                        <p style={{fontSize: '20px',}}>Help: <span style={{color: 'rgb(91, 91, 221)'}}>STR</span>, <span style={{color: 'rgb(91, 91, 221)'}}>Bookings</span>, <span style={{color: 'rgb(91, 91, 221)'}}>Avg. Check</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Traffic; 


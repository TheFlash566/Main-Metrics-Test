function Stabilities () {
    return (
        <div style={{display: 'flex', margin: 'auto', width: '65%',
        gap: '6em',}}>
            <ul style={{fontSize: '30px', color: 'lime',}}>
                <li> <p style={{color: 'black'}}>Errors: 0,12%</p></li>
                <li style={{listStyle: 'none',}}><p style={{fontSize: '16px',  color: '#a99c9c',}}>Average: 0,11%</p></li>
            </ul>

            <ul style={{fontSize: '30px', color: 'yellow',}}>
                <li><p style={{color: 'black'}}>Zereos: 5,12%</p></li>
                <li style={{listStyle: 'none',}}> <p style={{fontSize: '16px', color: '#a99c9c',}}>Average: 0,11%</p></li>
            </ul>

            <ul style={{fontSize: '30px', color: 'red',}}>
                <li> <p style={{color: 'black'}}>Timesouts: 0,12%</p></li>
                <li style={{listStyle: 'none',}}> <p style={{fontSize: '16px', color: '#a99c9c',}}>Average: 0,11%</p></li>
            </ul>
        </div>
    )
}



export default Stabilities;

    
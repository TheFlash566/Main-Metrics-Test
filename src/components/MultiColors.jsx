function MultiColors () {
    return (
        <>
            <div style={{width: '65%', margin: 'auto', height: 'auto', marginTop: '1em',
                marginBottom: '1em',}}>
                <div style={{height: 'auto', display: 'flex', gap: '1px', marginBottom: '1.5em',}}>
                    <div style={{background: 'yellow', height: '10px', width: '30%'}}></div>
                    <div style={{background: 'blue', height: '10px', width: '24%'}}></div>
                    <div style={{background: 'skyblue', height: '10px', width: '22%'}}></div>
                    <div style={{background: 'whitesmoke', height: '10px', width: '12%'}}></div>
                </div>
                <ul style={{display: 'flex', fontSize: '32px', listStyle: 'square', gap: '4em'}}>
                    <li style={{color: 'yellow',}}>
                        <p style={{fontSize: '20px', color: 'black'}}>Error 500: 1265</p>
                    </li>
                    <li style={{color: 'blue',}}>
                        <p style={{fontSize: '20px', color: 'black',}}>Error 501: 800</p>
                    </li>
                    <li style={{color: 'lightblue',}}>
                        <p style={{fontSize: '20px', color: 'black',}}>Error 502: 650</p>
                    </li>
                    <li style={{color: 'rgb(169, 156, 156)',}}>
                        <p style={{fontSize: '20px', color: 'black',}}>Other: 330</p>
                    </li>
                </ul>
            </div>
        </>
    )
}




export default MultiColors;
const outPut=results.map((res)=>(
    <li key={res.cca2}>
        <div>
            <h1>{res.name.common}</h1>
            <h2>{res.name.official}</h2>
            <span>Independent : {res.independent}</span>
            <span>UN Member : {res.unMember}</span>
            <span>Flag : {res.flag}</span>
            <span>Maps : Google Map:{res.maps.googleMaps}, Open Street Map : {res.maps.openStreetMaps}</span>
            <span>Population : {res.population}</span>
        </div>
    </li>
  ))
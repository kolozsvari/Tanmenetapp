const OraCard = ({oraSzam, cim, children, onKartyaTorles}) => {
    return (
        
        <article className="ora">
        <header>
          <h3>{oraSzam}</h3>
          <button className="icon-button">📝</button>
          <button className="icon-button" onClick={onKartyaTorles}>🗑️</button>
        </header>
        <h4>{cim}</h4>
        <p>{children}</p>
      </article>
    );
  };
  
  export default OraCard;
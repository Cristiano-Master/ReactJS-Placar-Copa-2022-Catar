function Selecao({SelecaoLogo, SelecaoName, SelecaoGols}){
    return(
        <div className="coluna">
            <div className="selecao">
                <div className="selecao-logo">
                    <img src={SelecaoLogo} alt="Logo da Seleção" />
                </div>
                <h2 className="selecao-name">{SelecaoName} </h2>
                {SelecaoGols.map(title => {
                    return <span>{title}</span>;
                })}
                
            </div>
        </div>
    )
}
export default Selecao
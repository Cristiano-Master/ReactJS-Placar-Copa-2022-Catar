function Info(){
    return(
        <div className="coluna">
            <div className="placar-detalhes">
                <div className="info">
                    28/11/2022 - <strong>Ontem</strong>
                </div>
                
                <div className="placar-pontuacao">
                    <span className="placar-pontos">3</span>
                    <span className="placar-divisor">:</span>
                    <span className="placar-pontos">3</span>
                </div>

                <div className="placar-tempo">90:00</div>

                <div className="info arbitro">
                    Arbitro: <strong>Abdulla Mohammed</strong>
                </div>

                <div className="info">
                    Estádio: <strong>Al Janoub</strong>
                </div>

                <div className="placar-opcoes">
                    <button className="placar-opcao">40%</button>
                    <button className="placar-opcao">-</button>
                    <button className="placar-opcao">60%</button>
                </div>

                <button className="placar-estatistica">Estatísticas</button>
            </div>
        </div>
    )
}
export default Info
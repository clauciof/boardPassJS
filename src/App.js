function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header> 

      <body>
          <div id="boarding-pass">
          <h1>Cartão de embarque</h1>
          <main id="ticket">
            <section class="flight-info">
              <div class="flight-container-up">
                <div class="flight-code">
                  <p>Voo</p>
                  <strong>RS995</strong>
                </div>
                <div class="flight-date">
                <p>Data</p>
                <strong>23/05/2023</strong>
                </div>
              </div>
              <div class="flight-container-down">
                <div class="flight-derparture">
                  <p>São Paulo, Brasil</p>
                  <strong>GRU</strong>
                  <time>17:00</time>
                </div>
                <div class="airplane-icon">
                  <img src="" alt=""/>
                </div>
                <div class="flight-arrival">
                  <p>São Francisco, EUA</p>
                  <strong>SFO</strong>
                  <time>04:48 <sup>+1</sup></time>
                </div>
              </div>
            </section>
            <section class="passanger-info">
              <div class="passanger-name">
                <p>Passageiro</p>
                <strong>Cláucio Gonçalves</strong>
              </div>
              <div class="passanger-seat">
                <p>Assento</p>
                <strong>28A</strong>
              </div>
            </section>
            <section class="bottom">
              <div class="container">
                <div class="boarding-info">
                  <dl>
                    <dt>
                      <p>Embarque</p>
                      <time>16:15</time>
                    </dt>
                    <dt>
                      <p>Terminal</p>
                      <strong>2</strong>
                    </dt>
                    <dt>
                      <p>Portão</p>
                      <strong>15</strong>
                    </dt>
                  </dl>
                </div>
                <div class="qrcode">
                  <img src="" alt="" />
                  <p>Grupo de embarque: 3</p>
            
                </div>
              </div>
              <p><strong>Atenção:</strong> o portão fecha as 16:45</p>    
            </section>
          </main>
          <footer>Qualquer problema procure o balcão de atendimento da sua companhia aérea</footer>
          </div>
      </body>
    </div>
  );
}

export default App;

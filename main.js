let bowling = {
    giocatori: [
        {nome: "Livio",punteggi: []},
        {nome: "Paola",punteggi: []},
        {nome: "Filippo",punteggi: []},
        {nome: "Giuseppe",punteggi: []},
    ],
    creaPunteggio: function(){
        this.giocatori.forEach(giocatore => {
            giocatore.punteggi = [];
            for (let i = 1; i <= 10; i++) {
                giocatore.punteggi.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
            }    
            console.log(giocatore.punteggi);
        });

    },

    nuovoGiocatore: function(nome){
        let nuovoGiocatore = {nome: nome, punteggi: []}
        this.giocatori.push(nuovoGiocatore)   
    },

    punteggioTotale: function(){
        this.giocatori.forEach(giocatore => {
            let totale = giocatore.punteggi.reduce((acc, punteggio) => acc + punteggio);
            giocatore.totale = totale;
            
        });
        this.giocatori.sort((a, b) => b.totale - a.totale);
        
    },
    vincitore: function(){
        let vincitore = this.giocatori[0];
        console.log("Il vincitore è " + vincitore.nome + " con " + vincitore.totale + " punti");
    },

    classifica: function(){
        console.log("Classifica:");
        this.giocatori.forEach((giocatore, index) => {
            console.log((index + 1) + ". " + giocatore.nome + " - " + giocatore.totale + " punti");
        });
},
}


bowling.creaPunteggio()
bowling.nuovoGiocatore("M   arzia")
bowling.creaPunteggio()

bowling.punteggioTotale();
bowling.vincitore()
bowling.classifica()

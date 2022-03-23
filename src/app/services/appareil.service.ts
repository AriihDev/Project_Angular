export class appareilService {
    appareils = [
        {
        id : 1,    
        name:'Machine à laver',
        status:'allumer',
        },
        {
        id : 2,    
        name:'PC Fixe',
        status:'allumer',
        },
        {
        id : 3,
        name:'Lumiere Salon',
        status:'eteint',
        },
    
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status='allumer'
        }
    }

    switchOfffAll() {
        for(let appareil of this.appareils) {
            appareil.status='eteint'
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status='allumer';
    }

    switchOffOne(index: number) {
        this.appareils[index].status='eteint';
    }

}
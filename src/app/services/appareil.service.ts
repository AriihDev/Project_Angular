export class appareilService {
    appareils = [
        {
        name:'Machine à laver',
        status:'allumer',
        },
        {
        name:'PC Fixe',
        status:'allumer',
        },
        {
        name:'Lumiere Salon',
        status:'eteint',
        },
    
    ];

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
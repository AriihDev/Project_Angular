import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class appareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [];

    constructor(private httpClient: HttpClient) {}

    emitAppareilSubject() {

        this.appareilSubject.next(this.appareils.slice());
    }

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
        this.emitAppareilSubject();
    }

    switchOfffAll() {

        for(let appareil of this.appareils) {
            appareil.status='eteint'
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {

        this.appareils[index].status='allumer';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {

        this.appareils[index].status='eteint';
        this.emitAppareilSubject();
    }

    addAppareil(name: string , status : string) {

        const appareilObject = {

            id:0,
            name:'',
            status:''
        };

        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }

    saveAppareilsToServer() {
        this.httpClient
        .put('https://ariihdev-projetangular-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement effectué !');
            },
            (error) => {
                console.log('Erreur survenue lors de la sauvegarde' + error);
            }
            )
    }

    getAppareilFromServer() {
        this.httpClient
        .get<any[]>('https://ariihdev-projetangular-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
        .subscribe(
            (response) => {
                this.appareils = response;
                this.emitAppareilSubject();
            },
            (error) => {
                console.log('Erreur de chargement' + error);
            }
        );
    }
}
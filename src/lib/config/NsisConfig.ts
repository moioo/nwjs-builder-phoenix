
export class NsisConfig {

    public icon: string = undefined;
    public unIcon: string = undefined;

    public menuName: string = undefined;

    public languages: string[] = ['English'];
    
    public internetShortcut: string[] = [];

    public installDirectory: string = '$LOCALAPPDATA\\${_APPNAME}';

    public diffUpdaters: boolean = false;
    public hashCalculation: boolean = true;

    constructor(options: any = {}) {

        Object.keys(this).map((key) => {
            if(options[key] !== undefined) {
                switch(key) {
                default:
                    (<any>this)[key] = options[key];
                    break;
                }
            }
        });

    }

}

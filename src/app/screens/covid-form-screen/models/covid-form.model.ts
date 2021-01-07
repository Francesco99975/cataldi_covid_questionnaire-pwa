export class CovidForm {
    
    firstName: String;
    middleName: String;
    lastName: String;

    symptoms: Map<String, boolean>;

    travel: boolean;

    contact: boolean;

    constructor(fn: String, mn: String, ln: String, sym: Map<String, boolean>, travel: boolean, contact: boolean) {
        this.firstName = fn;
        this.middleName = mn;
        this.lastName = ln;

        this.symptoms = sym;

        this.travel = travel;

        this.contact = contact;
    }

    hasMiddle(): boolean {
        return this.middleName !== "";
    }

    toJSON() {
        return {
            "firstName": this.firstName,
            "middleName": this.middleName,
            "lastName": this.lastName,
            "symptoms": {
                "fever": this.symptoms.get('fever'),
                "breath": this.symptoms.get('breath'),
                "cough": this.symptoms.get('cough'),
                "throat": this.symptoms.get('throat'),
                "nose": this.symptoms.get("nose"),
                "taste": this.symptoms.get("taste"),
                "nausea": this.symptoms.get("nausea"),
                "tiredness": this.symptoms.get("tiredness")
            },
            "travel": this.travel,
            "contact": this.contact,
            "hasMiddle": this.hasMiddle(),
            "passed": this.passed()
        };
    } 
    
    passed(): boolean {
        if (this.travel || this.contact) return false;
    
        if(Array.from(this.symptoms.values()).indexOf(true) >= 0) return false;

        return true;
    }
}
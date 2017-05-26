import { common } from 'crm-common-js';
export class CrmProp<T> {
    private _name: string;
    constructor(propname: string) {
        this._name = propname;
    }
    getValue(): T {
        return common.getField(this._name).getValue();
    }

    setValue(value: T): void {
        return common.getField(this._name).setValue(value);
    }

    addOnChange(callback: () => void){
        common.getField(this._name).addOnChange(callback)
    }

    fireOnChange() {
        common.getField(this._name).fireOnChange();
    }

    setDisabled(value: boolean){
        common.getControl(this._name).setDisabled(value);
    }

    setVisible(value: boolean){
        common.getControl(this._name).setVisible(value);
    }
}

export interface EntityReference {
    id?: string;
    name?: string;
    logicalName?: string;
}
export interface Money{
    
}
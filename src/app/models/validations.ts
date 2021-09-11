export class Validations {
    private _lastMessage: string = "";
    private _messages: string[] = [];

    public set lastMessage(value : string) {
        this._lastMessage = value;
        this._messages.push(value);
    }
    
    public get lastMessage() : string {
        return this._lastMessage;
    }
    
    public get messages() : Array<string> {
        return this._messages;
    }
    
    get hasErrors(): boolean {
        return this.messages.length > 0
    }

    addError(message: string) {
        this.messages.push(message);
    }
}
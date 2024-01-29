export class Interaction {
    constructor(prompt = null, response = null) {
        if (prompt === null || response === null) {
            throw new Error("Trying to initialize Interaction with null prompt or response!")
        }
        this.prompt = prompt;
        this.response = response;
    }

    show() {
        console.log(`[Interaction-show] \t| This interaction has question ${this.prompt} and answer ${this.response}`);
    }

}

export class DalleInteraction extends Interaction {
    constructor(prompt = null, response = null, PromptImageURL = null, ResponseImageURL = null) {
        if (PromptImageURL || ResponseImageURL) {
            super(prompt, response);
            this.PromptImageURL = PromptImageURL;
            this.ResponseImageURL = ResponseImageURL;
            this.isDalle = true;
        }
        else {
            throw new Error("Trying to initialize DalleInteraction without any URL!")
        }
    }

    show() {
        super.show();
        if (this.PromptImageURL) console.log(`\tThis interaction also has picture for prompt ${this.PromptImageURL}.`);
        if (this.ResponseImageURL) console.log(`\tThis interaction also has response ${this.ResponseImageURL}.`);
    }

    isInteractionDalle() {
        console.log(`[DalleInteraction-isInteractionDalle] | Is the interaction Dalle? ${this.isDalle}`);
        return this.isDalle;
    }


}


export default Interaction;
import { Interaction, DalleInteraction } from "./Interaction.js";

class PromptManager {
    constructor() {
        this.prompts = [];
    }

    countInteractions() {
        console.log(`[Manager-countInteractions] | The prompt manager contains ${this.prompts.length} prompts.`);
        return this.prompts.length;
    }

    addInteraction(prompt = null, response = null) {
        // recordPrompt(tmp_prompt = { prompt: "null", respond: "null" }) {
        // this design is just to recall Jan 19's makeup lecture
        // const question = prompt === null ? null : prompt;
        // const answer = response === null ? null : response;
        if (prompt === null || response === null) {
            console.log(`[Manager-addInteraction] | Invalid prompt or response, skip adding this interaction! Trying to add prompt: ${prompt} and response: ${response}`);
            return;
        }
        let tmp_interaction = new Interaction(prompt, response);
        this.prompts.push(tmp_interaction);
    }

    addDalleInteraction(prompt = null, response = null, promptURL = null, responseURL = null) {
        if (prompt === null || response === null) {
            console.log(`[Manager-addDalleInteraction] | Invalid prompt or response! Skip adding this interaction! Trying to add prompt: ${prompt} and response: ${response}`);
            return;
        }
        if (promptURL === null && responseURL === null) {
            console.log("[Manager-addDalleInteraction] | No any URL! Skip adding this interaction!");
            return;
        }
        let tmp_interaction = new DalleInteraction(prompt, response, promptURL, responseURL);
        this.prompts.push(tmp_interaction);
    }

    showAllPrompts() {
        console.log("\n[Manager-showAllPrompts] | Prompt manager showing all:");
        let tmp_prompt;
        for (tmp_prompt of this.prompts) {
            tmp_prompt.show();
        }
    }

    removePrompt(index) {
        console.log(`[Manager-removePrompt] | removing the interaction in position ${index}`);
        this.prompts.splice(index, 1);
    }
}


export default PromptManager;
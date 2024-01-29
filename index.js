import PromptManager from "./PromptManeger.js";
import { Interaction, DalleInteraction } from "./Interaction.js";

const TOTO = new PromptManager();

// should run properly
TOTO.addInteraction("P1", "R1");
// should not be added
TOTO.addInteraction(null, "R2");
// should not be added
TOTO.addDalleInteraction("P3", "R3");
// should run properly
TOTO.addDalleInteraction("P4", "R4", "P-URL");
// should run properly
TOTO.addDalleInteraction("P5", "R5", undefined, "R-URL");
// should run properly
TOTO.addDalleInteraction("P6", "R6", "P-URL", undefined);
// should run properly
TOTO.addDalleInteraction("P7", "R7", "P-URL", "R-URL");
// there should be 5
TOTO.showAllPrompts();
// so should return 5
TOTO.countInteractions();
// remove the first (index 0) one (P1, R1)
TOTO.removePrompt(0);
// should be 4
TOTO.showAllPrompts();
// 4 as well
TOTO.countInteractions();
// remove the second (index 1) one in the currrent array (P1, R1)
TOTO.removePrompt(1);

TOTO.showAllPrompts();

TOTO.countInteractions();

# CS5010 HW1 - Kaiyue Lin 002201108 

## New Feature

__PromptManager.countInteractions__

Count the number of interactions in the manager

## Class implmentation

### 1. Interaction
___

__constructor__

This class represents a pair of ChatGPT prompt and response. Its ```constructor``` takes a string prompt and a string response, i.e., ```myInteraction = new Interaction("tmp_prompt", "tmp_response")```.

__show__

The function prints the prompt and response content.

### 2. DalleInteraction
___

__constructor__

This class extends the class __Interaction__. Both the prompt and response could have an extra image input, represented as a URL. If neither of the prompt and response contains a URL input, the ```constructor``` will not return a instance.

__show__

The function prints the prompt and response content. If either the prompt and the response contains a URL, it will also be printed.

### 3. PromptManeger
___

__constructor__

Initializes this class, giving the instance a blank array of Interactions

__addInteraction__

Add an interaction to the manager by specifying 2 input parameters: prompt and response.

__addDalleInteraction__

Add a Dalle interaction to the manager by specifying 4 input parameters: prompt, response, prompt-URl, and response-URL (only one is needed in this inherited class).

__showAllPrompts__

Iterate all the interactions to return the prompts, reponse, prompt's URL (if exists) and response' URL (if exists)

__removePrompt__

Remove the i-th index interaction in the manager's array

__countInteractions__

Count the number of interactions in the manager
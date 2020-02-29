// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

//ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    /*** Selection of the form [  Project-input ] */
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    /** Selection of the root of the Application  */
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    /** Selection of the Form  */
    this.element = importedNode.firstElementChild as HTMLFormElement;
    /*** Add the id to the form to fix styling */
    this.element.id = "user-input";
    /** Reach to every element in the form [ All inputs title, description , peopel] **/
    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    //Add Event listener
    this.configure();
    //adding the form [ project-input ] to the Root of the Application
    this.attach();
  }
  /*^^^^ adding the form [ project-input ] to the Root of the Application ^^^**/

  //gatherUserInputs
  private gatherUserInputs(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert("invalid input ,please try again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
  @autobind
  private submitHandler(event: Event) {
    /********** access input values *************/
    //prevent the default behaviour     [   submitting the form   ]
    event.preventDefault();
    const userInput = this.gatherUserInputs();
    if (Array.isArray(userInput)) {
      const [title, des, people] = userInput;
      console.log(title, des, people);
      this.clearInputs();
    }
    // console.log(this.titleInputElement.value);
  }

  //attach listener to the inputs
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
// create instance of the projectInput
const ProjInput = new ProjectInput();

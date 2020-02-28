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

  private submitHandler(event: Event) {}

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

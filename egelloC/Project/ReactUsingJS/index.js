import component from "./component.js";
import { render } from "./MyReact.js";

var propCount =0;
document.getElementById("change-prop").addEventListener("click",()=>{
  propCount++
  renderComponent()
})

 

function renderComponent() {
  render(component, { props: propCount, button: document.getElementById('inc-count')}, document.getElementById("root"))
  render(component, { props: propCount, button: document.getElementById('inc-count-2')}, document.getElementById("root-2"))
}

renderComponent();
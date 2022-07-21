const root = document.getElementById(`root`)
export const aboutTemplate = () => `
  <h2>About</h2>
  <p>About my Page</p>
  
     `;

export const renderAbout = (ctx) => {
  root.innerHTML = aboutTemplate()
  console.log(root)
}
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading != null)
    heading.textContent = 'This website is all about Minecraft Datapacks/Resourcepacks.'

    const button = document.createElement('button');
    button.textContent = "Get Started";
    button.addEventListener('click', () => {
        alert('You clicked the button!')
    });

    document.body.appendChild(button);
})
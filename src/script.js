document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'This website is all about Minecraft Datapacks/Resourcepacks.'

    const button = document.createElement('button');
    button.textContent = "Get Started";
    button.addEventListener('click', () => {
        alert('You clicked the button!')
    });

    document.body.appendChild(button);
})
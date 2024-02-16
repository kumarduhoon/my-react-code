const rootElement = document.getElementById("root");

const reactElement = {
    type: "a",
    props: {
        href: "https://gmail.com/",
        target: "_blank"
    },
    children: "Go to mail Id"
}
// version 1.0.0 of customRender function
// function customRender(reactElement, rootElement) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute("href", reactElement.props.herf);
//     domElement.setAttribute("target", reactElement.props.target);
//     rootElement.appendChild(domElement)
// }

// version 1.2.0 of customRender function

function customRender(reactElement, rootElement) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        console.log(prop, reactElement.props[prop])
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    rootElement.appendChild(domElement)
}

customRender(reactElement, rootElement)
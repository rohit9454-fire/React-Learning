{/* 

<div id="parent">
    <div id="child">
        <h1>I'm H1 Tag</h1>
    </div>
</div>
ReactElement(object)=> HTML(Browsers Understands) 

*/}

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello I'm H1 Tag"),
        React.createElement("h2", { id: "heading" }, "Hello I'm H2 Tag")]), React.createElement("div", { id: "child2" },
            [React.createElement("h1", { id: "heading" }, "Hello I'm H1 Tag"),
            React.createElement("h2", { id: "heading" }, "Hello I'm H2 Tag")])])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
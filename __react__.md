# React

React is an open-source, front end, Javascript library for building user
interfaces or UI components.

React offers:

- focus on UI
- rich ecosystem
- component based architecture
- reusable code
- declarative coding
- integrations
- react native => mobile UI design

## Why use react?

- **Declarative** - React makes it painless to create interactive UIs. Design
  simple views for each state in your application, and React will efficiently
  update and render just the right components when your data changes.
  Declarative views make your code more predictable and easier to debug.

- **Component-Based** - Build encapsulated components that manage their own
  state, then compose them to make complex UIs. Since component logic is
  written in Javascript instead of templates, you can easily pass rich data
  through your app and keep state out of the DOM.

- **Learn Once, Write Anywhere** - We don't make assumptions about the rest of
  your technology stack, so you can develop new features in React without
  rewriting existing code. React can also render on the server using Node and
  power mobile apps using React Native.

---

## Getting started with react

1. Using npx

    ``` bash
    npx create-react-app <project_name>
    ```

2. Using npm

    ``` bash
    npm install --global --save create-react-app
    create-react-app <project_name>
    ```

---

## JSX

JSX is a syntax extension to Javascript used with React to describe what the UI
should look like. JSX produces React "elements" which can be rendered to DOM.

React embraces the fact that rendering logic is inherently coupled with other
UI logic: how events are handled, how the state changes over time, and how the
data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in
separate files, React separates concerns with loosely coupled units called
"components" that contain both.

---

### Embedding Expressions in JSX

JS expressions can be embedded inside JSX by wrapping it in curly braces:

``` JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

Arrays, numbers and strings can be embedded. Objects cannot be embedded.

---

### JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and
evaluate to JavaScript objects. JSX can be used inside of if statements and for
loops, assign it to variables, accept it as arguments, and return it from
functions:

``` JSX
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

---

### Specifying Attributes with JSX

Quotes can be used to specify string literals as attributes:

``` JSX
const element1 = <div tabIndex="0"></div>;
```

Curly braces are used to embed a JavaScript expression in an attribute:

``` JSX
const element2 = <img src={user.avatarUrl}></img>;
```

Don't put quotes around curly braces when embedding a JavaScript expression in
an attribute. You should either use quotes (for string values) or curly braces
(for expressions), but not both in the same attribute.

> **Warning:**
> Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase
> property naming convention instead of HTML attribute names.
> For example,
> class becomes className in JSX, and tabindex becomes tabIndex.

---

### Specifying Children with JSX

JSX tags may contain children but if a tag is empty, it can be closed
immediately with />:

``` JSX
const element1 = <img src={user.avatarUrl} />;
const element2 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```

---

### JSX Prevents Injection Attacks

It is safe to embed user input in JSX:

``` JSX
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM escapes any values embedded in JSX before rendering them.
Thus it ensures that you can never inject anything that's not explicitly
written in your application. Everything is converted to a string before being
rendered. This helps prevent XSS (cross-site-scripting) attacks.

---

### JSX Represents Objects

Babel compiles JSX down toReact.createElement() calls.
These two examples are identical:

``` JSX
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```

React.createElement() performs a few checks for bug-free code but essentially
it creates an object like this:

``` JSX
// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};
```

---

## Rendering Elements

These objects are called "React elements" and describe what will be shown on
the screen. React reads these objects and uses them to construct the DOM and
keep it up to date.

Elements are the smallest building blocks of React apps. An element describes
what you want to see on the screen:

``` JSX
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap
to create. React DOM takes care of updating the DOM to match the React elements.

Note: One might confuse elements with a more widely known concept of
"components".Elements are what components are "made of".

Rendering an Element into the DOM
Assume there is a \<div> somewhere in an HTML file:

``` HTML
<div id="root"></div>
```

This is a "root" DOM node & everything inside it will be managed by React DOM.
Applications built with just React usually have a single root DOM node. If you
are integrating React into an existing app, you may have as many isolated root
DOM nodes as you like.

To render a React element into a root DOM node, pass both toReactDOM.render():

``` JSX
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

---

## Styling

There are many ways to style React with CSS, like inline styling, and CSS
stylesheet

``` JSX
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap to
create. React DOM takes care of updating the DOM to match the React elements.

---

### Inline Styling

To style an element with the inline style attribute, the value must be a
JavaScript object:

#### JavaScript Object

An object with styling informationcan be passed in the style attribute.

``` HTML
<h1 style={{color: "red"}}>Hello Style!</h1>
```

#### camelCased Property Names

Since the inline CSS is written in a JavaScript object, properties with two
names, like background-color, must be written with camel case syntax:

``` JSX
<h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
```

---

### CSS Stylesheet

CSS styling can also be written in a separate file with the .css file extension,
and imported in an application.

App.css:

``` CSS
body {
    background-color: #282c34;
    color: white;
    padding: 40px;
    font-family: Arial;
    text-align: center;
}
```

index.js:

``` JSX
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Style!</h1>
                <p>Add a little style!.</p>
            </div>
        );
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));
```

---

### CSS Modules

Another way of adding styles to your application is to use CSS Modules. CSS
Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it,
and name conflicts are not an issue.

Create the CSS module with the .module.css extension,
example: mystyle.module.css.

mystyle.module.css:

``` CSS
.bigblue {
    color: DodgerBlue;
    padding: 40px;
    font-family: Arial;
    text-align: center;
}
```

Import the stylesheet in your component:

App.js:

``` JSX
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component {
    render() {
        return <h1 className={styles.bigblue}>Hello Car!</h1>;
    }
}
export default Car;
```

Import the component in your application:

index.js:

``` JSX
import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

ReactDOM.render(<Car />, document.getElementById('root'));
```

---

## Components

Components are complex, modular and reusable UI elements written and compiled
on the server side and rendered on the client side in a tree like structure of
elements.

UI elements make up components. Simple components make up complex widgets.

---

### Types of Components

#### Functional Components

``` JSX
const FunctionalComponent = () => {
    return (
        <div>
            <p>This is a functional component!</p>
        </div>
    )
}

export default FunctionalComponent
```

#### Class-based Components

The component has to include the extends React.Component statement, this
statement creates an inheritance to React.Component, and gives your component
access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

``` JSX
import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <p>
                This is a class component
            </p>
        )
    }
}

export default ClassComponent
```

---

### Rules

- Nesting - A component can be shown inside another component
- Reusability - A single component can be reused through out the application
- Configuration - A component's should be dynamically configured during creation

---

## Developer tools

### create-react-app

Create React App is an officially supported way to create single-page React
applications. It offers a modern build setup with no configuration.

---

#### Why use create-react-app?

- Set up a modern web app by running one command.
- Less to Learn - You don't need to learn and configure many build tools.
  Instant reloads help you focus on development. When it's time to deploy, your
  bundles are optimized automatically.
- Only One Dependency - Your app only needs one build dependency. We test
  Create React App to make sure that all of its underlying pieces work together
  seamlessly - no complicated version mismatches.
- No Lock-In - Under the hood, we use webpack, Babel, ESLint, and other amazing
  projects to power your app. If you ever want an advanced configuration, you
  can "eject" from Create React App and edit their config files directly.
- Get started in seconds - Whether you're using React or another library,
  Create React App lets you focus on code, not build tools. To create a project
  called my-app, run this command:

    ``` bash
    npx create-react-app my-app
    ```

---

### Babel

Babel is a free and open-sourceJavaScript transcompiler that is mainly used to
convert ECMAScript 2015+ code into a backwards compatible version of JavaScript
that can be run by older JavaScript engines.

---

#### What is Babel?

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into
a backwards compatible version of JavaScript in current and older browsers or
environments.

Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment
  (through @babel/polyfill)
- Source code transformations (codemods)

``` JSX
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
    return n + 1;
});
```

---

### Webpack

Webpack is an open-sourceJavaScript module bundler.

It is made primarily for JavaScript, but it can transform front-end assets such
as HTML, CSS, and images if the corresponding loaders are included. webpack
takes modules with dependencies & generates static assets representing those
modules.

---

## Life Cycle Methods

Built in methods for class components.

### Mounting

Mounting means putting elements into the DOM.

- **constructor()**

    The constructor() method is called before anything else, when the component
    is initiated, and it is the natural place to set up the initial state and
    other initial values. The constructor() method is called with the props, as
    arguments, and you should always start by calling the super(props) before
    anything else, this will initiate the parent's constructor method and
    allows the component to inherit methods from its parent (React.Component).

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render() {
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

- **getDerivedStateFromProps()**

    The getDerivedStateFromProps() method is called right before rendering the
    element(s) in the DOM. This is the natural place to set the state object
    based on the initial props. It takes state as an argument, and returns an
    object with changes to the state.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
    }

    ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
    ```

- **render()**

    The render() method is required, and is the method that actually outputs
    the HTML to the DOM.

    ``` JSX
    class Header extends React.Component {
    render() {
        return (
        <h1>This is the content of the Header component</h1>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

- **componentDidMount()**

    The componentDidMount() method is called after the component is rendered.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

### Updating

The next phase in the lifecycle is when a component is updated. A component is
updated whenever there is a change in the component's state or props.

- **getDerivedStateFromProps()**

    Also at updates the getDerivedStateFromProps method is called. This is the
    first method that is called when a component gets updated.

    This is still the natural place to set the state object based on the
    initial props.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
        );
    }
    }

    ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
    ```

- **shouldComponentUpdate()**

    In the shouldComponentUpdate() method you can return a Boolean value that
    specifies whether React should continue with the rendering or not.

    The default value is true.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false;
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

- **render()**

    The render() method is of course called when a component gets updated,
    it has to re-render the HTML to the DOM, with the new changes.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

- **getSnapshotBeforeUpdate()**

    The getSnapshotBeforeUpdate() method provides access to the props and state
    before the update, meaning that even after the update, the values that were
    before the update can be checked.

    If the getSnapshotBeforeUpdate() method is present, componentDidUpdate()
    method should also be include, else it will lead to an error.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
        <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

- **componentDidUpdate()**

    The componentDidUpdate method is called after the component is updated in
    the DOM.

    ``` JSX
    class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
        return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
        );
    }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));
    ```

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or
unmounting as React likes to call it.

- **componentWillUnmount()**

    The componentWillUnmount method is called when the component is about to be
    removed from the DOM.

    ``` JSX
    class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if (this.state.show) {
        myheader = <Child />;
        };
        return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
        );
    }
    }

    class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
        <h1>Hello World!</h1>
        );
    }
    }

    ReactDOM.render(<Container />, document.getElementById('root'));
    ```

### Error Handling

These are triggered when rendering raises an error.

- **componentDidCatch(error, info)**
    A class component becomes an error boundary if it defines this method

    ``` JSX
    class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
    }
    ```

    It can be used as a regular component:

    ``` JSX
    <ErrorBoundary>
    <MyWidget />
    </ErrorBoundary>
    ```

    The componentDidCatch() method works like a JavaScript catch {} block, but
    for components. Only class components can be error boundaries. In practice,
    most of the time you'll want to declare an error boundary component once
    and use it throughout your application.

---

## Fragments

A common pattern in React is for a component to return multiple elements.
Fragments let you group a list of children without adding extra nodes to the
DOM.

``` JSX
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

### Short Syntax

There is a new, shorter syntax you can use for declaring fragments. It looks
like empty tags:

``` JSX
class Columns extends React.Component {
  render() {
    return (
      <>        <td>Hello</td>
        <td>World</td>
      </>    );
  }
}
```

You can use <></> the same way you'd use any other element except that it
doesn't support keys or attributes.

---

## Links

[Getting Started | Create React App](
  https://create-react-app.dev/docs/getting-started)

---

## Forms

HTML form elements naturally keep some internal state in react.

``` HTML
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the
user submits the form. In React, this behavior just works.

But in most cases, it's convenient to have a JavaScript function that handles
the submission of the form and has access to the data that the user entered
into the form. The standard way to achieve this is with a technique called
"controlled components".

### Controlled components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>`
typically maintain their own state and update it based on user input. In React,
mutable state is typically kept in the state property of components, and only
updated with setState().

The two can be combined by making the React state be the "single source of
truth". Then the React component that renders a form also controls what happens
in that form on subsequent user input. An input form element whose value is
controlled by React in this way is called a "controlled component".

``` JSX
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Since the value attribute is set on our form element, the displayed value will
always be this.state.value, making the React state the source of truth. Since
handleChange runs on every keystroke to update the React state, the displayed
value will update as the user types.

With a controlled component, the input's value is always driven by the React
state. While this means you have to type a bit more code, you can now pass the
value to other UI elements too, or reset it from other event handlers.

- **The textarea Tag**

In HTML, a `<textarea>` element defines its text by its children:

``` HTML
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

In React, a `<textarea>` uses a value attribute instead. This way, a form using
a `<textarea>` can be written very similarly to a form that uses a single-line
input:

``` JSX
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

Notice that this.state.value is initialized in the constructor, so that the
text area starts off with some text in it.

- **The select Tag**

In HTML, `<select>` creates a drop-down list. For example, this HTML creates a
drop-down list of flavors:

``` HTML
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Note that the Coconut option is initially selected, because of the selected
attribute. React, instead of using this selected attribute, uses a value
attribute on the root select tag. This is more convenient in a controlled
component because you only need to update it in one place. For example:

``` JSX
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

> Note
> You can pass an array into the value attribute, allowing you to select
> multiple options in a select tag:
> `<select multiple={true} value={['B', 'C']}>`

- **The file input Tag**

In HTML, an `<input type="file">` lets the user choose one or more files from
their device storage to be uploaded to a server or manipulated by JavaScript
via the File API.

``` JSX
<input type="file" />
```

Because its value is read-only, it is an uncontrolled component in React. It is
covered together with other uncontrolled components later in the documentation.

- **Handling Multiple Inputs**

To handle multiple controlled input elements, a name attribute can be added to
each element and make the handler function choose what to do based on the value
of event.target.name.

For example:

``` JSX
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

The ES6 computed property name syntax can be used to update the state key
corresponding to the given input name:

``` JSX
this.setState({
  [name]: value});
```

It is equivalent to this ES5 code:

``` JSX
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

Since setState() automatically merges a partial state into the current state,
it can be called with the changed parts only.

- **Controlled Input Null Value**

Specifying the value prop on a controlled component prevents the user from
changing the input unless you desire so. If you've specified a value but the
input is still editable, you may have accidentally set value to undefined or
null.

The following code demonstrates this. (The input is locked at first but becomes
editable after a short delay.)

``` JSX
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

---

## Redux

### Redux Store

The Redux store brings together the state, actions, and reducers that make up
the app and has several responsibilities:

- Holds the current application state inside
- Allows access to the current state via `store.getState();`
- Allows state to be updated via `store.dispatch(action);`
- Registers listener callbacks via `store.subscribe(listener);`
- Handles unregistering of listeners via the _unsubscribe_ function returned by
  `store.subscribe(listener)`

### Actions

Actions are plain JavaScript objects that have a type field that describe an
something that happened in the application.

### Reducers

Reducers are functions that take the current state and an action as arguments,
and return a new state result. In other words, `(state, action) => newState.`

#### Creating the Root Reducer

A Redux app really only has one reducer function: the "root reducer" function
that is passed to createStore. That one root reducer function is responsible
for handling all of the actions that are dispatched, and calculating what the
entire new state result should be every time.

### Best practices

1. Export both connected and unconnected versions of components for development
   and testing respectively
2. Keep reducers clean. No actions to be triggered or async operations to be
   called from within a reducer. A reducer should only return new state based
   on the action.
3. Carefully connect the components to store. Reusable components should not be
   connected.

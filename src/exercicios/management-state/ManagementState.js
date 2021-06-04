/* ---------------------------------------------------------------  /*
/*{ 1º: Componente sem estado interno} */

function greetingComponentStateless() {
  var data = {
    greeting: "Hello",
    name: "there",
  };

  var greeting = function () {
    return "<p>" + data.greeting + ", " + data.name + "!</p>";
  };

  var app = document.querySelector("#app");
  app.innerHTML = greeting();
}

/* { 1.1: Passando o component gretting com estado no componente} */

function greetingComponentStateful() {
  var greeting = function () {
    return "<p>" + greeting.data.greeting + ", " + greeting.data.name + "!</p>";
  };

  greeting.data = {
    greeting: "Hello",
    name: "there",
  };

  var app = document.querySelector("#app");

  app.innerHTML = greeting();
}

/* ---------------------------------------------------------------  /*
/* {2: Passando para uma abordagem de classe} */

/*{2.1 Exemplo com componente que será passado para classe} */

function componentBlogStateful() {
  var blogPost = () => `
      <div class="post">
        <h1>${blogPost.postData.title}</h1>
        <h3>By ${blogPost.postData.author}</h3>
        <p>${blogPost.postData.body}</p>
      </div>
    `;

  blogPost.postData = {
    title: "A JS Trick",
    author: "Brandon Smith",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  var app = document.querySelector("#app");
  app.innerHTML = app.innerHTML = blogPost();
}

/*{ 2.2: Passando o component blog para uma abordagem com  classe}   */

class BlogPost {
  constructor(props) {
    this.state = {
      author: props.author,
      title: props.title,
      body: props.body,
    };
  }

  render() {
    return `<div class="post">
                    <h1>${this.state.title}</h1>
                    <h3>By ${this.state.author}</h3>
                    <p>${this.state.body}</p>
                  </div>`;
  }

  setBody(newBody) {
    this.state.body = newBody;
  }
}

const blogPostComponent = new BlogPost({
  author: "test",
  title: "test title",
  body: "testBody",
});

document.querySelector("body").innerHTML = blogPostComponent.render();

/* ---------------------------------------------------------------  /*
/*   { 3.: Utilizando o React }   */

// { 3.1: abordagem com classes }
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

// { 3.2: abordagem com Hooks: }   */

const abordagemUtilizandoHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); // No second argument, so run after every render.

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

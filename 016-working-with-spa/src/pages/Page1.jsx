import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
export default function Page1() {
  return (
    <div>
      <h1>Passo a passo de criação de um site SPAs com React</h1>
      <div>
        <h2>Passo 1: Inicializar um novo projeto React</h2>
        <p>No terminal, execute os seguintes comandos:</p>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
          {`
            npx create-react-app meu-site-spa
            cd meu-site-spa
          `}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>Passo 2: Instalar o react-router-dom</h2>
        <p>No terminal, execute o seguinte comando para instalar o react-router-dom:</p>
        <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            npm install react-router-dom
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>Passo 3: Estrutura do Projeto</h2>
        <p>Organize a estrutura do projeto da seguinte maneira:</p>
        <SyntaxHighlighter language="plaintext" style={vscDarkPlus}>
          {`
            meu-site-spa/
            |-- src/
            |   |-- components/
            |   |   |-- Header.jsx
            |   |   |-- Footer.jsx
            |   |-- pages/
            |   |   |-- PaginaUm.jsx
            |   |   |-- PaginaDois.jsx
            |   |   |-- PaginaTres.jsx
            |   |   |-- RoutLayout.jsx  opcional caso queira usar um layout padrao com paginas filhas
            |   |-- App.jsx
            |   |-- index.jsx
            |   |-- Router.jsx
          `}
        </SyntaxHighlighter>
      </div>
      (
    <div>
      <h1>Passo a passo de criação de um site SPAs com React</h1>

      <div>
        <h2>Passo 4: Criar Componentes</h2>
        <p>Crie os componentes Header e Footer.</p>

        <div>
          <h3>Header.jsx</h3>
          <p>Header utilizando Link para navegação:</p>

          <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
            {`
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </header>
  );
}
            `}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <h2>Passo 5: Criar Paginas.jsx</h2>
        <p>Crie os componentes das páginas usando o padrão React.</p>
        {/* Adicione aqui os códigos para as páginas conforme necessário */}
      </div>

      <div>
        <h2>Passo 6: Criar router.jsx</h2>
        <p>Crie o arquivo para controlar as rotas do site.</p>

        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {`
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  }
]);

export default router;
          `}
        </SyntaxHighlighter>

        <p>
          O site funcionará sem precisar passar do Passo 7, porém se quiser adicionar rotas filhas e usar um layout de páginas, basta adicionar as rotas filhas no router, adicionando um array de rotas e criando um RootLayout.
        </p>

        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {`
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      }
    ]
  }
]);

export default router;
          `}
        </SyntaxHighlighter>

        <p>Agora você precisará ir até o Passo 8 para adicionar o RootLayout.</p>
      </div>

      <div>
        <h2>Passo 7: Adicionar o router a aplicação App.jsx</h2>

        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {`
import { RouterProvider } from "react-router-dom";
import router from "./Router";

export default function App() {
  return <RouterProvider router={router} />;
}
          `}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>Passo 8: Criar RootLayout.jsx</h2>

        <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
          {`
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>This is the root layout</p>
        <hr />
        <Outlet />
      </main>
    </>
  );
}
          `}
        </SyntaxHighlighter>
      </div>
      
{/* Claro, vou fornecer um passo a passo básico para criar um site de página única (SPA) usando React com react-router-dom. Certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.

Passo 1: Inicializar um novo projeto React
No terminal, execute os seguintes comandos:

bash
Copy code
npx create-react-app meu-site-spa
cd meu-site-spa
Passo 2: Instalar o react-router-dom
No terminal, execute o seguinte comando para instalar o react-router-dom:

bash
Copy code
npm install react-router-dom
Passo 3: Estrutura do Projeto
Organize a estrutura do projeto da seguinte maneira:

plaintext
Copy code
meu-site-spa/
|-- src/
|   |-- components/
|   |   |-- Header.jsx
|   |   |-- Footer.jsx
|   |-- pages/
|   |   |-- PaginaUm.jsx
|   |   |-- PaginaDois.jsx
|   |   |-- PaginaTres.jsx
|   |   |-- RoutLayout.jsx  opcional caso queira usar um layout padrao com paginas filhas
|   |-- App.jsx
|   |-- index.jsx
|   |-- Router.jsx */}

{/* Passo 4: Criar Componentes

header & footer 
header usando link to="/pagina" similar ao href do html

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
    </header>
  );
}

Passo 5: Criar Paginas.jsx

Igual componente do react */}


{/* Passo 6: Criar router.jsx

Esse arquivo vai controlar as rotas do site.

   importe as rotas do react-router-dom
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  }
])

export default router 

O site funcionará sem precisar passar do passo 7, porém se quiser adiicionar rotas filhas e usar um layout de paginas, basta adicionar as rotas filhas no router, adicionando um array de rotas e criando um RootLayout.

Crie o router do seguinte modo:

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
      ,
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      }
    ]
  }
])

export default router

Agora você precisará ir até o passo 8 para adicionar o Rootlayout.



*/}



{/* Passo 7: Adicionar o router a aplicação App.jsx


importe o router que você criou

import { RouterProvider } from "react-router-dom";
import router from "./Router";


export default function App() {
  return <RouterProvider router={router} />;


  Passo 8: Criar RootLayout.jsx
  import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    <Header />
    <main> 
      <p>This is the root layout</p>
      <hr />
      <Outlet />
    </main>
    </>
  );
}


} */}

    </div>
   )
   

}
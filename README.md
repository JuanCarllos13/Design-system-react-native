<Meta title="Home" />

# Criado por Juan Carlos

[Open Github Project](https://github.com/JuanCarllos13/Design-System)

[Open Link Project](https://juancarllos13.github.io/Design-System/)

## Getting Started

<br />

#### Basic Template

Você pode criar um novo aplicativo react-native usando [create-react-native-app](https://facebook.github.io/create-react-native-app/) .

```sh
npx create-react-native-app my-app
```

### Adicionar `@juancarllos-ui/react-native` a um aplicativo existente

Primeiro de tudo, você precisa adicionar a dependência `@juancarllos-ui/react-native` ao seu projeto.

```sh
npm install @juancarllos-ui/react-native
```

Para usar `@juancarllos-ui/react-native`, você deve agrupar o componente raiz do seu aplicativo no ThemeProvider.
Você provavelmente encontrará esse componente em `src/index.js`:

```jsx
import { ThemeProvider } from '@juancarllos-ui/react-native';
...
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

Caso você esteja usando um projeto Next.js, você seguir o seguinte passo: Dentro do arquivo `_document.tsx`

```jsx
import { getCssText } from '@juancarllos-ui/react-native';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

Então você está pronto para usar `@juancarllos-ui/react-native` e pode importar o(s) componente(s) desejado(s) em seu aplicativo:<br />
Por exemplo, para usar o componente `Button`, você precisa importá-lo:

```jsx
import { Button } from '@juancarllos-ui/react-native';
```

Em seguida, você pode usar o botão em seu aplicativo:

```jsx
<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
```

### Support

Estou buscondo melhorar minha biblioteca, adicionando novos recursos e funcionalidades para garantir que ela esteja sempre atualizada com as últimas tendências e tecnologias. Além disso, aprecio muito sugestões e ideias dos usuários, pois isso me ajuda a tornar minha biblioteca ainda melhor.

Caso tenha alguma ideia ou sugestão para melhorar a biblioteca, por favor, entre em contato comigo através das minhas redes sociais:

LinkedIn: https://www.linkedin.com/in/juancarlos13/

Instagram: https://www.instagram.com/juan.carllos_/

GitHub: https://github.com/JuanCarllos13

Agradeço por utilizar minha biblioteca e espero que ela ajude.

import { ComponentChildren } from "npm:preact";

type Props = {
  title:string;
  children : ComponentChildren
}

export default ({ title, children }:Props) => (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <div>i am a header</div>
    <body>
      {children}
    </body>
  </html>
);
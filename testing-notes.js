[{"content":"import { render, screen, within } from '@testing-library/react';\nimport React from 'react';\n\nconst RoleExample = () => {\n  return (\n    <div>\n      <a href=\"/\">Link</a>\n      <button>Button</button>\n      <footer>ConentInfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img src=\"\" alt=\"description\" /> Img\n      <input type=\"checkbox\" /> Checkbox\n      <input type=\"number\" /> Spinbutton\n      <input type=\"radio\" /> Radio\n      <input type=\"text\" /> Textbox\n      <li>Listitem</li>\n      <ul>Listgroup</ul>\n    </div>\n  );\n};\n\nrender(<RoleExample />);","type":"code","id":"ngyzj"},{"content":"test('should find elements by role', () => {\n  render(<RoleExample />);\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'listitem',\n    'list',\n    'textbox',\n  ];\n\n  roles.forEach((role) => {\n    const element = screen.getByRole(role);\n    expect(element).toBeInTheDocument();\n  });\n});","type":"code","id":"vjp3t"},{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst RoleExample = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"}]
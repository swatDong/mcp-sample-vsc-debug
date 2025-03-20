# MCP Server - Weather

This is a sample MCP Server in Python implementing weather tools.

## Get Started

> **Prerequisites**
>
> To run the MCP Server in your local dev machine, you will need:
>
> - [Python](https://www.python.org/)
> - (*Optional - if you prefer uv*) [uv] (https://github.com/astral-sh/uv)
> - [Python Debugger Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)

### Prepare Environment

**Using uv**

- Create virtual environment
  
  `uv venv`

- Run VSCode Command "***Python: Select Interpreter***" and select the python from created virtual environment

  (Note: reload VSCode and the terminal to ensure the virtual environment python is used)

- Install dependencies (include dev dependencies)

  `uv pip install -r pyproject.toml --extra dev`

**Or, using pip**

- Create virtual environment

  `python -m venv .venv`

- Run VSCode Command "***Python: Select Interpreter***" and select the python from created virtual environment

  (Note: reload VSCode and the terminal to ensure the virtual environment python is used)

- Install dependencies (include dev dependencies)

  `pip install -e .[dev]`

### Debug in MCP Inspector

- Open VSCode Debug panel. Select `Debug in Inspector (Edge)` or `Debug in Inspector (Chrome)`. Press F5 to start debugging.
- When MCP Inspector launches in the browser, click the `Connect` button to connect this MCP server.
- Then you can `List Tools`, select a tool, input parameters, and `Run Tool` to debug you server code.
- And ofcourse, you can add breakpoint to the tool implementation code.

<details>
  <summary>More Details</summary>

  When launching debugging, it runs two tasks

  - first, the MCP server is launched (by default on port 3001)
  - then, the MCP Inspector is launched (by default on port 5173 and 3000)

  The whole definition can be found in [tasks.json](.vscode/tasks.json). You can also edit [launch.json](.vscode/launch.json), [tasks.json](.vscode/tasks.json), [\_\_init\_\_.py](src/__init__.py) to change above ports.

  > In addition, the [MCP Inspector](https://github.com/modelcontextprotocol/inspector/) is implemented in Node.js. To launch it within this Python project, there are two tricky steps:
  > 1. Put the bundled inspector client and server to [`inspector/`](inspector/). (Forked and added bundle logic to the inspector's source, see [forked repo's branch](https://github.com/swatDong/inspector/tree/my-bundle))
  > 2. Launch VSCode executable as Node.js. See [tasks.json](.vscode/tasks.json) and [launcher.py](inspector/launcher.py).

</details>

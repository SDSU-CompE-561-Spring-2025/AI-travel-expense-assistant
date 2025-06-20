# Travel Buddy

[![PyPI - Version](https://img.shields.io/pypi/v/travel-buddy.svg)](https://pypi.org/project/travel-buddy)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/travel-buddy.svg)](https://pypi.org/project/travel-buddy)

---

## Table of Contents

- [Introduction](#introduction)
- [Installation & Usage](#installation-&-usage)
- [Project Members](#project-members)

## Introduction

This is the backend section, containing all things backend!

This project's backend uses:
- FastAPI
- Python
- PostgreSQL
- hatch/uv (optional)

These instructions should be functional, but please look at the README for the overall application (root folder) for better instruction.

## Installation & Usage

Start by opening a terminal in the backend directory. Then do the Following.

Download/Setup project dependencies and environment.
```console
hatch shell
```

Create .env file to define used secret/non-secret variables. It should have these variables in it. 
```console
  NEXT_PUBLIC_API_URL="http://localhost:8000"
  NEXT_PUBLIC_APP_URL="http://localhost:3000"
  NODE_ENV="production"
```

Once the above is completed. Start local webserver:
```console
hatch run dev
```

OR 

```console
make start-local
```

Run hatch other created scripts:
```console
hatch run <script_name>
```

Write scripts in the .toml file.

Add project dependencies:
```console
uv add <package>
```

## Project Members

Sam James, Erica Lee, Brianna Ly, Joshua Constine, Sean Pitman, Theodore Bongolan

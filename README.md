# Travel Buddy

[![PyPI - Version](https://img.shields.io/pypi/v/travel-buddy.svg)](https://pypi.org/project/travel-buddy)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/travel-buddy.svg)](https://pypi.org/project/travel-buddy)

---

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Members](#project-members)

## Introduction

This travel planning application helps users plan, manage, and organize trips. The user can log in securely to store and access their trip information, complete with flight details, accommodations, activities, expenses, and personalized notes/descriptions. The application will be able to present the user’s trip details in an interactive calendar view. Additionally, the application will also include an AI recommendation feature, which provides travel suggestions tailored to the user’s inputted travel destination. 

## Installation & Usage

Download project dependencies 

```console
uv sync
```

Activate venv (Windows)
```console
.venv\Scripts\activate 
```

Activate venv (Linux)
```console
source .venv/bin/activate.fish
```


Start local webserver

```console
fastapi dev src/travel_buddy/main.py
```

## Project Members

Sam James, Erica Lee, Brianna Ly, Joshua Constine, Sean Pitman, Theodore Bongolan

# Light to Dark 🌓

A lightweight extension to simplify your work in a single tap. We also help you to organise your shared styles in better order. 

Download the extension by [clicking here](https://github.com/pplcallmesatz/lighttodark/releases/download/v1.3.3/lighttodark.sketchplugin.zip)

## How does it help you?

1. Create a dark mode in a single tap
2. You will get the organised shared styles for both Light and Dark mode
3. Easy to use and lightweight
4. We also help you to set up the project by **Boilerplate** option



## Getting Started

To build the dark mode without any error, you need to follow the following guidelines.

**Step 1:**

Create a new document

**Step 2:** 

Create a page named "`Light`" (case sensitive). 

All the screens from the page `Light` will be generated to dark mode.

**Step 3:** 

Create the shared style for both `light` and `dark` (note: shared style naming must be prefixed with `dark/{your style}` or `light/{your style}` ). Check the example for shared style naming


**Step 4:**

Apply every layer with the shared style. 



**Step 5:** 

Run `Plugins > Light to Dark 🌓 > Convert to Dark mode`   or 

simply press `ctrl + shift + c`

---

## Using Boilerplate

We made your work simpler by using boilerplate

1. We will create a page with the name **Light**
2. We will also create a few shared styles for both light and dark modes. You can customise any time

---

## FAQ?

- **Error: You have applied Dark shared style in the light version**
    
    This alert will be thrown, if you are using any of the **dark styles inside** the **page Light**
    
- **Error: No Dark style found for this shared style**
    
    This alert will be thrown, when you have not created the dark style for the light
    
    For example: if you have the layer style **`light/primary/background`**  and not in the dark style

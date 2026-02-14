# DOM – Interfaces clave (referencia rápida)

## 🧩 EventTarget
> Eventos

### Métodos
- addEventListener()
- removeEventListener()
- dispatchEvent()

---

## 🧩 Node
> Estructura del DOM (incluye texto)

### Propiedades
- nodeType
- nodeName
- parentNode
- parentElement
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
- textContent

### Métodos
- appendChild()
- removeChild()
- remove()
- cloneNode()
- contains()

---

## 🧩 Element
> Etiquetas HTML

### Propiedades
- id
- className
- classList
- tagName
- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling
- innerHTML

### Métodos
- getAttribute()
- setAttribute()
- removeAttribute()
- hasAttribute()
- toggleAttribute()
- querySelector()
- querySelectorAll()
- closest()
- matches()
- insertAdjacentHTML()
- insertAdjacentElement()
- insertAdjacentText()
- remove()

---

## 🧩 HTMLElement
> Propiedades visuales y HTML

### Propiedades
- style
- hidden
- dataset
- title
- lang
- tabIndex
- contentEditable
- innerText
- outerText

### Métodos
- focus()
- blur()
- click()

---

## 🧩 Interfaces específicas

### HTMLInputElement (<input>)
- value
- checked
- disabled
- type
- placeholder
- name
- required
- min
- max
- step
- focus()

---

### HTMLFormElement (<form>)
- elements
- submit()
- reset()
- action
- method

---

### HTMLButtonElement (<button>)
- disabled
- type
- value

---

### HTMLSelectElement (<select>)
- value
- selectedIndex
- options
- multiple

---

### HTMLImageElement (<img>)
- src
- alt
- width
- height
- loading

---

## 🧠 Regla mental rápida
EventTarget → eventos
Node → estructura (texto incluido)
Element → HTML
HTMLElement → visual / interacción
HTMLXElement → cosas específicas del tag

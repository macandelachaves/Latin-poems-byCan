function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#main-poem", {
    strings: `Vivir la vida y aceptar el reto,\rrecuperar la risa, ensayar el canto, \rbajar la guardia y extender las manos, \rdesplegar las alas e intentar de nuevo, \rcelebrar la vida y retomar los cielos `,
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

let mainPoem = document.querySelector("#poem-form");
mainPoem.addEventListener("submit", generatePoem);

function filterElements(elements, options) {
    let filteredElements = []
    const optionKeys = Object.keys(options);

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let match = true;

      for (let j = 0; j < optionKeys.length; j++) {
        if (options[optionKeys[j]] !== undefined && options[optionKeys[j]] !== element[optionKeys[j]]) {
          match = false;
          break;
        }
      }

      if (match) filteredElements.push(element);
    }
    
    return filteredElements;
}
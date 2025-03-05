/**
 * Grabs all subject tags from xml document and return
 * it as an Element array.
 */
export const getAllSubjects = (xmlDoc: XMLDocument): Array<Element> => {
  const htmlCollection = xmlDoc.getElementsByTagName("subject");
  const result = [];

  for (let i = 0; i < htmlCollection.length; i++) {
    result.push(htmlCollection[i]);
  }

  return result;
}

/**
 * Grabs all departments from subject tags and return
 * it as a Strings array.
 */
export const getAllSubjectsCategory = (xmlDoc: XMLDocument): Array<string> => {
  const htmlCollection = xmlDoc.getElementsByTagName("subject");
  const categoryMap = new Map<string, string>();
  const result = [];

  for (let i = 0; i < htmlCollection.length; i++) {
    const category = htmlCollection[i].getAttribute("category");
    if (category) {
      categoryMap.set(category, category);
    }
  }

  const iter = categoryMap.values();
  let element = iter.next();
  while (!element.done) {
    result.push(element.value);
    element = iter.next();
  }

  return result;
}

export const getSubjectsFromCategoryString = (xmlDoc: XMLDocument, category: string) => {
  const htmlCollection = xmlDoc.querySelectorAll(`[category='${category}']`);
  const result = [];

  for (let i = 0; i < htmlCollection.length; i++) {
    result.push(htmlCollection[i]);
  }

  return result;
}
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

export const getTagsFromAttributeValue = (xmlDoc: XMLDocument, attribute: string, attributeValue: string) => {
  const htmlCollection = xmlDoc.querySelectorAll(`[${attribute}='${attributeValue}']`);
  const result = [];

  for (let i = 0; i < htmlCollection.length; i++) {
    result.push(htmlCollection[i]);
  }

  return result;
}

export const getTagFromAttributeValue = (xmlDoc: XMLDocument, attribute: string, attributeValue: string) => {
  const htmlCollection = xmlDoc.querySelector(`[${attribute}='${attributeValue}']`)?.children;
  const result = [];

  if (!htmlCollection) {
    return null;
  }

  for (let i = 0; i < htmlCollection.length; i++) {
    result.push(htmlCollection[i]);
  }

  return result;
}
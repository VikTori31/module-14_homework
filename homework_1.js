const XMLString =
        `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;
    const PARSER = new DOMParser();
    const XMLDOM = PARSER.parseFromString(XMLString, 'text/xml');
    const listNode = XMLDOM.querySelector('list')
    const studentNodes = [...listNode.querySelectorAll("student")];
    const array = new Array();
    studentNodes.forEach(studentNode => {
        const nameNode = studentNode.querySelector("name");
        const langAttr = nameNode.getAttribute('lang');
        const firstNode = studentNode.querySelector("first");
        const secondNode = studentNode.querySelector("second");
        const ageNode = studentNode.querySelector("age");
        const profNode = studentNode.querySelector("prof");
        array.push({
            name: firstNode.textContent + " " + secondNode.textContent,
            age: Number(ageNode.textContent),
            prof: profNode.textContent,
            lang: langAttr,
          });
    });
    const result = {
        list: array
    };
    console.log(result);

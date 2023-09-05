import AlgorithmsTitleEnum from "../../Enums/AlgorithmsTitleEnum";
import GetCSharpCode from "./CodingLanguages/GetC#Code";
import GetExplanation from "./CodingLanguages/GetCodeExplanation";
import GetJSCode from "./CodingLanguages/GetJSCode";
import GetJavaCode from "./CodingLanguages/GetJavaCode";
import GetPseudoCode from "./CodingLanguages/GetPseudoCode";
import GetPythonCode from "./CodingLanguages/GetPythonCode";
import GetAlgorithmsDescription from "./GetAlgorithmsDescription";

async function GetAllAlgorithmsData(List) {
 
  console.log(List)
  const newList = List.map((item) => ({
    key: item.algorithmsID,
    title: Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle],
    jsCode: GetJSCode(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    cSharpCode: GetCSharpCode(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    pythonCode: GetPythonCode(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    javaCode: GetJavaCode(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    description: GetAlgorithmsDescription(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    codeExplanation: GetExplanation(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle]),
    pseudoCode: GetPseudoCode(Object.values(AlgorithmsTitleEnum)[item.algorithmsTitle])
  }));
  console.log(newList)
  return newList;
}

export { GetAllAlgorithmsData };
